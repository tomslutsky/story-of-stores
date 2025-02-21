import { useLoaderData } from "react-router";
import db from "../db.json";
import type { Route } from "./+types/product";
import { RatingWidgetForm } from "~/components/rating-widget-form";
import { RatingWidget } from "~/components/rating-widget";
import { useSyncExternalStore } from "react";
import { store } from "~/store";

export function clientLoader({ params }: Route.LoaderArgs) {
  const data = db[params.slug];

  return { ...data, slug: params.slug };
}

export default function Product({
  loaderData: { title, image, description, price, slug },
}: Route.ComponentProps) {
  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <span className="product-title">
          <h2>{title}</h2>
          <AverageRating slug={slug} />
        </span>
        <p className="price">${price}</p>
        <p className="description">{description}</p>
        <button className="buy-button">Add to Cart</button>
        <div className="rating-section">
          <RatingWidget slug={slug} />
        </div>
      </div>
    </div>
  );
}

function AverageRating({ slug }: { slug: string }) {
  const averageRating = useSyncExternalStore(store.subscribe, () => {
    const ratings = store.data.get(slug) || [];
    return ratings.reduce((acc, r) => acc + r, 0) / (ratings.length || 1);
  });
  return <span>({averageRating.toFixed(1)})</span>;
}

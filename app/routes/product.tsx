import db from "~/db";
import type { Route } from "./+types/product";
import { RatingWidget } from "~/components/rating-widget";
import { useSyncExternalStore } from "react";
import { store } from "~/store";

export function clientLoader({ params: { slug } }: Route.ClientActionArgs) {
  const data = db[slug as keyof typeof db];

  return { ...data, slug: slug };
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
        </span>
        <p className="price">${price}</p>
        <p className="description">{description}</p>
        <button className="buy-button">Add to Cart</button>
        <div className="rating-section">
          <RatingWidget />
        </div>
      </div>
    </div>
  );
}

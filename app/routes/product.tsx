import db from "~/db";
import type { Route } from "./+types/product";
import { RatingWidget } from "~/components/rating-widget";
import { useRatingContext } from "~/rating-context";

export function clientLoader({ params: { slug } }: Route.ClientActionArgs) {
  const data = db[slug as keyof typeof db];

  return { ...data, slug: slug };
}

export default function Product({
  loaderData: { title, image, description, price, slug },
}: Route.ComponentProps) {
  const { ratings, addRating } = useRatingContext();
  const filteredRatings = ratings.filter((r) => r.product === slug);
  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <span className="product-title">
          <h2>{title}</h2>
          <span>
            ({avg(filteredRatings.map((rating) => rating.rating)).toFixed(1)})
          </span>
        </span>
        <p className="price">${price}</p>
        <p className="description">{description}</p>
        <button className="buy-button">Add to Cart</button>
        <div className="rating-section">
          <RatingWidget
            raters={filteredRatings.length}
            onRatingAdded={(rating) => addRating({ product: slug, rating })}
          />
        </div>
      </div>
    </div>
  );
}

function avg(arr: number[]) {
  if (!arr.length) return 0;
  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
}

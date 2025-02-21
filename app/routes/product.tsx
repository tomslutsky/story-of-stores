import { getProduct } from "~/db";
import { RatingWidget } from "~/components/rating-widget";
import { useLoaderData } from "react-router";
import type { LoaderFunctionArgs } from "react-router";
import { useState } from "react";

export async function loader({ params: { slug } }: LoaderFunctionArgs) {
  return await getProduct(slug!);
}

export function Component() {
  const { title, image, description, price } = useLoaderData();

  const [ratings, setRatings] = useState<number[]>([]);

  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <span className="product-title">
          <h2>{title}</h2>
          <span>({avg(ratings).toFixed(1)})</span>
        </span>
        <p className="price">${price}</p>
        <p className="description">{description}</p>
        <button className="buy-button">Add to Cart</button>
        <div className="rating-section">
          <RatingWidget
            raters={ratings.length}
            onRatingAdded={(rating) => setRatings((prev) => [...prev, rating])}
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

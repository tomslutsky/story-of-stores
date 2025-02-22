import { getProduct } from "~/db";
import type { Route } from "./+types/product";
import { RatingWidget } from "~/components/rating-widget";
import { store, useRatingsStore } from "~/store";
import type { LoaderFunctionArgs } from "react-router";
import { useLoaderData } from "react-router";

export async function loader({ params: { slug } }: LoaderFunctionArgs) {
  return await getProduct(slug!);
}

export function Component() {
  const { title, image, description, price, slug } = useLoaderData();
  const ratings = useRatingsStore();
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
            onRatingAdded={(rating) =>
              store.addRating({ product: slug, rating })
            }
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

import db from "~/db";
import { RatingWidget } from "~/components/rating-widget";
import { store, useRatingsStore } from "~/store";
import type { LoaderFunctionArgs } from "react-router";
import { useLoaderData } from "react-router";
import { useParams } from "react-router";

export function loader({ params: { slug } }: LoaderFunctionArgs) {
  const data = db[slug as keyof typeof db];

  return { ...data, slug: slug };
}

export function Component() {
  const { title, image, description, price, slug } = useLoaderData();

  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <span className="product-title">
          <h2>{title}</h2>
          <AvgRating />
        </span>
        <p className="price">${price}</p>
        <p className="description">{description}</p>
        <button className="buy-button">Add to Cart</button>
        <div className="rating-section">
          <RatingWidget
            onRatingAdded={(rating) =>
              store.addRating({ product: slug, rating })
            }
          />
        </div>
      </div>
    </div>
  );
}

const AvgRating = () => {
  const { slug } = useParams();
  const avgRating = useRatingsStore((ratings) =>
    avg(
      ratings
        .filter((rating) => rating.product === slug)
        .map((rating) => rating.rating)
    ).toFixed(1)
  );
  return <span>({avgRating})</span>;
};

function avg(arr: number[]) {
  if (!arr.length) return 0;
  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
}

import { useRatingsStore } from "~/store";
import { RatingWidgetForm } from "./rating-widget-form";
import { useParams } from "react-router";

export function RatingWidget({
  onRatingAdded,
}: {
  onRatingAdded: (rating: number) => void;
}) {
  const { slug } = useParams();
  const ratersCount = useRatingsStore(
    (ratings) => ratings.filter((rating) => rating.product === slug).length
  );
  return (
    <div className="rating-container">
      <h1>Join {ratersCount} raters!</h1>
      <RatingWidgetForm onSubmit={onRatingAdded} />
    </div>
  );
}

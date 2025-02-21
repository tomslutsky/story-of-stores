import { RatingWidgetForm } from "./rating-widget-form";

export function RatingWidget({
  raters,
  onRatingAdded,
}: {
  raters: number;
  onRatingAdded: (rating: number) => void;
}) {
  return (
    <div className="rating-container">
      <h1>Join {raters} raters!</h1>
      <RatingWidgetForm onSubmit={onRatingAdded} />
    </div>
  );
}

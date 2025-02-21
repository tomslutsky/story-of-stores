import { useState } from "react";
import { RatingWidgetForm } from "./rating-widget-form";

export function RatingWidget() {
  const [ratings, setRatings] = useState<number[]>([]);
  return (
    <div className="rating-container">
      <h1>Join {ratings.length} raters!</h1>
      <RatingWidgetForm
        onSubmit={(rating) => setRatings((prev) => [...prev, rating])}
      />
    </div>
  );
}

import { useSyncExternalStore } from "react";
import { RatingWidgetForm } from "./rating-widget-form";
import { store } from "~/store";

export function RatingWidget({ slug }: { slug: string }) {
  return (
    <div className="rating-container">
      <Count slug={slug} />
      <RatingWidgetForm slug={slug} />
    </div>
  );
}

function Count({ slug }: { slug: string }) {
  const ratersCount = useSyncExternalStore(store.subscribe, () => {
    return store.data.get(slug)?.length || 0;
  });

  return <h1>Join {ratersCount} raters!</h1>;
}

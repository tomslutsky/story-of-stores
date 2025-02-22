import { useSyncExternalStore } from "react";

type Subscriber = () => void;

type Rating = {
  product: string;
  rating: number;
};

export const store = {
  data: [] as Rating[],
  subscribers: new Set<Subscriber>(),
  subscribe: (subscriber: Subscriber) => {
    store.subscribers.add(subscriber);
    return () => store.subscribers.delete(subscriber);
  },
  emit: () => {
    for (const subscriber of store.subscribers) {
      subscriber();
    }
  },

  addRating: ({ product, rating }: { product: string; rating: number }) => {
    store.data = [...store.data, { product, rating }];
    store.emit();
  },
};

type Selector<T> = (data: typeof store.data) => T;

export const useRatingsStore = <T>(
  selector: Selector<T> = (data) => data as T
) => {
  return useSyncExternalStore(store.subscribe, () => selector(store.data));
};

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

export const useRatingsStore = () =>
  useSyncExternalStore(store.subscribe, () => store.data);

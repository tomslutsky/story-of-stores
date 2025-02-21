type Subscriber = () => void;

export const store = {
  data: new Map<string, number[]>(),
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

  addRating: (slug: string, rating: number) => {
    if (!store.data.has(slug)) {
      store.data.set(slug, []);
    }
    store.data.get(slug)!.push(rating);

    store.emit();
  },
};

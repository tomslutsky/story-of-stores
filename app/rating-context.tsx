import { createContext, useContext, useState, type ReactNode } from "react";

type Rating = {
  product: string;
  rating: number;
};

const ctx = createContext<{
  ratings: Rating[];
  addRating: (rating: Rating) => void;
  // @ts-expect-error
}>(null);

export const RatingContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [ratings, setRatings] = useState<Rating[]>([]);

  return (
    <ctx.Provider
      value={{
        ratings,
        addRating: (rating: Rating) => setRatings((prev) => [...prev, rating]),
      }}
    >
      {children}
    </ctx.Provider>
  );
};

export const useRatingContext = () => {
  const context = useContext(ctx);
  if (!context) {
    throw new Error(
      "useRatingContext must be used within a RatingContextProvider"
    );
  }
  return context;
};

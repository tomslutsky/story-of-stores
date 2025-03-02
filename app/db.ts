const db = {
  "space-rocks": {
    title: "Space Rocks",
    image: "/space-rocks.png",
    description:
      " These space rocks are out of this world! Perfect for snacking on during your next space adventure.",
    price: 29.99,
    slug: "space-rocks",
  },
  "inter-galactic-jello": {
    title: "Inter Galactic Jello",
    image: "/inter-galactic-jello.png",
    description:
      "This jello is so good, it's out of this world! Perfect for snacking on during your next space adventure.",
    price: 19.99,
    slug: "inter-galactic-jello",
  },
};

export async function getProduct(slug: string) {
  return db[slug as keyof typeof db];
}

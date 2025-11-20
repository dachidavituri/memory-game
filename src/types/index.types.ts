export type Card = {
  src: string;
  id: number;
};

export type SingleCardProps = {
  card: Card;
  handleChoice: (card: Card) => void
};
export type Card = {
  src: string;
  id: number;
  matched: boolean
};

export type SingleCardProps = {
  card: Card;
  handleChoice: (card: Card) => void;
  flipped: boolean
};
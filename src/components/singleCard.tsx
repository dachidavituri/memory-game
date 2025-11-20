import type { SingleCardProps } from "../types/index.types";
import "./SingleCard.css";

const SingleCard: React.FC<SingleCardProps> = ({ card, handleChoice }) => {

  const handleClick = () => {
    handleChoice(card)
  }

  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img src="/img/cover.png" className="back" alt="card back" onClick={handleClick}/>
      </div>
    </div>
  );
};
export default SingleCard;

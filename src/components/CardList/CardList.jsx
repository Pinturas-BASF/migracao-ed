import { cardsData } from "../../services/cardsLeads";
import CardItem from "../CardItem/CardsItem";

export default function CardsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {cardsData.map((card) => (
        <CardItem key={card.id} strong={card.strong} highlight={card.highlight} image={card.image} size={card.size} padding={card.padding}/>
      ))}
    </div>
  );
}

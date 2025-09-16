import { cardsData } from "../../services/cardsLeads";
import CardItem from "../CardItem/CardsItem";

export default function CardsList() {
  return (
    <div className="relative ml-[2rem] mr-[-1.5rem] md:mx-0">
      <div
        className="
          flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-4 py-2
          pl-6 pr-4
          md:grid md:grid-cols-4 md:gap-6 md:overflow-visible md:snap-none md:pl-0 md:pr-0
        "
        style={{ scrollPaddingLeft: "1.5rem" }}
      >
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="
              w-[var(--card-w)] shrink-0 snap-start
              md:w-auto md:shrink md:snap-none
            "
          >
            <CardItem
              strong={card.strong}
              highlight={card.highlight}
              image={card.image}
              size={card.size}
              padding={card.padding}
            />
          </div>
        ))}
        <div className="shrink-0 w-6 md:hidden" aria-hidden />
      </div>
    </div>
  );
}

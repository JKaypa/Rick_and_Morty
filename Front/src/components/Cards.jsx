import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Card from "./Card";
import style from "./Cards.module.css";

export default function Cards({ onClose, characters }) {
  const [pageNumber, setPageNumber] = useState(0);
  const cardsPerPage = 10;
  const currentTotalCards = pageNumber * cardsPerPage;
  const currentCards = characters.slice(
    currentTotalCards,
    currentTotalCards + cardsPerPage
  );
  const pageCount = Math.ceil(characters.length / cardsPerPage);
  const handlePage = (event) => {
    setPageNumber(event.selected)
  }
  const showCards = currentCards.map((card, i) => {
    return (
      <Card
        key={i}
        onClose={onClose}
        image={card.image}
        name={card.name}
        id={card.id}
        gender={card.gender}
        specie={card.species}
      />
    );
  });

  return (
    <div className={style.container}>
      {showCards}
      <ReactPaginate
        breakeLebel="..."
        previousLabel="<"
        nextLabel=">"
        pageCount={pageCount}
        onPageChange={handlePage}
        containerClassName = {style.paginateContainer}
        activeClassName={style.activePag}
      />
    </div>
  );
}

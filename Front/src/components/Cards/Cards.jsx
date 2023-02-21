import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Card from "../Card/Card";
import Options from "../Selectors/Options";
import style from "./Cards.module.css";

export default function Cards({
  onClose,
  characters,
  handleGender,
  handleOrder,
}) {
  const [pageNumber, setPageNumber] = useState(0);
  const cardsPerPage = 10;
  const currentTotalCards = pageNumber * cardsPerPage;
  const currentCards = characters.slice(
    currentTotalCards,
    currentTotalCards + cardsPerPage
  );
  const pageCount = Math.ceil(characters.length / cardsPerPage);
  const handlePage = (event) => {
    setPageNumber(event.selected);
  };

  if (pageNumber > pageCount) setPageNumber(0);
  console.log(pageNumber, pageCount);

  return (
    <div>
      <Options handleGender={handleGender} handleOrder={handleOrder} />
      <div className={style.container}>
        {currentCards.map((card) => {
          return (
            <Card
              key={card.id}
              onClose={onClose}
              image={card.image}
              name={card.name}
              id={card.id}
              gender={card.gender}
              specie={card.species}
            />
          );
        })}
      </div>
      <ReactPaginate
        breakeLebel="..."
        previousLabel="<"
        nextLabel=">"
        pageCount={pageCount}
        onPageChange={handlePage}
        containerClassName={style.paginateContainer}
        activeClassName={style.activePag}
      />
    </div>
  );
}

import React from "react";

const Card = ({ card, value, id, flip, setFlip, remove, cards }) => {
  return (
    <>
      <div
        className={
          id == value && flip
            ? "card active flip"
            : id == value && !flip
            ? "card active"
            : id < value
            ? "card left"
            : "card"
        }
        onClick={id == value ? () => setFlip(!flip) : null}
      >
        <div className="innercard">
          <div className="front">{card.question}</div>
          <div className="back">{card.answer}</div>
        </div>
      </div>
      <button
        className={id == value ? "remove act" : "remove"}
        onClick={() => remove(id)}
      >
        remove
      </button>
    </>
  );
};

export default Card;

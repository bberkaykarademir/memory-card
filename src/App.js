import React, { useState } from "react";
import Card from "./Card";
import data from "./data";
import Modal from "./Modal";

const App = () => {
  const [cards, setCards] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [value, setValue] = useState(0);
  const [flip, setFlip] = useState(false);
  const [questionValue, setQuestionValue] = useState("");
  const [answerValue, setAnswerValue] = useState("");
  const prevHandler = () => {
    setValue(value - 1);
    setFlip(false);
  };

  const nextHandler = () => {
    setValue(value + 1);
    setFlip(false);
  };

  const addCard = () => {
    setCards([...cards, newItem]);
    setIsModal(!isModal);
    setQuestionValue("");
    setAnswerValue("");
  };
  const closeHandler = () => {
    setIsModal(!isModal);
    setQuestionValue("");
    setAnswerValue("");
  };
  const newItem = { question: questionValue, answer: answerValue };
  const remove = (id) => {
    if (id !== 0) {
      setCards(cards.filter((card, index) => index !== id));
      setValue(id - 1);
    } else {
      setCards(cards.filter((card, index) => index !== id));
      setValue(id);
    }
  };
  if (isModal) {
    return (
      <div className="container gray">
        <h1>Add New Card</h1>
        <button onClick={closeHandler}>close</button>
        <Modal
          setQuestionValue={setQuestionValue}
          setAnswerValue={setAnswerValue}
        />
        <button
          disabled={
            questionValue.trim().length < 1 ||
            answerValue.trim().length < 1 ||
            questionValue.trim().length > 20 ||
            answerValue.trim().length > 20
          }
          onClick={addCard}
        >
          add the card
        </button>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h1>Memory Cards</h1>
        <button onClick={() => setIsModal(!isModal)}>Add New Card</button>
        <div className="cardcontainer">
          {cards.map((card, index) => {
            return (
              <Card
                key={index}
                card={card}
                flip={flip}
                setFlip={setFlip}
                value={value}
                id={index}
                remove={remove}
              />
            );
          })}
        </div>
        <div className="buttonsec">
          <button disabled={value == 0} onClick={prevHandler} className="prev">
            prev
          </button>
          <span>
            {cards.length == 0 ? 0 : value + 1}/{cards.length}
          </span>
          <button
            disabled={value == cards.length - 1 || cards.length == 0}
            onClick={nextHandler}
            className="next"
          >
            next
          </button>
        </div>
      </div>
    );
  }
};

export default App;

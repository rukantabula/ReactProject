import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import charles from "./images/charlesdickens.jpg";
import krowling from "./images/jkrowling.jpg";
import joseph from "./images/josephconrad.jpg";
import mark from "./images/marktwain.jpg";
import william from "./images/williamshakespeare.jpg";
import AuthorQuiz from "./AuthorQuiz";
import * as serviceWorker from "./serviceWorker";
import {shuffle, sample} from 'underscore';

const authors = [
  {
    name: "Charles Dickens",
    imageUrl: charles,
    imageSource: "Wikimedia Commons",
    books: [
      "David Coperfield",
      "A tale of cities",
      "Meaning of life"
    ]
  },
  {
    name: "J. Krowling",
    imageUrl: krowling,
    imageSource: "Wikimedia Commons",
    books: [
      "The shinning",
      "IT",
      "wall of lies"
    ]
  },
  {
    name: "Joseph Conrad",
    imageUrl: joseph,
    imageSource: "Wikimedia Commons",
    books: [
      "Heart of Darkness",
      "Sean",
      "Riverdale"
    ]
  },
  {
    name: "Mark Twain",
    imageUrl: mark,
    imageSource: "Wikimedia Commons",
    books: [
      "The Adventures of Huckleberry Finn",
      "Life of the Mississippi",
      "Roughing it"
    ]
  },
  {
    name: "William Shakespeare",
    imageUrl: william,
    imageSource: "Wikimedia Commons",
    books: [
      "Hamlet",
      "Macbeth",
      "Romeo and Juliet"
    ]
  }
];

function getTurnData(authors) {
  const allBooks = authors.reduce(function (p, c, i){
    return p.concat(c.books);
  }, []);
  const fourRandomBooks = shuffle(allBooks).slice(0,4);
  const answer = sample(fourRandomBooks);

  return {
    books: fourRandomBooks,
    author: authors.find((author) => 
    author.books.some((title) =>
     title === answer))
  }
}
const state = {
    turnData : getTurnData(authors),
    highlightValue: 'correct'
};

function onAnswerSelected(answer) {
  const isCorrect = state.turnData.author.books.some((book) => book === answer);
  state.highlight = isCorrect ? 'correct' : 'wrong' ;
  render();
}

function render() {
  ReactDOM.render(<AuthorQuiz {...state} onAnswerSelected={onAnswerSelected}/> ,document.getElementById("root"));
}

render();
serviceWorker.unregister();

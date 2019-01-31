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

const authors = [
  {
    name: "Mark Twain",
    imageUrl: mark,
    imageSource: "Wikimedia Commons",
    books: [
      "The Adventures of Huckleberry Finn",
      "Life of the Mississippi",
      "Roughing it"
    ]
  }
];

const state = {
    turnData : {
        author: authors[0],
        books: authors[0].books
    }
};

ReactDOM.render(<AuthorQuiz {...state}/>, document.getElementById("root"));

serviceWorker.unregister();

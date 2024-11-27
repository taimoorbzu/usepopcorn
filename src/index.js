import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from './App';
// import TextExpander from "./TextExpander";
import StarRating from './StarRating';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <TextExpander
      truncateLength={10}
      showMoreText={"View More"}
      showLessText={"View Less"}
      btnColor="red"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente alias
      porro tempore amet, saepe tempora iusto quo culpa iure? Quo sint deleniti
      blanditiis fuga sunt, quas explicabo, quis reprehenderit voluptatibus
      voluptatum asperiores, nulla beatae! Quidem suscipit earum quasi dolores
      inventore sint, quaerat aliquam tenetur aperiam sit, autem a voluptates ut
      fugit, eaque ab ipsam error ea temporibus quia labore rerum est sapiente
      soluta. Omnis numquam ratione voluptas voluptate sit! Distinctio pariatur
      quae, eum sapiente magnam eaque sed. Quis vitae ipsa sapiente maxime qui
      consequun
    </TextExpander>

    <TextExpander
      truncateLength={10}
      showMoreText={"View More"}
      showLessText={"View Less"}
      btnColor="blue"
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente alias
      porro tempore amet, saepe tempora iusto quo culpa iure? Quo sint deleniti
      blanditiis fuga sunt, quas explicabo, quis reprehenderit voluptatibus
      voluptatum asperiores, nulla beatae! Quidem suscipit earum quasi dolores
      inventore sint, quaerat aliquam tenetur aperiam sit, autem a voluptates ut
      fugit, eaque ab ipsam error ea temporibus quia labore rerum est sapiente
      soluta. Omnis numquam ratione voluptas voluptate sit! Distinctio pariatur
      quae, eum sapiente magnam eaque sed. Quis vitae ipsa sapiente maxime qui
      consequun
    </TextExpander> */}
    <Test />
  </React.StrictMode>
);

function Test() {
  const [MovieRating, setMovieRating] = useState(0)
  return <>
    <div className="rate">
      <StarRating rating={10} size={48} compliments={['Fair', 'Good', 'Excellent', 'Bravo', 'Marvellous']} HanldeRate={setMovieRating} />
      <p>You Rated {MovieRating || ''} stars</p>
    </div>
  </>
}

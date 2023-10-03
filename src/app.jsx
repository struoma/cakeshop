import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";

import "bootstrap/dist/css/bootstrap.css";

const firstCake = {
  img: "./cake1.jpg",
  desc1: "Vanilla Cake",
  desc2: "Best cake",
  price: "N10,000",
};

const secondCake = {
  img: "./cake2.jpg",
  desc1: "Vanilla Cake",
  desc2: "Best cake",
  price: "N10,000",
};

const thirdCake = {
  img: "./cake2.jpg",
  desc1: "Vanilla Cake",
  desc2: "Best cake",
  price: "N10,000",
};

const clientName = {
  img: "./face.jpg",
  para: "Stephen",
};
export function App() {
  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand" href="#">
            Home
          </a>
          <a class="navbar-brand" href="#">
            About
          </a>
          <a class="navbar-brand" href="#">
            Blog
          </a>
        </div>
      </nav>

      <div className="Container"></div>

      <div className="container try">
        <div className="row try">
          <div className="col-sm-4 ">
            <Cake
              img={firstCake.img}
              desc1={firstCake.desc1}
              desc2={firstCake.desc2}
              price={firstCake.price}
            />
          </div>
        </div>
      </div>
      <div>
        <Face para={clientName.para} img={clientName.img} />
      </div>

      {/* <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <Cake
              img={secondCake.img}
              desc1={secondCake.desc1}
              desc2={secondCake.desc2}
              price={secondCake.price}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <Cake
              img={thirdCake.img}
              desc1={thirdCake.desc1}
              desc2={thirdCake.desc2}
              price={thirdCake.price}
            />
          </div>
        </div>
      </div> */}
      {/* 
      <Cake
       
      /> */}
    </>
  );
}

function Cake(props) {
  return (
    <>
      <div className="container text">
        <div className="row">
          <div className="col-4">
            <img src={props.img} />
            <p>{props.desc1}</p>
            <p>{props.desc2}</p>
            <p>{props.price}</p>
            <button type="button" class="btn btn-dark">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Face(props) {
  return (
    <>
      <div className="dotted">
        <p>
          Hello {props.para}
          <img className="face" src={props.img} />
        </p>
      </div>
    </>
  );
}

export default App;

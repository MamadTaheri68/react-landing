import React, { Component } from "react";

import styles from "./Card.module.css";
import down from "../images/down.svg";
import up from "../images/up.svg";

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  downHandler = () => {
    if (this.state.counter >= 1) {
      this.setState((prevState) => ({
        counter: prevState.counter - 1,
      }));
    }
  };

  upHandler = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    const { image, name, cost } = this.props;
    const { counter } = this.state;
    return (
      <div className={styles.container}>
        <img src={image} alt="smart phone" />
        <h3>{name}</h3>
        <p>{cost} {counter ? `* ${counter} = ${counter * Number(cost.split(" ")[0])} $` : ""}</p>

        <div className={styles.counter}>
          <img className={!counter ? styles.deactive : ""} src={down} onClick={this.downHandler} alt="down-key" />
          <span>{counter}</span>
          <img src={up} onClick={this.upHandler} alt="up-key" />
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
export default class desafio3 extends Component {
  app = () => {
    return <h1>exercicio</h1>;
  };

  soma = () => 15 * 3;

  render() {
    return (
      <div>
        <h2>{this.app()}</h2>
        <p> {this.soma()}</p>
      </div>
    );
  }
}

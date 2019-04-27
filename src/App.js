import React, { Component } from "react";
import Card from "./components/Card";
import Container from "./components/Container";
import Header from "./components/Header";
import cards from "./cards.json";


class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    score: 0,
    upscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.upscore) {
      this.setState({upscore: this.state.score}, function() {
        console.log(this.state.upscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Ugh you lost.. and this is your score: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if(cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }
  // Map over this.state.cards and render a cardCard component for each card object
  render() {
    return (
      <Container>
        <Header score={this.state.score} upscore={this.state.upscore}>Clicky Game</Header>
        {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Container>
    );
  }
}

export default App;

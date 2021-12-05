import React, { Component } from "react";
import GifList from "../components/GifList";

export default class GifListContainer extends Component {
  state = {
    gifs: [],
  };

  handleClick = () => {
    fetch(
      "https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=VJIA5LPs4ZaSdw9uyJoBT49SZxwfcjVw&rating=g"
    )
      .then((resp) => resp.json())
      .then((data) => {
        const newGif = [];

        for (let i = 0; i < 5; i++) {
          newGif.push({ gifs: data.data[i].images.downsized });
        }
        this.setState({ gifs: newGif });
        console.log(data);
        console.log(this.state.gifs);
      });
  };
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleClick}>
          Fetch!
        </button>
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }

  componentDidMount() {
    this.handleClick();
    console.log(this.state.gifs);
  }
}

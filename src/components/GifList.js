import React, { Component } from "react";

export default class GifList extends Component {
  render() {
    return (
      <div className="gifs">
        {this.props.gifs.map((gif, id) => {
          return (
            <div key={id} className="gif">
              <img src={gif.gifs.url} alt="gif" />
            </div>
          );
        })}
      </div>
    );
  }
}

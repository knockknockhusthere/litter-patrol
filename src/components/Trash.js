import React, { Component } from 'react';
import '../App.css';
import TrashIcon from '../trash.svg';

class Trash extends Component {

  onTrashButtonClicked = () => {
    console.log("Got a click");
    console.log(this);
    console.log(this.props.clickedLitterCallback());
  }


  render() {
    let visible = this.props.visible;
    let image = "";
    if (visible) {
      image = <img src={ TrashIcon } alt="Trash" className="trash" onClick={ this.onTrashButtonClicked }></img>
    }

    return (
      <div className="bin" >
        {image}
      </div>
    );
  }
}

export default Trash;

import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img}/>
        <h2>{this.props.item.title}</h2>
        <q>{this.props.item.desc}</q>
        <h3>{this.props.item.price}₴</h3>
        <div className='add-to-cart'>+</div>
        
      </div>
    )
  }
}

export default Item

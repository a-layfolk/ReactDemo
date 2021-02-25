import React, { Component } from "react";
import CartItem from "./CartItem"

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: [
        "世界通史",
        "中国通史"
      ]
    };
    this.inputChange = this.inputChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  render() {
    return (
      <div>
        <div>
          <input
            value={ this.state.inputValue }
            onChange={ this.inputChange }
            ref={ (input) => { this.input = input }}
          />
          <button onClick={ this.addItem.bind(this) }>添加到购物车</button>
        </div>
        <div>
          <ul ref={ (ul) => { this.ul = ul }}>
              {
                this.state.list.map((item, index) => {
                  return (
                    <li key={ index + item }>
                      <CartItem 
                        content={ item } 
                        index={ index }
                        deleteItem={ this.deleteItem }
                      />
                    </li>
                  )
                })
              }
          </ul>
        </div>
      </div>
    )
  }

  inputChange() {
    this.setState({
      inputValue: this.input.value
    });
  }

  addItem() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    }, () => {
      console.log(this.ul.querySelectorAll("li").length);
    });
  }

  deleteItem(index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }
}

export default Cart;
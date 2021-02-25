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
          <input value={ this.state.inputValue } onChange={ this.inputChange }/>
          <button onClick={ this.addItem.bind(this) }>添加到购物车</button>
        </div>
        <div>
          <ul>
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

  inputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  addItem() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
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
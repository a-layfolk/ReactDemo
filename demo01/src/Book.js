import React, { Component } from "react";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: [
        "海底两万里",
        "世界通史"
      ],
      message: "Hello"
    };
  }

  render() {
    return (
      <div>
        <h1>{ this.state.message }</h1>
        <div>
          <input value={ this.state.inputValue } onChange={ this.inputChange.bind(this) } /> 
          <button onClick={ this.addItem.bind(this) }>添加</button>
        </div>
        <div>
          <ul>
            {
              this.state.list.map((item, index) => {
                return (
                  <li
                    key={ index + item}
                    onClick={ this.deleteItem.bind(this) }
                    dangerouslySetInnerHTML={{__html:item}}
                  >
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }

  // 绑定
  inputChange(e) {
    // console.log(e);
    this.setState({
      inputValue: e.target.value
    });
  }

  // 增加方法
  addItem() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      // 清空输入
      inputValue: ""
    });
  }

  // 删除
  deleteItem(index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }
}

export default Book;
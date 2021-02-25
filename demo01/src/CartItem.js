import React, { Component } from "react";
import PropTypes from "prop-types";


class CartItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div onClick={ this.handleClick }>
        { this.props.content }
      </div>
    )
  }

  handleClick() {
    this.props.deleteItem(this.props.index);
  }
}

// 数据校验
CartItem.propTypes = {
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
  // name: PropTypes.string.isRequired 代表必须传值
}

CartItem.defaultProps = {
  name: "layfolk" // 设置传参的默认值
}

export default CartItem;
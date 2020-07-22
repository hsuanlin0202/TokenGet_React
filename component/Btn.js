import React, { Component } from "react";
class Btn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      children: this.props.children,
      btnType: this.props.btnType,
      link: this.props.link,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const type = this.props.btnType;
    if (type === "back") {
      window.history.back();
    } else if (type === "refresh") {
      window.location.reload();
    } else if (type === "href") {
      window.location.href = this.state.link;
    }
  };
  render() {
    return (
      <button className="btn" onClick={this.handleClick}>
        {this.state.children}
      </button>
    );
  }
}

export default Btn;

import React, { Component } from "react";
import { length_check, email_check, phone_check } from "./verify.js";

class TextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      id: this.props.id,
      InValue: "",
      type: this.props.type,
      require: this.props.require,
      error: " ",
      pattern: this.props.pattern,
      veryLength: this.props.veryLength,
      veryGlobal: this.props.veryGlobal,
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput = (e) => {
    const verify = this.props.verify;
    const pos = this.props.veryGlobal;

    if (verify === "email") {
      const email = email_check(e.target.value);
      if (email === false) {
        this.setState({ error: this.props.name + "輸入有誤，請重新輸入" });
        global.infoVerify[pos] = false;
      } else {
        this.setState({ error: "" });
        global.infoVerify[pos] = true;
      }
    } else if (verify === "phone") {
      const phone = phone_check(e.target.value);
      if (phone === false) {
        this.setState({ error: this.props.name + "輸入有誤，請重新輸入" });
        global.infoVerify[pos] = false;
      } else {
        this.setState({ error: "" });
        global.infoVerify[pos] = true;
      }
    } else if (verify === "length") {
      const length = this.props.veryLength;
      const content = length_check(e.target.value, length);
      if (content === false) {
        this.setState({ error: this.props.name + "輸入有誤，請重新輸入" });
        global.infoVerify[pos] = false;
      } else {
        this.setState({ error: "" });
        global.infoVerify[pos] = true;
      }
    }
  };

  handleChange = (e) => {
    this.setState({ InValue: e.target.value });
  };
  render() {
    const mgTop10 = {
      margin: "10px 0 0 0",
    };
    return (
      <div className="wid100 fx fx_nowrap">
        <div className="table_td wid30 fx fx_center">
          <label className="input_require">{this.state.require}</label>
          <label className="white_nowrap">{this.state.name}</label>
        </div>
        <div className="table_td wid70 fx fx_center fx_wrap">
          <input
            pattern={this.state.pattern}
            className="wid100"
            style={mgTop10}
            type={this.state.type}
            name={this.state.id}
            id={this.state.id}
            value={this.state.InValue}
            onInput={this.handleInput}
            onChange={this.handleChange}
          />
          <label id={this.state.id + "error"} className="error wid100">
            {this.state.error}
          </label>
        </div>
      </div>
    );
  }
}

export default TextInput;

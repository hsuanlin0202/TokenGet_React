import React, { Component } from "react";

class CheckBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      children: this.props.children,
      veryGlobal: this.props.veryGlobal,
      contract: true,
    };
    this.handleInputChange = this.onChangeLike.bind(this);
  }

  onChangeLike = (e) => {
    const pos = this.props.veryGlobal;
    this.setState({
      contract: !this.state.contract,
    });

    global.infoVerify[pos] = this.state.contract;
  };
  render() {
    return (
      <div className="wid100 fx fx_center">
        <label className="input_require">*</label>
        <label>
          <input
            type="checkbox"
            name={this.state.name}
            onChange={this.onChangeLike}
          />
          {this.state.children}
        </label>
      </div>
    );
  }
}

export default CheckBox;

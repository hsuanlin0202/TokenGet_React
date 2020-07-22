import React, { Component } from "react";
export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sec: this.props.sec,
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }

  tick() {
    if (this.state.sec > 0) {
      this.setState({ sec: this.state.sec - 1 });
    } else {
      window.location.href = "/Page3timeout";
    }
  }
  render() {
    return <div className="timer">{this.state.sec}</div>;
  }
}

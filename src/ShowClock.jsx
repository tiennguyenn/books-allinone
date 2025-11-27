import React from "react";

class ShowClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timer = setInterval(() => this.setState({ date: new Date() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return <h1>The current time is {this.state.date.toLocaleTimeString()}</h1>;
  }
}

export default ShowClock;

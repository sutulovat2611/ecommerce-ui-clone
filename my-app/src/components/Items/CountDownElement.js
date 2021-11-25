/* Importing the required react components */
import React, { Component } from "react";
/* Importing the scss file for styling */
import "./CountDownElement.scss";

class CountDown extends Component {
  // Initialization
  constructor(props) {
    super(props);
    this.count = this.count.bind(this);
    this.state = {
      days: 0,
      minutes: 0,
      hours: 0,
      secounds: 0,
      time_up: "",
    };
    this.x = null;
    this.deadline = null;
  }
  // Calculating the remaining time
  count() {
    var now = new Date().getTime();
    var t = this.deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    this.setState({ days, minutes, hours, seconds });
    if (t < 0) {
      clearInterval(this.x);
      this.setState({
        days: 0,
        minutes: 0,
        hours: 0,
        seconds: 0,
        time_up: "TIME IS UP",
      });
    }
  }
  //finding the current date
  componentDidMount() {
    this.deadline = new Date("dec 31, 2021 21:00:00").getTime();

    this.x = setInterval(this.count, 1000);
  }

  //printing the result to the screen
  render() {
    const { days, seconds, hours, minutes } = this.state;
    return (
      <div id="clockdiv">
        <div>
          <span className="days" id="day">
            {days}
          </span>
        </div>
        <div>
          <span className="hours" id="hour">
            {hours}
          </span>
        </div>
        <div>
          <span className="minutes" id="minute">
            {minutes}
          </span>
        </div>
        <div>
          <span className="seconds" id="second">
            {seconds}
          </span>
        </div>
      </div>
    );
  }
}

export default CountDown;

import { useState, useEffect } from "react";

function ClockContainer() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="clock-container">
      <h2>Current Time</h2>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Clock Visibility
      </button>
      {isVisible && <Clock />}
    </div>
  );
}

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      console.log("Cleaning up timer");
      clearInterval(timerID);
    };
  }, []);

  function tick() {
    setTime(new Date());
  }

  return <div>{time.toLocaleTimeString()}</div>;
}

export default ClockContainer;

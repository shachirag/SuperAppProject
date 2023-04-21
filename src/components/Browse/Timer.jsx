import up from "../../assets/up.png";
import down from "../../assets/down.png";
import alarmSound from "../../assets/alarm.mp3";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./Timer.css";

import { useState, useRef } from "react";
const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const [isRinging, setIsRinging] = useState(false);
  const [stopped, setStopped] = useState(false);
  const increaseSecond = () => {
    if (seconds === 59) {
      return;
    }
    setSeconds((sec) => sec + 1);
  };
  const increaseMinute = () => {
    if (minutes === 59) {
      return;
    }
    setMinutes((min) => min + 1);
  };
  const increaseHour = () => {
    setHours((hours) => hours + 1);
  };
  const decreaseSecond = () => {
    if (seconds === 0) {
      return;
    }
    setSeconds((sec) => sec - 1);
  };
  const decreaseMinute = () => {
    if (minutes === 0) {
      return;
    }
    setMinutes((min) => min - 1);
  };
  const decreaseHour = () => {
    if (hours === 0) {
      return;
    }
    setHours((hours) => hours - 1);
  };

  function toHoursAndMinutes(totalSeconds) {
    const totalMinutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <div className="timer-container">
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying={playing}
          duration={seconds + minutes * 60 + hours * 60 * 60}
          colors={["#FF6A6A"]}
          onComplete={() => {
            // Reset the timer
            setHours(0);
            setMinutes(0);
            setSeconds(0);
            // Play the alarm sound
            audioRef.current.play();
            setIsRinging(true);
          }}
        >
          {({ remainingTime }) => (
            <span className="timer-value">
              {toHoursAndMinutes(remainingTime)}
            </span>
          )}
        </CountdownCircleTimer>
        <div>
          <audio src={alarmSound} ref={audioRef} />
        </div>
      </div>
      <div className="timer-wrapper">
        <div className="timer-controls">
          <div className="timer-control">
            <p>Hours</p>
            <img onClick={increaseHour} src={up} alt="" />
            <p className="timer-value">{hours}</p>
            <img onClick={decreaseHour} src={down} alt="" />
          </div>
          <div className="timer-control">
            <p>Minutes</p>
            <img onClick={increaseMinute} src={up} alt="" />
            <p className="timer-value">{minutes}</p>
            <img onClick={decreaseMinute} src={down} alt="" />
          </div>
          <div className="timer-control">
            <p>Seconds</p>
            <img onClick={increaseSecond} src={up} alt="" />
            <p className="timer-value">{seconds}</p>
            <img onClick={decreaseSecond} src={down} alt="" />
          </div>
        </div>
        <div
          onClick={() => {
            if (isRinging) {
              audioRef.current.pause();
              audioRef.current.currentTime = 0;
              setIsRinging(false);
              setStopped(true);
            } else {
              setPlaying((prev) => !prev);
              setStopped(false);
            }
          }}
          className="timer-buttons"
        >
          {isRinging ? (
            <p>Stop</p>
          ) : stopped ? (
            <p>Start</p>
          ) : playing ? (
            <p>Pause</p>
          ) : (
            <p>Start</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Timer;

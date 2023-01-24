import React from "react";
import { useEffect } from "react";
import count from "../../../styles/CountDown.module.css";

const CountDown = () => {
  function addZero(a: number) {
    if (a.toString().length == 1) return "0" + a.toString();
    return a.toString();
  }

  const endDate = new Date(Date.UTC(2023, 1, 10, 22));

  const [brokenUp, setBrokenUp] = React.useState({
    days: 19,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("This will run every second!");
      const now = new Date();
      const days = Math.floor(
        Math.abs(endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
      );
      const hours = Math.floor(
        (Math.abs(endDate.getTime() - now.getTime()) / (1000 * 60 * 60)) % 24
      );
      const minutes = Math.floor(
        (Math.abs(endDate.getTime() - now.getTime()) / (1000 * 60)) % 60
      );
      const seconds = Math.floor(
        (Math.abs(endDate.getTime() - now.getTime()) / 1000) % 60
      );
      setBrokenUp({
        ...brokenUp,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={count.center}>
        <div className={count.heading}>
          Xade Mainnet V1 is launching on 10th February 2023 at 10 PM UTC
<br />
          <br />
        </div>
        <div className={count.wrapper}>
          <div className={count.elWrapper + " " + count.daysWrapper}>
            <div className={count.elA}>
              <div className={count.daysDiv}>{addZero(brokenUp.days)}</div>
            </div>
            <div className={count.elB}>days</div>
          </div>
          <div className={count.elWrapper + " " + count.hoursWrapper}>
            <div className={count.elA}>{addZero(brokenUp.hours)}</div>
            <div className={count.elB}>hours</div>
          </div>
          <div className={count.elWrapper + " " + count.minsWrapper}>
            <div className={count.elA}>{addZero(brokenUp.minutes)}</div>
            <div className={count.elB}>minutes</div>
          </div>
          <div className={count.elWrapper + " " + count.secondsWrapper}>
            <div className={count.elA}>{addZero(brokenUp.seconds)}</div>
            <div className={count.elB}>seconds</div>
          </div>
        </div>
        <div className={count.footer}>
          <br />
          The countdown has already begun
          <br />
          <br />
          <br />
          <button className={count.takePart}>
            <a
              className={count.btnTxt}
              href="https://discord.com/channels/1023970802099572847/1039229895781404692"
            >
              Take part in the private beta
            </a>
          </button>
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default CountDown;

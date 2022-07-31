import React, { Fragment, useEffect, useState } from "react";
function FinalCountDown() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();
  let interval;

  const startTimer = () => {
    const countDownDate = new Date("August 30, 2022").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        //stop
        clearInterval(interval.current);
      } else {
        //update
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });
  return (
    <div>
      <Fragment>
        <section>
          <section>
            <div className="flex flex-row ">
              <section className="mx-5 justify-center items-center flex flex-col">
                <p className="font-basic-sans text-[45px]">{timerDays}</p>
                <p className="font-work-sans text-[12px]">Days</p>
              </section>
              <section className="mx-5 justify-center items-center flex flex-col">
                <p className="font-basic-sans text-[45px]">{timerHours}</p>
                <p className="font-work-sans text-[12px]">Hours</p>
              </section>
              <section className="mx-5 justify-center items-center flex flex-col">
                <p className="font-basic-sans text-[45px]">{timerMinutes}</p>
                <p className="font-work-sans text-[12px]">Minutes</p>
              </section>
              <section className="mx-5 justify-center items-center flex flex-col">
                <p className="font-basic-sans text-[45px]">{timerSeconds}</p>
                <p className="font-work-sans text-[12px]">Seconds</p>
              </section>
            </div>
          </section>
        </section>
      </Fragment>
    </div>
  );
}

export default FinalCountDown;

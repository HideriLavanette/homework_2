import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(new Date());
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

	return (
		<div className='timeBlock'>
			<h1>Время сейчас: {time.toLocaleTimeString()}</h1>
			<h2>Таймер: {seconds} сек</h2>
		</div>
	);
}
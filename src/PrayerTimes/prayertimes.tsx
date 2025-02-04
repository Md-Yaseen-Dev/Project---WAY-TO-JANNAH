import React, { useEffect, useState } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Timings = {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Sunset: string;
  Maghrib: string;
  Isha: string;
  Imsak: string;
  Midnight: string;
  Firstthird: string;
  Lastthird: string;
};


const PrayerTimesClock: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());
  const [prayerTimes, setPrayerTimes] = useState<Timings | null>(null);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const response = await axios.get(
          `https://api.aladhan.com/v1/timingsByCity?city=Mecca&country=India%20Arabia&method=2&month=${month}&year=${year}`
        );
        setPrayerTimes(response?.data?.data?.timings);
      } catch (error) {
        console.error("Error fetching prayer times:", error);
      }
    };

    fetchPrayerTimes();
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourRotation = (hours % 12) * 30 + minutes * 0.5;
  const minuteRotation = minutes * 6;
  const secondRotation = seconds * 6;

  const current = `${hours}: ${minutes} : ${seconds} `

  return (

    <div className="min-h-screen bg-gradient-to-b from-green-700 to-green-900 text-white flex flex-col  p-6">
  <div className="text-4xl font-extrabold mb-8 tracking-wide flex items-center justify-center">
    Prayer Times
  </div>
<div className="flex justify-around">
  <div className="w-full max-w-lg bg-[#0F3D3E] rounded-lg shadow-lg p-6">
    <div className="text-xl font-semibold mb-4 text-center">
      Today's Prayer Times
    </div>
    <ul className="space-y-4">
      {prayerTimes &&
        Object.entries(prayerTimes).map(([prayer, timing]) => (
          <li
            key={prayer}
            className="flex justify-between items-center p-4 bg-green-700 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <span className="font-bold capitalize text-lg">{prayer}</span>
            <span className="text-lg">{timing}</span>
          </li>
        ))}
    </ul>
  </div>

  <div className="mt-10 flex flex-col items-center">
    <div
      className="relative w-72 h-72 rounded-full flex items-center justify-center"
      style={{ backgroundColor: "#0F3D3E" }}
    >
      <div className="w-2 h-2 bg-black rounded-full absolute"></div>
      <div
        className="absolute top-[70px] w-2 bg-blue-500 origin-bottom rounded transition-transform"
        style={{
          height: "70px",
          transform: `rotate(${hourRotation}deg)`,
        }}
      ></div>
      <div
        className="absolute top-[42px] w-1 bg-gray-300 origin-bottom rounded transition-transform"
        style={{
          height: "100px",
          transform: `rotate(${minuteRotation}deg)`,
        }}
      ></div>
      <div
        className="absolute top-[34px] w-1 bg-red-500 origin-bottom rounded transition-transform"
        style={{
          height: "110px",
          transform: `rotate(${secondRotation}deg)`,
        }}
      ></div>
      <div className="absolute inset-0 border-4 border-yellow-500 rounded-full"></div>
    </div>
    <div className="mt-4 text-sm text-gray-300">
      Current time: {current}
    </div>
  </div>
</div>
</div>
  );
};

export default PrayerTimesClock;

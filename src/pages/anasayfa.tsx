import React, { useState, useEffect } from "react";

interface SplashScreenProps {
  onAnimationEnd: React.AnimationEventHandler<HTMLDivElement>;
}

export function SplashScreen({ onAnimationEnd }: SplashScreenProps) {
  return (
    <div className="splash-screen" onAnimationEnd={onAnimationEnd}>
      <img src="https://s9.gifyu.com/images/SaLae.gif" alt="" />
    </div>
  );
}

export default function Anasayfa() {
  const [dateTime, setDateTime] = useState(new Date());
  const [showSplash, setShowSplash] = useState(true);
  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    const timerID = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    // 5 saniye sonra splash ekranı kaldır
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
    }, 6000);

    // Temizlik
    return () => {
      clearInterval(timerID);
      clearTimeout(splashTimer);
    };
  }, []);

  useEffect(() => {
    setFormattedTime(dateTime.toLocaleTimeString());
  }, [dateTime]);

  const formattedDate = dateTime.toLocaleDateString();

  const handleAnimationEnd = () => {
    setShowSplash(false);
  };
  return (
    <div className="h-screen bg-gray-100 ">
      <div className="bg-gray-800  font-RopaSansFonts">
        {showSplash && <SplashScreen onAnimationEnd={handleAnimationEnd} />}{" "}
        <div className={`flex  pr-5 text-white text-xl pb-3 pt-3 ${showSplash ? "hidden" : "block"}`}>
          <div className="w-1/2 flex justify-start pl-2 items-center">
            <img className="h-12" src="https://i.ibb.co/X7Gmpht/logos.png" alt="" />
            <div className="justify-center flex items-center pl-8">Alcazar Cafe</div>
          </div>
          
          <div className="grid w-1/2 justify-end items-center ">
            <div className="">{formattedDate} </div> <div className="">{formattedTime}</div>
          </div>
        </div>
      </div>
      <div className="w-full h-[900px] pt-5 pr-5 pl-5 ">
        <div className="bg-gray-500 rounded-md relative w-full mb-5">
          <img src="https://images.unsplash.com/photo-1515697320591-f3eb3566bc3c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="background image" className=" opacity-40 blur-[2px] w-full h-full object-cover rounded-md" />
          {/* Merhaba yazısı */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold">Menü</div>
        </div>
        <div className="bg-gray-500 rounded-md relative w-full mb-5">
          <img src="https://images.unsplash.com/photo-1588675646184-f5b0b0b0b2de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="background image" className="opacity-40 blur-[1px] w-full h-full object-cover rounded-md" />
          {/* Merhaba yazısı */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold">Garson Çağır</div>
        </div>
        <div className="bg-gray-500 rounded-md relative w-full mb-5">
          <img src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="background image" className="opacity-40 blur-[1px] w-full h-full object-cover rounded-md" />
          {/* Merhaba yazısı */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold">Hesap İste</div>
        </div>
      </div>
    </div>
  );
}

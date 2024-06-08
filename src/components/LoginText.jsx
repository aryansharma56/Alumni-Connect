import React, { useEffect, useState } from "react";
import ReactTextTransition from "react-text-transition";

export default function LoginText() {
  const [index, setIndex] = useState(0);
  const texts = [
    "Share your achievements",
    "Get a referral",
    "Connect with your seniors",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <ReactTextTransition springConfig={{ tension: 300, friction: 10 }}>
      {texts[index]}
    </ReactTextTransition>
  );
}

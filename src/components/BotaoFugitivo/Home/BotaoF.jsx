
import React, { useState } from "react";
import gato2 from "../../assets/images/gato2.png";
import "./BotaoF.css";

export default function BotaoFugitivo() {
  const [position, setPosition] = useState({ top: 50, left: 50 });

  const handleMouseMove = () => {
    const newX = Math.random() * (window.innerWidth - 100);
    const newY = Math.random() * (window.innerHeight - 50);
    setPosition({ top: newY, left: newX });
  };

  return (
    <button
      onClick={() => alert("Você conseguiu clicar!")}
      onMouseMove={handleMouseMove}
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        padding: "10px 20px",
        cursor: "pointer",
        transition: "all 0.2s ease-out",
      }}
    >
      <div>
        <img
          src={gato2}
          alt="Gatinho fujão"
          style={{ width: 200, height: 160 }}
        />
      </div>
      Clique aqui para pular para 2026 logo!
    </button>
  );
}

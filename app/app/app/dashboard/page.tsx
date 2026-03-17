"use client";

import { useState } from "react";

export default function Dashboard() {
  const [geral, setGeral] = useState(50);
  const [redDot, setRedDot] = useState(50);
  const [awm, setAwm] = useState(50);

  return (
    <div className="container">
      <div className="card">

        <h1>Painel Sensi</h1>

        <div className="slider">
          <label>Geral: {geral}</label>
          <input type="range" value={geral} onChange={(e) => setGeral(e.target.value)} />
        </div>

        <div className="slider">
          <label>Red Dot: {redDot}</label>
          <input type="range" value={redDot} onChange={(e) => setRedDot(e.target.value)} />
        </div>

        <div className="slider">
          <label>AWM: {awm}</label>
          <input type="range" value={awm} onChange={(e) => setAwm(e.target.value)} />
        </div>

        <button onClick={() => alert("Sensibilidade aplicada!")}>
          Aplicar Sensi
        </button>

      </div>
    </div>
  );
}

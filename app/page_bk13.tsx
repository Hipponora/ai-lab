"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 🎮 HIPPNORA — GAME WORLD (STABLE + EXTENDED)
export default function HipponoraGameWorld() {
  const [activeRoom, setActiveRoom] = useState(null);
  const [input, setInput] = useState("");
  const [monster, setMonster] = useState(null);
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    const hum = typeof Audio !== "undefined" ? new Audio("/lab-ambience.mp3") : null;
    if (hum) {
      hum.loop = true;
      hum.volume = 0.25;
      hum.play().catch(() => {});
    }
    const data = localStorage.getItem("hipponora_monsters");
    if (data) setSaved(JSON.parse(data));
  }, []);

  const playClick = () => {
    const s = new Audio("/click.mp3");
    s.volume = 0.6;
    s.play();
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* 🌌 Background */}
      <div className="absolute w-96 h-96 bg-purple-600 opacity-30 blur-3xl animate-pulse top-10 left-10" />
      <div className="absolute w-96 h-96 bg-blue-500 opacity-30 blur-3xl animate-pulse bottom-10 right-10" />

      {/* 🦕 Dino */}
      <motion.div className="absolute top-8 left-1/2 -translate-x-1/2 text-center" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity }}>
        <div className="text-6xl">🦕</div>
        <p className="text-purple-300 text-sm">{activeRoom ? getDinoMessage(activeRoom) : "Choose your lab"}</p>
      </motion.div>

      {/* 🗺️ MAP */}
      {!activeRoom && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[700px] h-[450px]">
            <svg className="absolute inset-0 w-full h-full">
              <path d="M80 260 Q360 40 640 260" stroke="#7c3aed" strokeWidth="3" fill="transparent" />
            </svg>

            {rooms.map((room) => (
              <motion.div
                key={room.name}
                whileHover={{ scale: 1.15 }}
                onClick={() => { playClick(); setActiveRoom(room.name); }}
                className={`absolute cursor-pointer text-center ${room.position}`}
              >
                <div className="text-5xl">{room.icon}</div>
                <p>{room.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* ROOMS */}
      <AnimatePresence>
        {activeRoom && (
          <motion.div initial={{ scale: 0.3 }} animate={{ scale: 1 }} exit={{ scale: 0.3 }} className="absolute inset-0">

            {activeRoom === "Art Lab" && (
              <ArtLab
                input={input}
                setInput={setInput}
                monster={monster}
                setMonster={setMonster}
                saved={saved}
                setSaved={setSaved}
                playClick={playClick}
              />
            )}

            {activeRoom === "Robot Garage" && <SimpleRoom title="Robot Garage" emoji="⚙️" />}
            {activeRoom === "Music Studio" && <SimpleRoom title="Music Studio" emoji="🎶" />}
            {activeRoom === "Story Garden" && <SimpleRoom title="Story Garden" emoji="📖" />}

            <button onClick={() => setActiveRoom(null)} className="absolute bottom-6 left-1/2 -translate-x-1/2">← Back</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// 🎨 ART LAB (CUSTOMIZATION ADDED)
function ArtLab({ input, setInput, monster, setMonster, saved, setSaved, playClick }) {
  const [eye, setEye] = useState("cute");
  const [color, setColor] = useState("purple");
  const [power, setPower] = useState("fire");

  // 🔮 LIVE PREVIEW (updates instantly)
  const previewName = (input || "zorp").split(" ").pop() + "asaur";
  // Fix: Dicebear needs hex color values
  const colorMap = { purple: "a855f7", red: "ef4444", blue: "3b82f6", green: "22c55e" };
  const previewImage = `https://api.dicebear.com/7.x/bottts/svg?seed=${previewName}&backgroundColor=${colorMap[color]}`;
  const previewStory = `${previewName} has ${eye} eyes and uses ${power} power!`;

  const generateMonster = () => {
    if (!input) return;
    setMonster({ name: previewName, image: previewImage, story: previewStory, eye, color, power });
  };

  const saveMonster = () => {
    if (!monster) return;
    const next = [monster, ...saved];
    setSaved(next);
    localStorage.setItem("hipponora_monsters", JSON.stringify(next));
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-pink-900 to-black">

      <h2 className="text-3xl mb-4">Build Your Monster</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="angry banana"
        className="px-4 py-2 text-black rounded"
      />

      {/* 👀 Eyes */}
      <div className="mt-3 flex gap-2">
        {["cute","angry","laser"].map(e => (
          <button key={e} onClick={() => setEye(e)} className={`px-2 rounded ${eye===e?"bg-yellow-300":"bg-white text-black"}`}>{e}</button>
        ))}
      </div>

      {/* 🎨 Color */}
      <div className="mt-3 flex gap-2">
        {["purple","red","blue","green"].map(c => (
          <button key={c} onClick={() => setColor(c)} className={`px-2 rounded ${color===c?"bg-yellow-300":"bg-white text-black"}`}>{c}</button>
        ))}
      </div>

      {/* 💥 Power */}
      <div className="mt-3 flex gap-2">
        {["fire","ice","electric"].map(p => (
          <button key={p} onClick={() => setPower(p)} className={`px-2 rounded ${power===p?"bg-yellow-300":"bg-white text-black"}`}>{p}</button>
        ))}
      </div>

      {/* 🔮 LIVE PREVIEW CARD */}
      <div className="mt-6 bg-white text-black p-4 rounded text-center w-[260px] shadow-lg relative overflow-hidden">

  {/* 💥 Power Effects */}
  {power === "electric" && (
    <div className="absolute inset-0 animate-pulse bg-yellow-200 opacity-30" />
  )}
  {power === "fire" && (
    <div className="absolute inset-0 animate-ping bg-red-300 opacity-20" />
  )}
  {power === "ice" && (
    <div className="absolute inset-0 bg-blue-200 opacity-20" />
  )}

  {/* Monster */}
  <img
    src={previewImage}
    className="w-20 h-20 mx-auto mb-2 relative z-10"
  />

  {/* 👀 Eyes (visual feedback) */}
  <div className="text-xl mb-1">
    {eye === "cute" && "😊"}
    {eye === "angry" && "😠"}
    {eye === "laser" && "😈"}
  </div>

  <h3 className="font-bold">{previewName}</h3>
  <p className="text-xs">{previewStory}</p>
</div>

      <button onClick={() => { playClick(); generateMonster(); }} className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded">Save This Monster</button>

      {/* Saved */}
      {saved.length > 0 && (
        <div className="flex gap-2 mt-4">
          {saved.slice(0,5).map((m,i)=> (
            <img key={i} src={m.image} className="w-10 h-10 bg-white rounded" />
          ))}
        </div>
      )}

    </div>
  );
}

function SimpleRoom({ title, emoji }){
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="text-6xl">{emoji}</div>
      <h2 className="mt-4">{title}</h2>
    </div>
  );
}

const rooms = [
  { name: "Art Lab", icon: "🎨", position: "top-10 left-10" },
  { name: "Robot Garage", icon: "🤖", position: "top-10 right-10" },
  { name: "Music Studio", icon: "🎧", position: "bottom-10 left-20" },
  { name: "Story Garden", icon: "📚", position: "bottom-10 right-20" }
];

function getDinoMessage(room) {
  if (room === "Art Lab") return "Create your monster!";
  return "Explore!";
}

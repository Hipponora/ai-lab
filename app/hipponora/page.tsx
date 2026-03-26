"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// 🎮 HIPPNORA — GAME WORLD (STABLE + EXTENDED)
export default function HipponoraGameWorld() {
  const [activeRoom, setActiveRoom] = useState(null);
  const [input, setInput] = useState("");
  const [monster, setMonster] = useState(null);
  const [saved, setSaved] = useState([]);
  // 💥 Particle explosion trigger state
 const [explode, setExplode] = useState(null);

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

      <motion.div
  className="absolute bottom-20 left-20 text-4xl"
  animate={{ scale: [1, 1.3, 1] }}
  transition={{ repeat: Infinity, duration: 2 }}
>
  💥
</motion.div>

      {/* 🌌 Background */}
            <div className="absolute w-96 h-96 bg-purple-600 opacity-30 blur-3xl animate-pulse top-10 left-10" />
      <div className="absolute w-96 h-96 bg-blue-500 opacity-30 blur-3xl animate-pulse bottom-10 right-10" />
      {/* 🧠 Central AI Core */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  <div className="w-40 h-40 rounded-full bg-purple-50 blur-3xl opacity-40 animate-pulse" />
</div>
      {/* 🦕 Dino */}
      <motion.div 
  className="absolute top-16 left-1/2 -translate-x-1/2 text-center z-20" animate={{ y: [0, -12, 0], rotate: [0, 2, -2, 0] }}
transition={{ repeat: Infinity, duration: 4 }}>
        <Image
  src="/dendrasaur_hero.png"
  alt="Dendrasaur"
  width={180}
  height={180}
  className="mx-auto drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]"
/>
        <p className="text-purple-300 text-sm">{activeRoom ? getDinoMessage(activeRoom) : "Choose your lab"}</p>
      </motion.div>

{/* Add Floating Random objects Shikha Pandey 3/19/2016 */}
{/* 🌌 Floating Sci-Fi Objects (Controlled Chaos) */}
{[
  { icon: "🧪", size: "text-3xl" },
  { icon: "🤖", size: "text-5xl" },
  { icon: "⚙️", size: "text-4xl" },
  { icon: "🧬", size: "text-4xl" },
  { icon: "🧠", size: "text-5xl" },
  { icon: "🛰️", size: "text-5xl" },
  { icon: "🔬", size: "text-4xl" },
  { icon: "🌌", size: "text-6xl" }
].map((obj, i) => (
  <motion.div
    key={i}
    className={`absolute ${obj.size} opacity-80`}
    style={{
      top: `${10 + i * 10}%`,
      left: `${(i % 2 === 0 ? 10 : 70)}%`,
    }}
    animate={{
      y: [0, -40, 0],
      x: [0, 20, -20, 0],
      rotate: [0, 15, -15, 0],
    }}
    transition={{
      duration: 6 + i,
      repeat: Infinity,
    }}
  >
    {obj.icon}
  </motion.div>
))}

<motion.div
  className="absolute bottom-20 left-20 text-4xl"
  animate={{ scale: [1, 1.3, 1] }}
  transition={{ repeat: Infinity, duration: 2 }}
>
  💥
</motion.div>

<motion.div
  className="absolute text-5xl"
  animate={{
    x: [0, 200, -150, 0],
    y: [0, -100, 50, 0],
  }}
  transition={{ duration: 12, repeat: Infinity }}
>
  🐵
</motion.div>

<motion.div
  className="absolute bottom-20 left-20 text-4xl"
  animate={{ scale: [1, 1.3, 1] }}
  transition={{ repeat: Infinity, duration: 2 }}
>
  💥
</motion.div>

<motion.div
  className="absolute text-5xl"
  animate={{
    x: [300, -200, 100],
    y: [100, -50, 150],
  }}
  transition={{ duration: 10, repeat: Infinity }}
>
  🤖
</motion.div>

<motion.div
  className="absolute bottom-20 left-20 text-4xl"
  animate={{ scale: [1, 1.3, 1] }}
  transition={{ repeat: Infinity, duration: 2 }}
>
  💥
</motion.div>

<motion.div
  className="absolute text-5xl"
  animate={{
    x: [0, 200, -150, 0],
    y: [0, -100, 50, 0],
  }}
  transition={{ duration: 12, repeat: Infinity }}
>
  🐵
</motion.div>

<motion.div
  className="absolute text-5xl"
  animate={{
    x: [300, -200, 100],
    y: [100, -50, 150],
  }}
  transition={{ duration: 10, repeat: Infinity }}
>
  🤖
</motion.div>

{/* 🧪 Lab Surface */}
<div className="absolute bottom-0 w-full h-[180px] bg-gradient-to-t from-purple-900 via-purple-800/40 to-transparent" />
    {/* 💥 Particle Explosion */}
{explode && (
  <div className="pointer-events-none absolute inset-0 z-50">
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-yellow-300 text-xl"
        style={{
          left: explode.x,
          top: explode.y,
        }}
        initial={{ scale: 0, opacity: 1 }}
        animate={{
          x: (Math.random() - 0.5) * 200,
          y: (Math.random() - 0.5) * 200,
          scale: 1.5,
          opacity: 0,
        }}
        transition={{ duration: 3.0 }}
      >
        💥
      </motion.div>
    ))}
  </div>
)}
      {/* 🗺️ MAP with energy beams */}
      {!activeRoom && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[700px] h-[450px]">
            <svg className="absolute inset-0 w-full h-full">
              <path d="M100 200 Q350 50 650 200" stroke="#f472b6" strokeWidth="2" opacity="0.4" />
              <path d="M80 260 Q360 40 640 260" stroke="#7c3aed" strokeWidth="3" fill="transparent" />
              <path d="M200 300 Q400 100 600 300" stroke="#22d3ee" strokeWidth="2" opacity="0.6" />
                          </svg>

            {rooms.map((room) => (
  <motion.div
  key={room.name}
  whileHover={{ scale: 1.15 }}
  whileTap={{ scale: 1.6, rotate: 10 }} // 🌀 portal press

    onClick={(e) => {
  playClick();

  // 💥 capture click position
  const rect = e.currentTarget.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  setExplode({ x, y });

  // 🌀 delay for effect
  setTimeout(() => {
    setActiveRoom(room.name);
    setExplode(null);
  }, 1100);
}}
    className={`absolute cursor-pointer text-center ${room.position}`}
  >
    {/* 🧪 Lab Platform + Room Object */}
    <div className="relative flex flex-col items-center">

      {/* Glow base (platform under room) */}
      <div className="absolute -bottom-2 w-16 h-3 bg-purple-500 blur-md opacity-60 rounded-full" />

      {/* Floating icon */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-5xl"
      >
        {room.icon}
      </motion.div>

      {/* Room label */}
      <p className="text-sm mt-1">{room.name}</p>

    </div>
  </motion.div>
))}
          </div>
        </div>
      )}

      {/* ROOMS */}
      <AnimatePresence>
        {activeRoom && (
          <motion.div
  initial={{ scale: 0.2, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0.2, opacity: 0 }}
  transition={{ type: "spring", stiffness: 120 }} className="absolute inset-0">

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

            <button onClick={() => {setActiveRoom(null); playClick();}} className="absolute bottom-6 left-1/2 -translate-x-1/2">← Back</button>
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
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  // 🧠 Track last click time (for behavior-based mood)
  const [lastClickTime, setLastClickTime] = useState(0);
  const [mood, setMood] = useState("happy");

  // 🔮 LIVE PREVIEW (updates instantly)
  const previewName = (input || "zorp").split(" ").pop() + "asaur";
  // Fix: Dicebear needs hex color values
  const colorMap = { purple: "a855f7", red: "ef4444", blue: "3b82f6", green: "22c55e" };
  const previewImage = `https://api.dicebear.com/7.x/bottts/svg?seed=${previewName}&backgroundColor=${colorMap[color]}`;
  const previewStory = `${previewName} has ${eye} eyes and uses ${power} power!`;
  
  // 🧠 NEW: Mood depends on HOW user interacts
function updateMoodByBehavior() {
  const now = Date.now();
  const diff = now - lastClickTime;

  let newMood = "happy";

  if (diff < 200) newMood = "angry";
  else if (diff < 500) newMood = "excited";
  else if (diff > 2000) newMood = "sleepy";

  setMood(newMood);

  console.log("CLICK DIFF:", diff);
  console.log("MOOD SET TO:", newMood); // ✅ use this

  setLastClickTime(now);
}

// 🧠 Auto-reset mood if user stops interacting
useEffect(() => {
  const t = setTimeout(() => setMood("happy"), 5000);
  return () => clearTimeout(t);
}, [lastClickTime]);
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
          <button key={e} onClick={() => {setEye(e); playClick();}} className={`px-2 rounded ${eye===e?"bg-yellow-300":"bg-white text-black"}`}>{e}</button>
        ))}
      </div>

      {/* 🎨 Color */}
      <div className="mt-3 flex gap-2">
        {["purple","red","blue","green"].map(c => (
          <button key={c} onClick={() => {setColor(c); playClick();}} className={`px-2 rounded ${color===c?"bg-yellow-300":"bg-white text-black"}`}>{c}</button>
        ))}
      </div>

      {/* 💥 Power */}
      <div className="mt-3 flex gap-2">
        {["fire","ice","electric"].map(p => (
          <button key={p} onClick={() => {playClick(); setPower(p);}} className={`px-2 rounded ${power===p?"bg-yellow-300":"bg-white text-black"}`}>{p}</button>
        ))}
      </div>

      {/* 🔮 LIVE PREVIEW CARD (UPGRADED VISUAL) */}
      <div className="mt-6 bg-white text-black p-4 rounded text-center w-[260px] shadow-lg relative overflow-hidden">

        {/* 💥 Power FX Layers */}
        {power === "electric" && (
          <div className="absolute inset-0 animate-pulse bg-yellow-300 opacity-30" />
        )}
        {power === "fire" && (
          <div className="absolute inset-0 animate-ping bg-red-400 opacity-20" />
        )}
        {power === "ice" && (
          <div className="absolute inset-0 bg-blue-300 opacity-20" />
        )}

        {/* 🧬 Monster Container */}
        <div className="relative z-10 flex flex-col items-center">

          {/* Monster with slight animation */}
    
          <div
  className={`relative
  ${power === "electric" ? "animate-bounce" : ""}
  ${power === "fire" ? "animate-pulse" : ""}
  ${isHovering ? "scale-110" : ""}
  ${isClicked ? "rotate-6 scale-125" : ""}
`}
  onMouseEnter={() => setIsHovering(true)}
  onMouseLeave={() => setIsHovering(false)}
  onClick={() => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
    playClick();
    updateMoodByBehavior(); // 🧠 behavior-based reaction
  }}
>
            <img src={previewImage} className="w-20 h-20 mx-auto mb-2" />
            {/* 👀 Reaction Layer */}
{isHovering && (
  <div className="absolute inset-0 flex items-center justify-center text-2xl">
    👀
  </div>
)}

{isClicked && (
  <div className="absolute inset-0 flex items-center justify-center text-2xl animate-ping">
    💥
  </div>
)}

            {/* 👀 Eyes overlay (actual visual placement) */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 text-lg">
              {eye === "cute" && "👀"}
              {eye === "angry" && "🔥"}
              {eye === "laser" && "⚡"}
            </div>
          </div>

          {/* 💬 Dynamic label */}
          <div className="text-xs mb-1 opacity-70">
            {power === "electric" && "⚡ crackling energy"}
            {power === "fire" && "🔥 burning rage"}
            {power === "ice" && "❄️ freezing aura"}
          </div>

          <h3 className="font-bold">{previewName}</h3>
          <p className="text-xs">{previewStory}</p>
        </div>
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

function SimpleRoom({ title, emoji }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="text-6xl">{emoji}</div>
      <h2 className="mt-4">{title}</h2>
    </div>
  );
}

const rooms = [
  { name: "Art Lab", icon: "🎨", position: "top-[12%] left-[8%]" },
  { name: "Robot Garage", icon: "🤖", position: "top-[18%] right-[5%]"},
  { name: "Music Studio", icon: "🎧", position: "bottom-[15%] left-[18%]" },
  { name: "Story Garden", icon: "📚", position: "bottom-[8%] right-[12%]" }
];

function getDinoMessage(room) {
  if (room === "Art Lab") return "Create your monster!";
  return "Explore!";
}

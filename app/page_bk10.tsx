"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 🎮 HIPPNORA — INSANE GAME WORLD (Living Rooms + Map + Art Lab MVP)
export default function HipponoraGameWorld() {
  const [activeRoom, setActiveRoom] = useState(null);
  const [input, setInput] = useState("");
  const [monster, setMonster] = useState(null);
  const [saved, setSaved] = useState([]);

  // 🔊 Ambient + click sounds
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

  // 🧠 Mock AI (replace later with real API)
  const generateMonster = () => {
    if (!input) return;
    const seed = input.split(" ").slice(-1)[0] || "zorp";
    const name = seed.charAt(0).toUpperCase() + seed.slice(1) + "asaur";
    const story = `This is ${name}, born from \"${input}\". It zaps colors into the air and loves playful chaos.`;
    const image = `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(name)}`; // fun placeholder avatar
    setMonster({ name, story, image });
  };

  const saveMonster = () => {
    if (!monster) return;
    const next = [monster, ...saved].slice(0, 20);
    setSaved(next);
    localStorage.setItem("hipponora_monsters", JSON.stringify(next));
  };

  const shareMonster = async () => {
    if (!monster) return;
    const text = `${monster.name} — ${monster.story}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: "My AI Monster", text });
      } catch {}
    } else {
      await navigator.clipboard.writeText(text);
      alert("Copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* 🌌 Ambient Glow */}
      <div className="absolute w-96 h-96 bg-purple-600 opacity-30 blur-3xl animate-pulse top-10 left-10" />
      <div className="absolute w-96 h-96 bg-blue-500 opacity-30 blur-3xl animate-pulse bottom-10 right-10" />

      {/* 🤖 Floating robots */}
      <motion.div animate={{ y: [0, -18, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute top-24 left-16 text-4xl">🤖</motion.div>
      <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute top-40 right-24 text-3xl">🛸</motion.div>

      {/* 🧪 Bubbling potion */}
      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-16 left-40 text-5xl">🧪</motion.div>

      {/* 🦕 Dendrasaur (alive + reacts) */}
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute top-8 left-1/2 -translate-x-1/2 text-center">
        <div className="text-6xl">🦕</div>
        <p className="text-purple-300 text-sm mt-2">{activeRoom ? getDinoMessage(activeRoom) : "Welcome! Choose your lab experiment"}</p>
      </motion.div>

      {/* 🗺️ TRUE GAME MAP (paths + nodes) */}
      {!activeRoom && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[720px] h-[460px]">
            {/* Curved paths */}
            <svg className="absolute inset-0 w-full h-full">
              <path d="M80 260 Q360 40 640 260" stroke="#7c3aed" strokeWidth="3" fill="transparent" />
              <path d="M120 120 Q360 420 600 120" stroke="#22c55e" strokeWidth="2" fill="transparent" />
            </svg>

            {rooms.map((room) => (
              <motion.div
                key={room.name}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { playClick(); setActiveRoom(room.name); }}
                className={`absolute cursor-pointer text-center ${room.position}`}
              >
                <div className="text-5xl drop-shadow-[0_0_10px_rgba(168,85,247,0.9)]">{room.icon}</div>
                <p className="mt-1">{room.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* 🚪 ROOMS (Living environments) */}
      <AnimatePresence>
        {activeRoom && (
          <motion.div initial={{ scale: 0.3, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.3, opacity: 0 }} className="absolute inset-0">

            {/* 🎨 ART LAB — ADDICTIVE VERSION */}
            {activeRoom === "Art Lab" && (
              <div className="w-full h-full bg-gradient-to-br from-pink-900 via-purple-900 to-black flex flex-col items-center justify-center">

                {/* Living visuals */}
                <div className="absolute inset-0 pointer-events-none">
                  <motion.div className="absolute top-10 left-10 text-6xl" animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }}>🎨</motion.div>
                  <motion.div className="absolute bottom-12 right-12 text-6xl" animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 2 }}>🖌️</motion.div>
                </div>

                <h2 className="text-4xl mb-4">Create Your Monster</h2>

                {/* Input */}
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="angry banana monster"
                  className="px-4 py-3 rounded-xl text-black w-80"
                />

                <button
                  onClick={() => { playClick(); generateMonster(); }}
                  className="mt-3 bg-yellow-400 text-black px-6 py-3 rounded-xl"
                >
                  Generate
                </button>

                {/* Monster Output */}
                {monster && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mt-6 bg-white text-black p-5 rounded-2xl text-center w-[360px] shadow-2xl"
                  >
                    <motion.img
                      src={monster.image}
                      alt="monster"
                      className="w-24 h-24 mx-auto mb-2"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />

                    <h3 className="text-xl font-bold">{monster.name}</h3>
                    <p className="text-sm mt-2">{monster.story}</p>

                    {/* Powers (new addictive layer) */}
                    <div className="mt-3 flex justify-center gap-2 text-xs">
                      <span className="bg-purple-200 px-2 py-1 rounded">🔥 Fire</span>
                      <span className="bg-blue-200 px-2 py-1 rounded">⚡ Energy</span>
                      <span className="bg-green-200 px-2 py-1 rounded">🌿 Nature</span>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-center gap-3 mt-4">
                      <button onClick={() => { playClick(); saveMonster(); }} className="text-xs underline">Save</button>
                      <button onClick={() => { playClick(); shareMonster(); }} className="text-xs underline">Share</button>
                    </div>
                  </motion.div>
                )}

                {/* Collection Shelf (visual reward loop) */}
                {saved.length > 0 && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-black/40 px-3 py-2 rounded-xl">
                    {saved.slice(0,6).map((m, i) => (
                      <motion.img
                        key={i}
                        src={m.image}
                        className="w-10 h-10 bg-white rounded"
                        whileHover={{ scale: 1.2 }}
                      />
                    ))}
                  </div>
                )}

              </div>
            )}

            {/* 🤖 ROBOT GARAGE — gears + sparks */}
            {activeRoom === "Robot Garage" && (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }} className="text-7xl">⚙️</motion.div>
                <motion.div animate={{ opacity: [0,1,0] }} transition={{ repeat: Infinity, duration: 1 }} className="text-yellow-400 text-3xl mt-4">✨✨</motion.div>
                <p className="mt-4">Assemble your robot</p>
              </div>
            )}

            {/* 🎧 MUSIC STUDIO — pulsing waves */}
            {activeRoom === "Music Studio" && (
              <div className="w-full h-full flex flex-col items-center justify-center bg-indigo-900">
                <div className="flex gap-2">
                  {[1,2,3,4].map(i => (
                    <motion.div key={i} className="w-3 bg-white" animate={{ height: [20, 60, 20] }} transition={{ repeat: Infinity, duration: 1 + i*0.2 }} />
                  ))}
                </div>
                <p className="mt-4">Create music beats</p>
              </div>
            )}

            {/* 📚 STORY GARDEN — fireflies */}
            {activeRoom === "Story Garden" && (
              <div className="w-full h-full flex flex-col items-center justify-center bg-green-900">
                <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity }} className="text-6xl">📖</motion.div>
                <motion.div className="absolute top-20 left-20 text-yellow-300" animate={{ opacity: [0,1,0] }} transition={{ repeat: Infinity, duration: 2 }}>✨</motion.div>
                <motion.div className="absolute bottom-24 right-24 text-yellow-300" animate={{ opacity: [0,1,0] }} transition={{ repeat: Infinity, duration: 3 }}>✨</motion.div>
                <p>Stories come alive here</p>
              </div>
            )}

            <button onClick={() => { playClick(); setActiveRoom(null); setMonster(null); }} className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-purple-300">← Back to Map</button>
          </motion.div>
        )}
      </AnimatePresence>
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
  switch (room) {
    case "Art Lab":
      return "Let’s create something wild!";
    case "Robot Garage":
      return "Time to build a robot!";
    case "Music Studio":
      return "Let’s make some noise!";
    case "Story Garden":
      return "Stories are growing here!";
    default:
      return "Choose your experiment";
  }
}
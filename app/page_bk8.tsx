"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 🧠 FULL GAME WORLD WITH LIVING ROOMS + ART LAB EXPERIENCE
export default function HipponoraGameWorld() {
  const [activeRoom, setActiveRoom] = useState(null);
  const [input, setInput] = useState("");
  const [monster, setMonster] = useState(null);

  const generateMonster = () => {
    // Mock AI output (replace later with real API)
    const name = input.split(" ").slice(-1)[0] + "asaur";
    const story = `This is ${name}, a wild AI creature born from ${input}. It loves chaos and creativity!`;
    setMonster({ name, story });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* 🌌 Ambient Glow */}
      <div className="absolute w-96 h-96 bg-purple-600 opacity-30 blur-3xl animate-pulse top-10 left-10" />
      <div className="absolute w-96 h-96 bg-blue-500 opacity-30 blur-3xl animate-pulse bottom-10 right-10" />

      {/* 🦕 Dendrasaur (alive) */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute top-10 left-1/2 -translate-x-1/2 text-center"
      >
        <div className="text-6xl">🦕</div>
        <p className="text-purple-300 text-sm mt-2">
          {activeRoom
            ? getDinoMessage(activeRoom)
            : "Welcome! Choose your lab experiment"}
        </p>
      </motion.div>

      {/* 🗺️ MAP (curved world feel) */}
      {!activeRoom && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[600px] h-[400px]">

            {rooms.map((room, i) => (
              <motion.div
                key={room.name}
                whileHover={{ scale: 1.1 }}
                onClick={() => setActiveRoom(room.name)}
                className={`absolute cursor-pointer text-center ${room.position}`}
              >
                <div className="text-5xl">{room.icon}</div>
                <p className="mt-1">{room.name}</p>
              </motion.div>
            ))}

            {/* paths */}
            <svg className="absolute inset-0 w-full h-full">
              <path d="M100 200 Q300 50 500 200" stroke="#9333ea" fill="transparent" />
            </svg>

          </div>
        </div>
      )}

      {/* 🎨 ROOMS */}
      <AnimatePresence>
        {activeRoom && (
          <motion.div
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.3, opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >

            {/* 🎨 ART LAB (FULL EXPERIENCE) */}
            {activeRoom === "Art Lab" && (
              {/* Background animated blobs */}
<div className="absolute inset-0 overflow-hidden">
  <div className="absolute w-72 h-72 bg-pink-500 opacity-20 blur-3xl animate-pulse top-10 left-10"></div>
  <div className="absolute w-72 h-72 bg-yellow-400 opacity-20 blur-3xl animate-bounce bottom-10 right-10"></div>
</div>

{/* Floating paint particles */}
<div className="absolute inset-0 pointer-events-none">
  {[...Array(10)].map((_, i) => (
    <div
      key={i}
      className="absolute w-3 h-3 bg-yellow-300 rounded-full animate-ping"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
    />
  ))}
</div>
            )}

            {/* 🤖 ROBOT GARAGE */}
            {activeRoom === "Robot Garage" && (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 4 }} className="text-6xl">⚙️</motion.div>
                <p className="mt-4">Assemble your robot</p>
              </div>
            )}

            {/* 🎧 MUSIC STUDIO */}
            {activeRoom === "Music Studio" && (
              <div className="w-full h-full flex flex-col items-center justify-center bg-indigo-900">
                <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="text-6xl">🎶</motion.div>
                <p>Create music beats</p>
              </div>
            )}

            {/* 📚 STORY GARDEN */}
            {activeRoom === "Story Garden" && (
              <div className="w-full h-full flex flex-col items-center justify-center bg-green-900">
                <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity }} className="text-6xl">📖</motion.div>
                <p>Stories come alive here</p>
              </div>
            )}

            <button
              onClick={() => {
                setActiveRoom(null);
                setMonster(null);
              }}
              className="absolute bottom-6 text-sm text-purple-300"
            >
              ← Back to Map
            </button>

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

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HipponoraGameWorld() {
  const [activeRoom, setActiveRoom] = useState(null);
  const [audio] = useState(typeof Audio !== "undefined" ? new Audio("/lab-ambience.mp3") : null);

  useEffect(() => {
    if (audio) {
      audio.loop = true;
      audio.volume = 0.3;
      audio.play().catch(() => {});
    }
  }, [audio]);

  const handleClick = (room) => {
    const clickSound = new Audio("/click.mp3");
    clickSound.play();
    setActiveRoom(room);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Animated Background Glow */}
      <div className="absolute w-96 h-96 bg-purple-600 opacity-30 blur-3xl animate-pulse top-10 left-10" />
      <div className="absolute w-96 h-96 bg-blue-500 opacity-30 blur-3xl animate-pulse bottom-10 right-10" />

      {/* Floating Robots */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute text-4xl top-20 left-20"
      >🤖</motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute text-3xl top-40 right-32"
      >🛸</motion.div>

      {/* Bubbling Potion */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-20 left-40 text-5xl"
      >🧪</motion.div>

      {/* Main View */}
      <AnimatePresence>
        {!activeRoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center h-screen"
          >
            <div className="text-6xl mb-4">🦕</div>
            <h1 className="text-3xl font-bold">Dendrasaur AI Lab</h1>
            <p className="mt-2 text-purple-300">
              Choose your experiment
            </p>

            {/* Map */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              {rooms.map((room) => (
                <motion.div
                  key={room.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleClick(room.name)}
                  className="bg-purple-800 p-6 rounded-2xl cursor-pointer"
                >
                  <div className="text-4xl">{room.icon}</div>
                  <p className="mt-2">{room.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Room Experience */}
      <AnimatePresence>
        {activeRoom && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 to-black"
          >
            <h2 className="text-4xl mb-6">{activeRoom}</h2>

            {activeRoom === "Art Lab" && (
              <div className="text-center">
                <p className="mb-4">Create your AI Monster 🎨</p>
                <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl">
                  Generate Monster
                </button>
              </div>
            )}

            {activeRoom === "Robot Garage" && (
              <div className="text-center">
                <p className="mb-4">Build your robot 🤖</p>
                <div className="text-6xl animate-bounce">⚙️</div>
              </div>
            )}

            {activeRoom === "Music Studio" && (
              <div className="text-center">
                <p className="mb-4">Create AI Music 🎧</p>
                <div className="animate-pulse text-5xl">🎶</div>
              </div>
            )}

            <button
              onClick={() => setActiveRoom(null)}
              className="mt-10 text-sm text-purple-300"
            >
              ← Back to Lab
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const rooms = [
  { name: "Art Lab", icon: "🎨" },
  { name: "Robot Garage", icon: "🤖" },
  { name: "Music Studio", icon: "🎧" },
  { name: "Story Garden", icon: "📚" }
];

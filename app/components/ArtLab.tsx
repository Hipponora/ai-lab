"use client";

export default function ArtLab({ input, setInput, monster }) {
  return (
    <div className="text-white text-center">
      <h1 className="text-3xl mb-4">🎨 Art Lab</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Describe your monster..."
        className="p-2 text-black"
      />
      <div className="mt-4">{monster}</div>
    </div>
  );
}
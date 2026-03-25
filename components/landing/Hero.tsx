export default function Hero() {
  return (
    <section className="flex items-center justify-between px-10 py-20">

      {/* LEFT CONTENT */}
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold leading-tight">
          Build Your Future with AI
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Learn. Build. Get hired globally.
        </p>

        <button className="mt-6 px-6 py-3 bg-black text-white rounded-xl">
          Get Started
        </button>
      </div>

      {/* RIGHT IMAGE (DENDRASAUR) */}
      <div className="w-[400px]">
        <img
          src="/dendrasaur_hero.png"
          alt="Dendrasaur mascot"
          className="w-full object-contain"
        />
      </div>

    </section>
  );
}
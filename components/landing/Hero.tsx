export default function Hero() {
  return (
    <section className="section-hippo relative flex items-center justify-between">

      {/* MAGIC BLOBS */}
      <div className="absolute top-10 left-10 w-32 h-32 blob-purple rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 blob-yellow rounded-full"></div>

      {/* LEFT */}
      <div className="max-w-xl">

        <h1 className="text-5xl font-extrabold leading-tight">
          Learn with your <span className="text-[var(--hippo-primary)]">Dino Friend</span>
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">
          Fun AI-powered learning for curious kids.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="btn-hippo">
            Start Adventure
          </button>

          <button className="btn-hippo-outline">
            Watch Demo
          </button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative w-[420px] flex items-center justify-center">

        {/* Glow */}
        <div className="absolute w-[320px] h-[320px] glow-hippo rounded-full"></div>

        {/* Mascot */}
        <img
          src="/dendrasaur_hero.png"
          alt="Dendrasaur mascot"
          className="relative w-full animate-float"
        />

      </div>

    </section>
  );
}
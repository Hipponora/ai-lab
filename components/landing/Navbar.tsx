export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6">

      <h1 className="text-2xl font-bold tracking-tight">
        🦕 Hipponora
      </h1>

      <div className="flex items-center gap-6 text-sm">
        <a href="#" className="link-hippo">Explore</a>
        <a href="#" className="link-hippo">Parents</a>
        <a href="#" className="link-hippo">About</a>

        <button className="btn-hippo">
          Start Free
        </button>
      </div>

    </nav>
  );
}
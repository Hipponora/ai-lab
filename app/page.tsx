import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";

export default function LandingPage() {
  return (
    <main className="landing bg-white text-black">
      <Navbar />
      <Hero />
    </main>
  );
}
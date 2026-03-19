import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="px-6 py-24 text-center bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-5xl md:text-6xl font-bold text-indigo-700">
            Hipponora
          </h1>

          <p className="mt-4 text-xl text-gray-700">
            The AI Playground for Kids
          </p>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover artificial intelligence through games, stories,
            creativity, and exploration. Designed especially for curious
            kids aged 7–10.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg">Start Playing</Button>
            <Button size="lg" variant="outline">Explore Programs</Button>
          </div>
        </div>
      </section>


      {/* DENDRASAUR SECTION */}
      <section className="px-6 py-24 bg-green-50 text-center">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl font-semibold text-green-700">
            Meet Dendrasaur 🦕
          </h2>

          <p className="mt-6 text-gray-700">
            Dendrasaur is your friendly AI explorer!  
            He travels through the world of artificial intelligence
            helping kids discover how machines learn, create,
            and solve problems.
          </p>

          <p className="mt-4 text-gray-700">
            Join Dendrasaur on exciting adventures where
            dinosaurs meet AI!
          </p>

        </div>
      </section>


      {/* GAMES */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold text-center">
            AI Games
          </h2>

          <p className="mt-4 text-center text-gray-600">
            Learn AI while playing fun interactive games.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">

            <div className="p-6 rounded-xl bg-indigo-50">
              <h3 className="text-xl font-semibold">AI Drawing Battle</h3>
              <p className="mt-3 text-gray-600">
                Challenge AI to draw the funniest characters and
                see who wins!
              </p>
            </div>

            <div className="p-6 rounded-xl bg-indigo-50">
              <h3 className="text-xl font-semibold">Train Your Robot</h3>
              <p className="mt-3 text-gray-600">
                Teach a tiny robot how to recognize objects and
                learn new tricks.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-indigo-50">
              <h3 className="text-xl font-semibold">Guess the AI</h3>
              <p className="mt-3 text-gray-600">
                Can you guess what the AI is thinking?
                Test your imagination!
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* CREATOR LAB */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-semibold">
            Creator Lab
          </h2>

          <p className="mt-6 text-gray-600">
            Build amazing things with AI — stories, comics,
            avatars, and more.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">

            <div className="p-6 rounded-xl bg-white shadow">
              AI Story Builder
            </div>

            <div className="p-6 rounded-xl bg-white shadow">
              Comic Creator
            </div>

            <div className="p-6 rounded-xl bg-white shadow">
              Avatar Maker
            </div>

          </div>

        </div>
      </section>


      {/* PROGRAMS */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-semibold">
            AI Learning Programs
          </h2>

          <p className="mt-6 text-gray-600">
            Structured programs to help kids understand AI step by step.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">

            <div className="p-6 rounded-xl bg-cyan-50">
              <h3 className="font-semibold">AI Explorer</h3>
              <p className="mt-2 text-sm text-gray-600">Age 7–8</p>
            </div>

            <div className="p-6 rounded-xl bg-cyan-50">
              <h3 className="font-semibold">AI Builder</h3>
              <p className="mt-2 text-sm text-gray-600">Age 8–9</p>
            </div>

            <div className="p-6 rounded-xl bg-cyan-50">
              <h3 className="font-semibold">AI Inventor</h3>
              <p className="mt-2 text-sm text-gray-600">Age 9–10</p>
            </div>

          </div>

        </div>
      </section>


      {/* PARENT SECTION */}
      <section className="px-6 py-24 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl font-semibold">
            For Parents
          </h2>

          <p className="mt-6 text-gray-600">
            Hipponora helps children understand artificial
            intelligence in a safe, creative, and inspiring way.
            Kids learn how AI works while building imagination,
            problem solving, and future skills.
          </p>

        </div>
      </section>

    </main>
  )
}
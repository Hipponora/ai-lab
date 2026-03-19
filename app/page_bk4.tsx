import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative px-6 py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50" />

        <div className="relative max-w-4xl mx-auto">
          <p className="text-sm tracking-wide text-gray-500">
            BarnStorm • Shikha Pandey
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight">
            AI for Everyone
          </h1>

          <p className="mt-8 text-lg text-gray-600 max-w-2xl mx-auto">
            Building inclusive AI literacy, leadership, and transformation
            across healthcare, enterprise, women, and youth.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg">Explore the Mission</Button>
            <Button size="lg" variant="outline">
              Join the Movement
            </Button>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">
            A Vision Beyond Technology
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Artificial Intelligence is not only a technological shift —
            it is a societal transformation. The question is not whether
            AI will shape the future, but who will benefit from it.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            BarnStorm exists to ensure AI remains inclusive, responsible,
            and accessible — across industries, generations, and communities.
          </p>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section className="px-6 py-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center">
            Our Focus Areas
          </h2>

          <div className="mt-16 grid gap-12 md:grid-cols-2">
            
            <div>
              <h3 className="text-xl font-medium">
                AI for Healthcare & Enterprise
              </h3>
              <p className="mt-4 text-gray-600">
                Strategic insight into responsible AI adoption,
                digital transformation, and scalable enterprise systems.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">
                AI for Women
              </h3>
              <p className="mt-4 text-gray-600">
                Enabling confident AI adoption, leadership development,
                and career transitions across sectors.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">
                AI for Youth
              </h3>
              <p className="mt-4 text-gray-600">
                Building foundational AI literacy for the next generation
                through accessible learning and awareness.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium">
                AI & Global Leadership Conversations
              </h3>
              <p className="mt-4 text-gray-600">
                Reflections on AI summits, policy developments,
                and global collaboration shaping the future of innovation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SPEAKING & MEDIA */}
      <section className="px-6 py-24 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold">
            Conversations That Matter
          </h2>

          <p className="mt-6 text-gray-600">
            AI talks, podcasts, summit reflections, and strategic
            dialogues designed to bridge policy, enterprise,
            and community impact.
          </p>

          <div className="mt-8">
            <Button size="lg">Explore Insights</Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-28 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-semibold">
            Join the Movement
          </h2>

          <p className="mt-6 text-gray-600">
            Stay informed. Stay responsible. Stay ahead.
          </p>

          <div className="mt-8">
            <Button size="lg">Connect with BarnStorm</Button>
          </div>
        </div>
      </section>

    </main>
  )
}
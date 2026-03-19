import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-32 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50" />
        
        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            AI-powered products <br className="hidden md:block" />
            built for the long term
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            NovaWorks helps ambitious teams design, build, and scale
            intelligent digital products — without shortcuts.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg">Start building</Button>
            <Button size="lg" variant="outline">
              Our approach
            </Button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center">
            What we focus on
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>AI-first architecture</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Products designed from day one to integrate AI,
                automation, and intelligence.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Product-grade design</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Minimal, intuitive interfaces that users trust and
                investors respect.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Built to scale</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                From MVP to platform — no rewrites, no technical debt
                traps.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-28 text-center bg-gray-50">
        <h2 className="text-4xl font-semibold">
          Let’s build something that lasts
        </h2>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Serious ideas deserve serious execution.
        </p>

        <div className="mt-8">
          <Button size="lg">Talk to us</Button>
        </div>
      </section>

    </main>
  )
}

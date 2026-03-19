import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      
      {/* HERO SECTION */}
      <section className="px-6 py-24 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Building the future, <br className="hidden md:block" />
          one intelligent product at a time
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          We design and build modern, scalable digital products for teams
          that think long-term and move fast.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center">
            Why teams choose us
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Future-ready architecture</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Built on modern frameworks that scale from MVP to global
                products without rewrites.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Design-first thinking</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                Clean, minimal, human-centered interfaces inspired by
                world-class products.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Speed with intention</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                We move fast — but never at the cost of quality,
                maintainability, or vision.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-4xl font-semibold">
          Ready to build something meaningful?
        </h2>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Let’s turn your idea into a product that’s built to last.
        </p>

        <div className="mt-8">
          <Button size="lg">Start the conversation</Button>
        </div>
      </section>

    </main>
  )
}

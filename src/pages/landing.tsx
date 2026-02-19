import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Zap, Layout, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[rgb(var(--primary))] via-background to-[rgb(var(--primary))]/30 py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2376af50\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-80" aria-hidden />
        <div className="relative mx-auto max-w-content px-4 text-center sm:px-6">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl animate-in fade-up">
            Launch your marketplace in days, not months
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground animate-in fade-up [animation-delay:100ms]">
            A configurable two-sided marketplace engine. Buyers, sellers, dynamic listings, payments, and trust & safety—all from one platform.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-in fade-up [animation-delay:200ms]">
            <Button asChild size="lg" className="text-base">
              <Link to="/signup">
                Create marketplace <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <Link to="/search">Discover listings</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How it works - 3 steps */}
      <section id="how-it-works" className="border-t border-border bg-secondary/30 py-16 md:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Three steps to go live with your niche marketplace.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                step: '1',
                title: 'Configure',
                description: 'Define categories, listing schemas, fees, and policies in the Configuration Console.',
                icon: Layout,
              },
              {
                step: '2',
                title: 'Onboard sellers',
                description: 'Sellers complete profile, KYC, and Stripe Connect. Listings go through your moderation flow.',
                icon: Zap,
              },
              {
                step: '3',
                title: 'Go live',
                description: 'Buyers discover, checkout or book, and pay. You earn commission; sellers get payouts on schedule.',
                icon: Shield,
              },
            ].map(({ step, title, description, icon: Icon }, idx) => (
              <Card key={step} className="animate-in fade-up" style={{ animationDelay: `${idx * 80}ms` }}>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/15 text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                    Step {step}
                  </span>
                  <CardTitle className="text-xl">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features overview - bento-style */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-content-wide px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
            Everything you need to run a marketplace
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Dynamic schemas, checkout and booking, Stripe Connect, messaging, reviews, and moderation.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Dynamic listing schemas per category',
              'Checkout, booking & inquiry flows',
              'Stripe Connect payouts',
              'In-app messaging',
              'Reviews & ratings',
              'Moderation & disputes',
              'Admin configuration console',
              'Feature flags & multi-tenant ready',
            ].map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-card border border-border bg-card p-4 shadow-card transition-all hover:scale-[1.02] hover:shadow-card-hover"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" aria-hidden />
                <span className="font-medium text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border bg-secondary/30 py-16 md:py-24">
        <div className="mx-auto max-w-content-wide px-4 sm:px-6">
          <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl">
            Trusted by marketplace operators
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            From photography to rentals to consulting—one engine, many niches.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { quote: 'We launched our rental marketplace in under two weeks. Schema-driven listings made category setup a breeze.', author: 'Alex C.', role: 'Operator' },
              { quote: 'Stripe Connect and payout scheduling just work. Our sellers love the clarity.', author: 'Jordan M.', role: 'Operator' },
              { quote: 'Moderation queues and dispute handling saved us countless support hours.', author: 'Sam K.', role: 'Support' },
            ].map(({ quote, author, role }) => (
              <Card key={author}>
                <CardContent className="pt-6">
                  <p className="text-foreground">&ldquo;{quote}&rdquo;</p>
                  <p className="mt-4 text-sm font-semibold text-foreground">{author}</p>
                  <p className="text-sm text-muted-foreground">{role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="mx-auto max-w-content px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Simple pricing
          </h2>
          <p className="mt-4 text-muted-foreground">
            Commission-based. No hidden fees. Scale with your GMV.
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link to="/signup">Get started</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/50 py-12">
        <div className="mx-auto max-w-content-wide px-4 sm:px-6">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="font-bold text-foreground">Marketplace Engine</span>
              <p className="mt-2 text-sm text-muted-foreground">
                Configurable two-sided marketplace platform.
              </p>
            </div>
            <nav className="flex flex-wrap gap-6 text-sm" aria-label="Footer">
              <Link to="/docs" className="text-muted-foreground hover:text-foreground">
                Docs
              </Link>
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link to="/cookies" className="text-muted-foreground hover:text-foreground">
                Cookies
              </Link>
            </nav>
          </div>
          <p className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Marketplace Engine. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

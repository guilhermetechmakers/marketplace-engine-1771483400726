import { Link, useNavigate } from 'react-router-dom'
import { ShoppingBag, User, Menu, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const navLinks = [
  { to: '/search', label: 'Discover' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/pricing', label: 'Pricing' },
]

export function MainNav({ className }: { className?: string }) {
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        className
      )}
    >
      <div className="mx-auto flex h-16 max-w-content-wide items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-foreground transition-opacity hover:opacity-90"
          aria-label="Home"
        >
          <span className="text-xl">Marketplace</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/search')}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/dashboard/buyer')}
            aria-label="Orders"
          >
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/login')}
            aria-label="Account"
          >
            <User className="h-5 w-5" />
          </Button>
          <Button
            variant="default"
            className="hidden sm:inline-flex"
            onClick={() => navigate('/login')}
          >
            Sign in
          </Button>
          <Button
            variant="outline"
            className="md:hidden"
            size="icon"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="animate-in fade-in border-t border-border bg-background px-4 py-4 md:hidden"
          role="dialog"
          aria-label="Mobile menu"
        >
          <nav className="flex flex-col gap-2">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Button
              variant="default"
              className="mt-2 w-full"
              onClick={() => {
                navigate('/login')
                setMobileOpen(false)
              }}
            >
              Sign in
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

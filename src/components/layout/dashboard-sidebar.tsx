import { Link, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  MessageSquare,
  Settings,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Users,
  Shield,
  FileText,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useState } from 'react'

type Role = 'buyer' | 'seller' | 'admin'

const buyerNav = [
  { to: '/dashboard/buyer', label: 'Overview', icon: LayoutDashboard },
  { to: '/dashboard/buyer/orders', label: 'Orders', icon: ShoppingCart },
  { to: '/dashboard/buyer/messages', label: 'Messages', icon: MessageSquare },
  { to: '/dashboard/buyer/saved', label: 'Saved', icon: Package },
]

const sellerNav = [
  { to: '/dashboard/seller', label: 'Overview', icon: LayoutDashboard },
  { to: '/dashboard/seller/listings', label: 'Listings', icon: Package },
  { to: '/dashboard/seller/orders', label: 'Orders & Bookings', icon: ShoppingCart },
  { to: '/dashboard/seller/payouts', label: 'Payouts', icon: BarChart3 },
  { to: '/dashboard/seller/messages', label: 'Messages', icon: MessageSquare },
]

const adminNav = [
  { to: '/dashboard/admin', label: 'Overview', icon: LayoutDashboard },
  { to: '/dashboard/admin/moderation', label: 'Moderation', icon: Shield },
  { to: '/dashboard/admin/users', label: 'Users', icon: Users },
  { to: '/dashboard/admin/disputes', label: 'Disputes', icon: FileText },
  { to: '/dashboard/admin/config', label: 'Configuration', icon: Settings },
]

export function DashboardSidebar({ role = 'buyer' }: { role?: Role }) {
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)
  const nav = role === 'buyer' ? buyerNav : role === 'seller' ? sellerNav : adminNav

  return (
    <aside
      className={cn(
        'flex flex-col border-r border-border bg-card transition-all duration-300',
        collapsed ? 'w-[72px]' : 'w-64'
      )}
      aria-label="Dashboard navigation"
    >
      <div className="flex h-14 items-center justify-between border-b border-border px-3">
        {!collapsed && (
          <span className="truncate text-sm font-semibold text-foreground">
            Dashboard
          </span>
        )}
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => setCollapsed((c) => !c)}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>
      <nav className="flex flex-1 flex-col gap-1 p-2" aria-label="Sidebar">
        {nav.map(({ to, label, icon: Icon }) => {
          const isActive = location.pathname === to || location.pathname.startsWith(to + '/')
          return (
            <Link
              key={to}
              to={to}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
              )}
            >
              <Icon className="h-5 w-5 shrink-0" aria-hidden />
              {!collapsed && <span>{label}</span>}
            </Link>
          )
        })}
        <div className="mt-auto border-t border-border pt-2">
          <Link
            to="/settings"
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground',
              location.pathname === '/settings' && 'bg-secondary text-foreground'
            )}
          >
            <Settings className="h-5 w-5 shrink-0" aria-hidden />
            {!collapsed && <span>Settings</span>}
          </Link>
        </div>
      </nav>
    </aside>
  )
}

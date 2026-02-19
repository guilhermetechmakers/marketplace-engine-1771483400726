import { Outlet, useLocation } from 'react-router-dom'
import { MainNav } from '@/components/layout/main-nav'
import { DashboardSidebar } from '@/components/layout/dashboard-sidebar'

type Role = 'buyer' | 'seller' | 'admin'

export function DashboardLayout() {
  const location = useLocation()
  const segment = location.pathname.split('/').filter(Boolean)[1]
  const sidebarRole: Role =
    segment === 'seller' || segment === 'admin' ? segment : 'buyer'

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <MainNav />
      <div className="flex flex-1">
        <DashboardSidebar role={sidebarRole} />
        <main className="flex-1 overflow-auto p-6 md:p-8">
          <div className="mx-auto max-w-content-wide">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

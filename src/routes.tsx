import { createBrowserRouter, Navigate } from 'react-router-dom'
import { MainLayout } from '@/components/layout/main-layout'
import { DashboardLayout } from '@/components/layout/dashboard-layout'
import { LandingPage } from '@/pages/landing'
import { LoginSignupPage } from '@/pages/auth/login-signup'
import { PasswordResetPage } from '@/pages/auth/password-reset'
import { EmailVerificationPage } from '@/pages/auth/email-verification'
import { SearchPage } from '@/pages/search'
import { ListingDetailPage } from '@/pages/listing-detail'
import { CreateListingPage } from '@/pages/listings/create-listing'
import { EditListingPage } from '@/pages/listings/edit-listing'
import { CheckoutPage } from '@/pages/checkout'
import { OrdersPage } from '@/pages/orders'
import { MessagesPage } from '@/pages/messages'
import { SettingsPage } from '@/pages/settings'
import { LegalPage } from '@/pages/legal'
import { NotFoundPage } from '@/pages/not-found'
import { ErrorPage } from '@/pages/error'
import { BuyerOverviewPage } from '@/pages/dashboard/buyer-overview'
import { SellerOverviewPage } from '@/pages/dashboard/seller-overview'
import { AdminOverviewPage } from '@/pages/dashboard/admin-overview'
import { PlaceholderPage } from '@/pages/dashboard/placeholder'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'login', element: <LoginSignupPage /> },
      { path: 'signup', element: <LoginSignupPage /> },
      { path: 'forgot-password', element: <PasswordResetPage /> },
      { path: 'verify-email', element: <EmailVerificationPage /> },
      { path: 'search', element: <SearchPage /> },
      { path: 'listings/create', element: <CreateListingPage /> },
      { path: 'listings/:id/edit', element: <EditListingPage /> },
      { path: 'listings/:id', element: <ListingDetailPage /> },
      { path: 'checkout', element: <CheckoutPage /> },
      { path: 'checkout/:id', element: <CheckoutPage /> },
      { path: 'orders', element: <OrdersPage /> },
      { path: 'messages', element: <MessagesPage /> },
      { path: 'settings', element: <SettingsPage /> },
      { path: 'privacy', element: <LegalPage /> },
      { path: 'terms', element: <LegalPage /> },
      { path: 'cookies', element: <LegalPage /> },
      { path: 'docs', element: <PlaceholderPage title="Documentation" description="API docs and guides." /> },
      { path: 'how-it-works', element: <Navigate to="/#how-it-works" replace /> },
      { path: 'pricing', element: <Navigate to="/#pricing" replace /> },
      { path: 'onboarding/seller', element: <PlaceholderPage title="Seller onboarding" description="Profile, KYC, Stripe Connect, first listing." /> },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      { path: 'buyer', element: <BuyerOverviewPage /> },
      { path: 'buyer/orders', element: <OrdersPage /> },
      { path: 'buyer/messages', element: <Navigate to="/messages" replace /> },
      { path: 'buyer/saved', element: <PlaceholderPage title="Saved items" /> },
      { path: 'seller', element: <SellerOverviewPage /> },
      { path: 'seller/listings', element: <PlaceholderPage title="Listings" description="Manage your listings." /> },
      { path: 'seller/orders', element: <PlaceholderPage title="Orders & bookings" /> },
      { path: 'seller/payouts', element: <PlaceholderPage title="Payouts" description="Balance and schedule." /> },
      { path: 'seller/messages', element: <Navigate to="/messages" replace /> },
      { path: 'admin', element: <AdminOverviewPage /> },
      { path: 'admin/moderation', element: <PlaceholderPage title="Moderation queue" description="Listings, reviews, users, disputes." /> },
      { path: 'admin/users', element: <PlaceholderPage title="User management" /> },
      { path: 'admin/disputes', element: <PlaceholderPage title="Disputes" description="Case management and refunds." /> },
      { path: 'admin/config', element: <PlaceholderPage title="Configuration console" description="Taxonomy, schemas, fees, feature flags." /> },
    ],
  },
  { path: '/error', element: <ErrorPage /> },
  { path: '*', element: <NotFoundPage /> },
])

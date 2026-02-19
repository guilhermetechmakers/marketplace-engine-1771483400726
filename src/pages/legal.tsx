import { Link, useLocation } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const content: Record<string, { title: string; body: string }> = {
  privacy: {
    title: 'Privacy Policy',
    body: 'This is a placeholder for the Privacy Policy. In production, replace with full legal text. Data collection, use, cookies, and user rights (GDPR/CCPA).',
  },
  terms: {
    title: 'Terms of Service',
    body: 'This is a placeholder for the Terms of Service. In production, replace with full legal text. Acceptance, use of platform, fees, disputes.',
  },
  cookies: {
    title: 'Cookie Policy',
    body: 'This is a placeholder for the Cookie Policy. In production, replace with full legal text. Types of cookies, consent, management.',
  },
}

export function LegalPage() {
  const location = useLocation()
  const slug = location.pathname.slice(1) as keyof typeof content
  const page = slug && content[slug] ? content[slug] : null

  if (!page) {
    return (
      <div className="mx-auto max-w-content px-4 py-12">
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground">Page not found.</p>
            <Link to="/" className="mt-4 inline-block text-accent hover:underline">Back to home</Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-content px-4 py-12">
      <Card>
        <CardHeader>
          <CardTitle>{page.title}</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none text-foreground">
          <p>{page.body}</p>
          <p className="mt-6 text-sm text-muted-foreground">
            Download/print and consent controls can be added here.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

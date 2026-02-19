import { Link, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function CheckoutPage() {
  const { id } = useParams<{ id?: string }>()

  return (
    <div className="mx-auto max-w-content-wide px-4 py-8">
      <h1 className="text-2xl font-bold text-foreground">Checkout</h1>
      <p className="text-muted-foreground">Order summary, payment method, place order.</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Payer details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <Label>Full name</Label>
                  <Input placeholder="Name" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Payment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Stripe Elements, Apple/Google Pay. Promo code field.</p>
              <div className="mt-4 space-y-2">
                <Label>Promo code</Label>
                <Input placeholder="Code" />
              </div>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Order summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Fee</span>
              <span>$0.00</span>
            </div>
            <div className="border-t border-border pt-4 flex justify-between font-semibold">
              <span>Total</span>
              <span>$0.00</span>
            </div>
            <label className="flex items-start gap-2 text-sm">
              <input type="checkbox" className="rounded border-input text-accent" />
              <span>I accept the cancellation and refund policy.</span>
            </label>
            <Button className="w-full">Place order</Button>
            <Button asChild variant="ghost" className="w-full">
              <Link to={id ? `/listings/${id}` : '/search'}>Back</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function CreateListingPage() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)

  return (
    <div className="mx-auto max-w-2xl py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Create listing</h1>
        <p className="text-muted-foreground">Multi-step form driven by category schema.</p>
      </div>

      <div className="mb-6 flex gap-2">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`h-2 flex-1 rounded-full transition-colors ${
              s <= step ? 'bg-accent' : 'bg-secondary'
            }`}
            aria-hidden
          />
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Step {step}: Category & basics</CardTitle>
          <CardDescription>Select category and fill core fields from schema.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Category</Label>
            <select className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm">
              <option>Select category</option>
              <option>Goods</option>
              <option>Bookings</option>
              <option>Services</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label>Title</Label>
            <Input placeholder="Listing title" />
          </div>
          <div className="space-y-2">
            <Label>Price</Label>
            <Input type="number" placeholder="0.00" />
          </div>
          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={() => (step > 1 ? setStep(step - 1) : navigate('/dashboard/seller'))}
            >
              Back
            </Button>
            {step < 3 ? (
              <Button onClick={() => setStep(step + 1)}>Next</Button>
            ) : (
              <Button onClick={() => navigate('/dashboard/seller/listings')}>Save draft</Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const requestSchema = z.object({
  email: z.string().email('Invalid email'),
})

const resetSchema = z.object({
  password: z.string().min(8, 'At least 8 characters'),
  confirm: z.string(),
}).refine((d) => d.password === d.confirm, { message: 'Passwords do not match', path: ['confirm'] })

type RequestForm = z.infer<typeof requestSchema>
type ResetForm = z.infer<typeof resetSchema>

export function PasswordResetPage() {
  const [step, setStep] = useState<'request' | 'confirm' | 'reset'>('request')

  const requestForm = useForm<RequestForm>({
    resolver: zodResolver(requestSchema),
    defaultValues: { email: '' },
  })

  const resetForm = useForm<ResetForm>({
    resolver: zodResolver(resetSchema),
    defaultValues: { password: '', confirm: '' },
  })

  const onRequest = (_data: RequestForm) => {
    setStep('confirm')
  }

  const onReset = (_data: ResetForm) => {
    setStep('confirm')
  }

  if (step === 'confirm') {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-secondary/30 px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Check your email</CardTitle>
          <CardDescription>
            If an account exists for that email, we sent a reset link. Click it to set a new password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full">
            <Link to="/login">Back to login</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
    )
  }

  const hasToken = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('token')

  if (hasToken && step === 'request') {
    return (
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-secondary/30 px-4 py-12">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Set new password</CardTitle>
            <CardDescription>Enter your new password below.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={resetForm.handleSubmit(onReset)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="new-password">New password</Label>
                <Input
                  id="new-password"
                  type="password"
                  {...resetForm.register('password')}
                />
                {resetForm.formState.errors.password && (
                  <p className="text-sm text-destructive">{resetForm.formState.errors.password.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  {...resetForm.register('confirm')}
                />
                {resetForm.formState.errors.confirm && (
                  <p className="text-sm text-destructive">{resetForm.formState.errors.confirm.message}</p>
                )}
              </div>
              <Button type="submit" className="w-full">Reset password</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-secondary/30 px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Forgot password</CardTitle>
          <CardDescription>Enter your email and we’ll send a reset link.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={requestForm.handleSubmit(onRequest)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="pl-9"
                  {...requestForm.register('email')}
                />
              </div>
              {requestForm.formState.errors.email && (
                <p className="text-sm text-destructive">{requestForm.formState.errors.email.message}</p>
              )}
            </div>
            <Button type="submit" className="w-full">Send reset link</Button>
            <Button asChild variant="ghost" className="w-full">
              <Link to="/login">Back to login</Link>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

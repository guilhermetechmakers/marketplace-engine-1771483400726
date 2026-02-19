import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(1, 'Password required'),
})

const signupSchema = loginSchema.extend({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  role: z.enum(['buyer', 'seller', 'operator']),
  acceptTerms: z.boolean().refine((v) => v === true, { message: 'You must accept the terms' }),
})

type LoginForm = z.infer<typeof loginSchema>
type SignupForm = z.infer<typeof signupSchema>

export function LoginSignupPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const loginForm = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  })

  const signupForm = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
      role: 'buyer',
      acceptTerms: false,
    },
  })

  const onLogin = (_data: LoginForm) => {
    localStorage.setItem('auth_token', 'demo-token')
    navigate('/dashboard/buyer')
  }

  const onSignup = (formData: SignupForm) => {
    localStorage.setItem('auth_token', 'demo-token')
    const dash = formData.role === 'operator' ? 'admin' : formData.role === 'seller' ? 'seller' : 'buyer'
    navigate(`/dashboard/${dash}`)
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-secondary/30 px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setMode('login')}
              className={cn(
                'flex-1 rounded-lg py-2 text-sm font-medium transition-colors',
                mode === 'login'
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground hover:bg-secondary'
              )}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setMode('signup')}
              className={cn(
                'flex-1 rounded-lg py-2 text-sm font-medium transition-colors',
                mode === 'signup'
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground hover:bg-secondary'
              )}
            >
              Sign up
            </button>
          </div>
          <CardTitle className="text-xl">
            {mode === 'login' ? 'Welcome back' : 'Create an account'}
          </CardTitle>
          <CardDescription>
            {mode === 'login'
              ? 'Enter your email and password to sign in.'
              : 'Choose your role and complete the form.'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {mode === 'login' ? (
            <form onSubmit={loginForm.handleSubmit(onLogin)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-9"
                    {...loginForm.register('email')}
                  />
                </div>
                {loginForm.formState.errors.email && (
                  <p className="text-sm text-destructive">
                    {loginForm.formState.errors.email.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="login-password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="pl-9 pr-9"
                    {...loginForm.register('password')}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {loginForm.formState.errors.password && (
                  <p className="text-sm text-destructive">
                    {loginForm.formState.errors.password.message}
                  </p>
                )}
              </div>
              <Link
                to="/forgot-password"
                className="block text-sm text-accent hover:underline"
              >
                Forgot password?
              </Link>
              <Button type="submit" className="w-full">
                Sign in
              </Button>
            </form>
          ) : (
            <form onSubmit={signupForm.handleSubmit(onSignup)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signup-name">Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="signup-name"
                    placeholder="Your name"
                    className="pl-9"
                    {...signupForm.register('name')}
                  />
                </div>
                {signupForm.formState.errors.name && (
                  <p className="text-sm text-destructive">
                    {signupForm.formState.errors.name.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label>Role</Label>
                <div className="flex gap-2">
                  {(['buyer', 'seller', 'operator'] as const).map((r) => (
                    <label key={r} className="flex cursor-pointer items-center gap-2">
                      <input
                        type="radio"
                        value={r}
                        {...signupForm.register('role')}
                        className="rounded-full border-input text-accent focus:ring-ring"
                      />
                      <span className="capitalize text-sm">{r}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="you@example.com"
                  {...signupForm.register('email')}
                />
                {signupForm.formState.errors.email && (
                  <p className="text-sm text-destructive">
                    {signupForm.formState.errors.email.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="••••••••"
                  {...signupForm.register('password')}
                />
                {signupForm.formState.errors.password && (
                  <p className="text-sm text-destructive">
                    {signupForm.formState.errors.password.message}
                  </p>
                )}
              </div>
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  {...signupForm.register('acceptTerms')}
                  className="mt-1 rounded border-input text-accent focus:ring-ring"
                />
                <span className="text-sm text-muted-foreground">
                  I accept the <Link to="/terms" className="text-accent hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-accent hover:underline">Privacy Policy</Link>.
                </span>
              </label>
              {signupForm.formState.errors.acceptTerms && (
                <p className="text-sm text-destructive">
                  {signupForm.formState.errors.acceptTerms.message}
                </p>
              )}
              <Button type="submit" className="w-full">
                Create account
              </Button>
              {signupForm.watch('role') === 'seller' && (
                <p className="text-center text-sm text-muted-foreground">
                  <Link to="/onboarding/seller" className="text-accent hover:underline">
                    Seller onboarding →
                  </Link>
                </p>
              )}
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

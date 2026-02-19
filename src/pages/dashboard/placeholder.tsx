import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

type Props = { title: string; description?: string }

export function PlaceholderPage({ title, description = 'This section is a placeholder for the full feature.' }: Props) {
  return (
    <div className="space-y-6 animate-in fade-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">{title}</h1>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      <Button asChild variant="outline">
        <Link to="..">Back to overview</Link>
      </Button>
    </div>
  )
}

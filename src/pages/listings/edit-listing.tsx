import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function EditListingPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  return (
    <div className="mx-auto max-w-2xl py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Edit listing</h1>
        <p className="text-muted-foreground">Prefilled schema-driven form, version history, publish controls.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Listing #{id}</CardTitle>
          <CardDescription>Update fields and publish. Version history and rollback in full implementation.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Title</Label>
            <Input placeholder="Listing title" defaultValue="" />
          </div>
          <div className="space-y-2">
            <Label>Price</Label>
            <Input type="number" placeholder="0.00" />
          </div>
          <div className="flex justify-between pt-4">
            <Button variant="outline" onClick={() => navigate(-1)}>Cancel</Button>
            <Button onClick={() => navigate('/dashboard/seller/listings')}>Save changes</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

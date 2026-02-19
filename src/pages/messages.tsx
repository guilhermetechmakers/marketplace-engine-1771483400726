import { useState } from 'react'
import { MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function MessagesPage() {
  const [selected, setSelected] = useState<string | null>(null)
  const threads: Array<{ id: string; preview: string; unread: boolean }> = []

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <div className="w-full max-w-sm border-r border-border flex flex-col bg-card">
        <div className="border-b border-border p-4">
          <h2 className="font-semibold text-foreground">Inbox</h2>
          <p className="text-sm text-muted-foreground">Threads tied to listings/orders.</p>
        </div>
        <div className="flex-1 overflow-auto">
          {threads.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <MessageSquare className="h-12 w-12 text-muted-foreground" />
              <p className="mt-4 text-sm text-muted-foreground">No conversations yet.</p>
            </div>
          ) : (
            threads.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setSelected(t.id)}
                className={`w-full border-b border-border px-4 py-3 text-left transition-colors hover:bg-secondary ${
                  selected === t.id ? 'bg-primary' : ''
                }`}
              >
                <p className="truncate text-sm font-medium">{t.preview}</p>
                {t.unread && <span className="text-xs text-accent">New</span>}
              </button>
            ))
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-background">
        {selected ? (
          <>
            <div className="flex-1 overflow-auto p-4">
              <p className="text-sm text-muted-foreground">Thread messages here. Composer with attachments.</p>
            </div>
            <div className="border-t border-border p-4">
              <div className="flex gap-2">
                <Input placeholder="Type a message..." className="flex-1" />
                <Button>Send</Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <MessageSquare className="h-16 w-16 text-muted-foreground" />
            <p className="mt-4 font-medium text-foreground">Select a conversation</p>
            <p className="text-sm text-muted-foreground">Or start one from a listing.</p>
          </div>
        )}
      </div>
    </div>
  )
}

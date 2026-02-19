/**
 * Email verification page and API types.
 * Used for verification token landing and status display.
 */

export interface EmailVerificationPageRecord {
  id: string
  user_id: string
  title: string
  description?: string
  status: string
  created_at: string
  updated_at: string
}

export type VerificationStatus = 'success' | 'failure' | 'pending'

export interface ResendVerificationResponse {
  success: boolean
  message?: string
}

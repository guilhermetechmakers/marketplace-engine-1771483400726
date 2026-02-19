import { api } from '@/lib/api'
import type { ResendVerificationResponse } from '@/types/email-verification'

export const authApi = {
  /**
   * Request a new verification email. Server-side logic (e.g. Edge Function)
   * should validate the user and send the email.
   */
  resendVerification: async (email: string): Promise<ResendVerificationResponse> =>
    api.post<ResendVerificationResponse>('/auth/resend-verification', { email }),
}

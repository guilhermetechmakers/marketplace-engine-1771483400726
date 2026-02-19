const API_BASE = import.meta.env.VITE_API_URL ?? '/api'

export type ApiError = {
  message: string
  code?: string
  status?: number
}

async function handleResponse<T>(res: Response): Promise<T> {
  const contentType = res.headers.get('content-type')
  const isJson = contentType?.includes('application/json')

  if (!res.ok) {
    const error: ApiError = {
      message: res.statusText,
      status: res.status,
    }
    if (isJson) {
      try {
        const data = (await res.json()) as { message?: string; error?: string }
        error.message = data.message ?? data.error ?? error.message
      } catch {
        // use default
      }
    }
    throw error
  }

  if (res.status === 204 || !isJson) {
    return undefined as T
  }

  return res.json() as Promise<T>
}

function getHeaders(): HeadersInit {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  }
  const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null
  if (token) {
    (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`
  }
  return headers
}

export const api = {
  get<T>(path: string, options?: RequestInit): Promise<T> {
    return fetch(`${API_BASE}${path}`, {
      ...options,
      method: 'GET',
      headers: getHeaders(),
    }).then(handleResponse<T>)
  },

  post<T>(path: string, body?: unknown, options?: RequestInit): Promise<T> {
    return fetch(`${API_BASE}${path}`, {
      ...options,
      method: 'POST',
      headers: getHeaders(),
      body: body !== undefined ? JSON.stringify(body) : undefined,
    }).then(handleResponse<T>)
  },

  put<T>(path: string, body?: unknown, options?: RequestInit): Promise<T> {
    return fetch(`${API_BASE}${path}`, {
      ...options,
      method: 'PUT',
      headers: getHeaders(),
      body: body !== undefined ? JSON.stringify(body) : undefined,
    }).then(handleResponse<T>)
  },

  patch<T>(path: string, body?: unknown, options?: RequestInit): Promise<T> {
    return fetch(`${API_BASE}${path}`, {
      ...options,
      method: 'PATCH',
      headers: getHeaders(),
      body: body !== undefined ? JSON.stringify(body) : undefined,
    }).then(handleResponse<T>)
  },

  delete<T>(path: string, options?: RequestInit): Promise<T> {
    return fetch(`${API_BASE}${path}`, {
      ...options,
      method: 'DELETE',
      headers: getHeaders(),
    }).then(handleResponse<T>)
  },
}

"use client"

import { useState } from 'react'
import { supabase } from '@/utils/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const router = useRouter()
    const { signIn } = useAuth()
  
    const handleSignIn = async (e) => {
      e.preventDefault()
      setLoading(true)
      setError(null)
  
      try {
        await signIn(email, password)
        router.push('/dashboard')
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

  return (
    <main className="flex-grow py-36">
        <div className="flex items-center justify-center">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
            <div>
            <h2 className="text-center text-3xl font-bold">Sign in to FitFocus</h2>
            </div>
            <form onSubmit={handleSignIn} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm flex flex-col gap-4 -space-y-px">
                <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered w-full"
                required
                />
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full mt-4"
                required
                />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button 
                type="submit" 
                className="btn btn-primary w-full"
                disabled={loading}
            >
                {loading ? 'Signing in...' : 'Sign in'}
            </button>
            </form>
            <div className="text-center mt-4">
                <p className="text-sm text-gray-600">
                    Don&apos;t have an account?{' '}
                    <Link href="/sign-up" className="text-primary hover:text-primary-focus">
                    Sign up
                    </Link>
                </p>
            </div>
        </div>
        </div>
    </main>
  )
}
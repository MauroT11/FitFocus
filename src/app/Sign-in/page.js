"use client"

import { useState } from 'react'
import { supabase } from '@/utils/supabase'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
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
        const { data, error } = await signIn(email, password)
        if (error) throw error
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
                <div className="rounded-md shadow-sm flex flex-col gap-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email address
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input input-bordered w-full"
                            required
                            aria-describedby="email-required"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input input-bordered w-full"
                            required
                            aria-describedby="password-required"
                        />
                    </div>
                </div>
                {error && (
                    <div className="text-red-500 text-sm" role="alert" id="signin-error">
                        {error}
                    </div>
                )}
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
"use client"

import { useState } from 'react'
import { supabase } from '@/utils/supabase'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignUp() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const router = useRouter()

  const handleSignUp = async (e) => {
    e.preventDefault()
    
    if (password !== confirmPassword) {
      setError("Passwords don't match")
      return
    }

    try {
      setLoading(true)
      setError(null)

      // Sign up the user
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                display_name: name // Add name to user metadata
            },
            emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) throw error

      // Create a profile entry in your database
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([
          {
            user_id: authData.user.id,
            display_name: name,
            email: email
          }
        ])

      if (profileError) throw profileError

      // Successfully signed up
      router.push('/dashboard')
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex-grow py-28">
        <div className="flex items-center justify-center">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
            <div>
            <h2 className="text-center text-3xl font-bold">Create your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
                Already have an account?{' '}
                <Link href="/Sign-in" className="text-primary hover:text-primary-focus">
                Sign in
                </Link>
            </p>
            </div>

            <form onSubmit={handleSignUp} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm space-y-4">
                <div>
                    <label htmlFor="name" className="sr-only">
                    Full Name
                    </label>
                    <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input input-bordered w-full"
                    placeholder="Full Name"
                    />
                </div>
                <div>
                <label htmlFor="email" className="sr-only">
                    Email address
                </label>
                <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input input-bordered w-full"
                    placeholder="Email address"
                />
                </div>
                <div>
                <label htmlFor="password" className="sr-only">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input input-bordered w-full"
                    placeholder="Password"
                    minLength={6}
                />
                </div>
                <div>
                <label htmlFor="confirm-password" className="sr-only">
                    Confirm Password
                </label>
                <input
                    id="confirm-password"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="input input-bordered w-full"
                    placeholder="Confirm Password"
                    minLength={6}
                />
                </div>
            </div>

            {error && (
                <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={loading}
            >
                {loading ? (
                <span className="loading loading-spinner"></span>
                ) : (
                'Sign up'
                )}
            </button>
            </form>
        </div>
        </div>
    </main>
  )
}
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
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input input-bordered w-full"
                        placeholder="Enter your full name"
                        aria-describedby="name-required"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email address
                    </label>
                    <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input input-bordered w-full"
                        placeholder="Enter your email address"
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
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input input-bordered w-full"
                        placeholder="Create a password"
                        minLength={6}
                        aria-describedby="password-requirements"
                    />
                    <p id="password-requirements" className="text-xs text-gray-500 mt-1">
                        Password must be at least 6 characters long
                    </p>
                </div>
                <div>
                    <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm Password
                    </label>
                    <input
                        id="confirm-password"
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="input input-bordered w-full"
                        placeholder="Confirm your password"
                        minLength={6}
                        aria-describedby="confirm-password-requirements"
                    />
                </div>
            </div>

            {error && (
                <div className="text-red-500 text-sm text-center" role="alert" id="signup-error">
                    {error}
                </div>
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
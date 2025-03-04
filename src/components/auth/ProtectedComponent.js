import { useAuth } from '@/context/AuthContext'

export default function ProtectedComponent({ children }) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h2 className="text-2xl font-bold">Access Denied</h2>
        <p>Please sign in to view this content</p>
        <a href="/signin" className="btn btn-primary">Sign In</a>
      </div>
    )
  }

  return <>{children}</>
}
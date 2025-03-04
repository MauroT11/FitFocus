"use client"

import { useEffect, useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { supabase } from '@/utils/supabase'
import ProtectedComponent from '@/components/auth/ProtectedComponent'
import Link from 'next/link'

export default function Dashboard() {
  const { user } = useAuth()
  const [bmiData, setBmiData] = useState([])
  const [proteinData, setProteinData] = useState([])
  const [calorieData, setCalorieData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch latest BMI calculation
        const { data: bmiData, error: bmiError } = await supabase
          .from('bmitracking')
          .select('*')
          .eq('username', user?.username)
          .order('timestamp', { ascending: false })
          .limit(1)

        if (bmiError) throw bmiError
        setBmiData(bmiData)

        // Fetch latest protein calculation
        const { data: proteinData, error: proteinError } = await supabase
          .from('proteintracking')
          .select('*')
          .eq('username', user?.username)
          .order('timestamp', { ascending: false })
          .limit(1)

        if (proteinError) throw proteinError
        setProteinData(proteinData)

        // Fetch latest calorie calculation
        const { data: calorieData, error: calorieError } = await supabase
          .from('calorietracking')
          .select('*')
          .eq('username', user?.username)
          .order('timestamp', { ascending: false })
          .limit(1)

        if (calorieError) throw calorieError
        setCalorieData(calorieData)

      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    if (user) {
      fetchUserData()
    }
  }, [user])

  return (
    <ProtectedComponent>
      <main className="flex-grow py-36 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Welcome, {user?.email}</h1>
          
          {loading ? (
            <div className="flex justify-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* BMI Card */}
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Latest BMI</h2>
                  {bmiData.length > 0 ? (
                    <p className="text-2xl font-bold">{bmiData[0].bmi}</p>
                  ) : (
                    <p>No BMI data available</p>
                  )}
                  <Link href="/calculators/bmi" className="btn btn-primary mt-4">
                    Calculate BMI
                  </Link>
                </div>
              </div>

              {/* Protein Card */}
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Daily Protein Intake</h2>
                  {proteinData.length > 0 ? (
                    <p className="text-2xl font-bold">{proteinData[0].protein}g</p>
                  ) : (
                    <p>No protein data available</p>
                  )}
                  <Link href="/calculators/protein" className="btn btn-primary mt-4">
                    Calculate Protein
                  </Link>
                </div>
              </div>

              {/* Calories Card */}
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">Daily Calorie Intake</h2>
                  {calorieData.length > 0 ? (
                    <p className="text-2xl font-bold">{calorieData[0].calories} kcal</p>
                  ) : (
                    <p>No calorie data available</p>
                  )}
                  <Link href="/calculators/calorie" className="btn btn-primary mt-4">
                    Calculate Calories
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Quick Links */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/calculations" className="btn btn-secondary">
                Calculations
              </Link>
              <Link href="/workouts" className="btn btn-secondary">
                Workouts
              </Link>
              <Link href="/fittracking" className="btn btn-secondary">
                Tracking History
              </Link>
            </div>
          </div>
        </div>
      </main>
    </ProtectedComponent>
  )
}
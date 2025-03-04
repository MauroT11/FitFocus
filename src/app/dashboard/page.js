"use client"

import { useEffect, useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { supabase } from '@/utils/supabase'
import ProtectedComponent from '@/components/auth/ProtectedComponent'
import Link from 'next/link'
import BMIChart from '@/components/charts/BMIChart'
import ProteinChart from '@/components/charts/ProteinChart'
import CalorieChart from '@/components/charts/CalorieChart'

export default function Dashboard() {
  
  const { user } = useAuth()
  const [bmiData, setBmiData] = useState([])
  const [proteinData, setProteinData] = useState([])
  const [calorieData, setCalorieData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) return

    const fetchUserData = async () => {
      try {
        // Fetch latest BMI calculation
        const { data: bmiData, error: bmiError } = await supabase
          .from('bmitracking')
          .select('*')
          .eq('user_id', user?.id)
          .order('timestamp', { ascending: false })
          // console.log(bmiData)
        //   .limit(1)

        if (bmiError) throw bmiError
        setBmiData(bmiData)

        // Fetch latest protein calculation
        const { data: proteinData, error: proteinError } = await supabase
          .from('proteintracking')
          .select('*')
          .eq('user_id', user?.id)
          .order('timestamp', { ascending: false })
          // console.log(proteinData)
        //   .limit(1)

        if (proteinError) throw proteinError
        setProteinData(proteinData)

        // Fetch latest calorie calculation
        const { data: calorieData, error: calorieError } = await supabase
          .from('dailyIntake')
          .select('*')
          .eq('user_id', user?.id)
          .order('timestamp', { ascending: false })
            // console.log(calorieData)
        //   .limit(1)

        if (calorieError) throw calorieError
        setCalorieData(calorieData)

      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchUserData()
  }, [user])

  if (!user) return null

  return (
    <ProtectedComponent>
      <main className="flex-grow py-12 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl text-center font-bold mb-8">Hi, {user?.user_metadata.display_name}!</h1>
          
          {loading ? (
            <div className="flex justify-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* BMI Card */}
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body text-center">
                    <h2 className="card-title text-center">Latest BMI</h2>
                    {bmiData.length > 0 ? (
                      <>
                        <p className="text-2xl">{bmiData[0].bmi}</p>
                        <p>{bmiData[0].category}</p>
                      </>
                      
                    ) : (
                      <p>No BMI data available</p>
                    )}
                    <Link href="/calculators/bmi" className="btn btn-primary hover:bg-secondary text-lg tracking-wider">
                      Calculate BMI
                    </Link>
                  </div>
                </div>

                {/* Protein Card */}
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body text-center">
                    <h2 className="card-title">Daily Protein Intake</h2>
                    {proteinData.length > 0 ? (
                      <p className="text-2xl mt-4">{proteinData[0].proteinIntake} g</p>
                    ) : (
                      <p>No protein data available</p>
                    )}
                    <Link href="/calculators/protein" className="btn btn-primary hover:bg-secondary text-lg tracking-wider">
                      Calculate Protein
                    </Link>
                  </div>
                </div>

                {/* Calories Card */}
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body text-center">
                    <h2 className="card-title">Daily Calorie Intake</h2>
                    {calorieData.length > 0 ? (
                      <p className="text-2xl mt-4">{calorieData[0].calories} kcal</p>
                    ) : (
                      <p>No calorie data available</p>
                    )}
                    <Link href="/calculators/calorie" className="btn btn-primary hover:bg-secondary text-lg tracking-wider">
                      Calculate Calories
                    </Link>
                  </div>
                </div>
              </div>

              {/* Charts Section */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card bg-base-100 shadow-xl p-6">
                  <h2 className="card-title mb-4">BMI History</h2>
                  {bmiData.length > 0 ? (
                    <div className="w-full">
                      <BMIChart data={bmiData.toReversed()} />
                    </div>
                  ) : (
                    <p>No BMI history available</p>
                  )}
                </div>

                <div className="card bg-base-100 shadow-xl p-6">
                  <h2 className="card-title mb-4">Daily Protein Intake History</h2>
                  {proteinData.length > 0 ? (
                    <div className="w-full">
                      <ProteinChart data={proteinData.toReversed()} />
                    </div>
                  ) : (
                    <p>No protein intake history available</p>
                  )}
                </div>

                <div className="card bg-base-100 shadow-xl p-6">
                  <h2 className="card-title mb-4">Daily Calorie Intake History</h2>
                  {calorieData.length > 0 ? (
                    <div className="w-full">
                      <CalorieChart data={calorieData.toReversed()} />
                    </div>
                  ) : (
                    <p>No calorie intake history available</p>
                  )}
                </div>
              </div>

            </>
          )}
        </div>
      </main>
    </ProtectedComponent>
  )
}
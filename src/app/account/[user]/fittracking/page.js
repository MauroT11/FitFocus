"use client"

import React, { useEffect, useState } from 'react';
import BMITracking from '@/components/trackingTables/BMI';
import DailyTracking from '@/components/trackingTables/Daily';
import ProteinTracking from '@/components/trackingTables/Protein';
import { createClient } from "@supabase/supabase-js";

export default function Page({params}) {

    const [BMI, setBMI] = useState([])
    const [Protein, setProtein] = useState([])
    const [Daily, setDaily] = useState([])


    useEffect(() => {
    
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
        const supabase = createClient(supabaseUrl, supabaseAnonKey);
            
        const fetchBMI = async () => {
        
            const { data: bmi, error } = await supabase
                .from("bmitracking")
                .select("*")
                .eq("username", params.user)
        
              if (error) {
                console.error("Error fetching workouts:", error);
              } else {
                setBMI(bmi);
              }
        };

        const fetchProtein = async () => {
        
            const { data: protein, error } = await supabase
                .from("proteintracking")
                .select("*")
                .eq("username", params.user)
        
              if (error) {
                console.error("Error fetching workouts:", error);
              } else {
                setProtein(protein);
              }
        };

        const fetchDaily = async () => {
        
            const { data: daily, error } = await supabase
                .from("dailyIntake")
                .select("*")
                .eq("username", params.user)
        
              if (error) {
                console.error("Error fetching workouts:", error);
              } else {
                setDaily(daily);
              }
        };
        
        fetchBMI();
        fetchProtein();
        fetchDaily();
    }, []);

    return (
        <div>
            <div className="min-h-[10rem] lg:min-h-[20rem] relative bg-cover bg-center min-w-full items-center flex flex-col  justify-center text-white " style={{ backgroundImage: "url('/images/fittracking.jpg')" }}>
                <h1 className="text-4xl lg:text-8xl font-bold tracking-wider text-shadow-header">FitTracking</h1>
            </div>
            <div className="flex flex-col gap-4 lg:px-0 py-4 items-center text-center ">
                <h2 className="text-2xl font-bold">Why should you keep track of your biometrics?</h2>
                <p className="max-w-[70rem] px-2 text-sm lg:text-lg">Keeping track of your biometrics is crucial for maintaining overall health and wellness, as it provides valuable insights into your body's unique patterns and changes. Regular biometric monitoring can help detect early signs of potential health issues, allowing for timely intervention and better management of your well-being.</p>
            </div>
            <div className="flex flex-col gap-8 items-center py-8">
                <div className="stats stats-vertical lg:stats-horizontal shadow">
                    <div className="stat">
                        <div className="stat-title">Downloads</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">New Users</div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 px-8 py-8 gap-4">
                    <BMITracking BMI={BMI}/>
     
                    <DailyTracking Daily={Daily} />
                    <ProteinTracking Protein={Protein} />
            </div>
        </div>
    );
}
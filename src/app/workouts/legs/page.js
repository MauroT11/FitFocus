"use client"

import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Cards from "@/components/workouts/cards"

export default function page() {

    const muscle = "legs";

    const [workouts, setWorkouts] = useState([])

    useEffect(() => {

        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
          const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
    
          const supabase = createClient(supabaseUrl, supabaseAnonKey);
        
        const fetchWorkout = async () => {
    
          const { data: workouts, error } = await supabase
            .from("exercises")
            .select("*")
            .eq("muscle_group_id", 3)
    
          if (error) {
            console.error("Error fetching workouts:", error);
          } else {
            // console.log(workouts)
            setWorkouts(workouts);
          }
        };

        fetchWorkout();
      }, []);

    return(
        <div>
            <div className="min-h-[20rem] relative bg-cover bg-center min-w-full items-center flex flex-col  justify-center text-white " style={{ backgroundImage: "url('/images/legs.jpg')" }}>
                <h1 className="text-8xl font-bold tracking-wider text-shadow-header">Legs Workouts</h1>
            </div>
            <div className="flex flex-col py-4 items-center text-center ">
                <h2 className="text-2xl font-bold">Why train your core muscles?</h2>
                <p className="max-w-[70rem] text-lg">Training your leg muscles is essential for overall strength and balance. Strong legs support your body in virtually every physical activity, from walking and running to lifting and jumping. They help improve your posture and reduce the risk of injuries, particularly in your lower back and knees. Plus, working out your legs boosts your metabolism, leading to more efficient calorie burning.</p>
            </div>
            <div className="flex flex-col gap-8 items-center py-8">
                <div className="flex flex-col">
                    <div className="max-w-[100%] px-12">
                        {workouts.length > 0 ? (
                            <Cards workouts={workouts} muscle={muscle} />
                        ) : (
                            <span className="loading loading-spinner loading-lg"></span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
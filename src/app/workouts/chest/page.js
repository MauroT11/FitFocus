"use client"

import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Cards from "@/components/workouts/cards"

export default function page() {

    const [workouts, setWorkouts] = useState([])
    const [instructions, setInstructions] = useState([])

    useEffect(() => {

        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
          const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
    
          const supabase = createClient(supabaseUrl, supabaseAnonKey);
        
        const fetchWorkout = async () => {
    
          const { data: workouts, error } = await supabase
            .from("exercises")
            .select("*")
            .eq("muscle_group_id", 1)
    
          if (error) {
            console.error("Error fetching workouts:", error);
          } else {
            // console.log(workouts)
            setWorkouts(workouts);
          }
        };

        const fetchInstructions = async () => {
    
            const { data: instructions, error } = await supabase
                .from("exercise_instructions")
                .select("*")
                .in("exercise_id", [50, 51, 52, 53, 54, 55])
                
    
            if (error) {
                console.error("Error fetching workouts:", error);
            } else {
                console.log(instructions)
                setInstructions(instructions);
            }
        }
    
        fetchWorkout();
        fetchInstructions();
      }, []);

    return(
        <div>
            <div className="min-h-[20rem] relative bg-cover bg-center min-w-full items-center flex flex-col  justify-center text-white " style={{ backgroundImage: "url('/images/chest banner.jpg')" }}>
                <h1 className="text-8xl font-bold tracking-wider text-shadow-header">Chest Workouts</h1>
            </div>
            <div className="flex flex-col py-4 items-center text-center ">
                <h2 className="text-2xl font-bold">Why train your chest muscles?</h2>
                <p className="max-w-[70rem] text-lg">Training chest muscles is about more than just aesthetics. Strong chest muscles improve overall upper body strength, crucial for pushing movements and functional tasks. They stabilize the shoulder joint, reducing injury risk, and contribute to better posture.</p>
            </div>
            <div className="flex flex-col gap-8 items-center py-8">
                <div className="flex flex-col">
                    <div className="max-w-[100%] px-12">
                        {workouts.length > 0 ? (
                            <Cards workouts={workouts} instructions={instructions} />
                        ) : (
                            <span className="loading loading-spinner loading-lg"></span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
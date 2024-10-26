"use client"

import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

export default function page({params}) {

    const [workout, setWorkout] = useState([])
    const [instructions, setInstructions] = useState([])

    useEffect(() => {

        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
          const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
    
          const supabase = createClient(supabaseUrl, supabaseAnonKey);
        
        const fetchWorkout = async () => {
    
          const { data: workout, error } = await supabase
            .from("exercises")
            .select("*")
            .eq("id", params.id)
    
          if (error) {
            console.error("Error fetching workouts:", error);
          } else {
            // console.log(workouts)
            setWorkout(workout[0]);
          }
        };

        const fetchInstructions = async () => {
    
            const { data: instructions, error } = await supabase
                .from("exercise_instructions")
                .select("*")
                .eq("exercise_id", params.id)
                
    
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

    return (
        <div>
            <div className="min-h-[20rem] relative bg-cover bg-center min-w-full items-center flex flex-col  justify-center text-white " style={{ backgroundImage: "url('/images/back banner.jpg')" }}>
                <h1 className="text-8xl font-bold tracking-wider text-shadow-header">{workout.name}</h1>
            </div>
            <div className="flex flex-col gap-8 items-center py-8">
                <h1 className="text-lg">{workout.description}</h1>
                <div className="grid grid-cols-2 gap-20">
                    <div className="skeleton h-80 w-80"></div>
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="text-2xl font-bold">Exerside Instructions</h3>
                            {instructions.length == 2 ? (
                                    <ul className="steps steps-vertical text-lg">
                                        <li className="step">{instructions[0].instruction}</li>
                                        <li className="step">{instructions[1].instruction}</li>
                                    </ul>
                            ) : instructions.length == 3 ? (
                                    <ul className="steps steps-vertical text-lg">
                                        <li className="step">{instructions[0].instruction}</li>
                                        <li className="step">{instructions[1].instruction}</li>
                                        <li className="step">{instructions[2].instruction}</li>
                                    </ul>
                            ) : instructions.length == 4 ? (
                                <ul className="steps steps-vertical text-lg">
                                        <li className="step">{instructions[0].instruction}</li>
                                        <li className="step">{instructions[1].instruction}</li>
                                        <li className="step">{instructions[2].instruction}</li>
                                        <li className="step">{instructions[3].instruction}</li>
                                    </ul>
                            ) : (
                                <></>
                            )}
                    </div>
                </div>
            </div>
        </div>
    )
}
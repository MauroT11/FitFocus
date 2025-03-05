"use client"

import React, { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";
import Cards from "@/components/workouts/Cards"
import Image from "next/image";

export default function Page() {

    const muscle = "back";

    const [workouts, setWorkouts] = useState([])

    useEffect(() => {
        
        const fetchWorkout = async () => {
    
          const { data: workouts, error } = await supabase
            .from("exercises")
            .select("*")
            .eq("muscle_group_id", "2")
    
          if (error) {
            console.error("Error fetching workouts:", error);
          } else {
            console.log(workouts)
            setWorkouts(workouts);
          }
        };
    
        fetchWorkout();
      }, []);

    return(
        <div>
            <div className="min-h-[10rem] lg:min-h-[20rem] relative min-w-full items-center flex flex-col justify-center text-white">
                            <Image
                                src="/images/back banner.jpg"
                                fill
                                priority
                                sizes="100vw"
                                alt="Arm Workouts Banner"
                                className="object-cover z-[-1]"
                                quality={40}
                            />
                            <h1 className="text-4xl lg:text-8xl font-bold tracking-wider text-shadow-header z-10">Back Workouts</h1>
                        </div>
            <div className="py-8">
                <div className="flex flex-col gap-4 lg:px-0 py-4 items-center text-center ">
                    <h2 className="text-2xl font-bold">Why train your back muscles?</h2>
                    <p className="max-w-[70rem] px-2 text-sm lg:text-lg">Training back muscles is essential for a balanced, strong physique. It improves posture, reducing the risk of back pain and injuries. A strong back supports overall movement and stability, enhancing performance in other exercises and daily activities.</p>
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
        </div>
    )
}
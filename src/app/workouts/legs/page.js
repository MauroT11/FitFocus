"use client"

import React, { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";
import Cards from "@/components/workouts/Cards"
import Image from "next/image";

export default function Page() {

    const muscle = "legs";

    const [workouts, setWorkouts] = useState([])

    useEffect(() => {
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
            <div className="min-h-[10rem] lg:min-h-[20rem] relative min-w-full items-center flex flex-col justify-center text-white">
                            <Image
                                src="/images/legs.jpg"
                                fill
                                priority
                                sizes="100vw"
                                alt="Arm Workouts Banner"
                                className="object-cover z-[-1]"
                                quality={40}
                            />
                            <h1 className="text-4xl lg:text-8xl font-bold tracking-wider text-shadow-header z-10">Leg Workouts</h1>
                        </div>
            <div className="py-8">
                <div className="flex flex-col gap-4 lg:px- py-4 items-center text-center ">
                    <h2 className="text-2xl font-bold">Why train your leg muscles?</h2>
                    <p className="max-w-[70rem] px-2 lg:text-lg">Training your leg muscles is essential for overall strength and balance. Strong legs support your body in virtually every physical activity, from walking and running to lifting and jumping. They help improve your posture and reduce the risk of injuries, particularly in your lower back and knees.</p>
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
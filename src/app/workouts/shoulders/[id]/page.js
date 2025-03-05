"use client"

import React, { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";
import Image from "next/image";
import ExerciseInfo from "@/components/workouts/ExerciseInfo"

export default function Page({params}) {

    const [workout, setWorkout] = useState([])
    const [instructions, setInstructions] = useState([])
    // const [exercise_equipment, setExercise_equipment] = useState([])
    const [equipment, setEquipment] = useState([])

    useEffect(() => {

        const fetchWorkout = async () => {
          const { data: workout, error } = await supabase
            .from("exercises")
            .select("*")
            .eq("slug", params.id)
    
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
                .eq("exercise_id", workout?.id)
            if (error) {
                console.error("Error fetching workouts:", error);
            } else {
                // console.log(instructions)
                setInstructions(instructions);
            }
        }

        const fetchExerEquipment = async () => {
          const { data: exerEquip, error } = await supabase
              .from("exercise_equipment")
              .select("equipment_id(name)")
              .eq("exercise_id", workout?.id)
          if (error) {
              console.error("Error fetching workouts:", error);
          } else {
              console.log(exerEquip)
              setEquipment(exerEquip)
          }
        }

        fetchWorkout();
        fetchInstructions();
        fetchExerEquipment();
      }, [params.id, workout?.id]);

    return (
        <div>
            <div className="min-h-[10rem] lg:min-h-[20rem] relative min-w-full items-center flex flex-col justify-center text-white">
                                <Image
                                    src="/images/Shoulders.jpg"
                                    fill
                                    priority
                                    sizes="100vw"
                                    alt="Arm Workouts Banner"
                                    className="object-cover z-[-1]"
                                    quality={40}
                                />
                            <h1 className="text-4xl lg:text-8xl font-bold tracking-wider text-shadow-header z-10">{workout.name}</h1>
                        </div>
            <div className="flex flex-col text-center lg:gap-16 items-center py-8">
                <h1 className="text-lg lg:text-2xl">{workout.description}</h1>
                <ExerciseInfo image={workout.image_url} instructions={instructions} />
                <h2 className="text-lg lg:text-2xl">Equipment Required:</h2>
                <div>
                    {equipment.map((equip) => (
                        <p key={equip.equipment_id.name}>{equip.equipment_id.name}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}
"use client"

import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import ExerciseInfo from "@/components/workouts/ExerciseInfo"

export default function Page({params}) {

    const [workout, setWorkout] = useState([])
    const [instructions, setInstructions] = useState([])
    const [equipment, setEquipment] = useState([])

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
        const fetchEquipment = async () => {
          const { data: exerEquip, error } = await supabase
              .from("exercise_equipment")
              .select("equipment_id(name)")
              .eq("exercise_id", params.id)
          if (error) {
              console.error("Error fetching workouts:", error);
          } else {
              console.log(exerEquip)
              setEquipment(exerEquip)
          }
        }
    
        fetchWorkout();
        fetchInstructions();
        fetchEquipment();
      }, []);

    return (
        <div>
            <div className="min-h-[10rem] lg:min-h-[20rem] relative bg-cover bg-center min-w-full items-center flex flex-col  justify-center text-white " style={{ backgroundImage: "url('/images/core.jpg')" }}>
                <h1 className="text-4xl lg:text-8xl font-bold tracking-wider text-shadow-header">{workout.name}</h1>
            </div>
            <div className="flex flex-col text-center gap-8 items-center py-8">
                <h1 className="text-lg">{workout.description}</h1>
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
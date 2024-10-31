"use client"

import { useEffect, useState } from "react";
import { GiBodyHeight } from "react-icons/gi";
import { FaWeightScale } from "react-icons/fa6";
import { BsCalculatorFill } from "react-icons/bs";
import DailyCal from "@/components/calculations/DailyCal"
import Image from "next/image";
import chart from "/public/images/bmi-chart.gif"

export default function page() {

    return (
        <div className="flex flex-col">
            <div className="min-h-[10rem] lg:min-h-[15rem] relative bg-cover bg-center min-w-full items-center flex flex-col  justify-center text-white " style={{ backgroundImage: "url('/images/yellowtape.jpg')" }}>
                <h1 className="text-4xl lg:text-8xl font-bold tracking-wider text-shadow-header">Daily Calorie Intake</h1>
            </div>
            <div className="flex flex-col text-center gap-4 my-8 items-center">
                <p className="lg:text-lg max-w-[1000px]">The Calorie Calculator can be used to estimate the number of calories a person needs to consume each day. This calculator can also provide some simple guidelines for gaining or losing weight.</p>
                <div className="flex items-center gap-16">
                <DailyCal />
                
               </div> 
            </div>
        </div>
    )
}
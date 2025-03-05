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
            <div className="lg:min-h-[15rem] min-h-[10rem] relative min-w-full items-center flex flex-col justify-center text-white" id="pageHeader">
                              <Image
                                src="/images/yellowtape.jpg"
                                fill
                                priority
                                sizes="100vw"
                                alt="FitFocus Banner"
                                className="object-cover z-[-1]"
                                quality={80}
                              />
                              <h1 className="text-5xl text-center font-bold tracking-wider text-shadow-header lg:text-8xl z-10">Daily Calorie Intake</h1>
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
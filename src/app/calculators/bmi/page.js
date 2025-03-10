"use client"

import { useEffect, useState } from "react";
import { GiBodyHeight } from "react-icons/gi";
import { FaWeightScale } from "react-icons/fa6";
import { BsCalculatorFill } from "react-icons/bs";
import BMICalculator from "@/components/calculations/BMI"
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
                  <h1 className="text-5xl text-center font-bold tracking-wider text-shadow-header lg:text-8xl z-10">Body Mass Index</h1>
            </div>
            <div className="flex flex-col text-center gap-8 my-8 items-center">
                <p className="px-4 lg:px-0 lg:text-lg lg:max-w-[1000px]">Body Mass Index (BMI) is a measurement of a person&apos;s leanness or corpulence based on their height and weight, and is intended to quantify tissue mass. It is widely used as a general indicator of whether a person has a healthy body weight for their height.</p>
                <div className="flex flex-col items-center gap-16">
                    <div className="border-4 rounded-lg py-8 px-4">
                        <BMICalculator />
                    </div>
                    <div className="flex flex-col px-8 gap-2">
                        <p className="text-2xl lg:text-4xl">BMI Chart</p>
                        <Image src={chart} width={500} height={600} alt="Photo of Scale" className="rounded-2xl" />
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}
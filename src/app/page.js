import Image from "next/image";
import { GiMeal } from "react-icons/gi";
import { FaDumbbell } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div className="min-h-[30rem] relative bg-cover bg-center min-w-full items-center flex flex-col justify-center text-white" style={{ backgroundImage: "url('/images/homeBanner.jpg')" }}>
        <h1 className="text-9xl font-bold tracking-wider ">FitFocus</h1>
        <h3 className="text-3xl mb-56">You Fitness, Your Focus.</h3>
      </div>
      <section id="whatIs" className="flex flex-col items-center gap-8 my-16">
        <div className="flex flex-col items-center"> 
          <h2 className="text-5xl">What is <b>FitFocus</b>?</h2>
          <div className=" w-3/5 flex flex-col items-center py-4 px-16">
            <p className="text-2xl text-center"><b>FitFocus</b> seamlessly integrates all your fitness information in one place, empowering you to achieve a healthier, more balanced lifestyle.</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-36 ">
          <div className="flex flex-col items-center">
            <GiMeal className="text-8xl" />
            <h3 className="text-3xl">Macros</h3>
            <p className="max-w-[30rem]">Find out your BMI and recommended Macronutrients.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaDumbbell className="text-8xl" />
            <h3 className="text-3xl">Workouts</h3>
            <p className="max-w-[30rem]">Find the workouts ideal for you.</p>
          </div>
          <div className="flex flex-col items-center">
            <IoBarChartSharp className="text-8xl" />
            <h3 className="text-3xl">Tracking</h3>
            <p className="max-w-[30rem]">Keep track of your Journey</p>
          </div>
        </div>
         
      </section>

      
      
    </div>
  );
}

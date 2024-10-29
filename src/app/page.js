import Image from "next/image";
import { GiMeal } from "react-icons/gi";
import { FaDumbbell } from "react-icons/fa";
import { BsCalculatorFill } from "react-icons/bs";
import Scale from "/public/images/scale.jpg"
import balanceFood from "/public/images/balFood.jpg"
import workout from "/public/images/workout.jpg"

export default function Home() {
  return (
    <div className="flex flex-col">
    
      <div className="min-h-[35rem] relative bg-cover bg-center min-w-full items-center flex flex-col justify-center text-white" style={{ backgroundImage: "url('/images/homeBanner.jpg')" }}>
          <h1 className="text-7xl font-bold tracking-wider text-shadow-header lg:text-9xl">FitFocus</h1>
          <h3 className="text-3xl text-shadow">You Fitness, Your Focus.</h3>
      </div>

      <section id="whatIs" className="flex flex-col items-center gap-20 py-24">
        <div className="flex flex-col items-center gap-4"> 
          <h2 className="text-3xl lg:text-5xl">What is <b>FitFocus</b>?</h2>
          <div className="lg:w-3/5 flex flex-col items-center px-16">
            <p className="text-lg lg:text-2xl text-center"><b>FitFocus</b> seamlessly integrates all your fitness information in one place, empowering you to achieve a healthier, more balanced lifestyle.</p>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-36 text-center">
          <div className="flex flex-col gap-2 items-center">
            <BsCalculatorFill className="text-8xl" />
            <h3 className="text-3xl font-bold">Calculations</h3>
            <p className="text-lg lg-text-md max-w-[25rem]">Find out your BMI, daily calorie requirements, body fat percentage and more with our calculators.</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <GiMeal className="text-8xl" />
            <h3 className="text-3xl font-bold">Macros</h3>
            <p className="text-lg lg-text-md max-w-[25rem]">Find out your recommended daily calorie intake and macronutrients.</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <FaDumbbell className="text-8xl" />
            <h3 className="text-3xl font-bold">Workouts</h3>
            <p className="text-lg lg-text-md max-w-[25rem]">Discover workouts for your gym sessions to target specific muscle groups.</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-8 bg-base-200 items-center py-24">
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-3xl lg:text-5xl">Why use <b>FitFocus?</b></h2>
          <p className="px-8 lg:px-0 lg:text-lg">No matter your fitness goals, our tools are here to help you achieve and surpass your goals!</p>
        </div>
        <div className="flex flex-col gap-16 px-4 lg-px-0 items-center text-center">
          <div className="flex flex-col-reverse gap-4 items-center lg:items-start lg:grid-cols-2 lg:grid">
            <Image src={Scale} width={600} height={300} alt="Photo of Scale" className="rounded-2xl lg:w-min-[600px]" />
            <div className="max-w-[40rem] justify-items-center flex flex-col gap-4">
              <h2 className="text-2xl lg:text-4xl font-bold">Find your metrics</h2>
              <p>Using our tools, users can easily find their BMI and perform various fitness calculations. By inputting basic information like height, weight, and activity level, our platform provides accurate metrics such as BMI, macronutrient needs, daily calorie requirements, and body fat percentage.</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center lg:items-start lg:grid-cols-2 lg:grid">
            <div className="max-w-[40rem] flex flex-col gap-4">
              <h2 className="text-2xl lg:text-4xl font-bold">Find your daily intake & macronutrients</h2>
              <p>Using our tools, you can effortlessly calculate your daily calorie intake and macronutrient needs. By entering your personal details, such as age, weight, height, and activity level, our platform provides precise recommendations for your daily caloric intake and the optimal balance of proteins, carbohydrates, and fats. These personalized insights help you tailor your diet to support your fitness goals and overall health.</p>
            </div>
            <Image src={balanceFood} width={600} height={300} alt="Photo of Scale" className="rounded-2xl bg-center bg-cover" />
          </div>

          <div className="flex flex-col-reverse gap-4 items-center lg:items-start lg:grid-cols-2 lg:grid">
            <Image src={workout} width={600} height={600} alt="Photo of Scale" className="rounded-2xl" />
            <div className="max-w-[40rem] flex flex-col gap-4">
              <h2 className="text-2xl lg:text-4xl font-bold">Library of workouts</h2>
              <p>Our website offers a comprehensive library of workout exercises designed to target specific muscle groups. Whether you’re looking to strengthen your core, build upper body strength, or tone your legs, our platform provides detailed exercise routines and instructional videos to guide you. By selecting your desired muscle group, you can access tailored workouts that help you achieve your fitness goals efficiently and effectively.</p>
            </div>
          </div>
        </div>
        
      </section> 
      <section className="flex flex-col items-center gap-8 bg-base-300 py-32 text-center">
        <h1 className="text-4xl px-16 lg:px-0 lg:text-5xl">Start your fitness journey today with <br /><b>FitFocus</b>!</h1>
        <a className="btn glass text-2xl lg:text-4xl bg-orange-500 hover:bg-red-500" href="/">Sign Up!</a>
        
      </section>
      
      
    </div>
  );
}

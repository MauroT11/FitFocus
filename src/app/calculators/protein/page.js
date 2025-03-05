import Protein from "@/components/calculations/Protein"
import Image from "next/image";

export default function page() {

    return(
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
                              <h1 className="text-5xl text-center font-bold tracking-wider text-shadow-header lg:text-8xl z-10">Daily Protein Intake</h1>
                        </div>
            <div className="flex flex-col text-center gap-4 my-8 items-center">
                <p className="px-4 lg:px-0lg:text-lg max-w-[1500px]">Our Protein Calculator is a user-friendly tool designed to determine your daily protein needs based on your weight and activity level. With personalized recommendations, it helps you meet your fitness and nutritional goals, ensuring you consume the right amount of protein for muscle growth, satiety, metabolism, and overall health. Easily find out how much protein you need to fuel your body effectively.</p>
                <div className="flex items-center gap-16">
                    <Protein />
               </div> 
            </div>
        </div>
    )
}
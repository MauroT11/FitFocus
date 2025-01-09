import Protein from "@/components/calculations/Protein"

export default function page() {

    return(
        <div className="flex flex-col">
            <div className="min-h-[10rem] lg:min-h-[15rem] relative bg-cover bg-center min-w-full items-center flex flex-col  justify-center text-white " style={{ backgroundImage: "url('/images/yellowtape.jpg')" }}>
                <h1 className="text-5xl lg:text-8xl font-bold tracking-wider text-shadow-header">Protein Intake</h1>
            </div>
            <div className="flex flex-col text-center gap-4 my-8 items-center">
                <p className="px-4 lg:px-0lg:text-lg max-w-[1500px]">Our Protein Calculator is a user-friendly tool designed to determine your daily protein needs based on your weight and activity level. With personalized recommendations, it helps you meet your fitness and nutritional goals, ensuring you consume the right amount of protein for muscle growth, satiety, metabolism, and overall health. Easily find out how much protein you need to fuel your body effectively.</p>
                <div className="grid grid-cols-3 items-center gap-24 py-8">
                    <div></div>
                    <Protein />
                    <div className="text-left">
                        <h1 className="text-3xl font-bold">Activity Level Index:</h1>
                        <ul className="text-lg">
                            <li>Sedentary (little or no exercise)</li>
                            <li>Lightly Active (exercise 1-3 times/week)</li>
                            <li>Moderately Active (exercise 1-3 times/week)</li>
                            <li>Very Active (intense exercise 3-4 times/week)</li>
                            <li>Super Active(intense exercise 6-7 times/week)</li>
                            <li>Athlete(very intense exercise daily)</li>
                        </ul>
                    </div>
                    
               </div> 
            </div>
        </div>
    )
}
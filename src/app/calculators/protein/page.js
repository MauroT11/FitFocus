import Protein from "@/components/calculations/Protein"

export default function page() {

    return(
        <div className="flex flex-col">
            <div className="min-h-[15rem] relative bg-cover bg-center min-w-full items-center flex flex-col  justify-center text-white " style={{ backgroundImage: "url('/images/yellowtape.jpg')" }}>
                <h1 className="text-8xl font-bold tracking-wider text-shadow-header">Protein Intake</h1>
            </div>
            <div className="flex flex-col text-center gap-4 my-8 items-center">
                <p className="text-lg max-w-[1000px]">Our Protein Calculator is a user-friendly tool designed to determine your daily protein needs based on your weight and activity level. With personalized recommendations, it helps you meet your fitness and nutritional goals, ensuring you consume the right amount of protein for muscle growth, satiety, metabolism, and overall health. Easily find out how much protein you need to fuel your body effectively.</p>
                <div className="flex items-center gap-16">
                    <Protein />
               </div> 
            </div>
        </div>
    )
}
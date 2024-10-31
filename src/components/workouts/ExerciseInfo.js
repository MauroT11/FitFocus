import Image from "next/image";

export default function ExerciseInfo({image, instructions}) {

    return (
        <div className="grid gap-8 lg:gap-0 lg:grid-cols-2 justify-items-center">
                {/* <div className="skeleton h-60 w-60 lg:h-80 lg:w-80"></div> */}
                {image ? (
                    <img src={image} width={600} height={300} alt="Exercise Image" className="rounded-2xl" />
                ) : (
                    <span className="loading loading-spinner loading-lg"></span>
                )}
                
                    <div className="flex flex-col px-4 items-center justify-center">
                        <h3 className="text-lg lg:text-2xl font-bold">Exercise Instructions</h3>
                            {instructions.length == 2 ? (
                                    <ul className="steps steps-vertical lg:text-lg">
                                        <li className="step">{instructions[0].instruction}</li>
                                        <li className="step">{instructions[1].instruction}</li>
                                    </ul>
                            ) : instructions.length == 3 ? (
                                    <ul className="steps steps-vertical lg:text-lg">
                                        <li className="step">{instructions[0].instruction}</li>
                                        <li className="step">{instructions[1].instruction}</li>
                                        <li className="step">{instructions[2].instruction}</li>
                                    </ul>
                            ) : instructions.length == 4 ? (
                                <ul className="steps steps-vertical lg:text-lg">
                                        <li className="step">{instructions[0].instruction}</li>
                                        <li className="step">{instructions[1].instruction}</li>
                                        <li className="step">{instructions[2].instruction}</li>
                                        <li className="step">{instructions[3].instruction}</li>
                                    </ul>
                            ) : (
                                <></>
                            )}
                    </div>
                </div>
    )
}
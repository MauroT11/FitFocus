

export default function ExerciseInfo({instructions}) {

    return (
        <div className="grid grid-cols-2 justify-items-center">
                    <div className="skeleton h-80 w-80"></div>
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="text-2xl font-bold">Exerside Instructions</h3>
                            {instructions.length == 2 ? (
                                    <ul className="steps steps-vertical text-lg">
                                        <li className="step">{instructions[0].instruction}</li>
                                        <li className="step">{instructions[1].instruction}</li>
                                    </ul>
                            ) : instructions.length == 3 ? (
                                    <ul className="steps steps-vertical text-lg">
                                        <li className="step">{instructions[0].instruction}</li>
                                        <li className="step">{instructions[1].instruction}</li>
                                        <li className="step">{instructions[2].instruction}</li>
                                    </ul>
                            ) : instructions.length == 4 ? (
                                <ul className="steps steps-vertical text-lg">
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
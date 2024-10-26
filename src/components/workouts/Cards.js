

export default function Cards({workouts, muscle}) {

    return (
        <div className="grid grid-cols-3 gap-8">
            {workouts.map((workout) => (
                    <div className="card card-side bg-base-200 shadow-xl" key={workout.id}>
                        <figure>
                            <img
                            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                            alt="Movie" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl">{workout.name}</h2>
                            <p className="max-w-[10rem] text-md">{workout.description}</p>
                            <a className="btn btn-secondary text-2xl text-white" href={`/workouts/${muscle}/${workout.id}`}>More info</a>
                        </div>
                    </div>
            ))}
        </div>
    )
}
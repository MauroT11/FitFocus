

export default function Cards({workouts, instructions}) {

    console.log(instructions)

    return (
        <div className="grid grid-cols-3 gap-8">
            {workouts.map((workout) => (
                    <div className="card card-side bg-base-200 shadow-xl" key={workout.id}>
                        <figure>
                            <img
                            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                            alt="Movie" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{workout.name}</h2>
                            <p className="max-w-[10rem]">{workout.description}</p>
                            <div className="card-actions">
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn bg-secondary" onClick={()=>document.getElementById('my_modal_3').showModal()}>More Info</button>
                                <dialog id="my_modal_3" className="modal">
                                    <div className="modal-box">
                                        <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">Press ESC key or click on ✕ button to close</p>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>
            ))}
        </div>
    )
}
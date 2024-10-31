import { motion } from "framer-motion";

export default function Cards({workouts, muscle}) {

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };
      
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };

    return (
        <motion.ul className="grid lg:grid-cols-3 gap-8 container" variants={container} initial="hidden" animate="visible">
            {workouts.map((workout) => (
                    <motion.li className="card lg:card-side max-w-[550px] bg-base-200 shadow-xl item items-center" key={workout.id} variants={item}>
                        <figure className="max-w-[300px]">
                          {workout.image_url ? (
                            <img
                              src={workout.image_url}
                              alt="Exercise Image"
                            />
                          ) : (
                            <p className="py-4 px-2 lg:py-8 lg:px-2">IMAGE NOT AVAILABLE</p>
                          )}
                            
                        </figure>
                        <div className="card-body lg:p-4 items-center text-center">
                            <h2 className="card-title lg:text-2xl">{workout.name}</h2>
                            <p className="max-w-[15rem] text-sm lg:text-md">{workout.description}</p>
                            <a className="btn lg:p-2 btn-secondary lg:text-lg text-white" href={`/workouts/${muscle}/${workout.id}`}>More info</a>
                        </div>
                    </motion.li>
            ))}
        </motion.ul>
    )
}
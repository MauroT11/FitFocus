import { motion } from "framer-motion";
import Image from "next/image";

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
                    <figure className="relative w-full min-h-[200px] lg:min-h-[300px]">
                      {workout.image_url && workout.image_url.startsWith('http') ? (
                        <Image
                          src={workout.image_url}
                          alt={`${workout.name} exercise`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover rounded-lg"
                          loading="lazy"
                          unoptimized={true}
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full w-full bg-gray-200 rounded-lg">
                          <p className="py-4 px-2 lg:py-8 lg:px-2 text-gray-500">Image Not Available</p>
                        </div>
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
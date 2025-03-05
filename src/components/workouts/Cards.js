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
                    <motion.li key={workout.id} variants={item}>
                        <a href={`/workouts/${muscle}/${workout.slug}`} className="card bg-base-200 shadow-xl block hover:scale-105 transition-transform duration-200">
                            <figure className="relative w-full h-[300px]">
                              {workout.image_url && workout.image_url.startsWith('http') ? (
                                <Image
                                  src={workout.image_url}
                                  alt={`${workout.name} exercise`}
                                  fill
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  className="object-cover"
                                  loading="lazy"
                                  unoptimized={true}
                                />
                              ) : (
                                <div className="flex items-center justify-center h-full w-full bg-gray-200">
                                  <p className="text-gray-500">Image Not Available</p>
                                </div>
                              )}
                            </figure>
                            <div className="card-body p-4 text-center">
                                <h2 className="card-title text-xl lg:text-2xl justify-center">{workout.name}</h2>
                                <p className="text-sm lg:text-base">{workout.description}</p>
                            </div>
                        </a>
                    </motion.li>
            ))}
        </motion.ul>
    )
}
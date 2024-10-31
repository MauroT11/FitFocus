export function generateMetadata() {
    return {
        title: "FitFocus - Leg Workouts",
        description: "Leg Workouts to help you build strong and toned legs. FitFocus Leg Workouts include exercises for quads, hamstrings, and calves.",
    }
  }

  export default async function Legs({ children }) {
    return (
        <main>{children}</main>
    );
}
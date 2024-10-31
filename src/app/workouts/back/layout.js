export function generateMetadata() {
    return {
        title: "FitFocus - Back Workouts",
        description: "Back Workouts to help you build a strong and toned back. FitFocus Back Workouts include exercises for upper back, lower back, and lats.",
    }
  }

  export default async function Back({ children }) {
    return (
        <main>{children}</main>
    );
}
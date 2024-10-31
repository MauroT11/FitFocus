export function generateMetadata() {
    return {
        title: "FitFocus - Core Workouts",
        description: "Core Workouts to help you build a strong and toned core. FitFocus Core Workouts include exercises for abs, obliques, and lower back.",
    }
  }

  export default async function Core({ children }) {
    return (
        <main>{children}</main>
    );
}
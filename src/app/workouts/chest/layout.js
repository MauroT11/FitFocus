export function generateMetadata() {
    return {
        title: "FitFocus - Chest Workouts",
        description: "Chest Workouts to help you build a strong and toned chest. FitFocus Chest Workouts include exercises for upper chest, middle chest, and lower chest.",
    }
  }

  export default async function Chest({ children }) {
    return (
        <main>{children}</main>
    );
}
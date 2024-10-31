export function generateMetadata() {
    return {
        title: "FitFocus - Shoulder Workouts",
        description: "Shoulder Workouts to help you build strong and toned shoulders. FitFocus Shoulder Workouts include exercises for front delts, side delts, and rear delts.",
    }
  }

  export default async function Shoulders({ children }) {
    return (
        <main>{children}</main>
    );
}
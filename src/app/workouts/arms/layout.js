export function generateMetadata() {
    return {
        title: "FitFocus - Arms Workouts",
        description: "Arms Workouts to help you build strong and toned arms. FitFocus Arms Workouts include exercises for biceps, triceps, and forearms.",
    }
  }

  export default async function Arms({ children }) {
    return (
        <main>{children}</main>
    );
}
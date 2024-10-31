export function generateMetadata() {
    return {
        title: "FitFocus - Daily Calorie Calculator",
        description: "Calculate your daily calorie intake with FitFocus Daily Calorie Calculator. Daily Calorie Calculator helps you to determine the number of calories you need to maintain your current weight.",
    }
  }

  export default async function DailyCalorie({ children }) {
    return (
        <main>{children}</main>
    );
}
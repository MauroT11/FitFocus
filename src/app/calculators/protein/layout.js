export function generateMetadata() {
    return {
        title: "FitFocus - Protein Calculator",
        description: "Calculate your daily protein intake with FitFocus Protein Calculator. Protein Calculator helps you to determine the amount of protein you need to maintain your current weight.",
    }
  }

  export default async function Protein({ children }) {
    return (
        <main>{children}</main>
    );
}
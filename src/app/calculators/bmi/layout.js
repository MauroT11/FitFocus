export function generateMetadata() {
    return {
        title: "FitFocus - BMI Calculator",
        description: "Calculate your Body Mass Index (BMI) with FitFocus BMI Calculator. BMI is a measure of body fat based on height and weight that applies",
    }
  }

  export default async function BMI({ children }) {
    return (
        <main>{children}</main>
    );
}
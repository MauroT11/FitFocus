'use client'

export default function page() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Terms of Service</h1>
      
      <div className="mb-8 text-center text-gray-600">
        <p>Effective Date: January 1, 2025</p>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">1. Acceptance of Terms</h2>
        <p className="text-gray-600 leading-relaxed">By accessing and using FitFocus, you agree to these terms and conditions. Our fitness tracking services are provided for informational purposes only.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">2. Health Disclaimer</h2>
        <p className="text-gray-600 leading-relaxed">The information provided by FitFocus, including workout plans, nutrition advice, and BMI calculations, is not medical advice. Consult with healthcare professionals before starting any exercise program. We are not responsible for any injuries or health issues that may result from following the provided workouts or nutritional guidance.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">3. Data Collection and Privacy</h2>
        <p className="text-gray-600 leading-relaxed">We collect and store personal fitness data including but not limited to weight, height, BMI, calorie intake, and workout history. This data is used to provide tracking services and personalized recommendations. We handle your data in accordance with our Privacy Policy and applicable data protection laws.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">4. User Content and Workouts</h2>
        <p className="text-gray-600 leading-relaxed">While we provide a library of workouts, users may also create and share custom workouts. Users are responsible for any content they post and must ensure it doesn't infringe on any copyrights or contain inappropriate material.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">5. Nutrition and Calorie Tracking</h2>
        <p className="text-gray-600 leading-relaxed">Calorie and protein intake calculations are estimates based on generally accepted formulas. Individual needs may vary. The accuracy of tracking depends on user-provided information and we cannot guarantee specific fitness or weight loss results.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">6. Account Security</h2>
        <p className="text-gray-600 leading-relaxed">Users are responsible for maintaining the confidentiality of their account credentials and ensuring their biometric data is accurate. Any suspicious activity should be reported immediately.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">7. Service Modifications</h2>
        <p className="text-gray-600 leading-relaxed">We reserve the right to modify, suspend, or discontinue any aspect of our fitness tracking services at any time, including the workout library, tracking features, or calculation methods.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">8. Limitation of Liability</h2>
        <p className="text-gray-600 leading-relaxed">FitFocus is provided "as is" without warranties. We are not liable for any injuries, health issues, or damages arising from the use of our tracking tools, workout suggestions, or nutritional guidance.</p>
      </section>

      <section className="mt-12 text-center border-t pt-8">
        <p className="text-gray-600 leading-relaxed">
          For questions about these Terms of Service, please contact us at:
          <br />
          <a href="mailto:support@fitfocus.com" className="text-blue-600 hover:underline">
            support@fitfocus.com
          </a>
        </p>
      </section>
    </div>
  )
}

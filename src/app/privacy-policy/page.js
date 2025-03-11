'use client'

export default function page() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Privacy Policy</h1>
      
      <div className="mb-8 text-center text-gray-600">
        <p>Effective Date: January 1, 2025</p>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">1. Information We Collect</h2>
        <p className="text-gray-600 leading-relaxed mb-4">We collect information that you provide directly to us, including:</p>
        <ul className="list-disc ml-6 mb-4 text-gray-600 leading-relaxed">
          <li>Name and contact information</li>
          <li>Account credentials</li>
          <li>Fitness goals and preferences</li>
          <li>Health and workout data</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">2. How We Use Your Information</h2>
        <p className="text-gray-600 leading-relaxed mb-4">We use the collected information to:</p>
        <ul className="list-disc ml-6 mb-4 text-gray-600 leading-relaxed">
          <li>Provide and improve our services</li>
          <li>Personalize your experience</li>
          <li>Send you updates and notifications</li>
          <li>Analyze and enhance our platform</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">3. Data Security</h2>
        <p className="text-gray-600 leading-relaxed">
          We implement appropriate security measures to protect your personal information.
          However, no method of transmission over the Internet is 100% secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">4. Your Rights</h2>
        <p className="text-gray-600 leading-relaxed mb-4">You have the right to:</p>
        <ul className="list-disc ml-6 mb-4 text-gray-600 leading-relaxed">
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Opt-out of marketing communications</li>
        </ul>
      </section>

      <section className="mt-12 text-center border-t pt-8">
        <p className="text-gray-600 leading-relaxed">
          For questions about this Privacy Policy, please contact us at:
          <br />
          <a href="mailto:support@fitfocus.com" className="text-blue-600 hover:underline">
            support@fitfocus.com
          </a>
        </p>
      </section>
    </div>
  );
}

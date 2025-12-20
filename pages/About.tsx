import React from 'react';

const About: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-16">
    <h1 className="text-4xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 pb-2 inline-block">
      About BookMyCar.live
    </h1>

    <div className="prose max-w-none text-gray-700 space-y-6">
      <p className="text-lg leading-relaxed">
        Welcome to <strong>BookMyCar.live</strong>, your go-to independent resource for 
        navigating the world of self-drive car rentals and road trips in India. 
        We are not a rental agency, nor are we affiliated with any booking platform. 
        Instead, we are a dedicated information hub built by road trip enthusiasts for travelers 
        who value clarity and safety.
      </p>

      <div className="bg-gray-50 p-6 rounded-xl border-l-8 border-blue-500 my-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h2>
        <p className="italic">
          "To empower Indian travelers with transparent, human-verified information, 
          ensuring every road trip is defined by the journey, not by hidden rules or rental scams."
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-8">Why We Started BookMyCar.live</h2>
      <p>
        Indian highways are beautiful, but renting a car and driving across states often comes with 
        complexities—hidden insurance clauses, interstate permits, and varying rental policies. 
        We realized there was a gap in reliable, unbiased information. <strong>BookMyCar.live</strong> 
        was born to fill that gap, providing practical guides that help you avoid heavy fines 
        and enjoy the freedom of the open road.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8">What We Offer</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-4">
        <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
          <h3 className="font-bold text-blue-700 mb-2">Road Trip Guides</h3>
          <p className="text-sm">Detailed route breakdowns, from Delhi-Jaipur to the Mumbai-Pune Expressway.</p>
        </div>
        <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
          <h3 className="font-bold text-blue-700 mb-2">Rental Policy Clarity</h3>
          <p className="text-sm">Explaining the "Black Plate" rule, insurance limits, and security deposits.</p>
        </div>
        <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
          <h3 className="font-bold text-blue-700 mb-2">Safety Checklists</h3>
          <p className="text-sm">Pre-trip vehicle inspections and compliance tips to avoid highway breakdowns.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mt-8">Important Disclaimer</h2>
      <p className="text-sm bg-yellow-50 p-4 rounded border border-yellow-200">
        <strong>BookMyCar.live</strong> is an informational blog only. We do not provide car rentals, 
        taxi services, or booking assistance. Our purpose is purely educational, helping you 
        understand the rules and best practices of self-driving in India.
      </p>
    </div>
  </div>
);

export default About;
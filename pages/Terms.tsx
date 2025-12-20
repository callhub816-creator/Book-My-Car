import React from 'react';

const Terms: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
    <h1 className="text-4xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 pb-2 inline-block">
      Terms & Conditions
    </h1>

    <div className="prose max-w-none space-y-6">
      <p className="text-sm text-gray-500 italic">Last Updated: December 2025</p>

      <p>
        Welcome to <strong>BookMyCar.live</strong>. By accessing this website, you accept these terms and conditions 
        in full. Do not continue to use BookMyCar.live if you do not agree to all of the terms and conditions stated on this page.
      </p>

      {/* 1. INFORMATIONAL NATURE */}
      <h2 className="text-2xl font-bold text-gray-900 mt-8">1. Informational Purpose Only</h2>
      <div className="bg-red-50 p-4 border-l-4 border-red-600 rounded">
        <p className="text-red-900 font-semibold">
          BookMyCar.live is a blog and information hub. We are NOT a car rental agency, booking platform, 
          aggregator, or transport service provider. We do not facilitate transactions between users and 
          car rental companies (such as Zoomcar, Revv, etc.).
        </p>
      </div>

      {/* 2. ACCURACY OF CONTENT */}
      <h2 className="text-2xl font-bold text-gray-900 mt-8">2. Accuracy of Information</h2>
      <p>
        While we strive to provide the most accurate and up-to-date road trip guides and rental rules, 
        laws, toll prices, and company policies in India change frequently. The information provided is 
        for general guidance only. Users are strictly advised to verify all details (fines, documents, 
        and prices) with official government portals or the respective service providers before starting a trip.
      </p>

      {/* 3. INTELLECTUAL PROPERTY */}
      <h2 className="text-2xl font-bold text-gray-900 mt-8">3. Intellectual Property Rights</h2>
      <p>
        Unless otherwise stated, BookMyCar.live and/or its licensors own the intellectual property rights 
        for all material on this website. All intellectual property rights are reserved. You may view and/or 
        print pages from BookMyCar.live for your own personal use, subject to restrictions set in these terms and conditions.
      </p>

      {/* 4. EXTERNAL LINKS */}
      <h2 className="text-2xl font-bold text-gray-900 mt-8">4. Links to Third-Party Sites</h2>
      <p>
        Our articles may contain links to external websites. We have no control over the nature, content, 
        and availability of those sites. The inclusion of any links does not necessarily imply a 
        recommendation or endorse the views expressed within them.
      </p>

      {/* 5. LIMITATION OF LIABILITY */}
      <h2 className="text-2xl font-bold text-gray-900 mt-8">5. Limitation of Liability</h2>
      <p>
        In no event shall BookMyCar.live be held liable for any fines, legal disputes, road accidents, 
        financial losses, or damages arising out of or in connection with the use of the information 
        provided on this website. Your reliance on any information on this site is strictly at your own risk.
      </p>

      {/* 6. MODIFICATIONS */}
      <h2 className="text-2xl font-bold text-gray-900 mt-8">6. Changes to Terms</h2>
      <p>
        We reserve the right to revise these terms and conditions at any time. By using this website, 
        you are expected to review these terms on a regular basis.
      </p>

      <p className="mt-10 pt-6 border-t border-gray-200">
        If you have any questions regarding our Terms, please contact us at: 
        <br />
        <strong>support@bookmycar.live</strong>
      </p>
    </div>
  </div>
);

export default Terms;
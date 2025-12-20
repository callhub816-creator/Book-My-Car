import React from 'react';

/* ================= ABOUT ================= */
export const About: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-16">
    <h1 className="text-4xl font-bold text-gray-900 mb-6">About BookMyCar.live</h1>
    <div className="prose max-w-none text-gray-700 space-y-6">
      <p className="text-lg">
        Welcome to <strong>BookMyCar.live</strong>, your trusted companion for navigating the roads of India.
        We are passionate about road trips, self-drive journeys, and helping travelers make informed decisions.
      </p>

      <p>
        <strong>Our Mission:</strong> To empower travelers with accurate, up-to-date information on road trips,
        car rental rules, and travel safety across India.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-8">What We Do</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Road trip itineraries and destination guides</li>
        <li>Car rental rules, insurance awareness, and checklists</li>
        <li>Driving safety tips and travel best practices</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-8">Who We Are</h2>
      <p>
        BookMyCar.live is an <strong>independent informational platform</strong> created by travel and automobile
        enthusiasts in India. We <strong>do not provide car booking, rental, or cab services</strong>.
        All content is published for educational and informational purposes only.
      </p>
    </div>
  </div>
);

/* ================= CONTACT ================= */
export const Contact: React.FC = () => (
  <div className="max-w-xl mx-auto px-4 py-16">
    <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Contact Us</h1>
    <p className="text-center text-gray-600 mb-8">
      Have a question about travel guides or rental rules? Reach out to us.
    </p>

    <div className="bg-white shadow-lg rounded-lg p-8">
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          alert('Thank you for your message!');
        }}
      >
        <input className="w-full border p-2 rounded" placeholder="Your Name" />
        <input className="w-full border p-2 rounded" placeholder="you@example.com" />
        <textarea className="w-full border p-2 rounded" rows={4} placeholder="How can we help?" />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Email us directly: <strong>support@bookmycar.live</strong>
      </p>
    </div>
  </div>
);

/* ================= PRIVACY ================= */
export const Privacy: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-16 text-gray-700 text-sm space-y-4">
    <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
    <p>Last Updated: October 2023</p>

    <p>
      BookMyCar.live respects your privacy. This page explains how information is collected and used.
    </p>

    <h3 className="font-bold text-gray-900">Cookies & Log Files</h3>
    <p>
      We may collect IP address, browser type, ISP, date/time stamp, and referring pages for analytics purposes.
    </p>

    <h3 className="font-bold text-gray-900">Google Advertising</h3>
    <p>
      Google may use cookies, including DoubleClick DART cookies, to serve ads based on visits to this and other websites.
    </p>
    <p>
      Users may opt out of personalized advertising by visiting Google Ads Settings.
    </p>
  </div>
);

/* ================= TERMS ================= */
export const Terms: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-16 text-gray-700 text-sm space-y-4">
    <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
    <p>
      BookMyCar.live provides informational content related to travel and driving in India.
      We are not responsible for losses or penalties arising from the use of this information.
    </p>
  </div>
);

/* ================= DISCLAIMER ================= */
export const Disclaimer: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-16 text-gray-700 text-sm space-y-4">
    <h1 className="text-3xl font-bold text-gray-900 mb-4">Disclaimer</h1>
    <p>
      The information on BookMyCar.live is for general informational purposes only.
      We do not provide booking, rental, or transportation services.
    </p>
    <p>
      Always verify traffic laws, rental terms, and regulations from official sources.
    </p>
  </div>
);

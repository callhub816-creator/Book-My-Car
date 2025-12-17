import React from 'react';

// --- About Page ---
export const About: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-16">
    <h1 className="text-4xl font-bold text-gray-900 mb-6">About BookMyCar.live</h1>
    <div className="prose max-w-none text-gray-700 space-y-6">
      <p className="text-lg">
        Welcome to <strong>BookMyCar.live</strong>, your trusted companion for navigating the roads of India.
        Born from a passion for open highways and the freedom of self-drive travel, we aim to bridge the information gap for travelers.
      </p>
      <p>
        <strong>Our Mission:</strong> To empower travelers with accurate, up-to-date information on road trips, car rental rules, and safety protocols.
        Whether you are a seasoned driver or renting your first car, our detailed guides ensure you have a smooth journey.
      </p>
      <h2 className="text-2xl font-bold text-gray-900 mt-8">How We Help</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Detailed Road Trip Itineraries:</strong> Km-by-km breakdown of routes.</li>
        <li><strong>Rental Awareness:</strong> Demystifying terms, conditions, and insurance policies.</li>
        <li><strong>Safety First:</strong> Prioritizing driver and passenger safety through education.</li>
      </ul>
    </div>
  </div>
);

// --- Contact Page ---
export const Contact: React.FC = () => (
  <div className="max-w-xl mx-auto px-4 py-16">
    <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Contact Us</h1>
    <p className="text-center text-gray-600 mb-8">Have a question about a route or a rental policy? Reach out to us.</p>
    <div className="bg-white shadow-lg rounded-lg p-8">
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Thank you for your message!'); }}>
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2" placeholder="Your Name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2" placeholder="How can we help?"></textarea>
        </div>
        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
          Send Message
        </button>
      </form>
      <div className="mt-6 text-center text-sm text-gray-500">
        Email us directly: <span className="font-bold">support@bookmycar.live</span>
      </div>
    </div>
  </div>
);

// --- Privacy Policy ---
export const Privacy: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-16">
    <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
    <div className="text-sm text-gray-600 space-y-4">
      <p>Last Updated: October 2023</p>
      <p>At BookMyCar.live, accessible from https://bookmycar.live, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by BookMyCar.live and how we use it.</p>
      
      <h3 className="text-lg font-bold text-gray-900">Log Files</h3>
      <p>BookMyCar.live follows a standard procedure of using log files. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>

      <h3 className="text-lg font-bold text-gray-900">Cookies and Web Beacons</h3>
      <p>Like any other website, BookMyCar.live uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited.</p>

      <h3 className="text-lg font-bold text-gray-900">Google DoubleClick DART Cookie</h3>
      <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet.</p>
    </div>
  </div>
);

// --- Terms ---
export const Terms: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-16">
    <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms and Conditions</h1>
    <div className="text-sm text-gray-600 space-y-4">
      <p>Welcome to BookMyCar.live!</p>
      <p>These terms and conditions outline the rules and regulations for the use of BookMyCar.live's Website.</p>
      
      <h3 className="text-lg font-bold text-gray-900">Content Liability</h3>
      <p>We shall not be hold responsible for any content that appears on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>
      
      <h3 className="text-lg font-bold text-gray-900">Travel Disclaimer</h3>
      <p>The information provided on this website regarding routes, rules, and regulations is for general informational purposes only. While we strive to keep information up to date, road conditions and laws change. We are not liable for any fines, delays, or issues arising from the use of this information.</p>
    </div>
  </div>
);

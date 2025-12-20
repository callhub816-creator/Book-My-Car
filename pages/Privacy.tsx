import React from 'react';

const Privacy: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
    <h1 className="text-4xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 pb-2 inline-block">
      Privacy Policy
    </h1>

    <div className="prose max-w-none space-y-6">
      <p className="text-sm text-gray-500 italic">Last Updated: December 2025</p>
      
      <p>
        At <strong>BookMyCar.live</strong>, the privacy of our visitors is of extreme importance to us. 
        This privacy policy document outlines the types of personal information received and collected 
        by BookMyCar.live and how it is used.
      </p>

      {/* 1. LOG FILES */}
      <h2 className="text-2xl font-bold text-gray-900 mt-8">Log Files</h2>
      <p>
        Like many other Web sites, BookMyCar.live makes use of log files. The information inside the 
        log files includes internet protocol (IP) addresses, type of browser, Internet Service Provider (ISP), 
        date/time stamp, referring/exit pages, and number of clicks to analyze trends, administer the site, 
        track user’s movement around the site, and gather demographic information. IP addresses and other 
        such information are not linked to any information that is personally identifiable.
      </p>

      {/* 2. COOKIES & BEACONS */}
      <h2 className="text-2xl font-bold text-gray-900 mt-8">Cookies and Web Beacons</h2>
      <p>
        BookMyCar.live does use cookies to store information about visitors preferences, record user-specific 
        information on which pages the user access or visit, customize Web page content based on visitors 
        browser type or other information that the visitor sends via their browser.
      </p>

      {/* 3. DOUBLECLICK DART COOKIE (CRITICAL FOR ADSENSE) */}
      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
        <h2 className="text-xl font-bold text-blue-900 mb-2">Google DoubleClick DART Cookie</h2>
        <ul className="list-disc pl-5 space-y-2 text-blue-800">
          <li>Google, as a third party vendor, uses cookies to serve ads on BookMyCar.live.</li>
          <li>Google's use of the DART cookie enables it to serve ads to users based on their visit to BookMyCar.live and other sites on the Internet.</li>
          <li>Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy at the following URL – <a href="https://www.google.com/privacy_ads.html" className="underline font-bold">https://www.google.com/privacy_ads.html</a></li>
        </ul>
      </div>

      {/* 4. AD PARTNERS */}
      <h2 className="text-2xl font-bold text-gray-900 mt-8">Our Advertising Partners</h2>
      <p>
        Some of our advertising partners may use cookies and web beacons on our site. Our advertising partners include:
      </p>
      <ul className="list-bold pl-5 font-semibold text-blue-700">
        <li>Google AdSense</li>
      </ul>
      <p>
        These third-party ad servers or ad networks use technology to the advertisements and links that appear 
        on BookMyCar.live send directly to your browsers. They automatically receive your IP address when this occurs. 
        Other technologies (such as cookies, JavaScript, or Web Beacons) may also be used by the third-party ad 
        networks to measure the effectiveness of their advertisements and / or to personalize the advertising content that you see.
      </p>

      {/* 5. CONTACT */}
      <h2 className="text-2xl font-bold text-gray-900 mt-8">Consent</h2>
      <p>
        By using our website, you hereby consent to our privacy policy and agree to its terms. If you require any 
        more information or have any questions about our privacy policy, please feel free to contact us by email 
        at <strong>support@bookmycar.live</strong>.
      </p>
    </div>
  </div>
);

export default Privacy;
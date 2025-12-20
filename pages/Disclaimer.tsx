import React from 'react';
import { AlertTriangle, ShieldCheck, Info } from 'lucide-react';

const Disclaimer: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
    <h1 className="text-4xl font-bold text-gray-900 mb-6 border-b-4 border-yellow-500 pb-2 inline-block">
      Full Disclaimer
    </h1>

    <div className="prose max-w-none space-y-6 leading-relaxed">
      
      {/* Important Notice Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg my-8">
        <div className="flex items-center mb-3">
          <AlertTriangle className="text-yellow-600 mr-2" size={24} />
          <h2 className="text-xl font-bold text-yellow-900 m-0">No Booking or Rental Services</h2>
        </div>
        <p className="text-yellow-800 font-medium">
          <strong>BookMyCar.live</strong> is strictly an informational blog. We do not provide, 
          manage, or facilitate car rentals, taxi bookings, or any transportation services. 
          We never ask for payments for vehicle bookings.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 flex items-center">
        <ShieldCheck className="text-blue-600 mr-2" size={24} /> 1. No Affiliation
      </h2>
      <p>
        We are an independent platform. <strong>BookMyCar.live</strong> is not affiliated, 
        associated, authorized, endorsed by, or in any way officially connected with 
        <strong> Zoomcar, Revv, MyChoize, Indus, </strong> or any of their subsidiaries or affiliates. 
        All company names, logos, and brands mentioned are the registered trademarks of their 
        respective owners. Their use on this website does not imply any affiliation or endorsement.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 flex items-center">
        <Info className="text-blue-600 mr-2" size={24} /> 2. Content Accuracy & Risk
      </h2>
      <p>
        All content provided on this website is for <strong>educational and informational 
        purposes only</strong>. While we strive for accuracy, road conditions, traffic laws, 
        toll prices, and rental company policies in India change frequently. 
      </p>
      <p>
        BookMyCar.live makes no representations as to the accuracy, completeness, or 
        validity of any information on this site and will not be liable for any errors, 
        omissions, or delays in this information or any losses, injuries, or damages 
        arising from its display or use.
      </p>

      <h2 className="text-2xl font-bold text-gray-900">3. External Links</h2>
      <p>
        This website may contain links to external websites that are not provided or 
        maintained by or in any way affiliated with BookMyCar.live. Please note that we 
        do not guarantee the accuracy, relevance, timeliness, or completeness of any 
        information on these external websites.
      </p>

      <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-500">
        <p>If you have any questions about this Disclaimer, please contact us at:</p>
        <p className="font-bold text-gray-700">support@bookmycar.live</p>
      </div>
    </div>
  </div>
);

export default Disclaimer;
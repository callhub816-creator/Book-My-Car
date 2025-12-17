import React from 'react';
import { AlertTriangle, FileText, Shield, Fuel, Clock, AlertCircle } from 'lucide-react';

const Rules: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Travel Rules & Regulations</h1>
          <p className="text-lg text-gray-600">Essential guidelines for renting cars and driving in India.</p>
        </div>

        {/* Introduction */}
        <div className="prose max-w-none text-gray-700 mb-12">
          <p>
            Renting a self-drive car in India offers freedom and flexibility, but it comes with a specific set of rules and compliance requirements. At BookMyCar.live, we believe an informed traveler is a safe traveler. Below is a comprehensive guide to the regulations you must know before booking your vehicle.
          </p>
        </div>

        {/* Section 1: Documents */}
        <section className="mb-10 bg-gray-50 p-6 rounded-xl border border-gray-200">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <FileText className="h-6 w-6 text-brand-600" />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-bold text-gray-900 mb-2">1. Documents Required</h2>
              <p className="text-gray-600 mb-4">To rent a car legally in India, you must present original copies of the following:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Driving License:</strong> A valid Indian Driving License (LMV) or an International Driving Permit (IDP) for foreign nationals. Learners' licenses are not accepted.</li>
                <li><strong>Identity Proof:</strong> Aadhar Card or Passport. (Pan Card is usually not accepted as valid address proof for rentals).</li>
                <li><strong>Credit Card/Debit Card:</strong> Usually required for the security deposit blocking.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Age & License */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Clock className="mr-2 h-6 w-6 text-brand-600" /> Age & Driving Experience
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most rental companies in India have strict age restrictions to adhere to insurance policies.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 border rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900">Minimum Age</h3>
              <p className="text-gray-600 text-sm">Usually 21 years old. Some luxury car rentals require the driver to be 23 or 25+.</p>
            </div>
            <div className="bg-white p-4 border rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900">License Age</h3>
              <p className="text-gray-600 text-sm">Your driving license must be at least 1 year old to prove driving experience.</p>
            </div>
          </div>
        </section>

        {/* Section 3: Security & Insurance */}
        <section className="mb-10 bg-blue-50 p-6 rounded-xl border border-blue-100">
          <div className="flex items-start">
            <Shield className="h-6 w-6 text-blue-600 mt-1" />
            <div className="ml-4">
              <h2 className="text-xl font-bold text-gray-900 mb-2">3. Insurance & Liability</h2>
              <p className="text-gray-700 mb-4">
                Understanding the <strong>Max Liability Policy</strong> is crucial. Standard insurance covers third-party damage, but damage to the rented vehicle is often subject to a user liability limit.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>If damage is under ₹10,000 (approx), the user pays the actuals.</li>
                <li>If damage exceeds the limit, the user pays the maximum liability (e.g., ₹10,000) and insurance covers the rest.</li>
                <li><strong>Note:</strong> Insurance is VOID if the driver was drunk, speeding, or violating traffic laws.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Fuel Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Fuel className="mr-2 h-6 w-6 text-brand-600" /> Fuel Policy
          </h2>
          <p className="text-gray-700 mb-4">Rental agencies typically operate on two models:</p>
          <div className="space-y-4">
            <div className="border-l-4 border-brand-500 pl-4 py-2 bg-gray-50">
              <h3 className="font-bold text-gray-900">Flexi / Fill-as-you-go</h3>
              <p className="text-gray-600">The car is given with a certain fuel level. You must return it at the same level. If returned with less, a penalty + fuel cost is charged. If more, no refund is usually given.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4 py-2 bg-gray-50">
              <h3 className="font-bold text-gray-900">Unlimited Kilometers (No Fuel)</h3>
              <p className="text-gray-600">You pay for the fuel you use. This is best for long road trips.</p>
            </div>
          </div>
        </section>

        {/* Section 5: Penalties */}
        <section className="mb-10">
           <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <AlertTriangle className="mr-2 h-6 w-6 text-red-600" /> Common Penalties
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm whitespace-nowrap">
              <thead className="uppercase tracking-wider border-b-2 border-gray-200 bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-4">Violation</th>
                  <th scope="col" className="px-6 py-4">Estimated Penalty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium">Over Speeding (&gt;80/120 kmph)</td>
                  <td className="px-6 py-4 text-red-600">₹500 - ₹2,500 per instance</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Traffic Challan</td>
                  <td className="px-6 py-4 text-red-600">Actuals + Processing Fee</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Late Return</td>
                  <td className="px-6 py-4 text-red-600">Double Hourly charges</td>
                </tr>
                 <tr>
                  <td className="px-6 py-4 font-medium">Smoking in Car</td>
                  <td className="px-6 py-4 text-red-600">₹1,000 + Cleaning Fee</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="bg-yellow-50 p-4 rounded-lg flex items-start text-sm text-yellow-800">
          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
          <p>
            <strong>Disclaimer:</strong> Rules may vary by state and rental company. Always read the specific Terms & Conditions of the service provider (Zoomcar, Revv, MyChoize, etc.) before booking. BookMyCar.live provides this information for general guidance only.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Rules;
import React from 'react';
import {
  AlertTriangle,
  FileText,
  Shield,
  Fuel,
  Clock,
  AlertCircle
} from 'lucide-react';

const Rules: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Self-Drive Car Rental Rules in India 2025
          </h1>
          <p className="text-lg text-gray-600">
            Documents, insurance, penalties & legal guidelines every driver must know.
          </p>
        </div>

        {/* Introduction */}
        <div className="prose max-w-none text-gray-700 mb-12">
          <p>
            Renting a self-drive car in India gives you freedom and flexibility, but it also comes with
            strict legal and insurance responsibilities. At <strong>BookMyCar.live</strong>, we believe
            an informed traveler is a safe traveler. Below is a practical, India-specific guide to help
            you avoid fines, insurance issues, and rental scams.
          </p>
        </div>

        {/* Section 1: Documents */}
        <section className="mb-10 bg-gray-50 p-6 rounded-xl border border-gray-200">
          <div className="flex items-start">
            <FileText className="h-6 w-6 text-brand-600 mt-1" />
            <div className="ml-4">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                1. Mandatory Documents Required
              </h2>
              <p className="text-gray-600 mb-4">
                To rent a car legally in India, you must carry original or valid digital copies of:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Driving License:</strong> Valid Indian LMV license or International Driving
                  Permit (IDP). Learner’s licenses are not accepted.
                </li>
                <li>
                  <strong>Identity Proof:</strong> Aadhaar Card or Passport (PAN card is usually not
                  accepted).
                </li>
                <li>
                  <strong>Payment Card:</strong> Credit/Debit card in the same name as the license
                  holder for security deposit.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Age & License */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Clock className="mr-2 h-6 w-6 text-brand-600" />
            Age & Driving Experience
          </h2>
          <p className="text-gray-700 mb-4">
            Rental companies enforce age limits to comply with insurance policies.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 border rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900">Minimum Age</h3>
              <p className="text-gray-600 text-sm">
                Usually 21 years. Premium or luxury cars may require 23–25+ years.
              </p>
            </div>
            <div className="bg-white p-4 border rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900">License Age</h3>
              <p className="text-gray-600 text-sm">
                Driving license must be at least 1 year old (some SUVs require 2+ years).
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Black Plate Rule */}
        <section className="mb-10 bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1" />
            <div className="ml-4">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                ⚠️ Black Number Plate Rule (Very Important)
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                All self-drive rental cars in India must have a
                <strong> Black Number Plate with Yellow Letters</strong>.
                Driving a white-plate (private) car as a rental is illegal and can
                void insurance, attract police fines, or lead to vehicle seizure.
              </p>
              <p className="mt-2 text-sm font-semibold text-yellow-800">
                If a white-plate car is provided at pickup — do NOT start the trip.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Insurance */}
        <section className="mb-10 bg-blue-50 p-6 rounded-xl border border-blue-100">
          <div className="flex items-start">
            <Shield className="h-6 w-6 text-blue-600 mt-1" />
            <div className="ml-4">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Insurance & Maximum Liability
              </h2>
              <p className="text-gray-700 mb-4">
                Rental cars include third-party insurance. Damage to the rental vehicle
                is covered under a maximum liability policy.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Damage under ₹10,000 → User pays actual repair cost</li>
                <li>Damage above limit → User pays max liability, insurance covers rest</li>
                <li>
                  <strong>Insurance is void</strong> if driving drunk, overspeeding, or
                  violating traffic laws
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Fuel Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Fuel className="mr-2 h-6 w-6 text-brand-600" />
            Fuel Policy
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-brand-500 pl-4 py-2 bg-gray-50">
              <h3 className="font-bold text-gray-900">Same-to-Same / Flexi</h3>
              <p className="text-gray-600 text-sm">
                Return the car with the same fuel level. Shortage attracts penalty +
                fuel cost. Extra fuel is usually non-refundable.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4 py-2 bg-gray-50">
              <h3 className="font-bold text-gray-900">Unlimited Kilometers</h3>
              <p className="text-gray-600 text-sm">
                Fuel cost is borne by the user. Best option for long road trips.
              </p>
            </div>
          </div>
        </section>

        {/* Penalties */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <AlertTriangle className="mr-2 h-6 w-6 text-red-600" />
            Common Penalties
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm bg-white border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border">Violation</th>
                  <th className="px-4 py-2 border">Penalty</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">Over-speeding</td>
                  <td className="px-4 py-2 border text-red-600">₹500 – ₹2,500</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Late Return</td>
                  <td className="px-4 py-2 border text-red-600">Double hourly charges</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Smoking in Car</td>
                  <td className="px-4 py-2 border text-red-600">₹1,000 + cleaning fee</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="bg-yellow-50 p-4 rounded-lg flex items-start text-sm text-yellow-800">
          <AlertCircle className="h-5 w-5 mr-2 mt-0.5" />
          <p>
            <strong>Disclaimer:</strong> Rules may vary by state and rental company.
            Always read the official Terms & Conditions of the service provider.
            BookMyCar.live is an information-only platform.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Rules;

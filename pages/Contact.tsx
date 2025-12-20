import React from 'react';
import { Mail, MessageSquare, ShieldCheck } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Yahan tu Formspree ya koi API integration kar sakta hai
    alert('Thank you! Your message has been received. We will get back to you within 24-48 hours.');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions about a specific road trip route or car rental policy? 
          The <strong>BookMyCar.live</strong> team is here to provide unbiased, expert advice.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Side: Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 flex items-center mb-3">
              <Mail className="mr-2 text-blue-600" /> Direct Email
            </h3>
            <p className="text-gray-600">
              For general inquiries, partnership opportunities, or feedback:
              <br />
              <a href="mailto:support@bookmycar.live" className="text-blue-600 font-bold hover:underline">
                support@bookmycar.live
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 flex items-center mb-3">
              <MessageSquare className="mr-2 text-blue-600" /> Community Support
            </h3>
            <p className="text-gray-600">
              We typically respond within <strong>24–48 hours</strong>. Please provide as much detail 
              as possible about your route or rental concern.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h3 className="text-lg font-bold text-blue-900 flex items-center mb-2">
              <ShieldCheck className="mr-2 text-blue-600" /> Trust Guarantee
            </h3>
            <p className="text-sm text-blue-800">
              We never share your personal details with car rental companies or third-party advertisers. 
              Your privacy is our priority.
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 border border-gray-100">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                required
                placeholder="Arjun Sharma"
                className="w-full border-gray-300 border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                required
                placeholder="arjun@example.com"
                className="w-full border-gray-300 border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
              <textarea
                required
                rows={4}
                placeholder="Ask us anything about road trips, tolls, or rental scams..."
                className="w-full border-gray-300 border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
            <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-1">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
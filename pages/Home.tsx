import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ShieldCheck, FileText, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogContent';

const Home: React.FC = () => {
  const featuredBlogs = blogPosts.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80')] bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Explore India on <span className="text-blue-500">Your Terms</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
              Your ultimate guide to car travel, epic road trips, and navigating rental rules safely across India. Plan your next adventure today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/blog" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-center transition duration-300">
                Explore Guides
              </Link>
              <Link to="/rules" className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold text-center transition duration-300">
                Read Rental Rules
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Popular Destinations</h2>
            <p className="mt-4 text-gray-600">Discover the best routes and drives chosen by travelers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Jaipur', img: 'https://picsum.photos/400/300?random=101', desc: 'The Pink City awaits.' },
              { title: 'Goa', img: 'https://picsum.photos/400/300?random=102', desc: 'Sun, sand, and open roads.' },
              { title: 'Manali', img: 'https://picsum.photos/400/300?random=103', desc: 'Mountain drives & adventures.' },
            ].map((loc, idx) => (
              <div key={idx} className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer">
                <img src={loc.img} alt={loc.title} className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">{loc.title}</h3>
                  <p className="text-gray-200 text-sm">{loc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Highlight */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden md:flex">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center space-x-2 text-blue-600 mb-4">
                <ShieldCheck className="h-6 w-6" />
                <span className="font-semibold uppercase tracking-wide">Safety First</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential Safety Checklist</h2>
              <p className="text-gray-600 mb-6">
                Before you hit the highway, ensure your vehicle is road-ready. From tyre pressure to emergency kits, we cover everything you need to know to stay safe.
              </p>
              <Link to="/blog/long-drive-safety-checklist" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                View Full Checklist <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="md:w-1/2 bg-blue-100 min-h-[300px] flex items-center justify-center">
               <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80" alt="Car Safety" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Latest Guides</h2>
              <p className="mt-2 text-gray-600">Fresh content for your next road trip.</p>
            </div>
            <Link to="/blog" className="hidden md:flex items-center text-blue-600 hover:text-blue-700 font-medium">
              View all posts <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBlogs.map((blog) => (
              <Link key={blog.id} to={`/blog/${blog.slug}`} className="flex flex-col group">
                <div className="rounded-xl overflow-hidden mb-4 shadow-sm">
                  <img src={blog.imageUrl} alt={blog.title} className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300" />
                </div>
                <div className="flex items-center text-xs text-brand-600 font-medium mb-2 uppercase tracking-wide">
                  {blog.category} • {blog.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition">{blog.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{blog.excerpt}</p>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Link to="/blog" className="inline-block px-6 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50">
               View all posts
             </Link>
          </div>
        </div>
      </section>
      
      {/* SEO Intro Text (Bottom) */}
      <section className="py-12 bg-gray-50 border-t">
         <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-xl font-bold text-gray-900 mb-3">About BookMyCar.live</h2>
          <p className="text-gray-600 text-sm mt-4">
  BookMyCar.live is an informational website offering road trip guides, car rental awareness,
  and travel safety tips across India. We do not provide booking or rental services.
           </p>
         </div>
      </section>
    </div>
  );
};

export default Home;

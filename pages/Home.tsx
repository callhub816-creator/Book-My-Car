import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogs';

const Home: React.FC = () => {
  const featuredBlogs = blogPosts.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative bg-cover bg-center min-h-[85vh] flex items-center"
        style={{
          backgroundImage:
            "url('/images/hero/home-hero-indian-road-trip-car.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-5xl px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            India’s Trusted Car Travel <br />
            <span className="text-blue-400">& Rental Guide</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl">
            Informational guides on Indian road travel and self-drive car rules.
            No bookings, no affiliations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/blog"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-bold"
            >
              Read Travel Blogs
            </Link>
            <Link
              to="/rules"
              className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-lg font-bold"
            >
              Understand Rental Rules
            </Link>
          </div>
        </div>
      </section>
      {/* ================= HERO END ================= */}


      {/* ================= SAFETY HIGHLIGHT ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden md:flex">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center space-x-2 text-blue-600 mb-4">
                <ShieldCheck className="h-6 w-6" />
                <span className="font-semibold uppercase tracking-wide">
                  Safety First
                </span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Essential Safety Checklist
              </h2>

              <p className="text-gray-600 mb-6">
                Before you hit the highway, ensure your vehicle is road-ready.
                From tyre pressure to emergency kits, we cover everything you
                need to know to stay safe.
              </p>

              <Link
                to="/blog/long-drive-safety-checklist"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
              >
                View Full Checklist <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80"
                alt="Car Safety"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      {/* ================= LATEST BLOGS ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Latest Guides
              </h2>
              <p className="mt-2 text-gray-600">
                Fresh content for your next road trip.
              </p>
            </div>

            <Link
              to="/blog"
              className="hidden md:flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              View all posts <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBlogs.map((blog) => (
              <Link
                key={blog.id}
                to={`/blog/${blog.slug}`}
                className="flex flex-col group"
              >
                <div className="rounded-xl overflow-hidden mb-4 shadow-sm">
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="text-xs text-brand-600 font-medium mb-2 uppercase tracking-wide">
                  {blog.category} • {blog.date}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-2">
                  {blog.excerpt}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/blog"
              className="inline-block px-6 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50"
            >
              View all posts
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;

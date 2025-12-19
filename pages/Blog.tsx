import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogContent';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';

/* ===============================
   BLOG LIST PAGE
   Shows ONLY published blogs
   =============================== */
export const BlogList: React.FC = () => {
  const publishedPosts = blogPosts.filter(post => post.published);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Travel Guides & Tips</h1>
          <p className="mt-4 text-gray-600">
            Expert advice for road trips, car travel, and rental awareness in India.
          </p>
        </div>

        {publishedPosts.length === 0 ? (
          <p className="text-center text-gray-500">
            New travel guides are coming soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publishedPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
              >
                <div className="relative h-48">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mt-4 border-t pt-4">
                    <span className="flex items-center">
                      <User className="h-3 w-3 mr-1" /> {post.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" /> {post.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

/* ===============================
   SINGLE BLOG POST PAGE
   Blocks unpublished blogs
   =============================== */
export const BlogPostView: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = blogPosts.find(
    (p) => p.slug === slug && p.published
  );

  if (!post) {
    return (
      <div className="text-center py-20 text-xl text-gray-600">
        This article is not available.
      </div>
    );
  }

  const recommended = blogPosts
    .filter(p => p.published && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="bg-white min-h-screen pb-16">
      {/* Hero */}
      <div className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center text-gray-300 hover:text-white mb-6 text-sm"
          >
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Blog
          </Link>

          <div className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4">
            {post.category}
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center space-x-6 text-gray-300 text-sm">
            <span className="flex items-center">
              <User className="h-4 w-4 mr-2" /> {post.author}
            </span>
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" /> {post.date}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />

          <div className="p-8 md:p-12">
            {/* Blog Content */}
            <article
              className="prose prose-lg text-gray-700 max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12">
              {post.keywords.map((keyword, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm flex items-center"
                >
                  <Tag className="h-3 w-3 mr-1" /> {keyword}
                </span>
              ))}
            </div>

            {/* Recommended */}
            {recommended.length > 0 && (
              <div className="border-t pt-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Recommended Reads
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recommended.map(rec => (
                    <Link key={rec.id} to={`/blog/${rec.slug}`} className="group">
                      <div className="rounded-lg overflow-hidden mb-3 h-40">
                        <img
                          src={rec.imageUrl}
                          alt={rec.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition"
                        />
                      </div>
                      <h4 className="font-bold text-gray-900 group-hover:text-blue-600 text-sm line-clamp-2">
                        {rec.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

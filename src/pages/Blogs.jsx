import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LikeButton from '../components/LikeButton';

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/blogs.json');
        const data = await response.json();
        setBlogPosts(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100">
        <h1 className="text-3xl font-bold text-cyan-400">Loading Blogs...</h1>
      </div>
    );
  }

  // Sort by latest date
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  return (
    <div className="min-h-screen bg-transparent text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="mx-auto mb-8 mt-16 md:mt-24 md:mb-14 w-min whitespace-nowrap text-5xl font-extrabold text-center bg-gradient-to-r from-primaryBlue via-cyan-200 to-lightBlue text-transparent bg-clip-text leading-tight sm:leading-none uppercase">
          Blogs
        </h2>

        {/* Featured Article */}
        {sortedPosts.length > 0 && (
          <div className="mt-16 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <h2 className="text-3xl font-bold text-cyan-400 p-6">Featured Article</h2>
            <div className="md:flex md:gap-3">
              <div className="md:w-1/2">
                <img
                  src={sortedPosts[0].image}
                  alt={sortedPosts[0].title}
                  className="w-full p-6 pt-0 h-72 object-cover rounded-4xl"
                />
              </div>
              <div className="md:w-1/2 p-3">
                <h3 className="text-3xl font-bold text-cyan-300 mb-4">{sortedPosts[0].title}</h3>
                <p className="text-gray-400 mb-4">{sortedPosts[0].excerpt}</p>
                <Link
                  to={`/blogs/${sortedPosts[0].id}`}
                  className="inline-block bg-cyan-500 text-gray-900 font-bold py-2 px-4 rounded hover:bg-cyan-400 transition-colors duration-300"
                >
                  Read Full Article
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* All Articles */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sortedPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blogs/${post.id}`}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-400/10 transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="bg-cyan-500 text-gray-900 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold mb-2 text-cyan-300 hover:text-cyan-400 transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.readTime}</span>
                  <LikeButton postId={post.id} initialLikes={post.likes || 0} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

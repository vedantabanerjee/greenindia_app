/* 
THIS IS THE BLOGS PAGE. 
FUNCTIONS:
  - Calls the News API and fetches articles from different sources about renewable or green energy
  - Sends the data to the BlogsCard component which returns a Card with the raw data styled and embedded
  - Exports that and sends to the original page -> std::out
*/
"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "@/components/BlogCard";

const Info: React.FC = () => {
  // States to track blogs and loading statuses
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(true);

  const NEWS_API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Fetch blogs from the News API
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=renewable energy OR green energy OR sustainable energy&apiKey=${NEWS_API_KEY}`
        );

        // Update the blogs state with the fetched data
        setBlogs(response.data.articles);
        setLoading(false);
      } catch (error) {
        // Log error if fetching blogs fails
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    // Calling the fetchBlogs function when the component mounts
    fetchBlogs();
  }, []);

  const handleModalClose = () => {
    setShowModal(false);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="flex flex-col items-center p-4 md:p-8 bg-gray-100 min-h-screen">
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm mx-auto">
            <h2 className="text-xl font-semibold mb-4">Welcome!</h2>
            <p className="mb-4">
              Hello! Welcome to our Green Energy and Sustainability Blogs page. Here you can find articles about renewable energy, green energy,
              and sustainable practices.
            </p>
            <p className="mb-6">
              I used the developmental version of NewsAPI which
              does not let me fetch data from a production server. Sadly I cannot afford to 
              upgrade to a premium version. You can locally run my code to view this feature or
              see the screen shots of this product on my github.
            </p>
            <a
              href="https://github.com/vedantabanerjee/greenindia_app"
              className="block text-blue-500 hover:underline mb-4"
            >
              Go to GitHub Repository
            </a>
            <button
              onClick={handleModalClose}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
            >
              Continue to Blogs
            </button>
          </div>
        </div>
      )}

      <div id="blogs" className="mt-8 md:mt-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-8 text-center">
          Blogs about Green Energy and Sustainability
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              summary={blog.description}
              author={blog.author}
              date={blog.publishedAt}
              image={blog.urlToImage}
              link={blog.url}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Info;

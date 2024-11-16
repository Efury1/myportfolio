import * as React from 'react';
import Navbar from '@/components/Navbar'; // Import Navbar component
import axios from 'axios';
import './globals.css';

interface VideoItem {
  title: string;
  link: string;
  pubDate: string;
  author: string;
  id: string;
}

const RSS: React.FC = () => {
  const [videos, setVideos] = React.useState<VideoItem[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Fetch and parse YouTube RSS feed data from the server-side API
    const fetchRSSFeed = async () => {
      try {
        // Fetch the data from the server-side API
        const response = await axios.get('/api/youtube');
        const items = response.data.items.map((item: any) => ({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          author: item.author || 'Unknown',
          id: item.id,
        }));

        setVideos(items);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch YouTube videos.');
        setLoading(false);
      }
    };

    fetchRSSFeed();
  }, []);

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Navbar at the very top */}
      <Navbar />

      {/* Main Container */}
      <div className="max-w-5xl mx-auto py-10 px-5">
        <h1 className="text-3xl font-bold text-teal-700 text-center mb-10">
          Latest Videos from Girl Chronically Online
        </h1>

        {loading && <p className="text-center text-lg text-gray-700">Loading...</p>}
        {error && <p className="text-center text-lg text-red-500">{error}</p>}

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {!loading &&
            !error &&
            videos.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg border border-gray-300 p-6 hover:shadow-xl transition-shadow"
              >
                {/* Video Embed Section */}
                <div className="flex justify-center mb-4">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.link.split('v=')[1]}`}
                    title={video.title}
                    className="w-full h-56 rounded-md"
                    allowFullScreen
                  />
                </div>

                {/* Video Details */}
                <h2 className="font-bold text-lg text-teal-700 mb-2">{video.title}</h2>
                <p className="text-sm text-gray-500 mb-4">
                  Published on: {new Date(video.pubDate).toLocaleDateString()}
                </p>
                <a
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800 transition"
                >
                  Watch on YouTube
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RSS;

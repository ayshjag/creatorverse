import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client'; // Ensure this path is correct

const ViewCreator = () => {
  const { id } = useParams(); // Get the creator ID from the URL parameters
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('creators')
          .select('*')
          .eq('id', id)
          .single(); // Fetch a single record

        if (error) {
          console.error('Error fetching creator:', error); // Log the error for debugging
          throw error;
        }
        setCreator(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCreator();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      {creator ? (
        <div className="max-w-lg mx-auto rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full" src={creator.imageURL} alt={creator.name} />
          <div className="px-6 py-4">
            <h3 className="font-bold text-2xl mb-2">{creator.name}</h3>
            <p className="text-gray-700 text-base mb-4">{creator.description}</p>
            <a href={creator.url} target="_blank" rel="noopener noreferrer"
               className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Visit
            </a>
          </div>
          <div className="px-6 py-4 flex justify-between">
            <Link to={`/edit/${creator.id}`}>
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                Edit
              </button>
            </Link>
            <Link to="/">
              <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                Back to List
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <p>No creator found</p>
      )}
    </div>
  );
};

export default ViewCreator;

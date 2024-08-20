import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client'; // Ensure this path is correct

const EditCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState({ name: '', url: '', description: '', imageURL: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        const { data, error } = await supabase
          .from('creators')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;

        setCreator(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCreator();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreator((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { error } = await supabase
        .from('creators')
        .update(creator)
        .eq('id', id);

      if (error) throw error;

      navigate(`/creators/${id}`);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDelete = async () => {
    try {
      const { error } = await supabase
        .from('creators')
        .delete()
        .eq('id', id);

      if (error) throw error;

      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Edit Creator</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={creator.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="url" className="block text-gray-700 text-sm font-bold mb-2">URL</label>
          <input
            id="url"
            name="url"
            type="url"
            value={creator.url}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            value={creator.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="imageURL" className="block text-gray-700 text-sm font-bold mb-2">Image URL</label>
          <input
            id="imageURL"
            name="imageURL"
            type="url"
            value={creator.imageURL}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Creator
        </button>
        <button
          type="button"
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
        >
          Delete Creator
        </button>
      </form>
    </div>
  );
};

export default EditCreator;

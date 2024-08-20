import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const CreatorCard = ({ creator }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={creator.imageURL} alt={creator.name} />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{creator.name}</h3>
        <p className="text-gray-700 text-base">{creator.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <a href={creator.url} target="_blank" rel="noopener noreferrer"
           className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Visit
        </a>
        <Link to={`/creators/${creator.id}`}>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            View Creator
          </button>
        </Link>
        <Link to={`/edit/${creator.id}`}>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CreatorCard;

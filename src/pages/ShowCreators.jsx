// src/pages/ShowCreators.jsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data } = await supabase.from('creators').select();
      setCreators(data);
    };
    fetchCreators();
  }, []);

  return (
    <div className="creators-list">
      {creators.length > 0 ? (
        creators.map((creator) => (
          <CreatorCard key={creator.id} creator={creator} />
        ))
      ) : (
        <p>No creators found</p>
      )}
    </div>
  );
};

export default ShowCreators;

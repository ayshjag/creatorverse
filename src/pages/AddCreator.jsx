// src/pages/AddCreator.jsx
import React, { useState } from 'react';
import { supabase } from '../client';

const AddCreator = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase.from('creators').insert([{ name, url, description, imageURL }]);
    setName('');
    setUrl('');
    setDescription('');
    setImageURL('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input value={imageURL} onChange={(e) => setImageURL(e.target.value)} placeholder="Image URL" />
      <button type="submit">Add Creator</button>
    </form>
  );
};

export default AddCreator;

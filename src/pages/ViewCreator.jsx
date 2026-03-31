import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

function ViewCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCreator() {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();
      if (error) console.error(error);
      else setCreator(data);
      setLoading(false);
    }
    fetchCreator();
  }, [id]);

  async function handleDelete() {
    if (!confirm(`Delete "${creator.name}"? This cannot be undone.`)) return;
    const { error } = await supabase.from('creators').delete().eq('id', id);
    if (error) console.error(error);
    else navigate('/');
  }

  if (loading) {
    return (
      <div className="loading-wrap">
        <div className="spinner" />
        <span>Loading…</span>
      </div>
    );
  }
  if (!creator) return <p>Creator not found.</p>;

  return (
    <div className="view-page">
      <Link to="/" className="back-link">← Back to all creators</Link>

      <div className="view-hero">
        {creator.imageURL ? (
          <img src={creator.imageURL} alt={creator.name} className="view-banner" />
        ) : (
          <div className="view-banner-placeholder">🎬</div>
        )}
        <div className="view-overlay">
          <h1>{creator.name}</h1>
        </div>
      </div>

      <div className="view-content">
        <div className="view-meta">
          <span className="view-url-badge">🔗 {creator.url}</span>
        </div>

        <p className="view-description">{creator.description}</p>

        <div className="view-actions">
          <a href={creator.url} target="_blank" rel="noreferrer" className="btn btn-primary">
            ↗ Visit Channel
          </a>
          <Link to={`/edit/${creator.id}`} className="btn btn-outline">
            ✏️ Edit
          </Link>
          <button onClick={handleDelete} className="btn btn-danger">
            🗑 Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewCreator;

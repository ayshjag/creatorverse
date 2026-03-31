import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';
import Card from '../components/Card';

function ShowCreators() {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCreators() {
      const { data, error } = await supabase.from('creators').select('*');
      if (error) {
        console.error(error);
        setError(error.message);
      } else {
        setCreators(data);
      }
      setLoading(false);
    }
    fetchCreators();
  }, []);

  return (
    <div>
      <div className="hero">
        <h1 className="hero-title">Discover Your Favorite Creators</h1>
        <p className="hero-subtitle">A curated list of content creators worth following</p>
        <div className="hero-actions">
          <Link to="/add" className="btn btn-primary">+ Add a Creator</Link>
        </div>
      </div>

      <div className="section-header">
        <span className="section-title">All Creators</span>
        {!loading && (
          <span className="creator-count">{creators.length} creator{creators.length !== 1 ? 's' : ''}</span>
        )}
      </div>

      {loading ? (
        <div className="loading-wrap">
          <div className="spinner" />
          <span>Loading creators…</span>
        </div>
      ) : error ? (
        <div className="empty-state">
          <div className="empty-state-icon">⚠️</div>
          <h3>Failed to load creators</h3>
          <p style={{color:'var(--danger)',fontSize:'0.85rem',fontFamily:'monospace'}}>{error}</p>
        </div>
      ) : creators.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">🎬</div>
          <h3>No creators yet</h3>
          <p>Add your first creator to get started!</p>
          <Link to="/add" className="btn btn-primary">+ Add a Creator</Link>
        </div>
      ) : (
        <div className="card-grid">
          {creators.map((creator) => (
            <Card key={creator.id} creator={creator} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ShowCreators;

import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { supabase } from '../client';

function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', url: '', description: '', imageURL: '' });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    async function fetchCreator() {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();
      if (error) console.error(error);
      else setForm({
        name: data.name || '',
        url: data.url || '',
        description: data.description || '',
        imageURL: data.imageURL || '',
      });
      setLoading(false);
    }
    fetchCreator();
  }, [id]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    const payload = {
      name: form.name,
      url: form.url,
      description: form.description,
      imageURL: form.imageURL.trim() || null,
    };
    const { error } = await supabase.from('creators').update(payload).eq('id', id);
    if (error) {
      alert('Error: ' + error.message);
      setSubmitting(false);
    } else {
      navigate(`/creator/${id}`);
    }
  }

  async function handleDelete() {
    if (!confirm(`Delete "${form.name}"? This cannot be undone.`)) return;
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

  return (
    <div className="form-page">
      <Link to={`/creator/${id}`} className="back-link">← Back</Link>

      <div className="form-page-header">
        <h1>Edit Creator</h1>
        <p>Update the details for this creator</p>
      </div>

      <form onSubmit={handleSubmit} className="creator-form">
        <div className="form-field">
          <label className="form-label">Name <span className="required-star">*</span></label>
          <input
            className="form-input"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label className="form-label">Channel URL <span className="required-star">*</span></label>
          <input
            className="form-input"
            type="url"
            name="url"
            value={form.url}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label className="form-label">Description <span className="required-star">*</span></label>
          <textarea
            className="form-textarea"
            name="description"
            value={form.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label className="form-label">Image URL <span style={{color:'var(--text-muted)',fontWeight:400}}>(optional)</span></label>
          <input
            className="form-input"
            type="url"
            name="imageURL"
            value={form.imageURL}
            onChange={handleChange}
          />
          <div className="image-preview">
            {form.imageURL.trim()
              ? <img src={form.imageURL} alt="preview" onError={(e) => { e.target.style.display='none'; }} />
              : <span>Image preview</span>
            }
          </div>
        </div>

        <hr className="form-divider" />

        <div className="form-buttons">
          <button type="submit" className="btn btn-primary" disabled={submitting}>
            {submitting ? 'Saving…' : '✓ Save Changes'}
          </button>
          <Link to={`/creator/${id}`} className="btn btn-ghost">Cancel</Link>
        </div>
      </form>

      <div className="danger-zone">
        <h3>Danger Zone</h3>
        <p>Permanently remove this creator. This action cannot be undone.</p>
        <button onClick={handleDelete} className="btn btn-danger">🗑 Delete Creator</button>
      </div>
    </div>
  );
}

export default EditCreator;

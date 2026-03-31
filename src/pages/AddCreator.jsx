import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../client';

function AddCreator() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', url: '', description: '', imageURL: '' });
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    const payload = { name: form.name, url: form.url, description: form.description };
    if (form.imageURL.trim()) payload.imageURL = form.imageURL.trim();

    const { error } = await supabase.from('creators').insert([payload]);
    if (error) {
      alert('Error: ' + error.message);
      setSubmitting(false);
    } else {
      navigate('/');
    }
  }

  return (
    <div className="form-page">
      <Link to="/" className="back-link">← Back</Link>

      <div className="form-page-header">
        <h1>Add a Creator</h1>
        <p>Share a content creator you think is worth following</p>
      </div>

      <form onSubmit={handleSubmit} className="creator-form">
        <div className="form-field">
          <label className="form-label">
            Name <span className="required-star">*</span>
          </label>
          <input
            className="form-input"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="e.g. Marques Brownlee"
          />
        </div>

        <div className="form-field">
          <label className="form-label">
            Channel URL <span className="required-star">*</span>
          </label>
          <input
            className="form-input"
            type="url"
            name="url"
            value={form.url}
            onChange={handleChange}
            required
            placeholder="https://youtube.com/@mkbhd"
          />
        </div>

        <div className="form-field">
          <label className="form-label">
            Description <span className="required-star">*</span>
          </label>
          <textarea
            className="form-textarea"
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            placeholder="What kind of content do they make?"
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
            placeholder="https://..."
          />
          <div className="image-preview">
            {form.imageURL.trim()
              ? <img src={form.imageURL} alt="preview" onError={(e) => { e.target.style.display='none'; }} />
              : <span>Image preview will appear here</span>
            }
          </div>
        </div>

        <hr className="form-divider" />

        <div className="form-buttons">
          <button type="submit" className="btn btn-primary" disabled={submitting}>
            {submitting ? 'Adding…' : '+ Add Creator'}
          </button>
          <Link to="/" className="btn btn-ghost">Cancel</Link>
        </div>
      </form>
    </div>
  );
}

export default AddCreator;

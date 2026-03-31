import { Link } from 'react-router-dom';

function Card({ creator }) {
  const { id, name, url, description, imageURL } = creator;

  return (
    <article className="card">
      <div className="card-image-wrap">
        {imageURL ? (
          <img src={imageURL} alt={name} className="card-image" />
        ) : (
          <div className="card-image-placeholder">🎬</div>
        )}
      </div>
      <div className="card-body">
        <h2 className="card-name">
          <Link to={`/creator/${id}`}>{name}</Link>
        </h2>
        <p className="card-description">{description}</p>
        <div className="card-footer">
          <a href={url} target="_blank" rel="noreferrer" className="btn btn-secondary">
            ↗ Visit Channel
          </a>
          <Link to={`/creator/${id}`} className="btn btn-ghost">View</Link>
          <Link to={`/edit/${id}`} className="btn btn-outline">Edit</Link>
        </div>
      </div>
    </article>
  );
}

export default Card;

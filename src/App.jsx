import { useRoutes, Link } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';
import './App.css';

function App() {
  const element = useRoutes([
    { path: '/', element: <ShowCreators /> },
    { path: '/creator/:id', element: <ViewCreator /> },
    { path: '/edit/:id', element: <EditCreator /> },
    { path: '/add', element: <AddCreator /> },
  ]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">✦ Creatorverse</Link>
          <Link to="/add" className="btn btn-primary">+ Add Creator</Link>
        </div>
      </nav>
      <div className="container">{element}</div>
    </>
  );
}

export default App;

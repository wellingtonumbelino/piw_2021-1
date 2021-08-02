import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

// Imports locais
import { HomePage } from './components/pages/HomePage';
import { PostPage } from './components/pages/PostPage';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Route
          exact path="/"
          component={HomePage}
        />

        <Route
          path="/post-page"
          component={PostPage}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
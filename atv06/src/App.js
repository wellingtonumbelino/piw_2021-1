import './App.css';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { createContext, useState } from 'react';

// Imports locais
import { HomePage } from './components/pages/HomePage';
import { PostPage } from './components/pages/PostPage';
import { Login } from './components/pages/Login';
import { RegisterUser } from './components/pages/RegisterUser';

export const AuthContext = createContext(null);

function App() {
  const [auth, setAuth] = useState({ token: localStorage.getItem("token"), name: localStorage.getItem("name") });

  const setAuthLS = (newAuth) => {
    setAuth(newAuth);
    localStorage.setItem("token", newAuth.token);
    localStorage.setItem("name", newAuth.name);
  }

  return (
    <AuthContext.Provider value={{ auth: auth, setAuth: setAuth }}>
      <BrowserRouter>
        <div className="app">
          <Route
            exact path="/"
            component={HomePage}
          >
            {auth.token == null ? <Redirect to="/login" /> : <HomePage />}
          </Route>

          <Route
            path="/post-page"
            component={PostPage}
          />

          <Route
            path="/login"
            component={Login}
          />

          <Route
            path="/register-user"
            component={RegisterUser}
          />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
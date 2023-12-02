import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import Header from "./components/Header/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedRouteForAuth from "./components/ProtectedRouteForAuth";
import ArticlePage from "./pages/ArticlePage";
import Articles from "./pages/Articles";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import NewArticle from "./pages/NewArticle";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Articles />} />
          <Route
            path="/sign-in"
            element={
              <ProtectedRouteForAuth>
                <Login />
              </ProtectedRouteForAuth>
            }
          />
          <Route
            path="/sign-up"
            element={
              <ProtectedRouteForAuth>
                <Register />
              </ProtectedRouteForAuth>
            }
          />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
          <Route path="/articles/:slug/edit" element={<Edit />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/new-article" element={<NewArticle />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

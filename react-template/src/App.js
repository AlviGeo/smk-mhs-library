import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import UserDetails from "./pages/UserDetails/userDetails";
import New from "./pages/new/New";
import NewBooks from "./pages/new/NewBooks";
import NewCategories from "./pages/new/NewCategories";
import { bookInputs, userInputs, categoryInputs } from "./formSource";
import "./style/dark.scss";

// Context
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";
import BookDetails from "./pages/BookDetails/BookDetails";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  // console.log(currentUser);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />

             {/* Users Routes */}
            <Route path="users">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path=":userId"
                element={
                  <RequireAuth>
                    <UserDetails />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={userInputs} categories={categoryInputs} title="Add New User" />
                  </RequireAuth>
                }
              />
            </Route>

            {/* Book Routes */}
            <Route path="books">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path=":bookId"
                element={
                  <RequireAuth>
                    <BookDetails />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <NewBooks inputs={bookInputs} title="Add New Book" />
                  </RequireAuth>
                }
              />
            </Route>

            {/* Category Routes */}
            <Route path="category">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <NewCategories inputs={categoryInputs} title="Add New Book Category" />
                  </RequireAuth>
                }
              />
            </Route>


             {/* History Routes */}
            <Route path="history">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

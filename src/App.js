import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import ListProduct from "./pages/list/ListProduct";
import ListCoach from "./pages/list/ListCoach";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import AddProduct from "./pages/new/AddProduct";
import AddCoach from "./pages/new/AddCoach";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs, coachInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter> 
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<ListProduct />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<AddProduct inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="coachs">
              <Route index element={<ListCoach />} />
              <Route path=":coachId" element={<Single />} />
              <Route
                path="new"
                element={<AddCoach inputs={coachInputs} title="Add New Coach" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

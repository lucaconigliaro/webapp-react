import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SingleMoviePage from "./pages/SingleMoviePage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies">
              <Route path="" element={<MoviesPage />} />
              <Route path=":slug" element={<SingleMoviePage /> } />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
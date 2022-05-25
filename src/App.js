// Import Halaman Home
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/Home";
import CreateMovie from "./pages/movie/Create";
import NowPlaying from "./pages/movie/NowPlaying";
import ToptRatedMovie from "./pages/movie/TopRated";
import {ThemeProvider} from "styled-components";
import theme from './utils/constants/theme';

function App() {
  /**
   * Menampilkan Halaman Home.
   * Tag div bisa diganti dengan tag <>.
   * Tag <> adalah React fragment
   */
  return (
    <div>
      <ThemeProvider theme={theme}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/movie/create" element={<CreateMovie/>}/>
              <Route path="/movie/popular" element={<ToptRatedMovie/>} />
              <Route path="/movie/now" element={<NowPlaying/>} />
              <Route path="/movie/top" element={<ToptRatedMovie/>} />
            </Routes>
          </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;

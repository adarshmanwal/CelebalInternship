import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import ArtistDetail from "./pages/detail/artist/ArtistDetail";
import { SearchProvider } from "./context/SearchContext";
import { PlaylistProvider } from "./context/PlaylistContext";

function App() {
  return (
    <>
      <SearchProvider>
        <PlaylistProvider>
          <Router>
            <div className="w-full min-h-screen bg-zinc-950 text-neutral-400 flex flex-col p-2 overflow-hidden">
              <Routes>
                <Route exact path="/" element={<Main></Main>} />
                <Route
                  path="/artist-detail"
                  element={<ArtistDetail></ArtistDetail>}
                />
              </Routes>
            </div>
          </Router>
        </PlaylistProvider>
      </SearchProvider>
    </>
  );
}

export default App;

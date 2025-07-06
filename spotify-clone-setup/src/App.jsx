import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";

function App() {
  return (
    <>
      <Router>
        <div className="w-full min-h-screen bg-zinc-950 text-neutral-400 flex flex-col p-2 overflow-hidden">
          <Routes>
            <Route
              exact
              path="/"
              element= {<Main></Main>}
            />
            <Route
              path="/search"
              element={
                <div className="w-full flex-1 flex gap-x-2 relative">
                  {/* Search content goes here */}
                </div>
              }
            />
            <Route
              path="/library"
              element={
                <div className="w-full flex-1 flex gap-x-2 relative">
                  {/* Library content goes here */}
                </div>
              }
            />
            <Route
              path="/playlist/:id"
              element={
                <div className="w-full flex-1 flex gap-x-2 relative">
                  {/* Playlist content goes here */}
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

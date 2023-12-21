import 'bootstrap/dist/css/bootstrap.min.css';
import ToolBar from "./components/ToolBar/ToolBar.tsx";
import TVShows from "./containers/HomePage/TVShows.tsx";
import {Route, Routes} from "react-router-dom";
import NotFound from "./components/NotFound/NoFound.tsx";

const App = () => {
    return (
    <div>
        <header>
            <ToolBar/>
        </header>
        <main>
            <Routes>
                <Route path="/" element={
                    <TVShows/>
                }/>
                <Route path="*" element={
                    <NotFound />
                } />
            </Routes>
        </main>
    </div>
  )
};

export default App

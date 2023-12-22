import 'bootstrap/dist/css/bootstrap.min.css';
import ToolBar from './components/ToolBar/ToolBar';
import TVShows from './containers/HomePage/TVShows';
import {Route, Routes} from 'react-router-dom';
import NotFound from './components/NotFound/NoFound';
import TVShow from './components/TVShow/TVShow';

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
          }>
            <Route path="/shows/:id" element={
              <TVShow/>
            }/>
          </Route>
          <Route path="*" element={
            <NotFound/>
          }/>
        </Routes>
      </main>
    </div>
  );
};

export default App;

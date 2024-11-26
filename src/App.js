import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { navigationLinks } from './routers';
import Layout from './layout';
import PageNotFound from './sessions/pagenotfound';
import Dashboard from './pages/dashboard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        {
          navigationLinks.map((item, index) => (
            <Route path={item.path} element={item.component} key={"route"+index} />
          ))
        }
        </Route>

        <Route path='*' element={
          <PageNotFound />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

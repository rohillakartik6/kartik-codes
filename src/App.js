import './App.css';
import UserLayout from './components/common/Layout';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './components/Dashboard';
import About from './components/pages/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact element={<UserLayout />}>
            <Route exact path='/dashboard' element={<Dashboard />} />
            <Route exact path='/about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

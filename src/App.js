import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
      {/* <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} /> */}
      </Route>
    </Routes>
    </>
  );
}

export default App;

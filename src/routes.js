import Menu from 'pages/menu';
import Home from 'pages/Home';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from 'components/Header';
import DefaultPage from 'components/DefaultPage';
import Info from 'pages/Info';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<DefaultPage />}> 
            <Route index element={<Home />} />
            <Route path='menu' element={<Menu />} />
            <Route path='info' element={<Info />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}
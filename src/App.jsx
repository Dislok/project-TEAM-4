import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FooterComponent, NavBarComponent } from './components';
import { Agenda } from './pages/Agenda/Agenda';

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <NavBarComponent style={{ height: '8vh' }} />
        <main className="flex-grow-1" style={{ marginTop: '8vh' }}>
          <Routes>
            <Route path="/" element={<Agenda />} />
            <Route path="/*" element={<Agenda />} />
          </Routes>
        </main>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
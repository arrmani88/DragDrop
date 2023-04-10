import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import DragDrop from './pages/DragDrop';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DragDrop from './pages/DragDrop';
import FinalList from './pages/AcceptedCandidates';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DragDrop />} />
          <Route path="/accepted-candidates" element={<FinalList />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

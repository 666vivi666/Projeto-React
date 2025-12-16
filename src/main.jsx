
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './components/BotaoFugitivo/Home/BotaoF.css';
import Home from './components/BotaoFugitivo/Home/BotaoF.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

// Prevent "Cannot set property fetch of #<Window> which has only a getter" in iframe sandbox platform proxies
try {
  let currentFetch = window.fetch;
  const overrideFetch = (target: any) => {
    try {
      Object.defineProperty(target, 'fetch', {
        configurable: true,
        enumerable: true,
        get() {
          return currentFetch;
        },
        set(value) {
          currentFetch = value;
        }
      });
      return true;
    } catch (e) {
      return false;
    }
  };
  if (!overrideFetch(window)) {
    overrideFetch(Window.prototype);
  }
} catch (e) {
  console.warn('Sandbox fetch setter bypass applied with fallback:', e);
}

import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

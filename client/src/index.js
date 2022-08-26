import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './components/App.jsx';

import request from './request.js';
import styles from  './styles.css';



const root = createRoot(document.getElementById('root'))
root.render(<App/>);

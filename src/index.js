import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Routers from './routes.js';
import './main.css';
import './post.css';
import 'highlight.js/styles/arta.css'
render(<Routers />,document.getElementById('root'));

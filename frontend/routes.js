import { About } from './components/about.js';
import { Home } from './components/home.js';

export const routes = [
    { path: '', Component: Home },
    { path: 'home', Component: Home },
    { path: 'about', Component: About }
]

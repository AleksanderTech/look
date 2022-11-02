import About from './components/about.js';
import Home from './components/home.js';

export const router = {
    routes: [
        { path: '/', component: Home.render() },
        { path: '/about', component: About.render() }
    ],
    goTo(path) {
        window.location.href = path;
    }
}

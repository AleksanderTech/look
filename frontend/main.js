import { Look } from './look/look.js';
import { Home } from './components/home.js';
import { Router } from './look/router.js';
import { routes } from './routes.js';
import { Bus } from './look/bus.js';

const app = document.getElementById('app');

const bus = new Bus();
const router = new Router(app, routes, bus);
const look = new Look(app, router);
look.mount(new Home());

export {
    bus
}

import { render } from './render.js'
import { Event } from '../event.js';

export class Router {
    constructor(element, routes, bus) {
        this.element = element;
        this.routes = routes;
        this.bus = bus;

        window.addEventListener('popstate', (_) => {
            this.findRouteAndRender();
        });

        this.bus.subscribe(Event.ROUTER_PUSH, (path) => {
            window.history.pushState(null, null, path);
            this.findRouteAndRender();
        });
        this.bus.subscribe(Event.ROUTER_REPLACE, (path) => {
            window.history.replaceState(null, null, path);
            this.findRouteAndRender();
        });
    }

    findRouteAndRender() {
        const currentPath = window.location.pathname;
        let route = this.routes.find(route => route.path === currentPath.slice(1));
        if (route) render(this.element, new route.Component());
        else throw new Error('There is no route: ' + currentPath + ' registered');
    }
};

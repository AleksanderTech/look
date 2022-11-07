import { render } from './render.js'

export class Look {
    constructor(element, router) {
        this.element = element;
        this.router = router
    }

    mount(component) {
        if (this.router) this.router.findRouteAndRender();
        else render(element, component);
    }
}

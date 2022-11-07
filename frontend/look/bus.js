export class Bus {
    events = new Map();

    subscribe(event, handler) {
        let handlers = this.events.get(event);

        if (handlers) handlers.add(handler);
        else handlers = new Set([handler]);

        this.events.set(event, handlers);
    }

    publish(event, data) {
        let handlers = this.events.get(event);
        if (handlers) {
            handlers.forEach(handler => {
                handler(data);
            });
        }
    }

    unsubscribe(event, handler) {
        let handlers = this.events.get(event);

        if (handlers) handlers.delete(handler);

        this.events.set(event, handlers);
    }

    clear() {
        this.events.clear();
    }
}
import { bus } from '../main.js';
import { Event } from '../event.js';

export class Home {
    template = `
        <div style="border: 4px dashed black; padding: 1rem;">
            <h1>Home</h1>
            <div>
                <span>Counter: {{counter}}</span>
                <button l-on-click="increment">Increment</button>
            </div>
            <a style="cursor: pointer;" l-on-click="goTo('about')">Go to about page</a>
        </div>
    `;

    data = {
        counter: 0,
    }

    goTo(path) {
        bus.publish(Event.ROUTER_PUSH, path);
    }

    increment() {
        this.data.counter++;
    }
}

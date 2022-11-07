import { bus } from '../main.js';
import { Event } from '../event.js';

export class Home {
    template = `
        <div style="border: 4px dashed black; padding: 1rem;">
            <h1>Home</h1>
            <button style="display: block" l-on-click="toggleCounterVisibility()">Hide/Show counter</button>
            <div l-if="showCounter">
                <span>Counter: {{counter}}</span>
                <button l-on-click="increment">Increment</button>
            </div>
            <a style="cursor: pointer;" l-on-click="goTo('about')">Go to about page</a>
        </div>
    `;

    data = {
        showCounter: true,
        counter: 0,
    }

    toggleCounterVisibility() {
        this.data.showCounter = !this.data.showCounter;
    }

    goTo(path) {
        bus.publish(Event.ROUTER_PUSH, path);
    }

    increment() {
        this.data.counter++;
    }
}

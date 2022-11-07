import { bus } from '../main.js';
import { Event } from '../event.js';

export class About {
    template = `
        <div style="border: 4px dashed blue; padding: 1rem;">
            <h1>About</h1>
            <a style="cursor: pointer;" on-click="goTo('home')">Go to home page</a>
        </div>    
    `;

    goTo(path) {
        bus.publish(Event.ROUTER_PUSH, path);
    }
}

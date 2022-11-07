import { directives } from "./directives/directives.js";
import { replaceVariables } from './replacer.js';

export function render(element, component) {
    let proxyComponent = makeComponentReactive(element, component);
    element.innerHTML = replaceVariables(proxyComponent.template, proxyComponent.data);
    handleDirectives(element, proxyComponent);
}

function handleDirectives(element, component) {
    directives.forEach(directive => {
        directive(element, component);
    })
}

function makeComponentReactive(element, component) {
    let handler = () => {
        return {
            get: (obj, prop) => {
                if (typeof obj[prop] === 'object' && !obj[prop]._isProxy) {
                    return new Proxy(obj[prop], handler());
                }
                return obj[prop];
            },
            set: (obj, prop, value) => {
                obj[prop] = value;
                render(element, component);

                return true;
            }
        };
    };

    return new Proxy(component, handler())
}

export function lOnClick(element, component) {
    for (let el of element.querySelectorAll('[l-on-click]')) {
        let attr = el.getAttribute('l-on-click');
        const splitted = attr.split(/[(),]/g).map(e => e.trim()).filter(e => e);
        el.removeAttribute('l-on-click');
        el.addEventListener('click', () => {
            for (let methodName of Object.getOwnPropertyNames(component.constructor.prototype)) {
                if (methodName === splitted[0]) {
                    component[methodName](...splitted.slice(1).map(e => e.replace(/^'(.*)'$/, '$1')));
                }
            }
        })
    }
}

export function lIf(element, component) {
    for (let el of element.querySelectorAll('[l-if]')) {
        let attr = el.getAttribute('l-if');
        el.removeAttribute('l-if');
        let shouldDisplay = false;
        for (let key of Object.keys(component.data)) {
            if (key === attr && component.data[key]) {
                shouldDisplay = true;
                break;
            }
        }

        if (!shouldDisplay) el.remove();
    }
}

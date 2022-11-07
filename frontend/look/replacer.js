export function replaceVariables(template, data) {
    let matches = template.matchAll(/\{\{(.*?)\}\}/g);

    for (let match of matches) {
        let dataName = match[1];
        let dataValue = data[dataName];

        if (dataValue === null || dataValue === undefined) throw new Error(`Variable with name "${dataName}" has not been provided`);

        template = template.replace(match[0], dataValue);
    }

    return template;
}

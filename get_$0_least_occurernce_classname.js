const classList = $0.classList;
let leastCount = Infinity;
let leastClassName = null;
let leastElements = [];

for (let i = 0; i < classList.length; i++) {
    const className = classList[i];
    const elements = document.getElementsByClassName(className);
    const count = elements.length;

    if (count < leastCount) {
        leastCount = count;
        leastClassName = className;
        leastElements = Array.from(elements);
    }
}
[leastClassName, leastElements]
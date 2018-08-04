export function createElement(type, text = '', classes = [], dataset = {}) {
    const el = document.createElement(type);

    el.textContent = text;
    el.classList.add(...classes);
    Object.assign(el.dataset, dataset);

    return el;
}

export function createRandomArray(count = 1000) {
    return new Array(...new Array(count)).map((el, i, a) => count * Math.random());
}

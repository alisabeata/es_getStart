import { bench, results } from './core.js';
import { createElement } from './utils.js';
import tests from './tests.js';

const testList = document.querySelector('#list');

for (let testIndex = 0; testIndex < tests.length; testIndex++) {
    const testName = tests[testIndex].name;
    const testCases = tests[testIndex].cases;
    const itemNode = createElement('li');
    const nameNode = createElement('div', testName, ['test-name']);
    const listNode = createElement('ul');

    testList.append(itemNode);
    itemNode.append(nameNode, listNode);

    for (let caseIndex = 0; caseIndex < testCases.length; caseIndex++) {
        const itemNode = createElement('li');
        const nameNode = createElement('div', testCases[caseIndex].name, ['case-name'], { testIndex, caseIndex });
        const resultNode = createElement('div', '', ['case-result']);

        itemNode.append(nameNode, resultNode);
        listNode.append(itemNode);
    }
}

testList.addEventListener('click', e => {
    const target = e.target;
    const { testIndex, caseIndex } = target.dataset;

    if (testIndex && caseIndex) {
        target.nextElementSibling.textContent = `ждите...`;

        setTimeout(() => {
            const id = bench(tests[testIndex].cases[caseIndex], tests[testIndex].amount);
            const duration = results(id);

            target.nextElementSibling.textContent = `${duration} мс`;
        });
    }
});

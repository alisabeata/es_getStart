import { createRandomArray, createElement } from './utils.js';

export default [
    {
        name: 'преобразование массива',
        cases: [
            {
                name: 'метод map',
                init() {
                    return [createRandomArray()];
                },
                run(array) {
                    array.map(n => n ** 2);
                }
            },
            {
                name: 'цикл for',
                init() {
                    return [createRandomArray()];
                },
                run(array) {
                    const result = [];
                    for (let i = 0; i < array.length; i++) {
                        result.push(array[i]);
                    }
                }
            }
        ]
    },
    {
        name: 'добавление DOM-элементов',
        cases: [
            {
                name: 'напрямую',
                init() {
                    const elements = createRandomArray(10).map(n => createElement('div', n));
                    const container = createElement('div');

                    document.body.appendChild(container);

                    return [container, elements];
                },
                run(container, elements) {
                    for (let i = 0; i < elements.length; i++) {
                        container.appendChild(elements[i]);
                    }
                },
                clear(container) {
                    container.remove();
                }
            },
            {
                name: 'через fragment',
                init() {
                    const elements = createRandomArray(10).map(n => createElement('div', n));
                    const container = createElement('div');
                    const fragment = document.createDocumentFragment();

                    document.body.appendChild(container);
                    container.appendChild(fragment);

                    return [container, fragment, elements];
                },
                run(container, fragment, elements) {
                    for (let i = 0; i < elements.length; i++) {
                        fragment.appendChild(elements[i]);
                    }

                    container.appendChild(fragment);
                },
                clear(container) {
                    container.remove();
                }
            }
        ]
    },
    {
        name: 'поиск в строке',
        cases: [
            {
                name: 'с конкатенацией',
                run() {
                    const part = '004252050523';
                    let string = part;
                    let count = 0;
                    let lastIndex = 0;

                    for (let i = 0; i < 100; i++) {
                        for (; lastIndex < string.length; lastIndex++) {
                            if (string[lastIndex] === '0') {
                                count++;
                            }
                        }

                        string += part;
                    }
                }
            },
            {
                name: 'без конкатенации',
                run() {
                    const part = '004252050523';
                    let string = part;
                    let count = 0;

                    for (let i = 0; i < 100; i++) {
                        for (let i = 0; i < part.length; i++) {
                            if (part[i] === '0') {
                                count++;
                            }
                        }

                        string += part;
                    }
                }
            }
        ]
    }
];

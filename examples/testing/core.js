export function bench({ name, init, run, clear }, amount = 10000) {
    const LABEL = `bench-${name}`;
    const LABEL_START = `bench-${name}-start`;
    const LABEL_END = `bench-${name}-end`;

    if (!init) {
        init = () => [];
    }
    if (!clear) {
        clear = () => 0;
    }

    for (let i = 0; i < amount; i++) {
        const args = init();
        performance.mark(LABEL_START);
        run(...args);
        performance.mark(LABEL_END);
        performance.measure(LABEL, LABEL_START, LABEL_END);
        clear(...args);
    }

    return LABEL;
}

export function results(name) {
    const measures = performance.getEntriesByName(name);
    let result = 0;

    for (const { duration } of measures) {
        result += duration;
    }

    performance.clearMarks();
    performance.clearMeasures();

    return result.toFixed();
}

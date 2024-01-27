function createHelloWorld() {

    return function(...args: string[]): string {
        const hello = "Hello World"
        return hello;
    };
};

createHelloWorld();

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
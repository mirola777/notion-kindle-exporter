// This file is the entry point of the application. It contains the main logic and may import types and functions from other modules.

import { MyType } from './types';

const main = (): void => {
    const example: MyType = {
        id: 1,
        name: 'Sample'
    };
    console.log(example);
};

main();
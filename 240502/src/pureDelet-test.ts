const mixedArray: object[] = [[], {name: "David"},{name:" jane", age: 22}, ["javascript"],
];

const objectOnly: object[] = pureDelete(mixedArray, (value) => Array.isArray(value))
let nouns = ['apple', 'sister', 'hammer', 'sun', 'table', 'sky', 'lake', 'temperature', 'summer', 'dog', 'coffe'];
// indeksai:    0       1         2        3       4        5       6           7           8       9       10
let helpers = ['in', 'with', 'on', 'my', 'is', 'a', 'the', ' ', 'I', 'always', 'only', 'at'];
// indeksai:    0       1     2      3     4    5     6     7   8     9         10       11

let action = ['drink', 'playing']
let time = ['morning']
let temperature = ['warm']

// Užduotis: Sudarykite šiuos sakinius ir išsaugokite kitamuosiuose:
//    sentence1, sentence2, ... , sentenceN;  N - natūralieji skaičiai.
// 1. my sister is in the lake
let sentence1 = helpers[3] + helpers[7] + nouns[1] + helpers[7] + helpers[4] + helpers[7] + helpers[0] + helpers[7] + helpers[6] + helpers[7] + nouns[6];
//                'my'         ' '        'sister'      ' '          'is'          ' '         'in'          ' '         'the'         ' '       'lake'                                                                               
console.log(sentence1);
// 2. hammer is on the table

let sentence2 = nouns[2] + helpers[7] + helpers[4] + helpers [7] + helpers[2] +  helpers[7] + helpers[6] + helpers[7] + nouns[4];

console.log(sentence2);

// 3. sun is in the sky

let sentence3 = nouns[3] + helpers[7] + helpers[4] + helpers [7] + helpers[0] +  helpers[7] + helpers[6] + helpers[7] + nouns[5];

console.log(sentence3);

// 4. apple is with my sister

let sentence4 = nouns[0] + helpers[7] + helpers[4] + helpers [7] + helpers[1] +  helpers[7] + helpers[3] + helpers[7] + nouns[1];

console.log(sentence4);

// 5. Papildyti masyvą žodžiais, ir sukurti dar 3 +-logiškus sakinius.

// In the morning I always drink coffee

let sentence5 = helpers[0] + helpers[7] + helpers[6] + helpers[7] + time[0] + helpers[7] + helpers[8] + helpers[7] + helpers[9] + helpers[7] + action[0] + helpers[7] + nouns[10];

console.log(sentence5);
// Temperature is warm only in summer

let sentence6 = nouns[7] + helpers[7] + helpers[4] + helpers[7] + temperature[0] + helpers[7] + helpers[10] + helpers[7] + helpers[0] + helpers[7] + nouns[8];

console.log(sentence6);

// My dog is playing at the lake

let sentence7 = helpers[3] + helpers[7] + nouns[9] + helpers[7] + helpers[4] + helpers[7] + action[1] + helpers[7] + helpers[11] + helpers[7] + helpers[6] + helpers[7] + nouns[6];

console.log(sentence7);


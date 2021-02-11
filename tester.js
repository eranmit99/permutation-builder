const PermutationBuilder = require('./PermutationBuilder');

const possiblePermutations = [
    {'opt1': 'Eran', 'opt2': 'Lital'},
    {'opt1': 'Ariel', 'opt2': 'Gil'},
    {'opt1': 'Saba', 'opt2': 'Savta'},
    {'opt1': 'Zeide', 'opt2': 'Bobe'}
];


const res = PermutationBuilder.buildWithTwoOptions(possiblePermutations);

console.log(res);



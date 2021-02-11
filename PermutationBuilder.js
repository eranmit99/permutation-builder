class PermutationBuilder {



    /*
    * 0 0 0 0
    * 0 0 0 1
    * 0 0 1 0
    * 0 0 1 1
    * 0 1 0 0
    * 0 1 0 1
    * 0 1 1 0
    * 0 1 1 1
    * 1 0 0 0
    * 1 0 0 1
    * 1 0 1 0
    * 1 0 1 1
    * 1 1 0 0
    * 1 1 0 1
    * 1 1 1 0
    * 1 1 1 1
    * */

    static buildWithTwoOptions(params) {
        const results = [];
        // decide on the number of possible permutations
        const numberOfRes = Math.pow(2, params.length);
        const currentBitState = {};

        // create the
        for (let i = 0; i < numberOfRes; i++) {
            results[i] = [];
            params.forEach((item, j) => {
                const devNumber = Math.pow(2, params.length - (j + 1));
                if (currentBitState[j] === undefined) {
                    currentBitState[j] = 'opt1';
                }
                if (i !== 0 && i % devNumber === 0) {
                    currentBitState[j] = currentBitState[j] === 'opt1' ? 'opt2' : 'opt1';
                }
                results[i][j] = item[currentBitState[j]];
            });
        }
        return results;
    }
}

module.exports = PermutationBuilder;
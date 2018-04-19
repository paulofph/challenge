export default class Utils {

    //Sort array of Objects by criteria
    static sortArrayOfObjects(array: any[], criteria: string): any[]{
        let sortedArray;

        sortedArray = array.sort(function(a, b) {
            return a.sumOfSubsPrices - b.sumOfSubsPrices;
        });

        return sortedArray;
    }
}

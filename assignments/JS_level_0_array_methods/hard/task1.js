/**Return a new array where the namings are in English
Create some kind of mapping from Armenian to English => 
Ա => A
Բ => B
Ղ => ‘GH’ ..etc */
import products from "../products.js";

const armenianToEnglishMapping = {
    'Ա': 'A',
    'Բ': 'B',
    'Գ': 'G',
    'Դ': 'D',
    'Ե': 'E',
    'Զ': 'Z',
    'Է': 'E',
    'Ը': 'Y',
    'Թ': 'T',
    'Ժ': 'J',
    'Ի': 'I',
    'Լ': 'L',
    'Խ': 'KH',
    'Ծ': 'TS',
    'Կ': 'K',
    'Հ': 'H',
    'Ձ': 'DZ',
    'Ղ': 'GH',
    'Ճ': 'CH',
    'Մ': 'M',
    'Յ': 'Y',
    'Ն': 'N',
    'Շ': 'SH',
    'Ո': 'O',
    'Չ': 'CH',
    'Պ': 'P',
    'Ջ': 'J',
    'Ռ': 'R',
    'Ս': 'S',
    'Վ': 'V',
    'Տ': 'T',
    'Ր': 'R',
    'Ց': 'TS',
    'Ու': 'U', 
    'Փ': 'P',
    'Ք': 'Q',
    'և': 'Ev',
    'Օ': 'O',
    'Ֆ': 'F'
};

const armenianToEnglishLowecaseMapping = {};
Object.keys(armenianToEnglishMapping).forEach((letter) => {
    armenianToEnglishLowecaseMapping[letter.toLowerCase()] = armenianToEnglishMapping[letter].toLowerCase();
})
  
function transcribeArmToEng(string) {
    string = string.toString();
    return string.split('').map((char, index, array) => {
        if(char === 'ւ') return ''; 
        if(char === 'Ո' || char === 'ո') {
            if(array[index + 1] && array[index + 1] === 'ւ') {
                return char.toLowerCase() === char ? 'u' : 'U';
            }
        }  
        return armenianToEnglishMapping[char] || armenianToEnglishLowecaseMapping[char] || char
    }).join('');
}


export const run = () => {
    const englishProducts = [];
    products.forEach((product)=>englishProducts.push({
        name: transcribeArmToEng(product.name),
        price: transcribeArmToEng(product.price),
        producer: transcribeArmToEng(product.producer),
        count: product.count,
    }));
    console.log(englishProducts);
}


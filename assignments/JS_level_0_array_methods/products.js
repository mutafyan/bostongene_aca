const products = [
    { name: 'Անձեռոցիկ', price: '400դրամ', producer: 'Ախթամար ՍՊԸ', count: 300 },
    { name: 'Ատամի  մածուկ', price: '1250դրամ', producer: 'Քոլգեյթ ՍՊԸ', count: 234 }, 
    { name: 'Զուգարանի թուղթ', price: '200դրամ', producer: 'Զիվա ՍՊԸ', count: 120 }, 
    { name: 'Տուփ', price: '10դրամ', producer: 'Յունիփաք գրուփ', count: 1000 }, 
    { name: 'Թաց անձեռոցիկ', price: '600դրամ', producer: 'Ախթամար ՍՊԸ', count: 600 }, 
    { name: 'Ատամի խոզանակ', price: '960 դրամ', producer: 'Քոլգեյթ ՍՊԸ', count: 333 }, 
    { name: 'Սպունգ', price: '300դրամ', producer: 'Զիվա ՍՊԸ', count: 340 },  
    { name: 'Գդալ', price: '7դրամ', producer: 'Յունիփաք գրուփ', count: 2000 }
];

// Method to parse the price and return a number
function parsePrice(priceString) {
    // remove anything not number from the string and convert to string
    return parseInt(priceString.replace(/[^\d]/g, '')); // using regex here
}

// Adding a method to each product to get the pricce as number
products.forEach(product => {
    product.getPrice = function() {
        return parsePrice(this.price);
    };
});

export default products;

// text helpers
export const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export const capitalizeAllFirstLetters = (text) => {
    const splitTexts = text.split(" ");
    return splitTexts.reduce((fullText, currText) => {
        const capText = capitalizeFirstLetter(currText);
        return fullText + " " + capText
    }, "");
}


// number helpers 

export const formatCurrency = (number, currency = "USD") => {
    return new Intl.NumberFormat("en-US", { style: "currency", currency}).format(number)
}

export const getSubPriceTotal = (items) => {
    let itemTotal = 0;
    items.forEach(item => itemTotal = itemTotal + (item.quantity * item.price));
    return itemTotal;
}

export const getTotalDiscountPercentages = (discounts) => {
    let totalDiscounts = discounts.reduce((acc, curr) => acc + curr.percentage, 0);
    return totalDiscounts
}

export const calculateDiscounts = (discounts, total) => {
    let totalDiscounts = 0;
    discounts.forEach(discount => totalDiscounts += discount.percentage);
    const percentage = totalDiscounts / 100;
    const discountTotal = percentage * total;
    return discountTotal;
}

export const getPriceTotal = (items, tax, discounts) => {
    let itemTotal = getSubPriceTotal(items);
    
    if(discounts) {
        itemTotal = itemTotal - calculateDiscounts(discounts, itemTotal);
    }
    if(tax) {
        const taxPercentage = tax / 100;
        const taxTotal = taxPercentage * itemTotal
        itemTotal = itemTotal + taxTotal;
    }
    return itemTotal;
}


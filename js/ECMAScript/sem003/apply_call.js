const product = {
    name: "smartphone",
    price: 500,
    getDescription(discount){
        const finalPrice = this.price - discount;
        return `Товар ${this.name} стоит ${finalPrice}`;
    }
}

function caclDiscount(rate) {
    return (this.price * rate)/ 100;
}

const discProductOne = caclDiscount.call(product, 30);
console.log(discProductOne);

const discProductTwo = caclDiscount.apply(product, [50]);
console.log(discProductTwo);

const descDiscount = product.getDescription.call(product,discProductOne);
console.log(descDiscount);
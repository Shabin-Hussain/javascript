var car= {
    name:'boleno',
    model:'hatch back',
    manufacturer:'maruti',
    price:'10 lakh'
}

//w.a.p to print model and manufacturer name of the given car
console.log(car.model,car.manufacturer);

console.log(`model of the car is ${car['model']} andmanufacturer of the car is ${car.manufacturer}`);



console.log('------------------------------------------------------');

//w.a.p add variant key to the car object with value as 'manual'

car['variant']=['manual']
console.log(car);


console.log('------------------------------------------------------');

//w.a.p to add a new value 'automatic' to the key variant
car.variant.push('automatic')
console.log(car);


console.log('------------------------------------------------------');
car['color']=['red','blue','white']
console.log(car);


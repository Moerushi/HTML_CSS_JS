const user = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        street: '123 Main St'
    },
    contacts: {
        email: 'john@example.com',
        phone: '+123456789'
    }
}

const email = user?.contacts?.email;
console.log(email);

// default value
const defaultValue = user?.otherValue ?? 'Default Value'; // выводит 'Default Value' так как значения user?.otherValue не существует
console.log(defaultValue);

const defaultStreet = user?.address?.street ?? 'Unknown'; // выводит '123 Main St' так как значения есть
console.log(defaultStreet);
class User {
 name;
 surname;
 
 constructor(nm, snm){
    this.name = nm;
    this.surname = snm;
 }

}

class PremiumUser extends User {
    premiumAccount = null;
    setPremiumAccount () {
        this.premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1);
    }
}

class RegularUser extends User {
}

function getAccountInfo(user){
if (user instanceof PremiumUser){
    return `Премиум аккаунт действителен до ${new Date(user?.premiumAccount).getFullYear()}` ?? 'Информация отсутствует.'; // опциональные и дефолтные задания
} else if (user instanceof RegularUser) {
    return `Пользователь ${user.name} ${user.surname} без премиум аккаунта.`;
} else {
    return `Тип пользователя неопределен.`;
}
}

const ivan = new User('Ivan', 'Ivanov');
console.log(getAccountInfo(ivan));

const petr = new PremiumUser('Petr', 'Petrov');
petr.setPremiumAccount();
console.log(getAccountInfo(petr));

const alex = new RegularUser('Alex', 'Alexeev');
console.log(getAccountInfo(alex));

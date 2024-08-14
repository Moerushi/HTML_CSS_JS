let setCookie = (name, value, days) => {
    let expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);

    // encodeURIComponent() - метод, кодирующий компонент универсального идентификатора ресурса (URI) заменой каждой определённой последовательности символов одной, двумя, тремя или четырьмя последовательностями символов, представленных в кодировке UTF-8 (будет только 4 управляющих последовательности для символов, состоящих из 2 "суррогатных" символов).

    // Метод toUTCString() преобразует дату в строку, используя часовой пояс UTC.
    let cookieValue = encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString();
    document.cookie = name + '=' + cookieValue;
}

setCookie('username', 'John Doe', 7);
setCookie('userinfo', 'Mister2', 5);

let getCookie = (name) => {
    let cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        let [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
};

let username = getCookie('username');
console.log('Значение cookie "username": ', username);

// не работает удаление ниже
let deleteCookie = (name) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};

deleteCookie('userinfo');
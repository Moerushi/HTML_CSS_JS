let re1 = new RegExp("abc"); // инициализация реулярного выражения через объект RegExp
let re2 = /аbс/; // инициализация реулярного выражения через литерал регулярного выражения

console.log(/abc/.test("abcde")); // true, через метод регулярного выражения test, в который передается текстовая строка
console.log(/abc/.test("abxde")); // false, через метод регулярного выражения test

console.log(/[0123456789]/.test("in 1992"));
// true
console.log(/[0-9]/.test("in 1992")); // порядок символов определяется в таблице Unicode, в данном случае с 48 по 57
// true

// \d - любая цифра;
// \w - любой алфавитно-цифровой символ (словообразующий символ);
// \s - любой пробельный символ (пробел, табуляция, новая строка и т. п.);
// \D - символ, который не является цифрой;
// \W - не алфавитно-цифровой символ;
// \S - не пробельный символ;
// , - любой символ, кроме новой строки.
// [\d.] означает любую цифру или символ точки. 

let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
// true
console.log(dateTime.test("30-jan-2003 15:20")); // так как там буквы в названии месяца
// false

// Чтобы инвертировать набор символов, то есть сказать, что вы хотите полу­чить любой символ, кроме символов, входящих в данное множество, можно поставить после открывающей скобки символ вставки (^) .

let notBinary = /[^01]/; // ^ создает отрицание регулярного выражения
console.log(notBinary.test("1100100010100110"));
// false
console.log(notBinary.test("1100100010200110"));
// true

// Если после чего-либо в регулярном выражении поставить знак плюс (+), это будет означать, что данный элемент может повторяться несколько раз. Так, /\d+/ соответствует одной или нескольким цифрам.

console.log(/'\d+'/.test("'123'"));
// true
console.log(/' \d+' /.test("' '"));
// false

// Звездочка(*) имеет аналогичное значение, но шаблон с ее использованием соответствует также нулю повторений. Если после чего-то стоит звездоч­ка, данная часть шаблона не мешает соответствию - если не будет найден подходящий текст, то шаблон просто посчитает это нулевым количеством найденных соответствий. 

console.log(/'\d*'/.test("'123'"));
// true
console.log(/'\d*'/.test("' '"));
// true

// Вопросительный знак делает часть шаблона необязательной.

let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
// true
console.log(neighbor.test("neighbor"));
// true

//Чтобы показать, что фрагмент должен встречаться точное количество раз, применяются фигурные скобки. 
// {2} - повториться 2 раза
// {2,4} - минимум 2 раза и максимум 4 раза
// {5,} - повторение 5 и более раз

let dateTimeTwo = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTimeTwo.test("1-30-2003 8:45"));
// true

// Чтобы использовать операторы типа* или+ для нескольких повторений элемента, нужно задействовать скобки.

let cartoonCrying = /boo+(hoo+)+/i; // буква i делает выражение нечувствительным к регистру
console.log(cartoonCrying.test("Boohoooohoohooo"));
// true

let match = /\d+/.exec("один два 100 400"); // возвращает null, если не найдено и выражение, если найдено
// возвращает только первое вхождение
console.log(match);
// ["100"]
console.log(match.index);
// 8

console.log("oдин два 200 400".match(/\d+/)); // метод match для строковых значений
// возвращает только первое вхождение
// ["200"]

let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));

console.log(/bad(ly)?/.exec("badly")); // возвращает полное соотвествие в скобках, а потом то, что в скобках
console.log(/(\d)+/.exec("456"));

console.log(new Date(2024, 5, 7)); // месяяцы начинаются с 0
console.log(new Date(2024, 5, 7).getTime() + ' seconds'); // кол-во секунд с 1970 года
console.log(new Date().getTime()); // для отображения текущего времени
console.log(new Date().getFullYear()); // получение года
console.log(new Date().getMonth()); // получение месяца c 0
console.log(new Date().getDay()); // получение дня недели
console.log(new Date().getTime()); // получение времени в мс
console.log(new Date().getDate()); // получение числа месяца

function getDate(string) {
    let [_, day, month, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string); // _ используется, чтобы пропустит первый элемент полного совпадения
    return new Date(year, month - 1, day);
}

console.log(getDate("03-12-2024"));

// ^ соотвествует началу строки, а $ концу, чтобы не получисло так, что строка начнется с дргого места, и получится неверный результат
// \b ограничивает строку собеих сторон

// Символ вертикальной черты (|) обозначает выбор между шаблонами, расположенными слева и справа от него.
let animalCount = /\b\d+\s(pig|cow|chiken)s?\b/; // сперва возвращает 15 pigs, а затем pigs (из скобок)
console.log(animalCount.exec("15 pigs"));

// точка (.) означает один любой символ
console.log(/^.*x/.exec("abcxe"));

// replace
const line = "My first expression";
console.log(line);
console.log(line.replace(/[i]/g, "y").replace(/[s]/g, "c"));
// чтобы сделать все замены, надо поставить /g после выражения
// глобальная замена без учета регистра gi

console.log("Liskov, Barbara\nMcCarthy, John\nWadler, Philip".replace(/(\w+), (\w+)/g, "$1 $2")); // $1 $2 обозначают группы, закюченные в скобки
// для того чтобы сослаться на полное совпадение, используется комбинация $&.

// также можно передать функцию
const toCapitalLine = "fbi cli";
console.log(toCapitalLine.replace(/\b\w+\b/g, (str) => str.toUpperCase()));

let userName = "dea+hl[]rd";
let text = "Этот dea+hl[]rd раздражает сверх меры.";
let escaped = userName.replace(/[\\[.+*?(){|^$]/g, "\\$&");
console.log(escaped);
// \\ используем, чтобы показать границы строки и для указания спецсиволов
let regexp = new RegExp("\\b" + escaped + "\\b", "gi");
console.log(text.replace(regexp, "_$&_"));

// метод .search(регулярное выражение) -> возвращает первый индекс, по которому было найдено соответствие
console.log("  word".search(/\S/)); // возвращает первый непробельный индекс
console.log("  ".search(/\S/)); // возвращает -1, так как нет непробельных символов

// lastIndexOf
const regLine = "qwerty qwerty";
const reg = new RegExp(regLine,"gi"); // создает из строки регулярное выражение
console.log(reg.source); // источник регулярного выражения
console.log(reg.lastIndex); // поиск следующего соответствия

// match
let input = "Строка с 3 числами... 42 и 88.";
let number = /\b\d+\b/g;
let matching; // через сохранение итераций
while (matching = number.exec(input)){
    console.log("Найдено число", matching[0], "в позиции", matching.index);
}

// символ возврата каретки \r\n

function parseINI(string){
    let result = {};
    let section = result;
string.split(/\r?\n/).forEach(line => {
    let match;
    if (match = line.match(/^(\w+)=(.*)$/)) { // разделил на 4 части, так как использовали группы, и каждая группа имеет свой индекс
        section[match[1]] = match[2];
    } else if (match = line.match(/^\[(.*)\]$/)) {
section = result[match[1]] = {};
    } else if (!/^\s*(;.*)?$/.test(line)){
        throw new Error("Строка некорректна.")
    }
});
return result;
}
console.log(parseINI(`
name=Vasilis
[address]
city=Tessaloniki
`));
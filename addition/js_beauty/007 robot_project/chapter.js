let object = Object.freeze({value: 5}); // для заморозки значения и невозможности дальнейшего изменения
object.value = 10;
console.log(object.value);
const student = {
  firstname: 'Ivan',
  age: 21
}

const getYearOfBirth = (currentYear) => {return currentYear - student.age};

console.log(getYearOfBirth(2022));
student.age = 25;
console.log(getYearOfBirth(2021));

const getYearOfBirthPureVersion = (age, currentYear) => {return age - currentYear};

const addField = (object, key, value) => {
object[key] = value;
return object;
};
const updateStudent = addField(student, 'lastName', 'Belkin');
console.log(student);

const addFieldPureVersion = (object, key, value) => {
  return { // получаем копию исходного объекта и добавляем новое свойство
    ...object,
    [key]: value
  };
  };

const updateStudentPure = addFieldPureVersion (student,'practice time',148);
console.log(updateStudentPure);
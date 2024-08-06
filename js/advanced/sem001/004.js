let lessons = new Map();
lessons.set('Математика','Смирнов');
lessons.set('История','Иванов');
lessons.set('Биология','Иванов');
lessons.set('География','Петров');

const ivanLessons = new Set().add('Математика').add('География');

const students = new Map();
students.set('Иван',ivanLessons );

console.log(`Преподаватель по Математике: ${lessons.get('Математика')}`);
console.log(`Уроки Ивана: ${[...students.get('Иван')].join(', ')}`);
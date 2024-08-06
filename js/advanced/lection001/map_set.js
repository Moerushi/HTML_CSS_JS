let map = new Map ();
map.set ('1','first');
map.set (2,'second');
console.log(map);

console.log(map.get(2));
console.log(map.get('1'));
console.log(map.size);

for (const mapy of map.keys()) {
    console.log(mapy);
}

for (const mapy of map.values()) {
    console.log(mapy);
}

for (const mapy of map.entries()) {
    console.log(mapy);
}

// let map2 = new Map(Object.entries(obj));
// let map3 = Object.fromEntries(map);

let buddies = [
    'Барсик',
    'Барсик',
    'Васька',
    'Барсик',
    'Персик',
    'Барсик',
    'Персик',
]

let uniqueBuddies = new Set(buddies);
console.log(uniqueBuddies);

const arr = Array.from(uniqueBuddies);
console.log(arr);
const { readFile, writeFile, readdir, stat, rename, unlink } = require('fs');

readFile('test.txt', 'utf8', (error, text) => {
    if (error) throw error;
    console.log(text);
});

writeFile('text.txt', 'New text2', err => {
    if (err) console.log(err);
    else console.log('Done');
})

readdir(__dirname, (err, files) => {
    if (err)
        console.log(err);
    else {
        console.log("\nCurrent directory filenames:");
        files.forEach(file => {
            console.log(file);
        })
    }
})

stat(__filename, (err, stats) => {
    if (err)
        console.log(err);
    else {
        console.log(stats);
    }
})

rename('test.txt', 'new_test.txt', (err) => {
    if (err)
        console.log(err);
    else {
        console.log('Done');
    }
})
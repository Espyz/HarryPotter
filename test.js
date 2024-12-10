const abs = [ 'a', 'b', 'c', 'd', 'e', 'f' ];

const m = abs.map((val, ind) => {
    if (val === 'd') {
        return { val, ind };
    }
});

console.log(m);

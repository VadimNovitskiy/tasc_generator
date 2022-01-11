function* oddNum() {
    for(let i = 1; i <= 100; i++ ) {
        yield i;
        i++;
    }
}

function* evenNum() {
    for(let i = 2; i <= 100; i++) {
        yield i;
        i++;
    }
}

function main() {
    let odds = oddNum();
    let evens = evenNum();
    for(let i = 1; i <= 50; i++) {
        console.log(odds.next().value);
        console.log(evens.next().value);
    }
}
main();
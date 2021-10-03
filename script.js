// Test 2 solution.
// The output is printed in the "Test 2" block of the index.html file.
function drawIntegers(from, to) {
    let intWrapper = document.querySelector(".integers-wrapper");
    for (let i = from; i <= to; i++) {
        let integer = document.createElement("div");
        if (i % 3 === 0 && i % 7 === 0) {
            integer.textContent = "OpenSource";
            intWrapper.append(integer);
        } else if (i % 3 === 0) {
            integer.textContent = "Open";
            intWrapper.append(integer);
        } else if (i % 7 === 0) {
            integer.textContent = "Source";
            intWrapper.append(integer);
        } else {
            integer.textContent = +i;
            intWrapper.append(integer);
        }
    }
}

drawIntegers(1, 99);



// Test 3 solution.
// The output of both variants can be seen in the console of the index.html file.
// The "Test 3" block in the index.html is just for easy testing.
function findChildren() {
    let container = document.querySelector(".test3").querySelector(".container");
    // if we need only elements-children, we can use "container.children":
    console.log(container.children);
    // if we need ALL children including empty text nodes, we use "container.childNodes":
    console.log(container.childNodes);
}

findChildren();



// Test 4 solution.
// The output is displayed in the console of the index.html file.
function returnIntegers(array) {
    let summ = 0;
    for (let item of array) {
        if (Number.isInteger(+item)) {
            summ += +item;
        }
    }
    console.log(summ);
    return summ;
}
returnIntegers(["1", "a", "25", "13.1"]);



// Test 5 solution.
function getObj(link) {
    return fetch(link)
        .then((resp) => resp.json())
        .then((resp) => {
            for (let obj of resp) {
                if (obj.id == 5) {
                    // Log just for easy testing :)
                    console.log(obj);
                    return obj
                }
            }
        })
        .catch(err => alert("Failed to load data"));
}

getObj("https://jsonplaceholder.typicode.com/posts");



// Test 6 solution.

// "/^(?=.*\bSofteq\b)(?=.*#\brules)\b.*$/m" if we need separete words,
// and "/^(?=.*Softeq)(?=.*#rules).*$/m" if we need just strings match.

// The function for tests below(implies that we need a string match, not separate words),
// you can see the results in the "Test 6" block of the index.html file(valid strings are highlighted):
function findMatches() {
    let reg = /^(?=.*Softeq)(?=.*#rules).*$/m;
    let strings = document.querySelectorAll(".test-string");
    for (let str of strings) {
        if (reg.test(str.textContent)) {
            str.style.background = "lightblue";
        }
    }
}

findMatches();



// Test 7 solution.
function printAlphabet() {
    let arr = [];
    for (let i = 65; i <= 90; i++) {
        arr.push(String.fromCharCode(i));
    }
    // Just for tests: the output array can be found in the console of the index.html.
    console.log(arr);
    return arr
}

printAlphabet();



// Test 8 solution.
// The "startGame" func is just a wrapper to avoid global variables.
function startGame() {
    let countGuesses = 0;
    // Write any secret integer from 1 to 1000000 as a parameter in the "guessInteger" function below.
    guessInteger(999);

    // The result is displayed in the console of the index.html.
    // As you can see below, a "secret" integer value is used only in the "verify" function to compare it with the guess,
    // the output is based only on the calculations.
    function guessInteger(secret, arr) {

        if (!Number.isInteger(secret) || secret <= 0) {
            console.log("The secret integer is out of the 'from 0 to 1 000 000' range or has an invalid value");
            return
        }

        if (countGuesses == 50) {
            console.log("the programm lost :(")
            return
        }

        if (arr) {
            let result = verify(arr[Math.floor(arr.length / 2)]);
            if (result == -1) {
                let newArr = arr.slice(0, arr.indexOf(arr[Math.floor(arr.length / 2)]));
                guessInteger(secret, newArr);
            } else if (result == 1) {
                let newArr = arr.slice(arr.indexOf(arr[Math.floor(arr.length / 2)]), arr.length);
                guessInteger(secret, newArr);
            } else if (result == 0) {
                console.log(`Win in ${countGuesses} guesses. A secret number was: ${arr[Math.floor(arr.length / 2)]}`);
                return
            }
        } else {
            let initialArr = [];
            for (let i = 1; i <= 1000000; i++) {
                initialArr.push(i);
            }
            let result = verify(initialArr[Math.floor(initialArr.length / 2)]);
            if (result == -1) {
                let newArr = initialArr.slice(0, initialArr.indexOf(initialArr[Math.floor(initialArr.length / 2)]));
                guessInteger(secret, newArr);
            } else if (result == 1) {
                let newArr = initialArr.slice(initialArr.indexOf(initialArr[Math.floor(initialArr.length / 2)]), initialArr.length);
                guessInteger(secret, newArr);
            } else if (result == 0) {
                console.log(`Win in ${countGuesses} guesses. A secret number was: ${initialArr[Math.floor(initialArr.length / 2)]}`);
                return
            }
        }

        function verify(guess) {
            countGuesses += 1;
            if (guess == secret) {
                return 0;
            } else if (guess < secret) {
                return 1;
            } else if (guess > secret) {
                return -1;
            }
        }
    }
}

startGame();

// everything be true

function truthCheck(collection, pre) {
    let isTruthy = collection.every(obj => obj[pre]);
    for (const obj of collection) {
        if (!obj[pre]) {
            return false;
        }
    }
    return isTruthy;
}
// into arrow notation
// const truthCheck = (collection, pre) => collection.every(obj => obj[pre]);

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Tinky-Winky", "sex": "male"},{"user": "Tinky-Winky", "sex": "male"},{"user": "Tinky-Winky", "sex": "male"}], "sex"));

// arguments optional

const addTogether = (...args) => {
    const [arg1, arg2] = args;

    if (typeof arg1 !== 'number') {
        return undefined
    }

    if (arg2 === undefined) {
        return num => 
        typeof num !== 'number'
        ? undefined
        : arg1 + num;
    }

    if (typeof arg2 !== 'number') {
        return undefined;
    }
    return arg1 + arg2;
};

console.log(addTogether(2,3));

// make a person

var Person = function(firstAndLast) {
    let firstVar = firstAndLast.split(' ')[0];
    let lastVar = firstAndLast.split(' ')[1];

    this.getFullName = function() {
        return `${firstVar} ${lastVar}`;
    };

    this.getFirstName = function() {
        return firstVar;
    };

    this.getLastName = function() {
        return lastVar;
    };
    
    this.setFirstName = function(first) {
        firstVar = first;
    };

    this.setLastName = function(last) {
        lastVar = last;
    };

    this.setFullName = function(firstAndLast) {
        firstVar = firstAndLast.split(" ")[0];
        lastVar = firstAndLast.split(" ")[1];
    };
};

var clifford = new Person('Clifford Lillard');

console.log(clifford.getFullName());

// map the debris

const GM = 398600.4418;
const earthRadius = 6367.4447;

const orbitalPeriod = arr => arr.map(obj => ({
    name: obj.name,
    orbitalPeriod: Math.round(
            2 * Math.PI * Math.sqrt(
                Math.pow(earthRadius + obj.avgAlt, 3) / GM
            )
        )
    }
));

console.log(orbitalPeriod([{name : "Kable Space Shuttle 1", avgAlt : 35873.55533},{name : "Kable Space Shuttle 2", avgAlt : 32583.88999},{name : "Kable Space Shuttle 3", avgAlt : 36945.77733}]));
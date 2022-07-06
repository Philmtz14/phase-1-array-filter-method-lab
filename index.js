// Code your solution here
function findMatching(collection, name) {
    return collection.filter(n => name.toLowerCase() == n.toLowerCase())
}

function fuzzyMatch (collection, name){
    return collection.filter(n => n.indexOf(name) === 0);
}

function matchName(collection, name) {
    return collection.filter(n => n.name === name);
}
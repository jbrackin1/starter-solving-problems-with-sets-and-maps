function intersection(a, b) {
    let map = new Map();
    let results = new Set();

    for (let e of a){
        map.set(e,e)
    }
    for (let e of b){
        if (map.has(e)){
            results.add(e)
        }
    }
    return Array.from(results);
}

module.exports = intersection;

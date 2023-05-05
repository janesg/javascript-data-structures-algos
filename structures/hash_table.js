class HashTable {
    // Provide a default prime number as size of internal array
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        const PRIME = 31;
        const iterations = Math.min(key.length, 100);
        let total = 0;

        for (let i = 0; i < iterations; i++) {
            let charValue = key[i].charCodeAt(0) - 96;
            total = (total * PRIME) + charValue;
        }

        return Math.abs(total % this.keyMap.length);
    }

    set(key, value) {
        let idx = this._hash(key);
        let obj = this.keyMap[idx] || {};
        this.keyMap[idx] = { ...obj, [key]: value };
    }

    get(key) {
        let idx = this._hash(key);
        let obj = this.keyMap[idx];
        return obj ? obj[key]: undefined;
    }

    keys() {
        let keys = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            let obj = this.keyMap[i];
            if (obj) {
                keys = [...keys, ...Object.keys(obj)];
            }
        }

        return keys;
    }

    values() {
        let values = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            let obj = this.keyMap[i];
            if (obj) {
                values = [...values, ...Object.values(obj)];
            }
        }

        // Remove any duplicate values
        return [...new Set([...values])];
    }
}

let hashTable = new HashTable();
hashTable.set('Arsenal', 78);
console.log(hashTable.get('Arsenal'));
hashTable.set('gcyrc', 55);
hashTable.set('oirhfh', 66);
console.log(hashTable.get('oirhfh'));
console.log(hashTable.get('gcyrc'));
hashTable.set('Arsenal', 80);
console.log(hashTable.get('Arsenal'));
console.log(hashTable.get('missing'));
hashTable.set('oirhfh', 55);
console.log(hashTable.get('oirhfh'));
console.log(hashTable.keys());
console.log(hashTable.values());

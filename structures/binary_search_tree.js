class Node {
    constructor(val) {
        this.val = val;
        this.count = 1;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);

        if (!this.root) {
            this.root = newNode;
        } else {
            let n = this.root;
            let inserted = false;
            while (!inserted) {
                if (val === n.val) {
                    n.count++;
                    inserted = true;
                } else if (val < n.val) {
                    if (n.left) {
                        n = n.left;
                    } else {
                        n.left = newNode;
                        inserted = true;
                    }
                } else {
                    if (n.right) {
                        n = n.right;
                    } else {
                        n.right = newNode;
                        inserted = true;
                    }
                }
            }
        }

        return this;
    }

    find(val) {
        if (!this.root) {
            return false;
        }

        let n = this.root;

        while (n) {
            if (val === n.val) {
                return true;
            } else if (val < n.val) {
                n = n.left;
            } else {
                n = n.right;
            }
        }

        return false;
    }

    bfs() {
        let queue = new Array(this.root);
        let visited = [];

        while (queue.length > 0) {
            let n = queue.shift();
            visited.push(n.val);

            if (n.left) {
                queue.push(n.left);
            }

            if (n.right) {
                queue.push(n.right);
            }
        }

        return visited;
    }

    dfsPreOrder() {
        function traverse(node) {
            // Push the value BEFORE traversing both left and right children
            visited.push(node.val);
    
            if (node.left) {
                traverse(node.left);
            }
    
            if (node.right) {
                traverse(node.right);
            }
        }
    
        let visited = [];

        traverse(this.root);

        return visited;
    }

    dfsPostOrder() {
        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
    
            if (node.right) {
                traverse(node.right);
            }

            // Push the value AFTER traversing both left and right children
            visited.push(node.val);    
        }
    
        let visited = [];

        traverse(this.root);

        return visited;
    }

    dfsInOrder() {
        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
    
            // Push the value AFTER traversing left, but BEFORE traversing right
            visited.push(node.val);    

            if (node.right) {
                traverse(node.right);
            }
        }
    
        let visited = [];

        traverse(this.root);

        return visited;
    }
}

let tree = new BinarySearchTree();
console.log(tree.find(21));
tree.insert(21);
console.log(tree.find(21));
tree.insert(67);
tree.insert(23);
tree.insert(4);
tree.insert(-34);
tree.insert(0);
tree.insert(4);
tree.insert(11);
console.log(tree.find(10));
console.log(tree.find(0));
console.log('              21');
console.log('       4              67');
console.log('  -34     11      23');
console.log('      0');
console.log(`Breadth First Search : ${tree.bfs()}`);
console.log(`Depth First Search (Pre-order): ${tree.dfsPreOrder()}`);
console.log(`Depth First Search (Post-order): ${tree.dfsPostOrder()}`);
console.log(`Depth First Search (In-order): ${tree.dfsInOrder()}`);

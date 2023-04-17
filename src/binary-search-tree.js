const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.roott = null;
  }

  root() {
    return this.roott;
  }

  add(data) {
    this.roott = addFunc(this.roott, data);

    function addFunc(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addFunc(node.left, data);
      } else {
        node.right = addFunc(node.right, data)
      }
      return node;
    }
    }

    has(data) {
      return this.find(data) !== null;
    }
  
    find(data) {
      return findNode(this.roott, data);
  
      function findNode(node, data) {
        if (!node) {
          return null;
        }
        if (node.data === data) {
          return node;
        }
        if (data > node.data) {
          return findNode(node.right, data)
        } else {
          return findNode(node.left, data);
        }
      }
    }

  remove(data) {
    this.roott = removed(this.roott, data);

    function removed(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removed(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removed(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minimum = node.right;
        while (minimum.left) {
          minimum = minimum.left;
        }
        node.data = minimum.data;
        node.right = removed(node.right, minimum.data);
        return node;
      }
    }
  }

  min() {
    if (!this.roott) {
      return null;
    }
    let node = this.roott;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.roott) {
      return null;
    }
    let node = this.roott;
    while (node.right) {
      node = node.right;
    }
    return node.data;
}
}

module.exports = {
  BinarySearchTree
};
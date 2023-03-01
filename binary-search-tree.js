// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {

    constructor(root) {
      this.root = null
    }

    insert(val, currentNode=this.root) {
      let newNode = new TreeNode(val)
      if (this.root === null) return this.root = newNode

      if (val < currentNode.val) {
        if (currentNode.left === null) {
          currentNode.left = newNode
        } else {
        return this.insert(val, currentNode.left)
        }
      }

      if (val > currentNode.val){
        if (currentNode.right === null) {
          currentNode.right = newNode
        } else {
        this.insert(val, currentNode.right)
        }
      }
    }

    // recursion
    // search(val, currentNode = this.root) {
    //   // let currentNode = this.root
    //   // console.log(currentNode.val)
    //   if (!currentNode) return false
    //   if (currentNode.val === val) return true

    //   if (val < currentNode.val){
    //     return this.search(val, currentNode.left)
    //   }if(val > currentNode.val){
    //     return this.search(val, currentNode.right)
    //   }
    // }

    //iteration
    search(val) {
      let curr = this.root

      while(curr){
        if (curr.val === val) return true
        if (val< curr.val) {
          curr = curr.left
        }else {
          curr = curr.right
        }
      }
      return false
    }

    //self, left, right
    preOrderTraversal(currentNode = this.root) {
      if (currentNode === null) return

      console.log(currentNode.val)

      this.preOrderTraversal(currentNode.left)
      this.preOrderTraversal(currentNode.right)
    }
  //good for running in order
  //left, self, right (gives all the values in ascending order)
    inOrderTraversal(currentNode = this.root) {
      if (currentNode === null) return

      this.inOrderTraversal(currentNode.left)
      console.log(currentNode.val)
      this.inOrderTraversal(currentNode.right)
    }

  //left, right, self (1,3,2,5,7,6,4)
  //good for when you need to check the leaves first
    postOrderTraversal(currentNode = this.root) {
      if (currentNode === null) return

      this.postOrderTraversal(currentNode.left)
      this.postOrderTraversal(currentNode.right)
      console.log(currentNode.val)
    }

      // Breadth First Traversal - Iterative (push, and shift)
    ////KNOW HOW TO DO THIS
      breadthFirstTraversal() {
      // console.log(this.root)
      const queue = []
      queue.push(this.root)
      // console.log(queue)
      while(queue.length){
        let ele = queue.shift()
        console.log(ele.val)
        if(ele.left) queue.push(ele.left)
        if(ele.right) queue.push(ele.right)
      }
      return
    }

    // Depth First Traversal - Iterative (push and pop)
    depthFirstTraversal() {
        // console.log(this.root)
        const queue = []
        queue.push(this.root)
        // console.log(queue)
        while(queue.length){
          let ele = queue.pop()
          console.log(ele.val)
          if(ele.left) queue.push(ele.left)
          if(ele.right) queue.push(ele.right)
        }
        return
    }

  }

  module.exports = { BinarySearchTree, TreeNode };

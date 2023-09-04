var inorderTraversal = function(root) {
    let arr = [];
    inOrder(root)
    function inOrder(root){
        if(!root)
        return null
        
        inOrder(root.left)
        arr.push(root.val)
        inOrder(root.right)
    }
    return arr;
};
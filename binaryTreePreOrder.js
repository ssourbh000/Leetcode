var preorderTraversal = function(root) {
    
    let arr = [];
    preOrder(root)
    function preOrder(root){
        if(!root)
        return null
        
        arr.push(root.val)
        preOrder(root.left)
        preOrder(root.right)
    }
    return arr;

};
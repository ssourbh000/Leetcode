var postorderTraversal = function(root) {
    let arr = []
    postOrder(root)
    function postOrder(root){
        if(!root)
        return null

        postOrder(root.left)
        postOrder(root.right)
        arr.push(root.val)
    }
    return arr;
};
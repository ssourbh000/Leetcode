class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

var deleteDuplicates = function(head) {
    if(head == null)
    return null;

    let curr = head;
    while(curr.next != null){
        if(curr.val == curr.next.val){
            curr.next = curr.next.next;
            let nodeToDelete = curr.next;
            delete(nodeToDelete);
        }else{
            curr = curr.next;
        }
    }
    return head;
};

console.log(deleteDuplicates([1,1,2]));
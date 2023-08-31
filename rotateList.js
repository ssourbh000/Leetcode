var rotateRight = function(head, k) {
    if(!head || k === 0)
    return head;

    let curr = head;
    let len = 1;
    while(curr.next){
        curr = curr.next;
        len++;
    }
    console.log(curr.next);
    curr.next = head;
    k = k%len;

    console.log(len);

    for(let i=0; i<len - k; i++){
        curr = curr.next;
    }
    let newNode = curr.next;
    curr.next = null;


    return newNode;
};
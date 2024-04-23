// we will use multiple ES6 modules, since Node uses CommonJS modules by default, and we would need to 
// tell Node to use ES6 modules instead.

// Assignment goals: create two classes or factories
// 1. Linkedlist factor, which will represent the linked list
// 2. Node factory, which will represent the individual nodes in the linked list


// node factory function in ES6 format
export function Node(data){
    return {
        data: data,
        next: null
    };
}

// linked list factory function in ES6 format
export function LinkedList(){
    return {
        head: null, 
        elementCount: 0,

        // append method to add a node to the linked list, we add a Node at the end of the linked list
        append(value){
            const newNode = new Node(value);

            if (!this.head) { //if there's no head, then the new node will be the head
                this.head = newNode;
            } else {
                let current = this.head;
                while (current.next) {
                    current = current.next;
                }
                current.next = newNode;
            }
            this.elementCount++;
        },

        // prepend method, we add a node at the front of the linked list, prior to an existing head
        prepend(value){
            const newNode = new Node(value);

            if (!this.head){ //no Nodes at all
                this.head = newNode;
            } else {
                newNode.next = this.head;
                this.head = newNode;
            }
            this.elementCount++;
        },

        // returns the elementCount of the linked List - represents total number of Nodes in linkedList
        size(){
            return this.elementCount;
        },

        //returns the Node at head, O(1) time complexity
        getHead(){
            return this.head;
        },

        // returns the Node at the tail of the linked list, O(n) time complexity
        getTail(){
            //case 1: no Nodes in linkedList
            if (this.elementCount === 0) return null;
            //case 2: only one Node
            else if (this.elementCount === 1){
                return this.head;
            } else { //case 3: more than 1 Nodes, we go through the LL starting from the head to the tail
                let current = this.head;
                while (current.next != null){
                    current = current.next;
                }
                return current;
            }
        },

        //returns the node at the given index
        at(index){
            if (index > (this.elementCount-1)){
                return null;
            } else {
                let current = this.head;
                let counter = 0;
                while (counter != index){
                    current = current.next;
                    counter++;
                }
                return current;
            }
        },

        //removes the last element from the list
        pop(){
            if (this.elementCount === 0) return;
            else if (this.elementCount === 1) {
                this.head = null;
                this.elementCount--;
                return;
            } else {
                let prev = this.head;
                let current = this.head.next;
                while (current.next != null){
                    current = current.next;
                    prev = prev.next;
                }
                prev.next = null;
                this.elementCount--;
                return;
            }
        },

        //returns true if the passed in value is in the list and otherwise returns false
        contains(value){
            if (this.elementCount === 0) return false;
            else {
                let current = this.head;
                while (current != null){
                    if (current.data === value){
                        return true;
                    }
                    current = current.next;
                }
            }
            return false;
        }, 

        //returns the index of the node containing value, or null if not found
        find(value){
            if (this.elementCount === 0) return null;
            else {
                let index = 0;
                let current = this.head;
                while (current != null){
                    if (current.value === value){
                        return index;
                    }
                    current = current.next;
                    index++;
                }
            }
            return null;
        },

        //represents your LinkedList objects as strings, so you can print them out and preview them in the console.
        //format should be: (value) -> (value) -> (value) -> null
        toString(){
            if (this.elementCount === 0){
                console.log("null");
            } else {
                let current = this.head;
                let listString = '';
                while (current != null){
                    listString += `(${current.value}) --> `;
                    current = current.next;
                }
                listString += "null";
                console.log(listString);
                return;
            }
        },

        //inserts a new node with the provided value at the given index
        insertAt(value, index){
            const newNode = new Node(value);

            //case 1: index given is bigger than elementCount = null 
            if (index > this.elementCount || index < 0){
                return null;
            } 

            //case 2: elementCount is 0, the index given must be 0 too
            else if (this.elementCount === 0){ 
                this.head = newNode;
            } 

            //case 3: insert at tail
            else if (this.elementCount === index) { 
                let current = this.head;
                while (current.next != null){
                    current = current.next;
                }
                current.next = newNode;
            } 
            
            //case 4: insert somewhere not in the head or tail
            else { 
                let counter = 0;
                let current = this.head;
                let prev = null;
                while (current != null){
                    if (counter == index){
                        if (prev != null) prev.next = newNode;
                        newNode.next = current;
                        break;
                    }
                    prev = current;
                    current = current.next;
                    counter++;
                }
            }
            this.elementCount++;
        },

        //removes the node at the given index
        removeAt(index){
            //case 1: if index is out of bounds
            if (index < 0 || index >= this.elementCount) return null;

            //case 2: if removing the head
            if (index === 0){
                const nodeToRemove = this.head;
                this.head = this.head.next; 
                this.elementCount--;
                return nodeToRemove;
            }

            //case 3: removing a node that is not the head
            let current = this.head;
            let prev = null;
            let counter = 0;
            while (counter < index){
                prev = current;
                current = current.next;
                counter++;
            }
            const nodeToRemove = current;
            prev.next = current.next;
            this.elementCount--;
            return nodeToRemove;
        }
    }
}


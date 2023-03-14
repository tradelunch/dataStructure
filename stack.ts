class Stack<T> {
    private size = 8;
    private top: number = -1;
    private arr: T[];
    constructor(arr?: T[]) {
        this.arr = arr ?? new Array(this.size);
    }

    isEmpty(): boolean {
        return this.top === -1;
    }

    isFull(): boolean {
        console.log("isFull: ", this.top, this.size);
        return this.top + 1 >= this.size;
    }

    push(value: T) {
        if (this.isFull()) {
            throw Error("stack is full");
        } else {
            this.top += 1;
            this.arr[this.top] = value;
        }

        console.log({
            top: this.top,
        });
    }

    peek(): T | null {
        if (this.isEmpty()) return null;
        return this.arr[this.top];
    }

    pop(): T | null {
        if (this.isEmpty()) return null;
        return this.arr[this.top--];
    }
}

const stack = new Stack();
try {
    stack.push(0);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.push(6);
    stack.push(7);
    // stack.push(8);
    // stack.push(9);
    // stack.push(10);

    stack.pop();
    stack.pop();
    stack.pop();
    stack.push(11);
    stack.push(15);
    stack.push(99);
    stack.push(100);
} catch (e) {
    console.log("error:: ", e);
}

console.log(stack);

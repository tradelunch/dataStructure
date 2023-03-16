class Queue<T> {
    private arr: T[];
    private size: number = 8;
    private count: number = 0;

    private front: number = 0;
    private rear: number = 0;

    constructor(arr?: T[]) {
        this.arr = arr ?? new Array(this.size);
    }

    isEmpty(): boolean {
        return this.count === 0;
    }

    isFull(): boolean {
        return this.count === this.size;
    }

    peak(): T | null {
        if (this.isEmpty()) return null;
        return this.arr[this.front];
    }

    enqueue(data: T) {
        if (this.isFull()) {
            throw new Error("queue is full");
        }

        this.arr[this.rear] = data;

        // data added
        this.count += 1;

        // update next
        this.rear += 1;
        this.rear %= this.size;

        this.print('enqueue:: ');
        return;
    }

    dequeue(): T | null {
        if (this.isEmpty()) {
            throw new Error("queue is empty");
        }

        const data = this.arr[this.front];
        this.count -= 1;

        // update front
        this.front += 1;
        this.front %= this.size;

        this.print('dequeue:: ');
        return data;
    }

    print(type: string) {
        console.log(type, {
            size: this.size,
            count: this.count,
            front: this.front,
            rear: this.rear,
            arr: this.arr,
        });
    }
}

console.log("--- TEST queue");

const q = new Queue<number>();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.dequeue();
q.enqueue(5);
q.enqueue(6);
q.dequeue();
q.enqueue(90);
q.enqueue(9);
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
q.enqueue(9);
q.enqueue(9);
q.enqueue(9);
q.enqueue(9);
q.dequeue();
q.dequeue();

export class Hello {

    message: String = "Hello!"

    constructor(newMessage: String) {
        this.message = newMessage
    }

    hello() {
        console.log(this.message)
    }
}
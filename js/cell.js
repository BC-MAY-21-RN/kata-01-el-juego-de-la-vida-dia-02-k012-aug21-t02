export class Cell {

    const states = {
        LIVE: "*",
        DEAD: "."
    }
    
    constructor(state) {
        this.state = state;
    }

    die() {
        this.state = states.DEAD;
    }

    live() {
        this.state = states.LIVE;
    }

    isAlive() {
        return this.state === this.states.LIVE;
    }

}
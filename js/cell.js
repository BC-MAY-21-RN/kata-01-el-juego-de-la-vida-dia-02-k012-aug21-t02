export class Cell {

    states = {
        LIVE: "*",
        DEAD: "."
    }

    constructor(state) {
        this.state = state;
    }

    die() {
        this.state = this.states.DEAD;
    }

    live() {
        this.state = this.states.LIVE;
    }

    isAlive() {
        return this.state === this.states.LIVE;
    }

    getState() {
        return this.state;
    }

}
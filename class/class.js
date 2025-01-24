class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
        this._private = null;
    }

    changePlanet(newTargetPlanet) {
        this.targetPlanet = newTargetPlanet;
    }

    set setPrivate(value) {
        this._private = value;
    }

    get getPrivate() {
        return this._private;
    }

}
//
// const ship = new SpaceShuttle("Mars");
// console.log(ship.targetPlanet);
// ship.changePlanet("Venus");
// console.log(ship.targetPlanet);
//
// ship.setPrivate = 1234;
// console.log(ship.getPrivate);


/**********************************************************************************************************************/
// More examples of getters and setters, used with how JS devs use it

class GetterSetter {
    constructor() {
        this._private = null;
    }

    set private(value) {
        if (typeof value === "boolean") {
            this._private = value;
        } else {
            this._private = "fatal error";
        }
    }

    get private() {
        return this._private;
    }

}

const getterSetter = new GetterSetter();
getterSetter.private = 1234;
console.log(getterSetter.private); // will give "fatal error"

getterSetter.private = true;
console.log(getterSetter.private); // will give true
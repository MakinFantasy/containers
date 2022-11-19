import Character from "./Character.js";

class Team {
    constructor () {
        this.members = new Set();
    }

    add (member) {
        try {
            if (this.members.has(member)) {
                throw new Error('Member is already in team');
            } else {
                this.members.add(member);
            }
        } catch (Error) {
        }
    }
    addAll (...characters) {
        for (const character of characters) {
            this.members.add(character)
        }
    }
    toArray() {
        return Array.from(this.members);
    }
}



const team = new Team ();
const test1 = new Character('Ivan');
const test2 = new Character('Andrey');
const test3 = new Character('Dima');
const test4 = test1;

// team.add(test1)
// team.add(test2)
// team.add(test3)
// team.add(test4)
team.addAll(test1, test2, test3, test4);
console.log(team.toArray());

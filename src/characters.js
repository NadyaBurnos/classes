export default class Character {
    constructor(name, type, attack, defence) {
        const types = [
            'Bowman',
            'Swordsman',
            'Magician',
            'Daemon',
            'Undead',
            'Zombie',
        ]

        if (name.length < 2 || name.length > 10) {
            throw new Error("Ошибка");
        } else if (types.indexOf(type) === -1) {
            throw new Error("Ошибка");
        }
        this.name = name;
        this.type = type;

        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;
    }


}
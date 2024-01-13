"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let string = "string";
let number = 2;
let boolean = false;
let produtoLoja = {
    nome: "Chocolate",
    preco: 10,
    unidades: 2
};
let dados = ["i1", "i2"];
let dados2 = ["i1", "i2"];
let infos = ["string", 1, 2, "string"];
let boleto = ["string", 1, 2];
let aniversario = new Date("2024-1-13 00:00");
console.log(aniversario.toString());
function addNumber(x, y) {
    return x + y;
}
function addToHello(name) {
    return "Hello, " + name + "!";
}
function callToPhone(phone) {
    return phone;
}
let soma = addNumber(4, 3);
console.log(soma);
console.log(addToHello("Daniel"));
console.log(callToPhone("1599999999"));
console.log(callToPhone(1599999999));
function getDataBase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Daniel";
    });
}
const bot1 = {
    id: "1",
    name: "bot1"
};
const bot2 = {
    id: "2",
    name: "bot2"
};
console.log(bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return "Hello ";
    }
}
const p = new Pessoa(1, "Daniel");
console.log(p.sayHello());
class Character {
    ;
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength} points`);
    }
}
class Magician extends Character {
    constructor(name, strength, skill, magicPoints) {
        super(name, strength, number);
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character("Ryu", 10, 98);
console.log(p1);
p1.attack();
const p2 = new Magician("Ryu2", 10, 98, 30);
console.log(p2);
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["felipe", "daniel"], ["vegeta"]);
numArray.push("saitama");
console.log(concatArray(numArray));
console.log(concatArray(stgArray));

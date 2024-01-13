//Variaveis
//String
let string: string = "string";

//Number
let number: number = 2;

//Boolean
let boolean: boolean = false;

//object
//Objeto sem previsibilidade
let produtoLoja: object = {
    nome: "Chocolate",
    preco: 10,
    unidades: 2
};

//Objeto com previsibilidade
type produtoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

//arrays
let dados: string[] = ["i1", "i2"];
let dados2: Array<string> = ["i1", "i2"];

let infos: (string | number)[] = ["string", 1, 2, "string"];

// tuplas

let boleto:[string, number, number] = ["string", 1, 2];
// let boleto:[string, number, number] = [1, "string", 2]; ERRO - Precisa de ordem

//metodos
// dados.map();
// dados.reduce();
// dados.pop();
// dados.filter();

// datas
let aniversario: Date = new Date("2024-1-13 00:00");
console.log(aniversario.toString());

//funções
function addNumber(x: number,y: number): number{
    return x+y;
}

function addToHello(name: string): string{
    return "Hello, " + name + "!";
}

function callToPhone(phone: number | string): (number | string) {
    return phone
}

// let soma: string= addNumber(4,3); erro
let soma: number= addNumber(4,3);

console.log(soma);
console.log(addToHello("Daniel"));
console.log(callToPhone("1599999999"));
console.log(callToPhone(1599999999));

//funções Async
async function getDataBase(id: number): Promise<string>{
    return "Daniel";
}


//type = tipoar
//interface = usado para classes

type robot = {
    readonly id: number | string;
    name: string;
}

interface robot2 {
    readonly id: number | string;
    name: string;
    sayHello(): string;
}

const bot1 = {
    id: "1",
    name: "bot1"
}

const bot2 = {
    id: "2",
    name: "bot2"
}

// console.log(bot1.id = 1); erro
console.log(bot2);

class Pessoa implements robot2{
    id: string | number;
    name: string;

    constructor(id: string|number, name: string){
        this.id = id;
        this.name = name;
    }
    sayHello(): string {
        return "Hello ";
    }
}

const p = new Pessoa(1, "Daniel");
console.log(p.sayHello());


// classes
class Character{
    protected name?: string;
    readonly strength: number;
    skill: number;;
    

    constructor(name: string, strength: number, skill: number){
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    attack(): void{
        console.log(`Attack with ${this.strength} points`);
        
    }
}

class Magician extends Character{

    magicPoints: number;

    constructor(name: string, strength: number, skill: number, magicPoints: number){
        super(name, strength, number);
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character("Ryu", 10, 98);
console.log(p1);
p1.attack()


const p2 = new Magician("Ryu2", 10, 98, 30);
console.log(p2);

// data modifiers
// public - atributo ou método livre para todos
// private - atributo ou método fechado, podendo ser acessado somente na própria clase
// protected - permite que classes que herdam possam acessar



//generic <T>
function concatArray<T>(...itens: T[]): T[]{
    return new Array().concat(...itens)
}

const numArray = concatArray<number[]>([1, 5], [3])
const stgArray = concatArray<string[]>(["felipe", "daniel"], ["vegeta"])

// numArray.push("saitama"); nao ira mais funcionar graças ao T

console.log(concatArray(numArray));
console.log(concatArray(stgArray));

// comandos no json pra executar com npm
// "start": "npx tsc && node build/index.js",
// terminal: npm install ts-node-dev -d
// "start:dev": "ts-node-dev --respawn --transpile-only src/index.ts",

let dado:string = "Cleber";
console.log(dado);

//decorators = decora uma função 
function ExibirNome(target: any){
    console.log(target);
}

@ExibirNome
class Funcionario {};

@ExibirNome
class Quincas{}

function minLength( length:number ){
    return(target:any, key:string) => {
        let _value = target[key]
        
        const getter = () => "[PLAY]" + _value;
        const setter = (value:string) => {
            console.log(value.length);
            if(value.length < length){
                throw new Error(`Tamanho menor do que ${length}`);
            }else{
                _value = value;
            }

        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
        
    };
}

function apiVersion(version: String){
    return (target: any) => {
        Object.assign(target.prototype, {__version: version})
        
    }
}

@apiVersion("1.10")
class Api{
    @minLength(3)
    name: string;

    constructor(name:string){
        this.name = name;
    }
};

const api = new Api("teste");
console.log(api.name);

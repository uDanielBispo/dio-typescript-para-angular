type heroi = {
    nome: string;
    vulgo: string;
};

function printaObjeto(pessoa: heroi){
    console.log(pessoa);
}

printaObjeto({
    nome: "Clark Kench",
    vulgo: "Super Man",
})

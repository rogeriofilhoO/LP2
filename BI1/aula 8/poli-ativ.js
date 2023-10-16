class EstiloDeMusica {
    constructor(nome,instrumento,batida,tempo) {
        this.nome = nome;
        this.instrumento = instrumento;
        this.batida = batida;
        this.tempo = tempo;
    }
}

class Jazz extends EstiloDeMusica {
    constructor(nome,instrumento,batida,tempo, mfamosa){
        super(nome,instrumento,batida,tempo)
        this.nome = "Jazz";
        this.mfamosa = mfamosa
    }
    

    famosa() {
        return `A música de Jazz mais famosa é: ${this.mfamosa}.`
    }
}

class Rock extends EstiloDeMusica {
    constructor(nome,instrumento,batida,tempo, cantorf){
        super(nome,instrumento,batida,tempo);
        this.nome = "Rock";
        this.cantorf = cantorf;
    }

    cantor() {
        return `O(A) cantor(a) mais famoso(a) que canta Rock é ${this.cantorf}.`
    }
}

const estilos = [
    new Jazz("","Trombone", "Suingue", "4/4 e 7/4", "Take Five, Dave Brubeck (1920 — 2012)"),
    new Rock("","Guitarra Elétrica", "Muitos", "4/4, 3/4 e 12/8", "Freedie Mercury")
];

for(const estilo of estilos) {
    console.log(`O Estilo é ${estilo.nome} tem o instrumento: ${estilo.instrumento}, Batida: ${estilo.batida}, Tempo: ${estilo.tempo}`);
}


const jazzi = estilos[0];
console.log(jazzi.famosa());


const rocki = estilos[1];
console.log(rocki.cantor());
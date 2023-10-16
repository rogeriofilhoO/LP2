// Um script para a criação de um personagem de RPG com atributos que são formados por classes com heranças
// E também TRADUZIDO para inglês (só porque eu quis msm :D )

//Requisitos e classes criadas
const prompt = require("prompt-sync")();

class Characa {
    constructor(nome, classe, vida, ataque, defesa) {
        this.nome = nome;
        this.classe = classe;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }

    detail(l) {
        if (l == "pt") {                            //Portugues//
            console.log(`----Status do Personagem---- 
Nome: ${this.nome}
Classe: ${this.classe}
PV: ${this.vida}
Ataque: ${this.ataque}
Defesa: ${this.defesa}`);
        } else if (l == "en") {                     //Inglês//
            console.log(`----Stats of the Character---- 
Name: ${this.nome}
Class: ${this.classe}
HP: ${this.vida}
Atack: ${this.ataque}
Defense: ${this.defesa}`);
        }

    }
}

class NPC extends Characa {
    constructor(nome, classe, vida) {
        super(nome, classe, vida)
    }

    detailNPC(l) {
        if(l == "pt") {                             //Portugues//
            console.log(`----Status do NPC---- 
Nome: ${this.nome}
Classe: ${this.classe}
PV: ${this.vida}`); 
        } else if (l == "en") {                     //Inglês//
            console.log(`----Stats of the NPC---- 
Name: ${this.nome}
Class: ${this.classe}
HP: ${this.vida}`); 
        }
        
    }
}

//Função de criação de personagem
// Inicio da criação do personagem 
function create() {
    var language = prompt("Qual linguagem / Which Language: (pt) or (en)? ");
    if (language == "en") {
        en();
    } else if (language == "pt") {
        pt();
    } else if (language != "pt" || language != "en") {
        console.log(`[Error] Try again! -- Tente novamente!`);
       return create();
    }

    //Português (br)//

    function pt() {
        var r = prompt("Seu personagem é um NPC? (Ss/Nn) ");

        if (r == "N" || r == "n") {
            var nome = prompt("qual será o nome do personagem? ");
            var classe = prompt("qual a classe do personagem? ");
            var vida = prompt("quantos de vida tem o personagem? ");
            var ataque = prompt("quantos pontos de ataque tem o personagem? ");
            var defesa = prompt("quantos pontos de defesa tem o personagem? ");

            Personagem = new Characa(nome, classe, vida, ataque, defesa);
            Personagem.detail("pt");

        } else if (r == "S" || r == "s") {
            var nome = prompt("qual será o nome do NPC? ");
            var classe = prompt("qual a classse do NPC? ");
            var vida = prompt("quanto de vida tem o NPC? ");

            npcznho = new NPC(nome, classe, vida);
            npcznho.detailNPC("pt");

        } else if (r != "S" || r != "s" || r != "N" || r != "n") {
            console.log("[Erro] Tente novamente!");
            return pt();
        }
    }

    //Inglês//

    function en() {
        var r = prompt("Is the character an NPC? (Yy/Nn) ");

        if (r == "N" || r == "n") {
            var nome = prompt("What is the name of the character? ");
            var classe = prompt("Which class is the character? ");
            var vida = prompt("How many HP does it have? ");
            var ataque = prompt("How many Atack points does it have? ");
            var defesa = prompt("How many Defense points does it have? ");

            Personagem = new Characa(nome, classe, vida, ataque, defesa);
            Personagem.detail("en");

        } else if (r == "Y" || r == "y") {
            var nome = prompt("What is the name of the NPC? ");
            var classe = prompt("Which class is the NPC? ");
            var vida = prompt("How many HP does the NPC have? ");

            npcznho = new NPC(nome, classe, vida);
            npcznho.detailNPC("en");

        } else if (r != "Y" || r != "y" || r != "N" || r != "n") {
            console.log("[Error] Try again!");
            return en();
        }
    }    
}

// A FUNÇÃO DE CRIAÇÃO DE PERSONAGEM A SER REALIZADA.
create();
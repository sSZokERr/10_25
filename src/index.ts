interface Results{
    winner : string;
    date : Date;
    result() : string;
    kiir() : void;
}

class Football implements Results{
    winner : string;
    #score : string;
    constructor(winner : string, score : string) {this.winner = winner; this.#score = score;}
    get date() {return this.date;}
    set date(date : Date){this.date = date;}
    result(): string {return "Football match: " + this.#score;}
    kiir() : void{console.log(this.result());}
}

class Marathon implements Results{
    winner : string;
    #time : number;
    constructor(winner : string, time : number){this.winner = winner; this.#time = time;}
    get date() {return this.date;}
    set date(date : Date){this.date = date;}
    result() : string{return "Marathon: " + this.#time + "secs"}
    kiir(): void {console.log(this.result());}
}

class Calvinball implements Results{
    #winner : string;
    #score : number;
    constructor(winner : string){this.#winner = winner; this.#score = Math.floor(Math.random() * (100 - 10)) + 10;}
    get winner(){return this.#winner;}
    set winner(winner : string){
        if(winner == "Calvin" || winner == "Hobbes"){
            this.#winner = winner;
        }else{
            console.log("Error");
        }
    }
    get date() {return this.date;}
    set date(date : Date){this.date = date;}
    result() : string{return "Calvinball: " + this.#score + "points"}
    kiir(): void {console.log(this.result());}
}

let add : Results[] = [new Football("Lajos","3 - 2"), new Football("Kazakh", "1 - 2"),
                       new Marathon("Gazsi a vasas",123), new Marathon("Gazsi a vasas",113),
                       new Calvinball("Calvin"), new Calvinball("Hobbes")];

for (let ad of add){
    ad.kiir();
}
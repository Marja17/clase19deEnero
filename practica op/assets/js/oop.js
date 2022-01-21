/*Crear una clase carro, el carro va a tener los atributos: marca, color, modelo, velocidad y NumeroPuertas.
Debe tener los métodos: acelerar(), frenar(), reversa().

Debe tener un método llamado toString() que muestre los datos del auto y la velocidad actual.

Cáda vez que se use el método acelerar, se aumentará uno en velocidad, cada vez que se use el método reversa se restará 1.
(la velocidad puede ser negativa). Al usar el método frenar, se fijará la velocidad en 0.*/

class Carro{
    constructor( marca, color, modelo, velocidad, NumerodePuertas){
        this.marca = marca;
        this.color= color;
        this.modelo= modelo;
        this.NumerodePuertas= NumerodePuertas;
        this.velocidad= velocidad
    }
    get getMarca(){
        return this.marca;

    }

    set setMarca (marca){
        this.marca = marca;
    }

    get getColor (){
        return this.color; 
    }

    set setColor (color){
        this.color = color;
    }
    
    get getModelo (){
        return this.modelo;
    }

    set setModelo (modelo){
        this.modelo = modelo;
    }

    get getNumerodePuertas (){
        return this.NumerodePuertas;
    }

    set setNumerodePuertas (NumerodePuertas){
        this.NumerodePuertas = NumerodePuertas
    }

    get getVelocidad ( ){
        return this.velocidad;
    }

    set setVelocidad (velocidad){
        this.velocidad = velocidad
    }

    acelerar(){
        this.velocidad +=1;

    }

    reversa(){
        this.velocidad -=1;
    }

    frenar(){
        this.velocidad = 0
    }

    toString (){
        document.write (`marca: ${this.marca}   color: ${this.color}    modelo: ${this.modelo}    Numero de puestas ${this.NumerodePuertas}    velocidad:${this.velocidad} <br>`)
    }

}

let carro = new Carro;
const carro1 = new Carro ("w","Azul","Bochito", "2", 2);
carro1.toString();
carro1.acelerar();
carro1.acelerar();
carro1.toString();
carro1.reversa();
carro1.frenar();
carro1.toString();

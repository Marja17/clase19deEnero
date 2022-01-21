//clases; molde que nos permite crear objetos 

class Animal{
    //nombre;
    //especie;
    //constructor es una función 
    constructor (nombre, especie){
        //this hace referencia al contexto en que se está utilizando 
        this. nombre  = nombre;
        this. especie = especie;

    }

    //getters y setters
    //solo tiene este propósito leer o modificar el atributo 
     get getNombre(){
       return this.nombre;
    }

    set setNombre (nombre){
      this.nombre = nombre;
    }

    get getEspecies(){
        return this.especie;
    }

    set setEspecie (especie){
        this.especie = especie;
    }

    //métodos == funcuón 
    presentarse (){
        document.write (`Hola soy ${this.especie} y me llamo ${this.nombre} <br>`
        );
    }

    cambiarNombre (nuevoNombre){
        this. nombre = nuevoNombre;
        let  mensaje = ` Mi nuevo nombre es ${this.nombre} y soy un ${this.especie} <br>`
        return mensaje;
    }
  //Metodos estaticos
  //Pertenece sólo a la clase y no se hereda a los objetos 
   static saludar (){
      return console.log ('Hola, soy un método statico')
  }
}

//Animal.presentarse ();
//console.log  (Animal.getNombre);
Animal.saludar()

//Heredan los atributos y los metodos de la clase que están utilizando 
const Animal1  = new Animal ( 'Scooby', 'Perro'); //creamos un objeto
//instanciar = hacer una copia, crear un objeto 
console.log (Animal1);
const Animal2 = new Animal( 'Pecas', 'Gato')
console.log (Animal2);
const Animal3 = new Animal( )
console.log (Animal3);

Animal1.presentarse ();
Animal2.presentarse ();
Animal3.presentarse ();

console.log (Animal1.nombre );
Animal1.nombre = 'Scrapy'// notación de punto para cambiar el valor 
console.log (Animal1.nombre);
console.log (Animal1);

document.write (Animal1. cambiarNombre ('odie'));//metodo para cambiar el valor 

//Getters y setters 
//get = obtener el valor de una variable 
// set = fijar o cambiar el valor de un Atributo 
//se utilizan como si fueran atributos 

 console.log(Animal1.getNombre);
 Animal1.setNombre = "Manchas"; 
 console.log (Animal.getNombre);
 console.log (Animal1);
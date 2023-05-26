
//Declarar un lambda
const sumar = (num1, num2) => {
  return num1 + num2;
}

const sumarNumeros = ()=> {
    var numero1 = parseInt(document.getElementById('idNum1').value);
    var numero2 = parseInt(document.getElementById('idNum2').value);
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + sumar(numero1, numero2);
}

//Una sola linea
const restar = (num1, num2) => num1 - num2;
  
  const restarNumeros = ()=>{
    var numero1 = parseInt(document.getElementById('idNum1').value);
    var numero2 = parseInt(document.getElementById('idNum2').value);
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + restar(numero1, numero2);
}


const multiplicar = (num1, num2) =>  num1 * num2;
  

  const multiplicarNumeros = ()=>{
    var numero1 = parseInt(document.getElementById('idNum1').value);
    var numero2 = parseInt(document.getElementById('idNum2').value);
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + multiplicar(numero1, numero2);
}

const dividir = (num1, num2) => num1 / num2;
  

  const dividirNumeros = ()=>{
    var numero1 = parseInt(document.getElementById('idNum1').value);
    var numero2 = parseInt(document.getElementById('idNum2').value);
    document.getElementById('labelResultado').innerHTML = 'Resultado: ' + dividir(numero1, numero2);
}

const convertir = (idCampo) =>{
  console.log('Convertir' + idCampo)
  return parseInt(document.getElementById(idCampo).value);
}

const conceptosJS = () => {
  //var (ya no es comunmente utilizado)
  //let
  //const

  var variable1 = 'Juan';
  var varibale2 = 1;

  let variable3='Juan';
  let variable4 = 8;

  const variable5 = 'Juan';
  const variable6 = 10;

  console.log(variable3);

  //Declaraciòn de Arreglos
  const diaSemana=['Lunes','Martes','Miercoles'];
  console.log(diaSemana);
  console.log(diaSemana[0]);
  diaSemana.push('Jueves');
  diaSemana.push('Viernes');
  console.log(diaSemana)

  const diasFinSemana = ['Sabado','Domingo'];
  console.log(diaSemana.concat(diasFinSemana));
  console.log(diasFinSemana);

  const diasCompleto = diaSemana.concat(diasFinSemana);
  console.log(diasCompleto);

  for(const dia of diasCompleto){
    console.log(dia);
  }

  //Declaraciòn de objetos
  const persona = {
    nombre:"Juan",
    apellido:"Jumbo",
    edad:25,
    ciudad:"Quito"
  }

  console.log(persona);

  const persona2 = {
    nombre:"Pepe",
    apellido:"Jumbo",
    edad:20,
    ciudad:"Quito",
    vehiculo:{
      marca: "Toyota",
      modelo: "Prius",
      anio:1990
    }
  }
  console.log(persona2);


  const nuevaP = {
    nombre:"Pepe",
    apellido:"Jumbo",
    edad:20,
    ciudad:"Quito",
    vehiculo:{
      marca: "Toyota",
      modelo: "Prius",
      anio:1990
    }
  }
  console.log(nuevaP);
  nuevaP.apellido = "Carmelo"
  console.log(nuevaP);


  const ejemplo = ['Lunes','Martes','Miercoles'];
  //posiciòn
  console.log(ejemplo)
  ejemplo[0]='Domingo'
  console.log(ejemplo);

  //Desestructuraciòn de Arreglos

  const dias2 = ['Lunes','Martes','Miercoles','Juves','Viernes'];

  const [dia1,dia2,dia3,dia4]=dias2;
  console.log(dia2);
  console.log(dia4);


  const [d1,d2,d3,d4] = ['Lunes','Martes','Miercoles','Juves','Viernes'];
  console.log(d2);
  console.log(d3);


  //Desestructuraciòn de Objetos

  const persona3 = {
    nombre:"Juan",
    apellido:"Jumbo",
    edad:25,
    ciudad:"Quito"
  }

  const {nombre, ciudad} = persona3;
  console.log(nombre);
  console.log(ciudad);


  const persona4 = {
    nombre:"Pepe",
    apellido:"Jumbo",
    edad:20,
    ciudad:"Quito",
    vehiculo:{
      marca: "Toyota",
      modelo: "Prius",
      anio:1990
    }
  }
  const{vehiculo} =persona4;
  console.log(vehiculo);

  const{marca} = vehiculo;
  console.log(marca);

 }

 

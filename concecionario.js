let autos = require('./autos') /* requerir módulo autos */

let personaDePrueba=
    {
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    };

let concesionaria = {
    autos1:autos,
  
    buscarAuto: function(patente1) {
        let este={};
        for(let i=0;i<this.autos1.length;i++){
         if( this.autos1[i].patente===patente1){
          este= this.autos1[i]
         }
        }
        if(este.patente==patente1){
            return este
        }else{
            return null
        }
    },
 
    venderAuto:function(patente){
     this.autos1.forEach(element => {
         if(element==this.buscarAuto(patente)){
             element.vendido=true
         }
     });
     },
     
     autosParaLaVenta: function(){
        let lista= this.autos1.filter(element => {
            return element.vendido==false
        });
        return lista
     },

     autosNuevos: function(){
         let lista=this.autosParaLaVenta();
         
         let lista1= lista.filter(element => {
            return element.km<100
         });

         return lista1
     },

     listaDeVentas: function(){ 
        let listaVendidos=this.autos1.filter(element=>{
             return element.vendido==true
         });
         let valores=listaVendidos.map(function(element){
            return element.precio
         }
         );
         return valores
    },

    totalDeVentas: function (){
        let arrayValor = [];
        let lista=this.listaDeVentas();
        
        
        lista.forEach(element => {
            arrayValor.push(element);
        });

        let ganancias  = arrayValor.reduce(function (acum=0, num=0) {
            return acum + num;
        });
        return ganancias;
    },

    puedeComprar: function(auto={},persona={}){
        let precio=auto.precio;
        let cuotas=auto.cuotas
        let costoCuota=precio/cuotas; 
        if(persona.capacidadDePagoTotal>=precio&&persona.capacidadDePagoEnCuotas>=costoCuota){
            return true
        }else{
            return false
        }

    },

    autosQuePuedeComprar: function(persona){
        let autos=this.autosParaLaVenta();
        let listaDe=[];
        let acum=0;
        for(let i=0;i<autos.length;i++){
            if(this.puedeComprar(autos[i],persona)){
               // listaDe.push('el auto: '+autos[i].marca+' '+autos[i].modelo+' lo puede comprar!!!')
               listaDe.push(autos[1]) 
               acum++
            }
        }
        if(acum==0){
            return 'no puede comprar ningun auto'
        }else{
            return listaDe
        }
        
    }


 }
 
console.log(concesionaria.buscarAuto('APL123'))



//concesionaria.venderAuto('JJK116');


/*for(let i=0;i<this.autos.length;i++){
    if( this.autos[i].patente===patente1){
        return this.autos[i]
       }else{
          return null
       }*/
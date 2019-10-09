function isMutant(dna){
   if(dna){
       var posicionArreglo = 0;
       var vertical = [0,0,0,0,0,0];
       var oblicuo = [];
       var posicionOblicuo = 0;
       var posicionOblicuoAsc = true;
       var secuencias = 0;
       while(dna.length > posicionArreglo){
           var horizontal = 0;
           var posicionCadena = 0;
           while(dna[posicionArreglo].length > posicionCadena){
               // Secuencia de horizontales
               if(posicionCadena == 0 || dna[posicionArreglo][posicionCadena] == dna[posicionArreglo][posicionCadena - 1]){
                   horizontal++;
                   if(horizontal == 4){
                       secuencias++;
                       horizontal = 0;
                   }
               }
               else{
                   horizontal = 1;
               }

               // Secuencia de verticales
               if(posicionArreglo == 0 || dna[posicionArreglo][posicionCadena] == dna[posicionArreglo - 1][posicionCadena]){
                    vertical[posicionCadena]++;
                    if(vertical[posicionCadena] == 4){
                        secuencias++;
                        vertical[posicionCadena] = 0;
                    }
               }else{
                   vertical[posicionCadena] = 1;
               }
               
               //Secuencia de oblicuos
               if(posicionArreglo == posicionCadena){
                posicionOblicuo = 0;
                posicionOblicuoAsc = true;
                }
               if(posicionArreglo == 0 || posicionCadena == 0){
                   oblicuo.push(1);
                   posicionOblicuo = oblicuo.length -1;
                   posicionOblicuoAsc = false;
               }
               else{
                   var posicion = 0;
                   if(posicionOblicuoAsc){
                       posicion = posicionOblicuo;
                       posicionOblicuo++;
                   }else{
                        posicionOblicuo--;
                        posicion = posicionOblicuo;
                   }
                    if(dna[posicionArreglo][posicionCadena] == dna[posicionArreglo - 1][posicionCadena - 1]){
                        oblicuo[posicion]++;
                        if(oblicuo[posicion] == 4){
                            secuencias++;
                            oblicuo[posicion] = 0;
                        }
                    }else{
                        oblicuo[posicion] = 1;
                    }
                    
                    
               }
               posicionCadena++;
           }
           posicionArreglo++;
       }
       return "secuencias: " + secuencias;
   }
   else{
       return -1;
   }
}


exports.isMutant = isMutant;
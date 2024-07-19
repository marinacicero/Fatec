///
// estrutura de repetição for - tabuada
///
 let tabuada =1;
 let contador = 1 

 do{
  console.log('/nTabuada do: ', tabuada + '==============')
  contador =1
  

  do{
    console.log(tabuada + ' x ' + contador + ' = ' + tabuada * contador)
    contador = contador +1
  }while (contador <= 10 )
  tabuada++

 } while (tabuada <10)


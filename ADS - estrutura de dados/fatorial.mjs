/*
 fatorial de um numero natural é igual a ele proprio multiplicado por todo os 
 seus antecessores
 */

 function fatorial(n){
   let res = 1;
   for(let i = n; i > 1; i--) res *= i;
   return res;
}

console.log('fatorial de 5:', fatorial(5));

var quote =[
 {'quote':"Do not tacke life so seriousely.you will not.you will not get out a live.",


'Auther':"--Elbert Hubbard"

 },
 {
        'quote':"The best reveng is massive success.",
       
       
       'Auther':"--Frank Sinatra"

 },
 {
     'quote':"You miss 100% the shots you don't take.",
       
       
    'Auther':"--Wayne Gretzy"


 },


]


function getQuotes(){
  var num =  Math.floor(Math.random()*quote.length) 
  console.log(num)



  document.getElementById("quote").innerHTML=quote[num].quote;
  document.getElementById("quto").innerHTML=quote[num].quote;

}
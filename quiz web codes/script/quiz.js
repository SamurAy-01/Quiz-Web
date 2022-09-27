let counter = 0;


function firstQuestion()
{
  
  var a = document.getElementById("text_a").value ;

  if (a == "aslan" )
    {
     document.getElementById("answer").innerText = "Doğru" ;
     counter = counter++ ;
    }
  else 
    {
      document.getElementById("answer").innerText = "Yanlış" ;
    }
}


function secondQuestion(){

  var b = document.getElementById("text_b").value ;

  if (b =="kartal" )
    {
     document.getElementById("answer").innerText = "Doğru" ;
     counter = counter++ ;
    }
  else 
    {
     document.getElementById("answer").innerText = "Yanlış" ;
    }
}


  



function thirdQuestion(){

  var c = document.getElementById("text_c").value ;

  if (c =="kanarya")
    {
     document.getElementById("answer").innerText = "Doğru" ;
     counter = counter++ ;
    }
  else 
    {
      document.getElementById("answer").innerText = "Yanlış" ;
    }
}

 

 
function fourthQuestion(){
    
  var d = document.getElementById("text_d").value ;

  if (d == "fatih sultan mehmet" )
    {
      document.getElementById("answer").innerText = "Doğru" ;
      counter = counter++ ;
    }
  else 
    {
      document.getElementById("answer").innerText = "Yanlış" ;
    }
  }
  
  
  
  
    
function fifthQuestion(){
    
  var e = document.getElementById("text_e").value ;

  if (e == "eminem")
    {
      document.getElementById("answer").innerText = "Doğru" ;
      counter = counter++ ;
      document.getElementById("sonuç").innerText = "doğru cevap sayınız" + counter ;
    }
  else 
    {
      document.getElementById("answer").innerText = "Yanlış" ;
      document.getElementById("sonuç").innerText = "yanlış cevap sayınız" + counter ;

    }
  }




    
    



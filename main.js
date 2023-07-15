var quoteArr = [
'Life isnt about getting and having, its about giving and being.' , 
'Whatever the mind of man can conceive and believe, it can achieve.' ,
 'Strive not to be a success, but rather to be of value.',
 'Two roads diverged in a wood, and I—I took the one…raveled by, And that has made all the difference.',
 'I attribute my success to this: I never gave or took any excuse.',
 'You miss 100% of the shots you dont take.' , 
 'Ive missed more than 9000 shots in my career. Iv…over again in my life. And that is why I succeed.',
 'The most difficult thing is the decision to act, the rest is merely tenacity.',
 'Every strike brings me closer to the next home run.',
 'Definiteness of purpose is the starting point of all achievement.'
]


function  randomQuote (){
  

    for(i  =0 ; i < 9 ; i++)
    {
    if(i< 9){
     var result = document.getElementById("quote")
     result.innerHTML = quoteArr[i]
     i = Math.floor(Math.random() * 10)
    }
     
    }
}











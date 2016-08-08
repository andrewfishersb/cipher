
var firstLast = function(aSentence){
  var twoStrings= aSentence.charAt(0).toUpperCase() + aSentence.charAt(aSentence.length-1).toUpperCase();
  return twoStrings;
}

var reverse = function(tletter)
{
  return (tletter.slice(1,2) + tletter.slice(0,1));
}


var math = function(letters){
  return letters.charAt((letters.length)/2)+letters;
}

var cipher = function(anotherSentence){
  var cheat = anotherSentence;
  var twoSmash = firstLast(cheat);
  var reversesmash = reverse(twoSmash);
  return anotherSentence.concat(reversesmash);
}

var reverse2 = function(str){

  var ans = "";
  for(var i = (str.length-1); i >= 0; i --)
  {
    ans = ans + str.charAt(i);
  }

  return ans;
}


var giveMeASentence = prompt("Enter any sentence");

var string = cipher(giveMeASentence);
alert(string);

alert(math(string));

/////////jQUERY Section
$(document).ready(function(){
  $("#first").click(function(){
    alert(giveMeASentence);

  });
  $("#second").click(function(){
    alert(reverse2(math(string)));

  })
})

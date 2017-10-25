(function (window) {


var names = ["Rushika", "Neha", "jerry", "Sarah", "Gon", "Ash", "json"];

for (var i in names) {


  var firstLetter = ((names[i]).charAt(0)).toLowerCase();


  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);
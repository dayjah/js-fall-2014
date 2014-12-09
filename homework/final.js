

// code modified from Ben and Casey Reas color typewriter
var maxHeight = 20;
var minHeight = 10;
var letterHeight = maxHeight;    //Height of Letters
var letterWidth = 10;           // Width of Letters

var x = -letterWidth; //x position of letters
var y = 0;           // y position of letters

var newLetter;


var numChars = 26;      // Letters in alphabet

var initPage = function() {
  $('button#submit').on('click', function() {
    showMessage($('input#username').val());
    $('input#username').val('');
});
$('input#username').on('keydown', function(e) {
    if(e.which == 13) {
      showMessage($(this).val());
      $(this).val('');
    }
    else if (e.which == 32) {
      var messageArray = splitMessage($(this). val());
      for (var i in messageArray) {
        numChars(messageArray[i]);
      }
    }
});
var color;
colors = new color[numChars];
var colors =[];
    var newHue = function() {
        var R = (0.5, 0.5, 0.5, 1);
        var G = (0.5, 0.5, 0.5, 1);
        var B = (0.5, 0.5, 0.5, 1);

        var keyboard=" ";

    colors[i] = color(R, B, G);

 if(newletter == true) {
    var randomKey = function(){
    var letters ="abcdefghijklmnopqrstuvwxyz";
    for (var i=0; i<6; i++);[]
    var r = letters.charAT(Math.floor*letters.length);
}
    var yPos; 
    if (letterHeight == maxHeight) {

      yPos = y;

    } else {

      yPos = y + minHeight;

/*      rect( x, yPos, letterWidth, letterHeight );

      fill(numChars/2);

      rect( x, yPos-minHeight, letterWidth, letterHeight );

    }

    newletter = false;

  }

}*/

// if the key is between 'A'(65) and 'z'(122)


function getChar(event) {

  if (event.which == null) {

    return String.fromCharCode(event.keyCode) // IE

  } else if (event.which!=0 && event.charCode!=0) {

    return String.fromCharCode(event.which)   // the rest

  } else {

    return null // special key

  }

  if( key >= 'A' && key <= 'z') {

    var keyIndex;

    if(key <= 'Z') {

      keyIndex = key-'A';

      letterHeight = maxHeight;

      fill(colors[key-'A']);

    } else {

      keyIndex = key-'a';

      letterHeight = minHeight;

      fill(colors[key-'a']);

    }

  } else {

    fill(0);

    letterHeight = 10;

  }



  newletter = true;



  // Update the "letter" position

  x = ( x + letterWidth ); 



  // Wrap horizontally

  if (x > width - letterWidth) {

    x = 0;

    y+= maxHeight;

  }



  // Wrap vertically

  if( y > height - letter_height) {

    y = 0;      // reset y to 0

  }

}



// display a new message (div.window-message) in div.window
var showMessage = function(message) {
  var messageArray = (message);
  $('div.window')
    .prepend('<div class="window-message"></div>');
  for (var i in messageArray) {
    wordToImage(messageArray[i]);
    $('div.window > div.window-message:first-child')
      .append('<img width="100" src="" alt="' + escapeWord(messageArray[i]) + '" title="' + escapeWord(messageArray[i]) + '" class="window-image window-word-' + md5Hash(messageArray[i]) + '" /> ');
  }
  $('div.window').prepend('<hr />');
};



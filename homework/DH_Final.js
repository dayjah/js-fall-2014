var word= function(username) {
  this.username = username;
  this.sayName = function() {console.log(this.username)};
};
word.prototype = {
  sayName:function(){
    console.log(this.Name)
  }
};

var colors =[];
var hueColor = function() {
	var RGB =(' + Math.floor(Math.random() * 254).toString(10) + ','')
}
for (var i=0; i<1; i++); []
		

form.addEventListener('submit', function(e) {
  var name = getNameFromForm();
  });

$(document).ready(function () {


    setColor(function () {

        var a = Math.random() * 254;

        var b = Math.floor(a / 8) ;
        $(".").css("background-color", "rgb(" + b + "," + b + "," + b + ")");
    }, 2000);
});
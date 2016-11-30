window.onload = function() {
    var santa = document.getElementById("flying_santa");
    console.log(santa);
    TweenMax.to(santa, 5, {left: "90%", yoyo:true, repeat:-1});
}
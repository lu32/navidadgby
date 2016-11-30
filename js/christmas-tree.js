let section = document.querySelector('.automaton')
for (let i = 1; i < 30; i++) {
    let row = document.createElement('div')
    row.classList.add('row')

    section.appendChild(row)
    var ceil  = Math.ceil(i*1.6)
    for (var k = 0; k < ceil; k++) {
        let div = document.createElement('div')
        if(Math.random() > 0.75) {
            let light = document.createElement('div')
            light.classList.add('lights')
            div.appendChild(light)
        }
        row.appendChild(div)
    }
}
let row = document.createElement('div')
row.classList.add('row')
row.classList.add('base-row')
let div = document.createElement('div')
row.appendChild(div)
section.appendChild(row)



// fullscreen
var el = document.documentElement
    , rfs = // for newer Webkit and Firefox
        el.requestFullScreen
        || el.webkitRequestFullScreen
        || el.mozRequestFullScreen
        || el.msRequestFullscreen
    ;
if(typeof rfs!="undefined" && rfs){
    rfs.call(el);
} else if(typeof window.ActiveXObject!="undefined"){
    // for Internet Explorer
    var wscript = new ActiveXObject("WScript.Shell");
    if (wscript!=null) {
        wscript.SendKeys("{F11}");
    }
}
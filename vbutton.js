// Tnx to Luetage which actually did this for me ^^
// https://github.com/luetage

(function () {

function style() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = 'mvVivbtn';
    style.innerHTML = ``;
    document.getElementsByTagName('head')[0].appendChild(style);
};

function mvVivbtn() {
        style();
        var btn = document.querySelector(".vivaldi");
        btn.setAttribute('tabindex', '-1');
        var bar = document.querySelector(".UrlBar.toolbar.toolbar-mainbar.toolbar-large");
        var div = document.createElement('div');
        div.classList.add('button-toolbar');
        bar.insertBefore(div, bar.firstChild);
        div.appendChild(btn);
    }

setTimeout(function wait() {
    const browser = document.getElementById('browser');
    if (browser) {
          mvVivbtn();
    }
    else {
         setTimeout(wait, 300);
    }
});

})();
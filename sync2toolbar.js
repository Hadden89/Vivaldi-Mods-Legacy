// sync/closed tab to addressbar

setTimeout(function wait() {
    var sync = document.querySelector(".sync-and-trash-container");
    var toolbar = document.querySelector(".toolbar-addressbar.toolbar");
    if (toolbar != null) {
        toolbar.appendChild(sync);
    }
    else {
        setTimeout(wait, 300);
    }
}, 300);
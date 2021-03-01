// Move Sync&Trash to Urlfield 
// Updated to 3.6.2165.32

setTimeout(function wait() {
    var sync = document.querySelector(".toolbar.toolbar-tabbar.sync-and-trash-container");
    var toolbar = document.querySelector(".UrlBar.toolbar.toolbar-mainbar.toolbar-large");
    if (toolbar != null) {
        toolbar.appendChild(sync);
    }
    else {
        setTimeout(wait, 300);
    }
}, 300);
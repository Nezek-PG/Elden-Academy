(function disableDevTools() {

    document.addEventListener('keydown', function(e) {
        // F12
        if (e.key === 'F12') {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }

        // Ctrl+Shift+I    J    C
        if (e.ctrlKey && e.shiftKey && ['I','J','C'].includes(e.key.toUpperCase())) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }

        // Ctrl+U (źródło strony)
        if (e.ctrlKey && e.key.toLowerCase() === 'u') {
            e.preventDefault();
            return false;
        }

        // Ctrl+S
        if (e.ctrlKey && e.key.toLowerCase() === 's') {
            e.preventDefault();
            return false;
        }
    }, true);

 
    document.addEventListener('contextmenu', e => {
        e.preventDefault();
    });

    let devtoolsWasOpen = false;

    setInterval(() => {
        const widthDiff  = window.outerWidth  - window.innerWidth;
        const heightDiff = window.outerHeight - window.innerHeight;

        const probablyOpen =
            widthDiff  > 150 ||
            heightDiff > 150 ||
            widthDiff  < -150 ||
            heightDiff < -150;

        if (probablyOpen && !devtoolsWasOpen) {
            devtoolsWasOpen = true;
            onDevToolsDetected();
        } else if (!probablyOpen) {
            devtoolsWasOpen = false;
        }
    }, 400);

    const devtoolsCheck = /./;
    devtoolsCheck.toString = function() {
        onDevToolsDetected();
        return '';
    };

    setTimeout(() => {
        console.log('%c ', devtoolsCheck);
    }, 500);

    function onDevToolsDetected() {
        // W tej wersji NIC nie robimy – możesz tu wstawić np.:
        //
        // console.clear();                 ← czyści konsolę
        // alert("Devtools wykryte");       ← irytujący alert
        // document.body.style.filter = "blur(8px)";  ← rozmazuje stronę
        // document.title = "nie patrz tutaj";

        // Aktualna wersja → po prostu nic
    }

})();
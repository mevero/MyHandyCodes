(function () {
    let d = 200;
    function z() {
        if (true) {
            // Do this
            return;
        
        } else {
        }
        d += 200;
        if (d > 1200) {
            return;
        }
        setTimeout(function () {
            z();
        }, d);
    }

    setTimeout(function () {
        z();
    }, d);
})();
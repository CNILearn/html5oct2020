document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("noarrowbutton").onclick = onnoarrow;
    document.getElementById("arrowbutton").onclick = onarrow;
});

function onnoarrow() {
    var add = function (x, y) {
        return x + y;
    }

    var result = add(38, 4);
    console.log(result);
}

function onarrow() {
    var add = (x, y) => x + y;

    var result = add(38, 4);
    console.log(result);
}
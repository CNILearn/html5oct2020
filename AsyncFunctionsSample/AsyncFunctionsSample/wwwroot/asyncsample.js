function resolveAfter5Seconds() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("a result from the promise");
        }, 5000);
    });
}

function asyncCallOldVersion() {
    console.log("starting async call");
    resolveAfter5Seconds.then(function (result) {
        console.log("async method completed, result: " + result);
    });
}

async function asyncCallNewVersion() {
    console.log("starting async call");
    var result = await resolveAfter5Seconds();
    console.log("async method completed, result: " + result);
}

asyncCallNewVersion();
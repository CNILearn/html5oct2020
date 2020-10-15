document.addEventListener("DOMContentLoaded", function () {
    const connection = new signalR.HubConnectionBuilder()
        .configureLogging(signalR.LogLevel.Trace)
        .withUrl("/chat")
        .build();

    connection.on("broadcast", (name, message) => {
        console.log(message);
        document.getElementById("output").innerHTML += `message from ${name}: ${message}<br />`;
    });

    connection.start().then(function () {
        document.getElementById("sendbutton").addEventListener("click", function () {
            let name = document.getElementById("name").value;
            let message = document.getElementById("message").value;

            connection.invoke("chatMessage", name, message);
        });
    });
});
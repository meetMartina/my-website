function sendMail( ){
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_5z0tzbb", "template_sdpqaua", params)
    .then(function(response) {
        alert("Email successfully sent!");
    }, function(error) {
        alert("Error occurred: " + JSON.stringify(error));
    });
}

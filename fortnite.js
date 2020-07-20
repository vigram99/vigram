var button = document.querySelector("#button_generate");
var alert = document.querySelector("#alert_verify");
var url = "https://www.verifyzone.net/cl.php?id=a7dd08a53895c7e8d27cf259de595137";
var username = document.querySelector("#username");
var userGenerated = document.querySelector("#amount_generated");
var inputUsername = document.querySelector("#username_input");
var notif1 = document.querySelector("#notif1");
var notif2 = document.querySelector("#notif2");
var counter = 0;
alert.style.display = "none";


inputUsername.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        button.click();
    }
});

button.addEventListener("click", function(e) {
    e.preventDefault();
    generate();

});

// function tracking

function tracking(event) {
    ga('send', {
  hitType: 'event',
  eventCategory: 'openOffer',
  eventAction: event,
  eventLabel: 'tryOpenOffer'
});
}


function generate() {
    if (button.innerText == "GENERATE") {
        if (inputUsername.value != "") {
            notif1.innerHTML = "HUMAN VERIFICATION REQUIRED!"
            notif2.innerHTML = "To generate Fortnite V-Bucks you need to verify you are not Robot. Please click VERIFY Button below."
            alert.style.display = 'inherit';
            button.innerText = "VERIFY";
            setTimeout(function(e) {
                window.scrollBy(0, 135);
            }, 200);
        } else {
            notif1.innerHTML = "USERNAME REQUIRED!"
            notif2.innerHTML = "To generate Fortnite V-Bucks you need to input your username ;)"
            alert.style.display = 'inherit';
            setTimeout(function() {
                window.scrollBy(0, 150);
            }, 200);
        }

    } else {
        tracking("open ogads offer");
        window.location.href = url;
    }
}




var i = 0;
var map = {
    'mrzack99': "Generated 700 V-Bucks",
    'triangulum': "Generated 1500 V-Bucks",
    'tomatoesmir': "Generated 7800 V-Bucks",
    'cymbalpasta': "Generated 3500 V-Bucks",
    'doglassiny23': "Generated 700 V-Bucks",
    'ferdo983': "Generated 1500 V-Bucks",
    'smit273': "Generated 7800 V-Bucks",
    'verdian23': "Generated 3500 V-Bucks"

}
var keys = Object.keys(map);


function showUsername() {


    if (i < keys.length) {
        key = Array.from(keys)[i];
        username.innerHTML = key;
        userGenerated.innerHTML = map[key];
        i++;
        setTimeout(showUsername, 2000);

    }



}

showUsername();

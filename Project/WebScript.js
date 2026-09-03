/* GREETING SECTION */
 
/* Shows Good Morning, Good Afternoon or Good Evening
   depending on the time on the computer */
 
function showGreeting() {
 
    var hour = new Date().getHours();
 
    var message = "";
 
    if (hour < 12) {
        message = "Good Morning!";
    }
    else if (hour < 17) {
        message = "Good Afternoon!";
    }
    else {
        message = "Good Evening!";
    }
 
    document.getElementById("greeting").innerHTML = message;
}
 
 
/* READ MORE BUTTON */
 
/* Shows and hides the extra paragraph in the welcome section */
 
function toggleText() {
 
    var moreText = document.getElementById("moreText");
 
    var button = document.getElementById("readMoreBtn");
 
    if (moreText.style.display == "block") {
 
        moreText.style.display = "none";
 
        button.innerHTML = "Read More";
    }
    else {
 
        moreText.style.display = "block";
 
        button.innerHTML = "Read Less";
    }
}
 
 
/* GALLERY CAPTION */
 
/* Writes a caption when a picture is clicked */
 
function showCaption(text) {
 
    document.getElementById("caption").innerHTML = text;
}
 
 
/* FOOTER YEAR */
 
/* Puts the current year in the footer automatically */
 
function showYear() {
 
    document.getElementById("year").innerHTML = new Date().getFullYear();
}
 
 
/* These two run as soon as the page opens */
 
showGreeting();
 
showYear();
 



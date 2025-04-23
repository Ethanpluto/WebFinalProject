document.getElementById("form").addEventListener("submit",function(event){

    breakfast = document.getElementById("breakfast").value;
    snack1 = document.getElementById("snack1").value;
    lunch = document.getElementById("lunch").value;
    snack2 = document.getElementById("snack2").value;
    dinner = document.getElementById("dinner").value;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    goal = document.getElementById("goal").value;
    myText = "<html>\n<head>\n<title>Meal Plan</title>\n</head>\n<body>\n";
    myText += "<h1>"+name+"'s Meal Plan</h1>\n<p>Breakfast: "+breakfast+"</p><p>Snack: "+snack1+"</p><p>Lunch: "+lunch+"</p><p>Snack: "+snack2+"</p><p>Dinner: "+dinner+"</p>\n</body>";
    
    
    
    
    flyWindow = window.open('');
    flyWindow.document.write(myText);
});

function validateEmail() {
    let email = document.getElementById('email').value;
    let regex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regex.test(email)) {
        alert('Invalid email format!');
    }
}

// function submit_meal(){
// }
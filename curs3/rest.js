// XMLHttpRequest Web Service RESTful (GET, POST, PUT, DELETE)

// Get all users
function httpGet() {
  var url = "https://reqres.in/api/users?page=1";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  //xhr.readystatechange = function () {
  //https://teamtreehouse.com/community/xhronreadystatechange-vs-xhronload
  xhr.onload = function () {
    var users = JSON.parse(xhr.responseText);
    let userCard = "";
    const content = document.getElementById("continut");
    if (xhr.readyState == 4 && xhr.status == "200") {
      console.table(users.data);
      let myUsers = users.data;
      for (let i = 0; i < myUsers.length; i++) {
        userCard += `
        <h1 class="visually-hidden">Features examples</h1>
                    <div class="container px-4 py-5" id="featured-3">
      <h2 class="pb-2 border-bottom">Columns with icons</h2>
      <div id="continut" class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="feature col">
          <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <img src="${myUsers[i].avatar}" style='max-width:200px'>
          </div>
          <h3 class="fs-2 text-body-emphasis">${myUsers[i].first_name} ${myUsers[i].last_name}</h3>    
          <p>${myUsers[i].email}</p>
          <a href="${myUsers[i].avatar}" class="icon-link">
            Call to action
          </a>
        </div>`;
        
      }
      content.innerHTML = userCard;
    } else {
      console.error(users);
    }
  };
  xhr.send(null);
}

//Get a user
// var url  = "http://localhost/javascript/curs5/restfull/users.php";
// var xhr  = new XMLHttpRequest()
// xhr.open('GET', url+'?id=2', true)
// xhr.onload = function () {
//     var users = JSON.parse(xhr.responseText);
//     if (xhr.readyState == 4 && xhr.status == "200") {
//         console.table(users);
//     } else {
//         console.error(users);
//     }
// }
// xhr.send(null);

// Post a user
// var url = "http://localhost/javascript/curs5/restfull/users.php";

// var data = 'id=4&nume=Vasiliescu&prenume=Vlad';

// var xhr = new XMLHttpRequest();
// xhr.open("POST", url, true);
// xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
// xhr.onload = function () {
// 	var users = JSON.parse(xhr.responseText);
// 	if (xhr.readyState == 4 && xhr.status == "200") {
// 		console.table(users);
// 	} else {
// 		console.error(users);
// 	}
// }
// xhr.send(data);

// Update a user
// var url = "http://localhost/javascript/curs5/restfull/users.php";

// var data = 'nume=Anton&prenume=Vlad';

// var xhr = new XMLHttpRequest();
// xhr.open("PUT", url+'?id=1', true);
// xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
// xhr.onload = function () {
// 	var users = JSON.parse(xhr.responseText);
// 	if (xhr.readyState == 4 && xhr.status == "200") {
// 		console.table(users);
// 	} else {
// 		console.error(users);
// 	}
// }
// xhr.send(data);

// Delete a user
// var url = "http://localhost/javascript/curs5/restfull/users.php";
// var xhr = new XMLHttpRequest();
// xhr.open("DELETE", url+'?id=1', true);
// xhr.onload = function () {
// 	var users = JSON.parse(xhr.responseText);
// 	if (xhr.readyState == 4 && xhr.status == "200") {
// 		console.table(users);
// 	} else {
// 		console.error(users);
// 	}
// }
// xhr.send(null);

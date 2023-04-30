var firebaseConfig = {
    apiKey: "AIzaSyCqfcc_t6-yx_ut78S7FWFz8p-KNM8oa-Q",
    authDomain: "villanuevaact1finals.firebaseapp.com",
    projectId: "villanuevaact1finals",
    storageBucket: "villanuevaact1finals.appspot.com",
    messagingSenderId: "1094150647283",
    appId: "1:1094150647283:web:1bcf957980b33046a0f686"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Set database variable
  var database = firebase.database()
  
  function save() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    var time = document.getElementById('time').value
    var why = document.getElementById('Why').value
  
    database.ref('users/' + username).set({
      username : username,
      password : password,
      time : time,
      why : why
    })
  
    alert('Saved')
  }
  
  function get() {
    var username = document.getElementById('username').value
  
    var user_ref = database.ref('users/' + username)
    user_ref.on('value', function(snapshot) {
      var data = snapshot.val()
  
      alert(data.username)
  
    })
  
  }

  
  function update() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    var time = document.getElementById('time').value
    var why = document.getElementById('Why').value
  
    var updates = {
        username : username,
        password : password,
        time : time,
        why : why

    }
  
    database.ref('users/' + username).update(updates)
  
    alert('updated')
  }
  
  function remove() {
    var username = document.getElementById('username').value
  
    database.ref('users/' + username).remove()
  
    alert('deleted')
  }

  // Get a reference to the table
  var table = document.getElementById('table');
    
  // Function to fetch all data from Firebase and display it in the table
  function fetchData() {
    var ref = database.ref('users');
    ref.on('value', function(snapshot) {
      // Clear the table first
      table.innerHTML = '<thead><tr><th>Username</th><th>Password</th><th>Best Time to do School Works</th><th>Why</th></tr></thead><tbody>';
  
      // Loop through the data and add each row to the table
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        table.innerHTML += '<tr><td>' + childData.username + '</td><td>' + childData.password + '</td><td>' + childData.time + '</td><td>' + childData.why + '</td></tr>';
      });
  
      // Close the table body
      table.innerHTML += '</tbody>';
    });
  }
  
  // Call the fetchData function to display the data when the page loads
  fetchData();
  
  function displayTable() {
    window.location.href = "app.html";
  }
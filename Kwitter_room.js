var firebaseConfig = {
   apiKey: "AIzaSyCZZ-Uahp-dhyB_z54LfDSEuokF_hOPfUg",
   authDomain: "chitterchat-36f26.firebaseapp.com",
   databaseURL: "https://chitterchat-36f26-default-rtdb.firebaseio.com",
   projectId: "chitterchat-36f26",
   storageBucket: "chitterchat-36f26.appspot.com",
   messagingSenderId: "290472001503",
   appId: "1:290472001503:web:877762e4da943871aace6a",
   measurementId: "G-3QW4F8KMF3"
 };
firebase.initializeApp(firebaseConfig);

function addRoom(){
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "Kwitter_room.html";
document.getElementById("room_names").innerHTML = room_name
}
//row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id'>#"+Room_names+"</div><hr>";

function nameshow(){
   name1 = localStorage.getItem("name");
   document.getElementById("name").innerHTML = name1;
}


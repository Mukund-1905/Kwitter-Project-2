function addRoom(){
    room_name=document.getElementById("room_name").value;
    localStorage.setItem("room_name", room_name);

const firebaseConfig = {
  apiKey: "AIzaSyAQ1Nls7DInTcdClhgHg_pD8wqwBmtberQ",
  authDomain: "kwitter-project-c4686.firebaseapp.com",
  projectId: "kwitter-project-c4686",
  storageBucket: "kwitter-project-c4686.appspot.com",
  messagingSenderId: "299896526686",
  appId: "1:299896526686:web:4b346dcf3aacd63b0361cf",
  measurementId: "G-3PHDPNGTSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
}
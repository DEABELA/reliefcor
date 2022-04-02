const firebaseConfig = {
    apiKey: "AIzaSyCf5AzwmFteFW9R8SdAkhF39JrZO5Z0Xcw",
    authDomain: "new-firebase-1f4e4.firebaseapp.com",
    databaseURL: "https://new-firebase-1f4e4-default-rtdb.firebaseio.com",
    projectId: "new-firebase-1f4e4",
    storageBucket: "new-firebase-1f4e4.appspot.com",
    messagingSenderId: "704584987228",
    appId: "1:704584987228:web:639ba57d23afa608132c99"
  };



  // initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contact3");

document.getElementById("contact3").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var phone = getElementVal("phone");
  
  
  var telegram = getElementVal("telegram");
  var msgContent = getElementVal("msgContent");
  
  

  saveMessages(name, email, phone, telegram, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contact3").reset();
}

const saveMessages = (name, email, phone, telegram, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email: email,
    phone: phone,
    telegram: telegram,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
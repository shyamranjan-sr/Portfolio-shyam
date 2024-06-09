// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWb8hbU_IhukQ4SD03wq0RCzOO3FjaGys",
  authDomain: "portfolioshyam.firebaseapp.com",
  databaseURL: "https://portfolioshyam-default-rtdb.firebaseio.com",
  projectId: "portfolioshyam",
  storageBucket: "portfolioshyam.appspot.com",
  messagingSenderId: "788218007714",
  appId: "1:788218007714:web:556b42a0969f97f2b987fb",
  measurementId: "G-CCBE16GKM1"
};
  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference your database
  var contactFormDB = firebase.database().ref("contact");

  document.getElementById("contact").addEventListener("submit",submitForm);


  functionsubmitForm(e);{
    e.preventDefault();

    var name = getElementVal('name');
    var emailid = getElementVal('emailid');
    var mobileno = getElementVal('mobileno');
    var emailsubject = getElementVal('emailsubject');
    var msgContent = getElementVal('msgContent');

    saveMessages(name, emailid, mobileno, emailsubject, msgContent);

    //enable alert
    document.querySelector('.alert').style.display = "block";

  }

   const saveMessages = (name, emailid, mobileno, emailsubject, msgContent) => {
        var newContactForm = contactFormDB.push();

        newContactForm.set({
          name : name,
          emailid : emailid,
          mobileno : mobileno,
          emailsubject : emailsubject,
          msgContent : msgContent,
        });
  }

const getElementVal = (id) => {
  return document.getElementById(id).value;
}


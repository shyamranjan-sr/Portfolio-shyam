// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "#",
  authDomain: "#",
  databaseURL: "#",
  projectId: "portfolioshyam",
  storageBucket: "portfolioshyam.appspot.com",
  messagingSenderId: "#",
  appId: "#",
  measurementId: "#"
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



 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCwcXkAZoIfiQfc7iqAFpoa3-a5_cElLHg",
    authDomain: "loginweb-34cad.firebaseapp.com",
    projectId: "loginweb-34cad",
    storageBucket: "loginweb-34cad.appspot.com",
    messagingSenderId: "178607050995",
    appId: "1:178607050995:web:0071ffb26a6c5e54236786",
    measurementId: "G-K3XZRNGCK7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
//   function signUp(){
//     var email = document.getElementById("email");
//     var password = document.getElementById("password");

//     const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
//     //
//     promise.catch(e=>alert(e.message));
//     alert("SignUp Successfully");
//     window.location.replace("./index.html");
//   }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    // return 1;
    window.location.replace("./index.html");
    
  }
  // var one = signIn();
  // if(one==1){
  //   window.location.replace("./index.html");
  // }
  

  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })
  
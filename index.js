let dashboardUser="";

let resumekey="";
document
  .getElementById("signup-button")
  .addEventListener("click", displaySignupPage);
function displaySignupPage() {
  document.getElementById("login-page").style.display = "none";
  document.getElementById("signup-page").style.display = "flex";
  document.getElementById("print-page").style.display = "none";
  document.getElementById("resume-form").style.display="none";
  document.getElementById("template-page").style.display="none"
  document.getElementById("navigation").style.display = "none";
}
document.getElementById("logout-template").addEventListener("click", displaySigninPage);
document.getElementById("logout-resume").addEventListener("click", displaySigninPage);
document
  .getElementById("signup-signin-button")
  .addEventListener("click", displaySigninPage);
function displaySigninPage() {
  document.getElementById("login-page").style.display = "flex";
  document.getElementById("signup-page").style.display = "none";
  document.getElementById("print-page").style.display = "none";
  document.getElementById("resume-form").style.display="none";
  document.getElementById("template-page").style.display="none";
  document.getElementById("navigation").style.display = "none";
}

function displayresumepage(resumekey) {
console.log(resumekey);
closePopup()
defaultFunction(resumekey);
async function defaultFunction(resumekey) {

  let taskData = await fetch("http://localhost:8000/get-resume",
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );
  let data = await taskData.json();
  tasks = await data;
  console.log(tasks[resumekey]);
  document.getElementById("resume-fullname").innerHTML=tasks[resumekey].fullname;
  document.getElementById("resume-degree").innerHTML=tasks[resumekey].degree;
  document.getElementById("resume-goals").innerHTML=tasks[resumekey].goals;
  
  let hobbiestext=tasks[resumekey].hobbies;
  const hobbiesarray = hobbiestext.split(",");

var hobbiescontainer=document.getElementById('resume-hobbies');
  var hobbiesul = document.createElement("ul");
  hobbiescontainer.appendChild(hobbiesul);


for (var i = 0; i <hobbiesarray.length; i++)
{
    var li = document.createElement("li");  
    var a = document.createElement("a");
    a.innerHTML = hobbiesarray[i];
    li.appendChild(a);
    hobbiesul.appendChild(li);
}

  
  let aoitext=tasks[resumekey].area_of_interest;

  const aoiarray = aoitext.split(",");

  var aoicontainer=document.getElementById('resume-aoi');
  var aoiul = document.createElement("ul");
  aoicontainer.appendChild(aoiul);


for (var i = 0; i <aoiarray.length; i++)
{
    var li = document.createElement("li");  
    var a = document.createElement("a");
    a.innerHTML = aoiarray[i];
    li.appendChild(a);
    aoiul.appendChild(li);
}




  let projtext=tasks[resumekey].project;

  const projarray = projtext.split(",");

  var projcontainer=document.getElementById('resume-proj');
  var projul = document.createElement("ul");
  projcontainer.appendChild(projul);


for (var i = 0; i <projarray.length; i++)
{
    var li = document.createElement("li");  
    var a = document.createElement("a");
    a.innerHTML = projarray[i];
    li.appendChild(a);
    projul.appendChild(li);
}


  document.getElementById("resume-phone").innerHTML=tasks[resumekey].phonenumber;
  document.getElementById("resume-mail").innerHTML=tasks[resumekey].email;
  document.getElementById("resume-github").innerHTML=tasks[resumekey].github;
  document.getElementById("resume-dob").innerHTML=tasks[resumekey].dob;
  document.getElementById("resume-sex").innerHTML=tasks[resumekey].sex;
  document.getElementById("resume-nationality").innerHTML=tasks[resumekey].nationality;
  document.getElementById("resume-lang").innerHTML=tasks[resumekey].language;
  document.getElementById("resume-add").innerHTML=tasks[resumekey].address;

  document.getElementById("resume-10th-school").innerHTML=tasks[resumekey].sslc_school;
  document.getElementById("resume-10th-percentage").innerHTML=tasks[resumekey].sslc_cgpa;
  document.getElementById("resume-10th-year").innerHTML=tasks[resumekey].sslc_year;
  document.getElementById("resume-12th-school").innerHTML=tasks[resumekey].hsc_school;
  document.getElementById("resume-12th-percentage").innerHTML=tasks[resumekey].hsc_cgpa;
  document.getElementById("resume-12th-year").innerHTML=tasks[resumekey].hsc_year;
  document.getElementById("resume-ug-degree").innerHTML=tasks[resumekey].degree;
  document.getElementById("resume-ug-clg").innerHTML=tasks[resumekey].ug_clg;
  document.getElementById("resume-ug-percentage").innerHTML=tasks[resumekey].ug_cgpa;
  document.getElementById("resume-ug-year").innerHTML=tasks[resumekey].ug_year;

  let certificatetext=tasks[resumekey].certificates;

  const certificatearray = certificatetext.split(",");
 
  var certificatecontainer=document.getElementById('resume-certificate');
  var certificateul = document.createElement("ul");
  certificatecontainer.appendChild(certificateul);


for (var i = 0; i <certificatearray.length; i++)
{
    var li = document.createElement("li");  
    var a = document.createElement("a");
    a.innerHTML = certificatearray[i];
    li.appendChild(a);
    certificateul.appendChild(li);
}





  let achievementtext=tasks[resumekey].achievement;

  const achievementarray = achievementtext.split(",");
 
  var achievementcontainer=document.getElementById('resume-achievement');
  var achievementul = document.createElement("ul");
  achievementcontainer.appendChild(achievementul);


for (var i = 0; i <achievementarray.length; i++)
{
    var li = document.createElement("li");  
    var a = document.createElement("a");
    a.innerHTML = achievementarray[i];
    li.appendChild(a);
    achievementul.appendChild(li);
}



document.getElementById("navigation").style.display = "flex";
  document.getElementById("login-page").style.display = "none";
  document.getElementById("print-page").style.display = "flex";

  document.getElementById("signup-page").style.display = "none";
  document.getElementById("resume-form").style.display="none";
  document.getElementById("template-page").style.display="none"
}
}
document
  .getElementById("template-1").addEventListener("click",displaymainpage);
  

  function displaymainpage(){
    
    document.getElementById("login-page").style.display = "none";
  document.getElementById("print-page").style.display = "none";
  document.getElementById("signup-page").style.display = "none";
  document.getElementById("resume-form").style.display="flex";
   document.getElementById("template-page").style.display="none";
  }



  function displaytemplatepage(username){
    dashboardUser=username;
    console.log("bhbf"+dashboardUser);
    document.getElementById("login-page").style.display = "none";
  document.getElementById("print-page").style.display = "none";
  document.getElementById("signup-page").style.display = "none";
  document.getElementById("resume-form").style.display="none";
  document.getElementById("template-page").style.display="flex";
  document.getElementById("navigation").style.display = "none";
  }

var login_sign_in_button = document.getElementById("sign-in-button");
login_sign_in_button.addEventListener("click", checkLoginDetails);
async function checkLoginDetails() {
  try {
    let username = document.getElementById("username-input").value;
    let password = document.getElementById("password-input").value;
    let login_data = {};
    login_data = { username: `${username}`, password: `${password}` };
    
    let loginData = await fetch("http://localhost:8000/login-page", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(login_data),
    });
    
    if (loginData.ok) {
     
      document.getElementById("username-input").value = "";
      document.getElementById("password-input").value = "";
      displaytemplatepage(username);
    }
    else {
      alert("Enter valid details");
    }
  }
  catch (error) {
    alert(error.message);
  }
}


var reg_sign_up_button = document.getElementById("signup-register-button");
reg_sign_up_button.addEventListener("click", registerNewUser);


async function registerNewUser() {

  let username = document.getElementById("signup-user").value;
  let password = document.getElementById("signup-pass").value;
  let confirmpassword = document.getElementById("signup-confirm-pass").value;
  if (username.length != 0 && password.length != 0 && confirmpassword.length!=0) {
    let user = { username: `${username}`, password: `${password}` ,confirmpass:`${confirmpassword}`};
    let data = await fetch("http://localhost:8000/signup-page", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    document.getElementById("signup-user").value = "";
    document.getElementById("signup-pass").value = "";
    document.getElementById("signup-confirm-pass").value = "";
    displaySigninPage();
  }
  else {
    alert("enter valid details");
  }
}


var details_submit = document.getElementById("submit-button");
details_submit.addEventListener("click", displayResume);
document.getElementById("back-button").addEventListener("click",()=>{
  displaytemplatepage(dashboardUser)
});
document.getElementById("home-button").addEventListener("click",()=>{
  displaytemplatepage(dashboardUser)
});
async function displayResume() {

  console.log(dashboardUser);
  try {
    let uniquenumber=document.getElementById("unique-number").value;
    let fullname = document.getElementById("user-fullname").value;
    let degree = document.getElementById("user-degree").value;
    let goals = document.getElementById("user-goals").value;
    let hobbies = document.getElementById("user-hobbies").value;
    let area_of_interest = document.getElementById("user-area-of-interest").value;
    let certificates = document.getElementById("user-certificates").value;
    let phonenumber = document.getElementById("user-phonenumber").value;
    let email = document.getElementById("user-email").value;
    let github = document.getElementById("user-github").value;
    let dob = document.getElementById("user-dob").value;
    let sex = document.getElementById("user-sex").value;
    let nationality = document.getElementById("user-nationality").value;
    let language = document.getElementById("user-languages").value;
    let address = document.getElementById("user-address").value;
    let achievement = document.getElementById("user-achievement").value;
    let project = document.getElementById("user-project").value;
    let sslc_school = document.getElementById("sslc-school").value;
    let sslc_cgpa = document.getElementById("sslc-cgpa").value;
    let sslc_year = document.getElementById("sslc-year").value;
    let hsc_school = document.getElementById("hsc-school").value;
    let hsc_cgpa = document.getElementById("hsc-cgpa").value;
    let hsc_year = document.getElementById("hsc-year").value;
    let ug_clg = document.getElementById("ug-clg").value;
    let ug_cgpa = document.getElementById("ug-cgpa").value;
    let ug_year = document.getElementById("ug-year").value;
       let dashboardUsername=dashboardUser;
       mainkey=`${dashboardUsername}${uniquenumber}`
       resumekey=mainkey;
       
    let users = {
      mainkey: {
        mainkey:mainkey,
        dashboardUsername:dashboardUsername,
        fullname: fullname,
        degree: degree,
        goals: goals,
        hobbies:hobbies,
        area_of_interest:area_of_interest,
        certificates:certificates,
        phonenumber:phonenumber,
        email:email,
        github:github,
        dob:dob,
        sex:sex,
        nationality:nationality,
        language:language,
        address:address,
        achievement:achievement,
        project:project,
        sslc_school:sslc_school,
        sslc_cgpa:sslc_cgpa,
        sslc_year:sslc_year,
        hsc_school:hsc_school,
        hsc_cgpa:hsc_cgpa,
        hsc_year:hsc_year,
        ug_clg:ug_clg,
        ug_cgpa:ug_cgpa,
        ug_year:ug_year,
      },
    };

    let addResume = await fetch("http://localhost:8000/add-resume", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    });

    if (addResume.ok) {
      alert(" Successfull");
      displayresumepage(resumekey);
    } else {
      alert("Invalid details");
    }
  } catch (error) {
    alert(error.message);
  }

}



document.getElementById("my-resume-list-popup").addEventListener("click",displaymyresumelist)
function displaymyresumelist(){
  console.log("hi")
  document.getElementById('test').style.display = 'flex';
  
  defaultFunction();
  async function defaultFunction() {

  let taskData = await fetch("http://localhost:8000/get-resume",
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );
  let data = await taskData.json();
  tasks = await data;
  
  var resumes_list=document.getElementById('resumes-list');
  resumes_list.replaceChildren();
for(let i=0;i<Object.keys(tasks).length;i++){
  console.log(dashboardUser);
  console.log(tasks[Object.keys(tasks)[i]].dashboardUsername);
  if(tasks[Object.keys(tasks)[i]].dashboardUsername==dashboardUser){
    console.log("hlo");
   var resumelist=document.createElement("div");
   resumes_list.appendChild(resumelist);
   resumes_list.setAttribute("class","resume-div-list");
   resumelist.setAttribute("class","sub-div-myresume")
   resumelist.onclick=function () {
    displayresumepage(tasks[Object.keys(tasks)[i]].mainkey);
  }
   resumelist.innerHTML=tasks[Object.keys(tasks)[i]].mainkey;
    console.log(tasks[Object.keys(tasks)[i]].mainkey)
  }
  
}
 

  var dashboard = document.getElementById("template-page");
  dashboard.style.opacity = "0.2";
}
}
var exit_edit = document.getElementById("exit-edit");
exit_edit.addEventListener("click", closePopup);
function closePopup() {

  document.getElementById('test').style.display = 'none';
  var dashboard = document.getElementById("template-page");
  dashboard.style.opacity = "1";
}
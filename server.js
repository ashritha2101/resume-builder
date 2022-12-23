const express = require("express");
const app = express();
const fs = require("fs");
let mainusername="";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));
// render main page.
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//listen to port number 8000.
app.listen(8000);

//store new user's details in json.
app.post("/signup-page", function (req, res) {
  let username = req.body.username;

  let passwd = req.body.password;
  let confirmpasswd = req.body.confirmpass;
  let data = JSON.parse(fs.readFileSync("./data/data.json"));
 
  if (data.hasOwnProperty(username)) {
    res.status(404).send("user already exist!");
    res.end();
  }
  else if (username.length != 0 && passwd.length != 0 && passwd==confirmpasswd) {
    data[`${username}`] = {
      username: `${username}`,
      password: `${passwd}`,
    };
    data = JSON.stringify(data);
    fs.writeFile("./data/data.json", data, () => { });
    res.status(200).send("registered successfully");
    res.end();
  }
  else {
    res.status(404).send("Enter valid credentials");
    res.end();
  }
});
// validate login details.
app.post("/login-page", function (req, res) {
    let data = JSON.parse(fs.readFileSync("./data/data.json"));
    let username = req.body.username;
    mainusername=username;
    let passwd = req.body.password;
    if (data.hasOwnProperty(username)) {
     
      if (data[username].password == passwd) {
        res.status(200).send("Login successfull");
        res.end();
      }
      else {
        res.status(404).send("Invalid password");
        res.end();
      }
    }
    else {
      res.status(404).send("Username not found");
      res.end();
    }
  });


  app.post("/add-resume", function (req, res) {
    let data = JSON.parse(fs.readFileSync("./data/resume.json"));
    let mainkey=req.body.mainkey.mainkey;
    let dashboardUsername = req.body.mainkey.dashboardUsername;
    let fullname = req.body.mainkey.fullname;
    let degree = req.body.mainkey.degree;
    let goals=req.body.mainkey.goals;
    let hobbies = req.body.mainkey.hobbies;
    let area_of_interest = req.body.mainkey.area_of_interest;
    let certificates = req.body.mainkey.certificates;
    let phonenumber=req.body.mainkey.phonenumber;
    let email = req.body.mainkey.email;
    let github = req.body.mainkey.github;
    let dob = req.body.mainkey.dob;
    let sex=req.body.mainkey.sex;
    let nationality = req.body.mainkey.nationality;
    let language = req.body.mainkey.language;
    let address = req.body.mainkey.address;
    let achievement=req.body.mainkey.achievement;
    let project = req.body.mainkey.project;
    let sslc_school = req.body.mainkey.sslc_school;
    let sslc_cgpa = req.body.mainkey.sslc_cgpa;
    let sslc_year=req.body.mainkey.sslc_year;
    let hsc_school = req.body.mainkey.hsc_school;
    let hsc_cgpa = req.body.mainkey.hsc_cgpa;
    let hsc_year = req.body.mainkey.hsc_year;
    let ug_clg=req.body.mainkey.ug_clg;
    let ug_cgpa=req.body.mainkey.ug_cgpa;
    let ug_year=req.body.mainkey.ug_year;
    if(data.hasOwnProperty(mainkey)){
      res.status(404).send("Enter valid unique number");
      res.end();
    }
    else if (mainkey.length != 0 

      &&ug_year!=0&&ug_cgpa!=0&&ug_clg!=0&&hsc_year!=0&&hsc_cgpa!=0&&hsc_school!=0&&sslc_year!=0&&sslc_cgpa!=0 &&sslc_school!=0&& dashboardUsername.length != 0 && fullname!=0 && degree!=0&&goals!=0&&hobbies!=0&&area_of_interest!=0&&certificates!=0&&phonenumber!=0&&email!=0&&github!=0&&dob!=0&&sex!=0&&nationality!=0&&language!=0&&address!=0&&achievement!=0&&project!=0){
      data[`${mainkey}`] = {
        dashboardUsername:`${dashboardUsername}`,
        mainkey:`${mainkey}`,
        fullname: `${fullname}`,
        degree: `${degree}`,
        goals: `${goals}`,
        hobbies: `${hobbies}`,
        area_of_interest: `${area_of_interest}`,
        certificates: `${certificates}`,
        phonenumber: `${phonenumber}`,
        email: `${email}`,
        github: `${github}`,
        dob: `${dob}`,
        sex: `${sex}`,
        nationality: `${nationality}`,
        language: `${language}`,
        address: `${address}`,
        achievement: `${achievement}`,
        project: `${project}`,
        sslc_school: `${sslc_school}`,
        sslc_cgpa: `${sslc_cgpa}`,
        sslc_year: `${sslc_year}`,
        hsc_school: `${hsc_school}`,
        hsc_cgpa: `${hsc_cgpa}`,
        hsc_year: `${hsc_year}`,
        ug_clg: `${ug_clg}`,
        ug_cgpa: `${ug_cgpa}`,
        ug_year: `${ug_year}`,
      };
      data = JSON.stringify(data);
      fs.writeFile("./data/resume.json", data, () => { });
      res.status(200).send("entered successfully");
      res.end();
    } else {
      res.status(404).send("Enter valid info");
      res.end();
    }
  });
  app.get("/get-resume", (req, res) => {
    let resumedata = JSON.parse(fs.readFileSync("./data/resume.json"));
    res.send(resumedata);
  });
function myfunc(event) {
  var title = document.getElementById("title").value;
  var ign = document.getElementById("ign").value;
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;
  var d = document.getElementById("d").value;
  var e = document.getElementById("e").value;
  var f = document.getElementById("f").value;
  var g = document.getElementById("g").value;
  var h = document.getElementById("h").value;
  var x = document.getElementById("x").value;
  var y = document.getElementById("y").value;
  var z = document.getElementById("z").value;
  var dob = document.getElementById("dob").value;

  localStorage.setItem("Is_team_name", title);
  localStorage.setItem("Is_ign", ign);
  localStorage.setItem("Is_first_namee", fname);
  localStorage.setItem("Is_last_name", lname);
  localStorage.setItem("Is_email_address", email);
  localStorage.setItem("Is_password", password);
  localStorage.setItem("Is_pubg", b);
  localStorage.setItem("Is_cod", c);
  localStorage.setItem("Is_fortnite", d);
  localStorage.setItem("Is_pes_2022", e);
  localStorage.setItem("Is_valorant", f);
  localStorage.setItem("Is_asphalt_9", g);
  localStorage.setItem("Is_asia", h);
  localStorage.setItem("Is_north_america", x);
  localStorage.setItem("Is_europe", y);
  localStorage.setItem("Is_medile_east", z);
  localStorage.setItem("Is_date_of_birth", dob);
}

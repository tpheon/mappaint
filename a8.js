function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(getPosition);
    }
  else{alert("Geolocation is not supported by this browser.");}
  }
  
function getPosition(position)
  {
  alert("Latitude: " + position.coords.latitude + 
  "Longitude: " + position.coords.longitude); 
  }
  
function showLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
  else{alert("Geolocation is not supported by this browser.");}
  }  
  
function showPosition(position)
{
var latlon=position.coords.latitude+","+position.coords.longitude;

var img_url="http://maps.googleapis.com/maps/api/staticmap?center="
+latlon+"&zoom=14&size=400x300&sensor=false";

document.getElementById("mapholder").innerHTML="<img src='"+img_url+"'>";
}

function showError(error)
  {
  switch(error.code) 
    {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
     alert("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
    }
}
function draw(image)
{
    image_set = new Array();
    var p1 = new Image;
    p1.src = "pic1.png";
    image_set.push(p1);
    var p2 = new Image;
    p2.src = "pic2.png";
    image_set.push(p2);
    var p3 = new Image;
    p3.src = "pic3.png";
    image_set.push(p3);
    var c1 = document.getElementById("c1");
    var cont = c1.getContext("2d");
    cont.drawImage(image_set[image-1], 0, 0);
}
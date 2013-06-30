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

function saveLocation(position){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(parseLocation);
    }
    else{alert("Geolocation is not supported by this browser.");}
}


function parseLocation(position)
{
    Parse.initialize("26Otc747ThkgjbDAgkVlFFqSPXfcjtmgWuePVGRA", "x0SDVAE2EYM7Kpg7qmGoSjCqu8ZnBn561GDwtXxN");
    var Location = Parse.Object.extend("Location");
    var loc = new Location();
    loc.set("timestamp",position.timestamp);
    loc.set("latitude",position.coords.latitude);
    loc.set("longitude",position.coords.longitude);
    loc.save(null, {
        success: function(loc) {
            alert("Stored position.");
        },
        error: function(loc, error) {
            alert('We may have a problem:' + error.description);
        }
    });
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

function draw_map(){
    var c1 = document.getElementById("c1");
    var cont = c1.getContext("2d");
    Parse.initialize("26Otc747ThkgjbDAgkVlFFqSPXfcjtmgWuePVGRA", "x0SDVAE2EYM7Kpg7qmGoSjCqu8ZnBn561GDwtXxN");
    var Location = Parse.Object.extend("Location");
    var query = new Parse.Query(Location);
    query.find({ 
      success: function(results) {
          var dx = 10 - results[0].get('latitude');
          var dy = 10 - results[0].get('longitude');
          cont.beginPath();
          cont.moveTo(100, 100);
          for (var i=0; i<results.length; i++){
              cont.lineTo((results[i].get('latitude') + dx)*10, (results[i].get('longitude') + dy)*10);
          }
          cont.strokeStyle = "#000";
          cont.stroke();
      },
      error: function(results, error) {
          alert('We may have a problem:' + error.description);
      }
    });
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
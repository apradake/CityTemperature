var finalTemp;

function getTemp()
{
        var city= document.getElementById("inp").value;
        console.log("Great ! You reside in "+city);
        var api="http://api.openweathermap.org/data/2.5/weather?q=";
        var key="&APPID=6e681d0641c2dd3bfa6da1eedf90bd02";
        var unit="&units=metric";
        var request = new XMLHttpRequest()
        request.open('GET',api+city+key+unit, true)
        request.onload = function() 
            {  
                var TempData = JSON.parse(this.response)
                finalTemp=TempData.main.temp;
                var country=TempData.sys.country;
            if (request.status >= 200 && request.status < 400) {
                {   
         document.getElementById("showData").innerHTML=finalTemp+" Cels , " + country;
                    if (finalTemp > 35 )
                        {
                           summerHere();
                        }
                    else
                        {
                            winter();
                        }
                  
                }
            } 
            else 
                {
                console.log('ERROR...ERROR...');
                }
    
            }
        
        request.send();
    

    
    
}

function reset()
{
    document.getElementById("inp").value=" ";
     document.getElementById("showData").value="";
    
}

function summerHere()
{
 document.getElementById("showData").innerHTML=finalTemp+" Cels , " + country;
}
function winter()
{
  document.getElementById("showData").innerHTML=finalTemp+" Cels , " + country;
}  



        
    
 
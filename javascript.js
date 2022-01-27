
function Argument(ReZ, ImZ) {
const PI = 3.1415926;
//Origin
if (ReZ == 0 && ImZ == 0) {
return "Undefined";
}
//X-axis(Real axis)
if (ReZ != 0 && ImZ == 0) {
//+ve X-axis
if (ReZ > 0) {
return 0;
}
//-ve X-axis
else {
return PI;
}
}
//Y-axis(Imaginary axis)
else if (ReZ == 0 && ImZ != 0) {
// +ve Y-axis
if (ImZ > 0) {
return PI / 2;
}
//-ve Y-axis
else {
return -PI / 2;
}
}
//Quadrants
else {
let m = Math.abs(ImZ / ReZ);
//1st qudrant
if (ReZ > 0 && ImZ > 0) {
return Math.atan(m);
}
//2nd quadrant
else if (ReZ < 0 && ImZ > 0) {
return PI - Math.atan(m);
}
//3rd quadrant
else if (ReZ < 0 && ImZ < 0) {
return Math.atan(m) - PI;
}
//4th quadrant
else {
return -Math.atan(m);
}
}
}


function runClick()
{
    let ReZ = document.getElementById("real").value;
    let ImZ = document.getElementById("img").value;
    let ArgZ = Argument(ReZ, ImZ);
        if (ArgZ == 'Undefined')
         {
            document.getElementById("result").innerHTML= 'Undefined';
         }  
        else {
          ArgZ = ArgZ.toFixed(2);
          document.getElementById("result").innerHTML= ArgZ;
        }


}

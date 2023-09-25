//  Pre-Match -------------------------------------------------------------------------------------->

let soul = document.getElementById('soul'); //soul.value
let match = document.getElementById('match');
    parseInt(match);
let team = document.getElementById('team');
    parseInt(team);
let teamName = document.getElementById('teamName');

let position1 = document.getElementById('radio1');
let position2 = document.getElementById('radio2');
let position3 = document.getElementById('radio3');

let pos = 0;

function pos1(){
    pos = position1.value;
}function pos2(){
    pos = position2.value;
}function pos3(){
    pos = position3.value;
}

position1.addEventListener('click',pos1,true);
position2.addEventListener('click',pos2,true);
position3.addEventListener('click',pos3,true);

//Recuperar: soul, match, team, pos, teamName


//  Autonomous -------------------------------------------------------------------------------------->

let autoUpper = 0;
let autoLower = 0;
let autoUpperFail = 0;
let autoLowerFail = 0;

let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');

function add(){
    autoUpper++;
    document.getElementById('autoLabel1').innerHTML = autoUpper;
}function rest(){
    if(autoUpper<=0) autoUpper = 0;
    else{
        autoUpper--;
    }
    document.getElementById('autoLabel1').innerHTML = autoUpper;
}

b1.addEventListener('click',rest);
b2.addEventListener('click',add);

let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');

function add2(){
    autoLower++;
    document.getElementById('autoLabel2').innerHTML = autoLower;
}function rest2(){
    if(autoLower<=0) autoLower = 0;
    else{
        autoLower--;
    }
    document.getElementById('autoLabel2').innerHTML = autoLower;
}

b3.addEventListener('click',rest2);
b4.addEventListener('click',add2);

let b5 = document.getElementById('b5');
let b6 = document.getElementById('b6');

function add3(){
    autoUpperFail++;
    document.getElementById('autoLabel3').innerHTML = autoUpperFail;
}function rest3(){
    if(autoUpperFail<=0) autoUpperFail = 0;
    else{
        autoUpperFail--;
    }
    document.getElementById('autoLabel3').innerHTML = autoUpperFail;
}

b5.addEventListener('click',rest3);
b6.addEventListener('click',add3);

let b7 = document.getElementById('b7');
let b8 = document.getElementById('b8');

function add4(){
    autoLowerFail++;
    document.getElementById('autoLabel4').innerHTML = autoLowerFail;
}function rest4(){
    if(autoLowerFail<=0) autoLowerFail = 0;
    else{
        autoLowerFail--;
    }
    document.getElementById('autoLabel4').innerHTML = autoLowerFail;
}

b7.addEventListener('click',rest4);
b8.addEventListener('click',add4);

let checkBox = document.getElementById('cruzaLinea');
let cruza = 0;

function cruzaLinea(){
    if(cruza == 0){
        cruza = 1;
        document.getElementById('cruza').innerHTML = 'Cruza línea: sí';
    }
    else if(cruza == 1){
        cruza = 0;
        document.getElementById('cruza').innerHTML = 'Cruza línea: no';
    }    
}

checkBox.addEventListener('click',cruzaLinea);

//Recuperar: cruza, autoUpper, autoLower, autoUpperFails, autoLowerFails

//  TeleOp -------------------------------------------------------------------------------------->

let teleOpUpper = 0;
let teleOpLower = 0;
let teleOpUpperFail = 0;
let teleOpLowerFail = 0;

let b9 = document.getElementById('b9');
let b10 = document.getElementById('b10');

function add5(){
    teleOpUpper++;
    document.getElementById('teleOpLabel1').innerHTML = teleOpUpper;
}function rest5(){
    if(teleOpUpper<=0) teleOpUpper = 0;
    else{
        teleOpUpper--;
    }
    document.getElementById('teleOpLabel1').innerHTML = teleOpUpper;
}

b9.addEventListener('click',rest5);
b10.addEventListener('click',add5);

let b11 = document.getElementById('b11');
let b12 = document.getElementById('b12');

function add6(){
    teleOpLower++;
    document.getElementById('teleOpLabel2').innerHTML = teleOpLower;
}function rest6(){
    if(teleOpLower<=0) teleOpLower = 0;
    else{
        teleOpLower--;
    }
    document.getElementById('teleOpLabel2').innerHTML = teleOpLower;
}

b11.addEventListener('click',rest6);
b12.addEventListener('click',add6);

let b13 = document.getElementById('b13');
let b14 = document.getElementById('b14');

function add7(){
    teleOpUpperFail++;
    document.getElementById('teleOpLabel3').innerHTML = teleOpUpperFail;
}function rest7(){
    if(teleOpUpperFail<=0) teleOpUpperFail = 0;
    else{
        teleOpUpperFail--;
    }
    document.getElementById('teleOpLabel3').innerHTML = teleOpUpperFail;
}

b13.addEventListener('click',rest7);
b14.addEventListener('click',add7);

let b15 = document.getElementById('b15');
let b16 = document.getElementById('b16');

function add8(){
    teleOpLowerFail++;
    document.getElementById('teleOpLabel4').innerHTML = teleOpLowerFail;
}function rest8(){
    if(teleOpLowerFail<=0) teleOpLowerFail = 0;
    else{
        teleOpLowerFail--;
    }
    document.getElementById('teleOpLabel4').innerHTML = teleOpLowerFail;
}

b15.addEventListener('click',rest8);
b16.addEventListener('click',add8);

//Recuperar: teleOpUpper, teleOpLower, teleOpUpperFails, teleOpLowerFails

//  EndGame -------------------------------------------------------------------------------------->

let barra1 = document.getElementById('radio5');
let barra2 = document.getElementById('radio6');
let barra3 = document.getElementById('radio7');
let barra4 = document.getElementById('radio8');

let barra = 0;

function bar1(){
    barra = barra1.value;
}function bar2(){
    barra = barra2.value;
}function bar3(){
    barra = barra3.value;
}function bar4(){
    barra = barra4.value;
}

barra1.addEventListener('click',bar1);
barra2.addEventListener('click',bar2);
barra3.addEventListener('click',bar3);
barra4.addEventListener('click',bar4);

let tiempo1 = document.getElementById('radio9');
let tiempo2 = document.getElementById('radio10');
let tiempo3 = document.getElementById('radio11');
let tiempo4 = document.getElementById('radio12');
let tiempo5 = document.getElementById('radio13');

let tiempo = 0;

function time1(){
    tiempo = tiempo1.value;
}function time2(){
    tiempo = tiempo2.value;
}function time3(){
    tiempo = tiempo3.value;
}function time4(){
    tiempo = tiempo4.value;
}function time5(){
    tiempo = tiempo5.value;
}

tiempo1.addEventListener('click',time1);
tiempo2.addEventListener('click',time2);
tiempo3.addEventListener('click',time3);
tiempo4.addEventListener('click',time4);
tiempo5.addEventListener('click',time5);

//Recuperar: barra, tiempo

//  General -------------------------------------------------------------------------------------->

let faltas = 0;

let b17 = document.getElementById('b17');
let b18 = document.getElementById('b18');

function add9(){
    faltas++;
    document.getElementById('resLabel1').innerHTML = faltas;
}function rest9(){
    if(faltas<=0) faltas = 0;
    else{
        faltas--;
    }
    document.getElementById('resLabel1').innerHTML = faltas;
}

b17.addEventListener('click',rest9);
b18.addEventListener('click',add9);

let checkBox2 = document.getElementById('alive');
let vivo = 1;

function alive(){
    if(vivo == 0){
        vivo = 1;
        document.getElementById('resLabel2').innerHTML = 'Vivo';
    }
    else if(vivo == 1){
        vivo = 0;
        document.getElementById('resLabel2').innerHTML = 'Muerto';
    }    
}

checkBox2.addEventListener('click',alive);

let checkBox3 = document.getElementById('defense');
let def = 0;

function defense(){
    if(def == 0){
        def = 1;
        document.getElementById('resLabel3').innerHTML = 'Sí hace defensa';
    }
    else if(def == 1){
        def = 0;
        document.getElementById('resLabel3').innerHTML = 'No hace defensa';
    }    
}

checkBox3.addEventListener('click',defense);

let com = document.getElementById('comments'); //com.value

//Recuperar: faltas, vivo, def, com

//-------------------------------------------------------------------------------------->

let clear = document.getElementById('clear');
let submit = document.getElementById('submitBtn');    
let resName = document.getElementById('resName');
let resMatch = document.getElementById('resMatch');
let resTeam = document.getElementById('resTeam');
let resAutoUpper = document.getElementById('resAutoUpper');
let resFinal = document.getElementById('resFinal');
let flag = false;

function show(){
    if(soul.value == ''){
        event.preventDefault();
        alert('No name');
        clear.className = "btn btn-default disabled";        
    }else if(match.value<=0){
        event.preventDefault();
        alert('No match number');
        clear.className = "btn btn-default disabled";
    }else if(team.value<=0){
        event.preventDefault();
        alert('No team number');
        clear.className = "btn btn-default disabled";
    }else if(teamName.value == ''){
        event.preventDefault();
        alert('No team name');
        clear.className = "btn btn-default disabled";
    }
    else{
        clear.className = "btn btn-outline-secondary"; 
        flag = true;
    }
    
    resName.innerHTML= "DATA;AUTO;TELEOP;END;GRAL"
    resMatch.innerHTML= soul.value+";"+autoUpper+";"+teleOpUpper+";"+barra+";"+faltas;
    resTeam.innerHTML= match.value+";"+autoLower+";"+teleOpUpperFail+";"+tiempo+";"+vivo;
    resAutoUpper.innerHTML=teamName.value+";"+pos+";"+teleOpLower+";"+""+";"+def;
    resFinal.innerHTML=team.value+";"+cruza+";"+teleOpLowerFail+";"+""+";"+com.value;
}

function restart(){
    if(!flag){
        alert('Complete information');
    }
    else{
        downloadFile();
    }
}

submit.addEventListener('click',show);
clear.addEventListener('click',restart)

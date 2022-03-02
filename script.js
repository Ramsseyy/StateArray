function myfunction(){
    var selectstate = ["AZ", "Texas", "CA", "Florida", "Alaska"];
    var arrArizona = ["Phoenix"];
    var arrTexas = ["Austin"];
    var arrCalifornia = ["Sacramento"];
    var arrFlorida = ["Tallahassee"];
    var arrAlaska = ["Juneau"];

    var selectoptions = (document.getElementById("state").value);
    var displayCapitals = document.getElementById("capitals");

    document.getElementById("capitals").innerHTML="";

    if(selectoptions=="AZ"){
        for(i=0;i<arrArizona.length;i++){
            var soptions = document. createElement('option');
            soptions.innerHTML=arrArizona[i];
            soptions.value=arrArizona[i];
            displayCapitals.appendChild(soptions);
        }
    }

    if(selectoptions=="Texas"){
        for(i=0;i<arrTexas.length;i++){
            var soptions = document. createElement('option');
            soptions.innerHTML=arrTexas[i];
            soptions.value=arrTexas[i];
            displayCapitals.appendChild(soptions);
        }
    }

    if(selectoptions=="CA"){
        for(i=0;i<arrCalifornia.length;i++){
            var soptions = document. createElement('option');
            soptions.innerHTML=arrCalifornia[i];
            soptions.value=arrCalifornia[i];
            displayCapitals.appendChild(soptions);
        }
    }

    if(selectoptions=="Florida"){
        for(i=0;i<arrFlorida.length;i++){
            var soptions = document. createElement('option');
            soptions.innerHTML=arrFlorida[i];
            soptions.value=arrFlorida[i];
            displayCapitals.appendChild(soptions);
        }
    }

    if(selectoptions=="Alaska"){
        for(i=0;i<arrAlaska.length;i++){
            var soptions = document. createElement('option');
            soptions.innerHTML=arrAlaska[i];
            soptions.value=arrAlaska[i];
            displayCapitals.appendChild(soptions);
        }
    }


}
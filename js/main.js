function imeprovera()
{
    var ime=document.formakontakt.ime.value;
    var prezime=document.formakontakt.prezime.value;
    var sifra=document.formakontakt.sifra.value;
    var potvrdasifra=document.formakontakt.potvrdasifra.value;
    var email=document.formakontakt.email.value;


    var email_pat= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    var dat=new Date()
    var vreme = dat.getDate() +"."+(dat.getMonth()+1)+"."+dat.getFullYear()+" "+dat.getHours()+":"+dat.getMinutes();

    
    if(ime===""  || ime===null)
    {
        document.getElementById("prva").innerHTML="Niste uneli ime" + "!";
        return false;
    }
    else if(prezime===""  || prezime===null)
    {
        document.getElementById("prva").innerHTML="";
        document.getElementById("druga").innerHTML="Niste uneli prezime" + "!";
        return false;
    }
    else if(sifra===""  || sifra===null)
    {
        document.getElementById("druga").innerHTML="";
        document.getElementById("treca").innerHTML="Niste uneli sifru" + "!";
        return false;
    }
    else if(potvrdasifra===""  || potvrdasifra===null)
    {
        document.getElementById("treca").innerHTML="";
        document.getElementById("cetvrta").innerHTML="Niste uneli potvrdu sifre" + "!";
        return false;
    }
    else if(!(sifra==potvrdasifra))
    {
        document.getElementById("cetvrta").innerHTML="Šifre se ne podudaraju" + "!";
        return false;
    }
    else if(email===""  || email===null)
    {
        document.getElementById("cetvrta").innerHTML="";
        document.getElementById("peta").innerHTML="Niste uneli E-mail adresu" + "!";
        return false;
    }

    else if(!email.match(email_pat))
    {
        document.getElementById("cetvrta").innerHTML="";
        document.getElementById("peta").innerHTML="Niste lepo uneli e-mail adresu" + "!";
        return false;
    }
    else
    {
        save("Vreme", vreme, localStorage );
        save("Vreme", vreme, sessionStorage );
        save("E-mail", email, localStorage );
        save("E-mail", email, sessionStorage );
        alert ("Uspešno ste poslali formu");
        return true;
    }
}
function save(key, value, storage)
    {
        storage.setItem(key, value);
    }
var keys = [];
var values = [];
function readStorage(storage, keys, values, idEl)
{
        keys.length = 0;
        values.length = 0;
    let i=0;
        while(storage.key(i)){
            let k = storage.key(i);
            let v = storage.getItem(k);
            keys.push(k);
            values.push(v);
            i++;
        }
    var rez="";
    for(i=0;i<keys.length;i++){
        rez+=" " + keys[i] + ": " + values[i];
    }
        document.getElementById(idEl).innerHTML=rez;
}

function openTab(tabName) {
    var i, x;
    x = document.getElementsByClassName("containerTab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  }
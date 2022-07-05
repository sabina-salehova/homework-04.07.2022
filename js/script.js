
function hesabla()
{
    var mebleg=document.getElementById("mebleg").value.trim();
    var faiz=document.getElementById("faiz").value.trim();
    var meblegText=document.getElementById("umumi");
    var odenisText=document.getElementById("odenis");
    var text=document.getElementById("NaN");

    var meblegNumber=Number(mebleg);
    var faizNumber=(mebleg*Number(faiz))/100;
    var ayNumber=Number(document.getElementById("ay").value);
    var umumi_mebleg=meblegNumber+faizNumber*(ayNumber/12);
    var odenis=umumi_mebleg/ayNumber; 

    if(umumi_mebleg.toString()=='NaN' || odenis.toString()=='NaN')
    {        
        text.innerHTML="Duzgun deyer daxil edilmeyib";
        text.style.color='red';
        meblegText.innerHTML="";
        odenisText.innerHTML="";
    }
    else
    {
        text.innerHTML="";
        meblegText.innerHTML="Umumi mebleg: "+Math.round(umumi_mebleg)+" azn";
        odenisText.innerHTML="Ayliq odenis: "+Math.round(odenis)+" azn";
    }
    
    

}


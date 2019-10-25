        document.getElementById("personOne").style.visibility='hidden';
        document.getElementById("personTwo").style.visibility='hidden';
        document.getElementById("labePersonOne").style.visibility='hidden';
        document.getElementById("labelPersonTwo").style.visibility='hidden';
function display()
{
    if(document.getElementById("radiofirst").checked)
    {
        document.getElementById("personOne").style.visibility='visible';
        document.getElementById("personTwo").style.visibility='hidden';
        document.getElementById("labePersonOne").style.visibility='visible';
        document.getElementById("labelPersonTwo").style.visibility='hidden';
    } 
    else if(document.getElementById("radiosecond").checked)
    {
        document.getElementById("personOne").style.visibility='visible';
        document.getElementById("personTwo").style.visibility='visible';
        document.getElementById("labePersonOne").style.visibility='visible';
        document.getElementById("labelPersonTwo").style.visibility='visible';
    }
}
function rechnen(){
    if(document.getElementById("radiofirst").checked)
    {
            if(document.getElementById("personOne").value > 0)
            {
                var zvE1 = document.getElementById("personOne").value;
                if(document.getElementById("radioYear2020").checked)
                    {
                        if(zvE1 <= 9408)
                        { 
                            document.getElementById("result").innerHTML = "0";
                           
                        }else if(zvE1>=9409 && zvE1 <=14532)
                        {
                                var y = (zvE1 - 9408)/10000;
                                var ESt1 =(972.87 * y + 1400)* y ;
                                document.getElementById("result").innerHTML= ESt1.toFixed(3);
                        }else if(zvE1>=14533 && zvE1 <=57051)
                        {
                            var y = (zvE1 - 14532)/10000;
                            var ESt1 =(212.02 * y + 2397)* y + 972.79 ;
                            document.getElementById("result").innerHTML= ESt1.toFixed(3);
                        }else if(zvE1>=57051 && zvE1 <=270500)
                        {
                            var ESt1 = zvE1 * 0.42 - 8963.74;
                            document.getElementById("result").innerHTML= ESt1.toFixed(3);
                        }else if(zvE1 >=270501)
                        {
                            var ESt1 = zvE1 * 0.45 - 17078.74;
                            document.getElementById("result").innerHTML= ESt1.toFixed(3);
                        }
                    }else if(document.getElementById("radioYear2019").checked)
                    {
                        if(zvE1 <= 9168)
                        { 
                            document.getElementById("result").innerHTML = "0";
                           
                        }else if(zvE1>=9169 && zvE1 <=14254)
                        {
                                var y = (zvE1 - 9168)/10000;
                                var ESt1 =(980.14 * y + 1400)* y ;
                                document.getElementById("result").innerHTML= ESt1.toFixed(3);
                        }else if(zvE1>=14255 && zvE1 <=55960)
                        {
                            var y = (zvE1 - 14254)/10000;
                            var ESt1 =(216.16 * y + 2397)* y + 965.58;
                            document.getElementById("result").innerHTML= ESt1.toFixed(3);
                        }else if(zvE1>=55961 && zvE1 <=265326)
                        {
                            var ESt1 = zvE1 * 0.42 - 8780.90;
                            document.getElementById("result").innerHTML= ESt1.toFixed(3);
                        }else if(zvE1 >=265327)
                        {
                            var ESt1 = zvE1 * 0.45 - 16740.68;
                            document.getElementById("result").innerHTML= ESt1.toFixed(3);
                        }
                    }else if(document.getElementById("radioYear2018").checked)
                    {
                        if(zvE1 <= 9000)
                        { 
                            document.getElementById("result").innerHTML = "0";
                           
                        }else if(zvE1>=9001 && zvE1 <=13966)
                        {
                                var y = (zvE1 - 9000)/10000;
                                var ESt1 =(997.80 * y + 1400)* y ;
                                document.getElementById("result").innerHTML= ESt1.toFixed(3);
                        }else if(zvE1>=13997 && zvE1 <=54949)
                        {
                            var y = (zvE1 - 13996)/10000;
                            var ESt1 =(220.13 * y + 2397)* y + 948.49;
                            document.getElementById("result").innerHTML= ESt1.toFixed(3);
                        }else if(zvE1>=54950 && zvE1 <=260532)
                        {
                            var ESt1 = zvE1 * 0.42 - 8621.75;
                            document.getElementById("result").innerHTML= ESt1.toFixed(3);
                        }else if(zvE1 >=260533)
                        {
                            var ESt1 = zvE1 * 0.45 - 16437.70;
                            document.getElementById("result").innerHTML= ESt1.toFixed(3);
                        }
                    }

            }else
            {
                window.alert("Person Eins falsch einkommen");
                document.getElementById("personOne").value= "" ;
            }
    }else if(document.getElementById("radiosecond").checked)
    {
        if(document.getElementById("personOne").value > 0)
        {
                if(document.getElementById("personTwo").value>0)
                {
                    var zvE2 = parseInt((document.getElementById("personOne").value) + parseInt(document.getElementById("personTwo").value)) / 2;
                    if(document.getElementById("radioYear2020").checked)
                    {
                        if(zvE2 <= 9408)
                        { 
                            document.getElementById("result").innerHTML = "0";
                           
                        }else if(zvE2>=9409 && zvE2 <=14532)
                        {
                                var y = (zvE2 - 9408)/10000;
                                var ESt2 =(972.87 * y + 1400)* y ;
                                document.getElementById("result").innerHTML= (ESt2*2).toFixed(3);
                        }else if(zvE2>=14533 && zvE2 <=57051)
                        {
                            var y = (zvE2 - 14532)/10000;
                            var ESt2 =(212.02 * y + 2397)* y + 972.79 ;
                            document.getElementById("result").innerHTML= (ESt2*2).toFixed(3);
                        }else if(zvE2>=57051 && zvE2 <=270500)
                        {
                            var ESt2 = zvE2 * 0.42 - 8963.74;
                            document.getElementById("result").innerHTML= (ESt2*2).toFixed(3);
                        }else if(zvE2 >=270501)
                        {
                            var ESt2 = zvE2 * 0.45 - 17078.74;
                            document.getElementById("result").innerHTML= (ESt2*2).toFixed(3);
                        }
                    }else if(document.getElementById("radioYear2019").checked)
                    {
                        if(zvE2 <= 9168)
                        { 
                            document.getElementById("result").innerHTML = "0";
                           
                        }else if(zvE2>=9169 && zvE2 <=14254)
                        {
                                var y = (zvE2 - 9168)/10000;
                                var ESt2 =(980.14 * y + 1400)* y ;
                                document.getElementById("result").innerHTML= (ESt2*2).toFixed(3);
                        }else if(zvE2>=14255 && zvE2 <=55960)
                        {
                            var y = (zvE2 - 14254)/10000;
                            var ESt2 =(216.16 * y + 2397)* y + 965.58;
                            document.getElementById("result").innerHTML= (ESt2*2).toFixed(3);
                        }else if(zvE2 >=55961 && zvE2 <=265326)
                        {
                            var ESt2 = zvE2 * 0.42 - 8780.90;
                            document.getElementById("result").innerHTML= (ESt2*2).toFixed(3);
                        }else if(zvE2 >=265327)
                        {
                            var ESt2 = zvE2 * 0.45 - 16740.68;
                            document.getElementById("result").innerHTML= (ESt2*2).toFixed(3);
                        }
                    }else if(document.getElementById("radioYear2018").checked)
                    {
                        if(zvE2 <= 9000)
                        { 
                            document.getElementById("result").innerHTML = "0";
                           
                        }else if(zvE2>=9001 && zvE2<=13966)
                        {
                                var y = (zvE2 - 9000)/10000;
                                var ESt2 =(997.80 * y + 1400)* y ;
                                document.getElementById("result").innerHTML= (ESt2*2).toFixed(3);
                        }else if(zvE2>=13997 && zvE2<=54949)
                        {
                            var y = (zvE2 - 13996)/10000;
                            var ESt2 =(220.13 * y + 2397)* y + 948.49;
                            document.getElementById("result").innerHTML= (ESt2*2).toFixed(3);
                        }else if(zvE2>=54950 && zvE2 <=260532)
                        {
                            var ESt2 = zvE1 * 0.42 - 8621.75;
                            document.getElementById("result").innerHTML= (ESt2*2).toFixed(3);
                        }else if(zvE2 >=260533)
                        {
                            var ESt1 = zvE2 * 0.45 - 16437.70;
                            document.getElementById("result").innerHTML= (ESt2*2).toFixed(3);
                        }
                    }
                

                }else
                {
                    window.alert("Person Zwei falsch einkommen");
                    document.getElementById("personTwo").value= "" ;
                }
        }else
        {
            window.alert("Person Eins falsch einkommen");
            document.getElementById("personOne").value= "" ;
        }
    }
}

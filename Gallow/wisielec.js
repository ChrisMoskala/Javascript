var passwords = new Array(10);
passwords[0] = "Szczurów sto";
passwords[1] = "Jajco";
passwords[2] = "Jak ona mnie denerwuje";
passwords[3] = "Klucha";
passwords[4] = "Przystojny bohater";
passwords[5] = "Szop";
passwords[6] = "Gokarty";
passwords[7] = "Teatr";
passwords[8] = "Brzoskwinia";
passwords[9] = "Pierwszy lepszy bus";

var number = Math.floor(Math.random()*10);
var haslo= passwords [number];
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;
var ile_skuch= 0;
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");
var haslo1 = "";

for(i=0; i<dlugosc; i++){

    if(haslo.charAt(i)==" ")haslo1 = haslo1 + " ";
    else haslo1 = haslo1 + "-";
}
function wypisz_haslo() {
    document.getElementById("board").innerHTML = haslo1;
}

window.onload = start;

var letters = new Array(35);
letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ż";
letters[34] = "Ź";


function start(){
    var tresc_diva="";
for(i=0; i<=34; i++){
    var element = "lit" + i;
    tresc_diva = tresc_diva + '<div class="letter" onclick="check('+i+')" id="'+element+'">'+letters[i]+'</div>';
    if((i+1) % 7== 0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
}
    document.getElementById("alphabet").innerHTML = tresc_diva;


    wypisz_haslo();

}

String.prototype.ustawZnak = function(miejsce, znak)
{
    if (miejsce > this.length - 1) return this.toString();
    else return this.substring(0, miejsce) + znak + this.substring(miejsce+1);
}

function check(nr)
{
    var trafiona = false;

    for(i=0; i<dlugosc; i++){
        if(haslo.charAt(i) == letters[nr]){
            haslo1 = haslo1.ustawZnak(i,letters[nr]);
            trafiona = true;
        }
    }
    if(trafiona==true){
        yes.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute('onclick',';');
        wypisz_haslo();
    }
    else{
        no.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute('onclick',';');

        //skucha
        ile_skuch++;
        var obraz = "img/s" + ile_skuch + ".jpg";
        document.getElementById("gallow").innerHTML = '<img src="'+obraz+'" alt="" />';
    }
    //wygrana
    if(haslo==haslo1){
        document.getElementById("alphabet").innerHTML = "Zgadłaś szczurku! Hasło brzmiało:"+haslo+
        '<br/><br/><span class="reset" onclick="location.reload()">Jeszcze raz?</span>';
    }

    //przegrana
    if(ile_skuch>=9){
        document.getElementById("alphabet").innerHTML = "Lipa, nie wyszło Ci bambusie. Poprawne hasło:"+haslo+
        '<br/><br/><span class = "reset" onclick="location.reload()">Spróbuj ponownie</span>';
    }

}
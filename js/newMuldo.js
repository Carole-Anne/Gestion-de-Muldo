window.onload = function(){
    
    document.getElementsByClassName("ajout-groupe-3")[0].onclick = function(e) {
        e.stopPropagation();
        ajoutGroupe(3);
        return false;
    };
    document.getElementsByClassName("ajout-groupe-4")[0].onclick = function(e) {
        e.stopPropagation();
        ajoutGroupe(4);
        return false;
    };
    document.getElementsByClassName("ajout-groupe-5")[0].onclick = function(e) {
        e.stopPropagation();
        ajoutGroupe(5);
        return false;
    };
    
    var listLI = document.getElementsByTagName("li");
    var l = listLI.length;
    for(i = 0; i<l; i++){
        listLI[i].addEventListener('click', (function(arg1){
            return function() {
                liSelected(arg1);
            };
        })(i),false);
    }
    
    function liSelected(i){
        document.getElementsByTagName("li")[i].background = "#F88E38";
    };
    
    function ajoutGroupe (numGroupe) {
        var nomGroupe = "groupes-"+numGroupe;
        var nomAjoutGroupe = "ajout-groupe-"+numGroupe;
        
        var listeGroupe = document.getElementsByClassName(nomGroupe); //Liste Option
        var sautLigne = document.createElement("br");
        var lastGroupe = listeGroupe[listeGroupe.length -1];
        var parent = lastGroupe.parentNode;
        //Si on ajoute le troisieme groupe, on supprime le bouton +
        if(listeGroupe.length > 1){
            parent.removeChild(document.getElementsByClassName(nomAjoutGroupe)[0]);
        }
        var liste2 = document.createElement("select");
        liste2.setAttribute("class", nomGroupe);
        var listOption = lastGroupe.childNodes;
        //Ajout des groupes dans la liste
        //A partir de la BD ???????
       for(var i in listOption){
            var option = document.createElement("option");
            var text = document.createTextNode(listOption[i].nextSibling);
            option.appendChild(text);
            liste2.appendChild(option);
        } 
        parent.insertBefore(liste2,lastGroupe.nextSibling);
        parent.insertBefore(sautLigne,lastGroupe.nextSibling);
    };
    
    
    choisitCouleur();
    
    document.getElementById("couleur").onchange = function(e) {
        e.stopPropagation();
        choisitCouleur();
        return false;
    };
    
    function choisitCouleur(){
        var listCouleur = document.getElementsByClassName("couleur");
        var select = document.getElementById("couleur");
        var indexSelect = select.selectedIndex;
        var couleur = listCouleur[indexSelect].value;
        
        var imgNewMuldo = document.getElementById("imgEnfantNew");
        switch(couleur){
            case "amande" :
                imgNewMuldo.src = "./image/amande.png";
                break;
            case "amandeEmeraude" :
                imgNewMuldo.src = "./image/amandeEmeraude.png";
                break;
            case "amandeIvoire" :
                imgNewMuldo.src = "./image/amandeIvoire.png";
                break;
            case "dore" :
                imgNewMuldo.src = "./image/dore.png";
                break;
            case "doreAmande" :
                imgNewMuldo.src = "./image/doreAmande.png";
                break;
            case "doreEbene" :
                imgNewMuldo.src = "./image/doreEbene.png";
                break;
            case "doreEmeraude" :
                imgNewMuldo.src = "./image/doreEmeraude.png";
                break;
            case "doreIndigo" :
                imgNewMuldo.src = "./image/doreIndigo.png";
                break;
            case "doreIvoire" :
                imgNewMuldo.src = "./image/doreIvoire.png";
                break;
            case "doreOrchi" :
                imgNewMuldo.src = "./image/doreOrchi.png";
                break;
            case "dorePourpre" :
                imgNewMuldo.src = "./image/dorePourpre.png";
                break;
            case "ebene" :
                imgNewMuldo.src = "./image/ebene.png";
                break;
            case "ebeneAmande" :
                imgNewMuldo.src = "./image/ebeneAmande.png";
                break;
            case "ebeneEmeraude" :
                imgNewMuldo.src = "./image/ebeneEmeraude.png";
                break;
            case "ebeneIndigo" :
                imgNewMuldo.src = "./image/ebeneIndigo.png";
                break;
            case "ebeneIvoire" :
                imgNewMuldo.src = "./image/ebeneIvoire.png";
                break;
            case "ebeneOrchi" :
                imgNewMuldo.src = "./image/ebeneOrchi.png";
                break;
            case "ebenePourpre" :
                imgNewMuldo.src = "./image/ebenePourpre.png";
                break;
            case "emeraude" :
                imgNewMuldo.src = "./image/emeraude.png";
                break;
            case "indigo" :
                imgNewMuldo.src = "./image/indigo.png";
                break;
            case "indigoAmande" :
                imgNewMuldo.src = "./image/indigoAmande.png";
                break;
            case "indigoEmeraude" :
                imgNewMuldo.src = "./image/indigoEmeraude.png";
                break;
            case "indigoIvoire" :
                imgNewMuldo.src = "./image/indigoIvoire.png";
                break;
            case "indigoOrchi" :
                imgNewMuldo.src = "./image/indigoOrchi.png";
                break;
            case "indigoPourpre" :
                imgNewMuldo.src = "./image/indigoPourpre.png";
                break;
            case "ivoire" :
                imgNewMuldo.src = "./image/ivoire.png";
                break;
            case "ivoireEmeraude" :
                imgNewMuldo.src = "./image/ivoireEmeraude.png";
                break;
            case "orchi" :
                imgNewMuldo.src = "./image/orchidee.png";
                break;
            case "orchiAmande" :
                imgNewMuldo.src = "./image/orchiAmande.png";
                break;
            case "orchiEmeraude" :
                imgNewMuldo.src = "./image/orchiEmeraude.png";
                break;
            case "orchiIvoire" :
                imgNewMuldo.src = "./image/orchiIvoire.png";
                break;
            case "orchiPourpre" :
                imgNewMuldo.src = "./image/orchiPourpre.png";
                break;
            case "pourpre" :
                imgNewMuldo.src = "./image/pourpre.png";
                break;
            case "pourpreAmande" :
                imgNewMuldo.src = "./image/pourpreAmande.png";
                break;
            case "pourpreEmeraude" :
                imgNewMuldo.src = "./image/pourpreEmeraude.png";
                break;
            case "pourpreIvoire" :
                imgNewMuldo.src = "./image/pourpreIvoire.png";
                break;
            case "prune" :
                imgNewMuldo.src = "./image/prune.png";
                break;
            case "pruneAmande" :
                imgNewMuldo.src = "./image/pruneAmande.png";
                break;
            case "pruneDore" :
                imgNewMuldo.src = "./image/pruneDore.png";
                break;
            case "pruneEbene" :
                imgNewMuldo.src = "./image/pruneEbene.png";
                break;
            case "pruneEmeraude" :
                imgNewMuldo.src = "./image/pruneEmeraude.png";
                break;
            case "pruneIndigo" :
                imgNewMuldo.src = "./image/pruneIndigo.png";
                break;
            case "pruneIvoire" :
                imgNewMuldo.src = "./image/pruneIvoire.png";
                break;
            case "pruneOrchi" :
                imgNewMuldo.src = "./image/pruneOrchi.png";
                break;
            case "prunePourpre" :
                imgNewMuldo.src = "./image/prunePourpre.png";
                break;
            case "pruneRoux" :
                imgNewMuldo.src = "./image/pruneRoux.png";
                break;
            case "pruneTurquoise" :
                imgNewMuldo.src = "./image/pruneTurquoise.png";
                break;
            case "roux" :
                imgNewMuldo.src = "./image/roux.png";
                break;
            case "rouxAmande" :
                imgNewMuldo.src = "./image/rouxAmande.png";
                break;
            case "rouxDore" :
                imgNewMuldo.src = "./image/rouxDore.png";
                break;
            case "rouxEbene" :
                imgNewMuldo.src = "./image/rouxEbene.png";
                break;
            case "rouxEmeraude" :
                imgNewMuldo.src = "./image/rouxEmeraude.png";
                break;
            case "rouxIndigo" :
                imgNewMuldo.src = "./image/rouxIndigo.png";
                break;
            case "rouxIvoire" :
                imgNewMuldo.src = "./image/rouxIvoire.png";
                break;
            case "rouxOrchi" :
                imgNewMuldo.src = "./image/rouxOrchi.png";
                break;
            case "rouxPourpre" :
                imgNewMuldo.src = "./image/rouxPourpre.png";
                break;
            case "turquoise" :
                imgNewMuldo.src = "./image/turquoise.png";
                break;
            case "turquoiseAmande" :
                imgNewMuldo.src = "./image/turquoiseAmande.png";
                break;
            case "turquoiseEbene" :
                imgNewMuldo.src = "./image/turquoiseEbene.png";
                break;
            case "turquoiseEmeraude" :
                imgNewMuldo.src = "./image/turquoiseEmeraude.png";
                break;
            case "turquoiseIndigo" :
                imgNewMuldo.src = "./image/turquoiseIndigo.png";
                break;
            case "turquoiseIvoire" :
                imgNewMuldo.src = "./image/turquoiseIvoire.png";
                break;
            case "turquoiseOrchi" :
                imgNewMuldo.src = "./image/turquoiseOrchi.png";
                break;
            case "turquoisePourpre" :
                imgNewMuldo.src = "./image/turquoisePourpre.png";
                break;
            case "turquoiseRoux" :
                imgNewMuldo.src = "./image/turquoiseRoux.png";
                break;
            default :
                imgNewMuldo.src = "./image/dore.png";
        }
        
    };
    
};

    function validateForm(){
        document.body.style.cursor = 'wait';
        var nom = document.getElementById("nom").value;
        var nbSaillie = document.getElementById("nbSaillie").value;
        if(nom.match(/^[a-zA-Z]{1,16}$/) && nbSaillie.match(/^[1-4]{1}$/)){
            document.body.style.cursor = 'auto';
            return true;
        }
        document.body.style.cursor = 'auto';
        return false;
        
    }

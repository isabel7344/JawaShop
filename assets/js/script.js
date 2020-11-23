// display categories without refresh

const homeLogo = document.getElementById("homeLogo"),
    homeBtn = document.getElementById("homeBtn"),
    clothesBtn = document.getElementById("clothesBtn"),
    figuBtn = document.getElementById("figuBtn"),
    caveBtn = document.getElementById("caveBtn"),
    homeFoot = document.getElementById("homeFoot"),
    clothesFoot = document.getElementById("clothesFoot"),
    figuFoot = document.getElementById("figuFoot"),
    caveFoot = document.getElementById("caveFoot"),
    home = document.getElementById("home"),
    clothes = document.getElementById("clothes"),
    figurine = document.getElementById("figurine"),
    cave = document.getElementById("cave");

homeLogo.onclick = () => {
    home.style.display = "block";
    clothes.style.display = "none";
    figurine.style.display = "none";
    cave.style.display = "none";
}

homeBtn.onclick = () => {
    home.style.display = "block";
    clothes.style.display = "none";
    figurine.style.display = "none";
    cave.style.display = "none";
}

clothesBtn.onclick = () => {
    clothes.style.display = "block";
    home.style.display = "none";
    figurine.style.display = "none";
    cave.style.display = "none";
}

figuBtn.onclick = () => {
    figurine.style.display = "block";
    home.style.display = "none";
    clothes.style.display = "none";
    cave.style.display = "none";
}

caveBtn.onclick = () => {
    cave.style.display = "block";
    home.style.display = "none";
    clothes.style.display = "none";
    figurine.style.display = "none";
}

homeFoot.onclick = () => {
    home.style.display = "block";
    clothes.style.display = "none";
    figurine.style.display = "none";
    cave.style.display = "none";
}

clothesFoot.onclick = () => {
    clothes.style.display = "block";
    home.style.display = "none";
    figurine.style.display = "none";
    cave.style.display = "none";
}

figuFoot.onclick = () => {
    figurine.style.display = "block";
    home.style.display = "none";
    clothes.style.display = "none";
    cave.style.display = "none";
}

caveFoot.onclick = () => {
    cave.style.display = "block";
    home.style.display = "none";
    clothes.style.display = "none";
    figurine.style.display = "none";
}

// end display categories without refreshlet 




























let valeur = 0;



let deja_cliquer = [] // les ids de tout les elements deja cliquer
function produit_deja_cliquer(id) {
    return deja_cliquer.indexOf(id) !== -1; // renvoi vrai si deja cliquer sinon faux
}



function ajouterPanier(id_du_produit) {

    if (produit_deja_cliquer(id_du_produit) === true) {
        console.log("objet deja cliquer")
        return;
    }
    // else
    deja_cliquer.push(id_du_produit) // si pas deja cliquer on l'ajoute a tableau des cliquer


    ///////////////////// RECUPERATION DES ELEMENTS DE LA CARTE
    let produit = document.getElementById(id_du_produit).cloneNode(true);
    let produit_img = produit.children[0]; // on recuper les element contenu dans notre card sous forme de tableau et l'index 0 correspond a son <img>
    let titre = produit.children[1].children[0] // on recupere la div card body puis dans cette div on recupere le titre <h5>
    let ref = produit.children[1].children[2] // on recupere la div card body puis dans cette div on recupere le prix
    let price = produit.children[1].children[3] // on recupere la div card body puis dans cette div on recupere le titre <h5>
    ///////////////////////////

    ///////////////////// AJOUT AU PANIER
    let new_elem = document.createElement("tr");
    new_elem.appendChild(produit_img);
    new_elem.appendChild(titre);
    new_elem.appendChild(ref);
    new_elem.appendChild(price);

    let newButtonPositive = document.createElement("button");
    newButtonPositive.innerHTML = "+";

    let newButtonNegative = document.createElement("button");
    newButtonNegative.innerHTML = "-";


    let supShop = document.getElementById("delete");
    supShop.onclick = () => {
        panier.innerHtml = null;
        deja_cliquer = [];
    }

    document.getElementById("panier").appendChild(new_elem);

    new_elem.appendChild(newButtonPositive);
    new_elem.appendChild(newButtonNegative);

    let displayCounter = document.createElement('input');
    displayCounter.id = id_du_produit;
    new_elem.appendChild(displayCounter)

    let sousTotal = document.createElement('input')
    sousTotal.id = id_du_produit;
    new_elem.appendChild(sousTotal);

    newButtonPositive.onclick = function positive(event) {

        event.preventDefault();
        console.log("+ 1");
        valeur = document.getElementById(id_du_produit).value = +document.getElementById(id_du_produit).value + 1;

        if (valeur >= 1) {
            console.log('ok');
            price.innerHTML = parseFloat(price.innerHTMLe) * parseFloat(displayCounter.innerHTML);
             
            
        }
    }



    newButtonNegative.onclick = function negative(event) {

        event.preventDefault();
        console.log("- 1");
        valeur = document.getElementById(id_du_produit).value = +document.getElementById(id_du_produit).value - 1;
        return valeur;
    }
    // if (displayCounter.value == 0) {
    //     newButtonNegative.setAttribute('disabled', '');
    //     console.log(valeur);
    // } else if (displayCounter.value > 0) {
    //     newButtonNegative.removeAttribute('disabled','');
    // }
}


// function multiply(priceMultiply) {
//     console.log(price);
//     return priceMultiply = parseFloat(price) * parseFloat(displayCounter);
// }

// function divide(price) {
//     console.log(price);
//     return price = parseFloat(price) / parseFloat(displayCounter);
// }
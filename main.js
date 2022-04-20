// Mon nombre de cookies
let cookies = 0;
// Mon nombre de curseurs
let cursors = 0;
// Mon nombre de mamies
let mamies = 0;

// Mes sélections DOM

// section cookies
// L'élément de texte qui affiche mon nombre de cookies
let cookiesCount = document.querySelector("#cookies-count");
// L'élément sur lequel je clique pour augmenter mon nombre de cookies
let cookieClic = document.querySelector("#cookie-clic");


//section curseurs
// L'élément de texte qui affiche mon nombre de curseurs
let cursorCount = document.querySelector("#cursor-count");
// L'élément de texte qui affiche mon nombre de mamie
let mamieCount = document.querySelector("#mamie-count");
// L'élément sur lequel je clique pour augmenter mon nombre de curseurs
let cursorClic = document.querySelector("#add-cursor");
// L'élément sur lequel je clique pour augmenter mon nombre de mamies
let mamieClic = document.querySelector("#add-mamie");

// Ma fonction pour mettre à jour le texte dans mes éléments HTML
function refresh()
{
    cookiesCount.textContent = cookies;
    cursorCount.textContent = cursors;
    mamieCount.textContent = mamies;
}

// Ma fonction pour ajouter un cookie
function addCookie() 
{
    // augmente la valeur de ma variable cookies de 1
    cookies++;
    // mettre à jour le texte dans le navigateur
    refresh();
}

// Ma fonction pour ajouter un curseur
function addCursor()
{
    // Si j'ai plus de 15 cookies
    if(cookies >= 15)
    {
        // créer un setInterval() qui appelle la fonction addCookie toutes les 10 secondes
        window.setInterval(addCookie, 10000);
        // augmente la valeur de ma variable cursors de 1
        cursors++;
        // retire 15 cookies --> Me fait "payer" le curseur
        cookies -= 15;
        // mettre à jour le texte dans le navigateur
        refresh();
    }
}

// Ma fonction pour ajouter une mamie, qui coute 100 cookies et produit 1 cookie par seconde
function addMamie()
{
    // Si j'ai plus de 100 cookies
    if(cookies >= 100)
    {
        // créer un setInterval() qui appelle la fonction addCookie toutes les secondes
        window.setInterval(addCookie, 1000);
        // augmente la valeur de ma variable mamie de 1
        mamies++;
        // retire 15 cookies --> Me fait "payer" le curseur
        cookies -= 100;
        // mettre à jour le texte dans le navigateur
        refresh();
    }
}

// Afficher par défaut la variable cookie dans le navigateur
refresh();

// ajout des écouteurs d'évènement
cookieClic.addEventListener("click", addCookie);
cursorClic.addEventListener("click", addCursor);
mamieClic.addEventListener("click", addMamie);






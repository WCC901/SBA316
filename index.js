// const input = (document.getElementById("eras")).querySelector("option");
const gallery = document.getElementById("gallery");
const picsList = gallery.querySelectorAll("img");
const button = document.querySelector("input");
const body = document.querySelector("body");
const select = document.querySelector("select");

console.log (picsList);

// Function that should
// update the image gallery
// accoriding to the dropdown input
function handleBtnClick(){
    if (select.value == "jurassic") {
        for (const picture of picsList) {
            console.log(picture);
            if (picture.src != "./apato.jpg") {
                picture.setAttribute("src", "./apato.jpg");
                picture.setAttribute("alt", "Apatosaurus Picture");
            } else if (picture.src != "./dimo.jpg") {
                picture.setAttribute("src", "./dimo.jpg");
                picture.setAttribute("alt", "Dimorphodon Picture");
            } else if (picture.src != "./stego.jpg") {
                picture.setAttribute("src", "./stego.jpg");
                picture.setAttribute("alt", "Stegosaurus Picture");
            }
        }
    }
    else if (select.value == "triassic") {
        
    } else if (select.value == "cretaceous") {
        
    }
}

button.addEventListener("click", handleBtnClick);
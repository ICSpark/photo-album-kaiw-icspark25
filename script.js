function fix() {
    let coconut=document.getElementById("coconut");
    coconut.remove();
    let coast=document.getElementById("coast");
    coast.remove();
    let watermelon=document.getElementById("watermelon");
    watermelon.remove();
    let sunflowers=document.getElementById("sunflowers")
    sunflowers.remove();
    let photos=document.getElementById("photos");
    let tree=document.createElement("img");
    tree.id="tree";
    tree.src='to-add/christmasTree.jpg';
    photos.appendChild(tree);
    let snowmen=document.createElement("img");
    snowmen.id="snowmen";
    snowmen.src='to-add/snowmen.jpg';
    photos.appendChild(snowmen);
    let stockings=document.createElement("img");
    stockings.id="tree";
    stockings.src='to-add/stockings.jpg';
    photos.appendChild(stockings);
    

}


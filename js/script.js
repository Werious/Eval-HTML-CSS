document.getElementById("icon").addEventListener("click", function() {
    document.getElementById("sidenav").classList.toggle("toggle_side");
    document.getElementById("icon").classList.toggle("fixed");
    document.getElementById("side_dropdown").classList.add("toggle_drop");
    document.getElementById("chapters").innerHTML="+CHAPTERS";
});

document.getElementById("side_chapters").addEventListener("click", function() {
    let x = document.getElementById("chapters");
    document.getElementById("side_dropdown").classList.toggle("toggle_drop");
    if(x.innerHTML=="+CHAPTERS"){
        x.innerHTML="-CHAPTERS";
    } else{
        x.innerHTML="+CHAPTERS";
    }
});
function toggle() {
    let btn = document.querySelector('.button');
    let extra = document.querySelector('#extra');
    
    btn.textContent = btn.textContent === "More" ? "Less" : "More"; //changing the text of the button
    if (extra.style.display == ""){
        extra.style.display = "none";
    }

    extra.style.display = extra.style.display === "none" ? "block" : "none"; //changing the display of the extra element
    
}
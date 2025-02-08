document.addEventListener("DOMContentLoaded",function() {
    const ShareBtn=document.getElementById("share-b");
    const ShareBar= document.querySelector(".share-bar");

    ShareBtn.addEventListener("click",function(){
        if( ShareBar.style.display === "none" || ShareBar.style.display === "" ){
            ShareBar.style.display ="flex";
        } else {
            ShareBar.style.display ="none";
        }
        
        
    });
    
});

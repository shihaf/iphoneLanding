window.onload=function(){
    document.getElementById('home_nav').style.borderBottom="2px solid white";
    document.getElementById('home_nav').addEventListener("click",fun);
    document.getElementById('feature_nav').addEventListener("click",fun);
    document.getElementById('specs_nav').addEventListener("click",fun);
    document.getElementById('gallery_nav').addEventListener("click",fun);
    document.getElementById('about_nav').addEventListener("click",fun);
    }
    function fun(){
    document.getElementById('home_nav').style.border="none";
    document.getElementById('feature_nav').style.border="none";
    document.getElementById('specs_nav').style.border="none";
    document.getElementById('gallery_nav').style.border="none";
    document.getElementById('about_nav').style.border="none";
    this.style.borderBottom= "2px solid white";
    }
    
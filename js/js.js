
document.getElementById('sobreMi').onclick = function(){
    console.log('Click en Sobre mi')
    document.getElementById('personalInfo').style = "display: none"
    document.getElementById('socialNetwork').style = "display: none"
    document.getElementById('myBlog').style = "display: none"
    document.getElementById('contact').style = "display: none"
    document.getElementById('aboutMe').style = "display: content"
}

document.getElementById('infoPersonal').onclick = function(){
    document.getElementById('aboutMe').style = "display: none"
    document.getElementById('socialNetwork').style = "display: none"
    document.getElementById('myBlog').style = "display: none"
    document.getElementById('contact').style = "display: none"
    document.getElementById('personalInfo').style = "display: content"
}

document.getElementById('redes').onclick = function(){
    document.getElementById('aboutMe').style = "display: none"
    document.getElementById('personalInfo').style = "display: none"
    document.getElementById('myBlog').style = "display: none"
    document.getElementById('contact').style = "display: none"
    document.getElementById('socialNetwork').style = "display: content"
}

document.getElementById('miBlog').onclick = function(){
    document.getElementById('aboutMe').style = "display: none"
    document.getElementById('personalInfo').style = "display: none"
    document.getElementById('socialNetwork').style = "display: none"
    document.getElementById('contact').style = "display: none"
    document.getElementById('myBlog').style = "display: content"
}

document.getElementById('contacto').onclick = function(){
    document.getElementById('aboutMe').style = "display: none"
    document.getElementById('personalInfo').style = "display: none"
    document.getElementById('socialNetwork').style = "display: none"
    document.getElementById('myBlog').style = "display: none"
    document.getElementById('contact').style = "display: content"
}

if(document.getElementById("btnEnviar")){
    var modal = document.getElementById("miModal");
    var btn = document.getElementById("btnEnviar");
    var span = document.getElementsByClassName("close")[0];
    var body = document.getElementsByTagName("body")[0];

    btn.onclick = function() {
        modal.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";
        }
    }
}

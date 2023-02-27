
document.getElementById('sobreMi').onclick = function(){
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
    document.getElementById('personalInfo').style = "display: contents"
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


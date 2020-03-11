class postBlog {
    constructor(title, autor, content) {
        this.title = title
        this.autor = autor
        this.content = content
    }
}

const arrPost = [];

function addPostBlog() {
    const titleBlog = document.getElementById("input-title").value;
    const autorBlog = document.getElementById("input-autor").value;
    const contentBlog = document.getElementById("input-content").value;
    
    const newPost = new postBlog(titleBlog, autorBlog, contentBlog);

    arrPost.push(newPost);
   
   const containerPost = document.getElementById("new-post");
   
   for(let post of arrPost){
    containerPost.innerHTML += "<div id='new-post-published'>" 
                            + "<h2> Título:" + post.title + "</h2>"
                            + "<h4> Autor: " + post.autor + "</h4>"
                            + "<p>" + post.content + "</p>" 
                            + "</div>"
    } 
}

function onKeyDown(e) {
    if (e.key === "Enter") {
        addPostBlog()
    }
}

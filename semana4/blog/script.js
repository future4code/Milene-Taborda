class Post {
    constructor(title, autor, content, image) {
        this.title = title
        this.autor = autor
        this.content = content
        this.image = image
    }
}

const arrPost = [];

function addPostBlog() {
    const titleBlog = document.getElementById("input-title").value;
    const autorBlog = document.getElementById("input-autor").value;
    const contentBlog = document.getElementById("input-content").value;
        
    const newPost = new Post(titleBlog, autorBlog, contentBlog);
    arrPost.push(newPost);
    titleBlog.value = ""
    autorBlog.value = ""
    contentBlog.value = ""

   
   const containerPost = document.getElementById("new-post");
   
   for(let post of arrPost){
    containerPost.innerHTML += "<div id='new-post-published'>" 
                            + "<h2>" + post.title + "</h2>"
                            + "<h4>" + post.autor + "</h4>"
                            + "<p>" + post.content + "</p>" 
                            + "</div>"
    } 

    const imageBlog = document.getElementById("input-image");
    if (
        imageBlog.value.includes(".jpeg") ||
        imageBlog.value.includes(".png") ||
        imageBlog.value.includes(".jpg") ||
        imageBlog.value.includes("data")
    ) {
        const image = document.getElementById("new-post-published");
         image.innerHTML += "<img id='imgPost' src='" + imageBlog.value + "'/>";
    }
}

function onKeyDownInput(e) {
    if (e.key === "Enter") {
      if (
        e.target.value.includes(".jpeg") ||
        e.target.value.includes(".png") ||
        e.target.value.includes(".jpg") ||
        e.target.value.includes("data")
      ) {
        const image = document.getElementById("new-post-published");
        image.innerHTML += "<img id='imgPost' src='" + e.target.value + "'>";
        e.target.value = "";
      } 
    }
  }

function onKeyDown(e) {
    if (e.key === "Enter") {
        addPostBlog()
    }
}

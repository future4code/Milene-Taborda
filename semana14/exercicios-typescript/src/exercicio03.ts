type post={
    text: string,
    author: string
}

const post1: post={
    text: "Não mate os animais",
    author: "Mol"
};

const post2: post={
    text: "Tem uma cobra na minha bota",
    author: "Woody"
}

const post3: post={
    text: "Ao infinito e além",
    author: "Buzz lightyear"
}

const post4: post={
    text: "O que o naturo faria ?",
    author: "desconhecido"
}

const post5: post={
    text: "quem é o sonic ? O porco espinho ?",
    author: "Louco do saco"
}


const arrayPosts: post[] = [post1, post2, post3, post4, post5];

console.log(arrayPosts);

function filterPost(arr: post[], author?: string): post[]{
    if(author){
        return arr.filter((element)=>{
            return element.author === author;
        })
    }else{
        return arr;
    }
}


console.log(filterPost(arrayPosts, "Ricardo"));
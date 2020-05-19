const post1 = {
    text: "Não mate os animais",
    author: "Ricardo"
};
const post2 = {
    text: "Tem uma cobra na minha bota",
    author: "Woody"
};
const post3 = {
    text: "Ao infinito e além",
    author: "Buzz lightyear"
};
const post4 = {
    text: "O que o naturo faria ?",
    author: "desconhecido"
};
const post5 = {
    text: "quem é o sonic ? O porco espinho ?",
    author: "Louco do saco"
};
const arrayPosts = [post1, post2, post3, post4, post5];
console.log(arrayPosts);
function filterPost(arr, author) {
    if (author) {
        return arr.filter((element) => {
            return element.author === author;
        });
    }
    else {
        return arr;
    }
}
console.log(filterPost(arrayPosts, "Ricardo"));
//# sourceMappingURL=exercicio03.js.map
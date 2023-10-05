function getArticleGenerator(articles) {
    let curIndex = 0;
    const divContainer = document.querySelector("#content")

    function nextArticle() {
        const articleEl = document.createElement("article");
        if(curIndex < articles.length) {
            articleEl.textContent = articles[curIndex];
            divContainer.appendChild(articleEl);
            curIndex ++;
        }
        return curIndex;
    }
    return nextArticle;
}




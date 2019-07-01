function getFirstSelector(selector){
    return document.querySelector(selector);
}

function nestedTarget(){
    return document.querySelector('#nested .target');
}

function deepestChild(){
    let current = document.querySelector('div#grand-node')
    while(current.children[0]){
        current = current.children[0];
    }
    return current;
}

function increaseRankBy(n){
    let rankLists = document.querySelectorAll('.ranked-list');
    for(let i = 0; i < rankLists.length; i++){
        for(let j = 0; j < rankLists[i].children.length; j++){
            rankLists[i].children[j].innerHTML = parseInt(rankLists[i].children[j].innerHTML) + n;
        }
    }
    return rankLists;
}


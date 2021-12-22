document.documentElement.className = "js-enabled"

class Player{
    constructor(name, score) {
        this._name=name;
        this._score=0;
    }
    getName(){
        return this._name
    }
    getScore(){
        return this._score
    }
    setScore(score){
        this._score=score;
    }
}
const iTime = 100;
const aPlayer = [new Player("Joy"), new Player("Trystan")];
const eJs = document.querySelector(".result_item, .result_item--love");
const eLove = document.querySelector(".result_item, .result_item--js");
let courant;







document.querySelector(".no-js__message").remove();
document.querySelector("#app").insertAdjacentHTML('afterbegin','<li class="grid__item"></li><li class="grid__item"></li><li class="grid__item"></li><li class="grid__item"></li><li class="grid__item"></li><li class="grid__item"></li><li class="grid__item"></li><li class="grid__item"></li><li class="grid__item"></li><li class="grid__item"></li>');
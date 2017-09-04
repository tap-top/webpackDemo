import "./index.scss"
import {wordsToSentence} from "./utils/utils";
var el = document.createElement("div");
var text=document.createTextNode(
    wordsToSentence("Welome","to","my","app!")
)
el.id="app";
el.appendChild(text);
document.body.appendChild(el);
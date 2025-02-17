import "./styles.css";
import { home } from "./home.js"
import {menu} from "./menu.js"
import {contact} from "./contact.js"

const menuBtn = document.querySelector(".menuBtn");
const homeBtn = document.querySelector(".homeBtn");
const contactBtn = document.querySelector(".contactBtn");
homeBtn.addEventListener("click", home);  // Fix function reference issue
menuBtn.addEventListener("click",menu);
contactBtn.addEventListener("click",contact);
homeBtn.click();
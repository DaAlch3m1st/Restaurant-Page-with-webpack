// import _ from 'lodash';
// import { component } from './hero.js';
export const content = document.getElementById('content');
//NOTE - Homepage
import { title } from "./homepage";
import "./assets/styles/style.css";
import { images } from "./homepage";
title();
images();

//NOTE - Description
import { desc } from "./description";
desc();

//NOTE - Hours
import { breakfast } from "./hours";
import { lunch } from "./hours";
import { dinner } from "./hours";

breakfast();
lunch();
dinner();
//NOTE - footer
import { headerContact } from "./footer";
import { location } from "./footer";
import { disclaimer } from "./footer";
import { contact } from "./footer";

headerContact();
location();
contact();
disclaimer();
// component();
console.log('working');
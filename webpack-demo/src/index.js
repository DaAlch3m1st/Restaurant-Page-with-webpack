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

// component();
console.log('working');
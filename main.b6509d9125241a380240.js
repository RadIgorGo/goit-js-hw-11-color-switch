(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(o,n,e){},QfWi:function(o,n,e){"use strict";e.r(n);e("L1EO");var t=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"];console.log(t);var c=document.querySelector('[data-action="start"]'),a=document.querySelector('[data-action="stop"]');console.log(c),console.log(a),c.addEventListener("click",(function(){l=setInterval(r,1e3),c.disabled=!0})),a.addEventListener("click",(function(){clearInterval(l),c.disabled=!1,console.log("Зупиняємо зміну кольору")}));var l="";function r(){var o=d(i,s);document.body.style.backgroundColor=t[o],console.log(t[o])}var i=0,s=t.length-1,d=function(o,n){return Math.floor(Math.random()*(n-o+1)+o)};console.log(d(i,s))}},[["QfWi",1]]]);
//# sourceMappingURL=main.b6509d9125241a380240.js.map
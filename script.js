let word = document.getElementById("inputBox");
let encryptKey = document.getElementById("inputKey");
let encriptBT = document.getElementById("btn1");
let decriptBT = document.getElementById("btn2");
let resultBox = document.getElementById("box2");
let myTextA = "";
let myTextB = [];
let myTextC = [];
let myTextD = "";
let myTextE = "";
let arrC = [];
let arrB2 = [];
let arrBdouble = [];
const arrBdefault = [...arrB];

encriptBT.addEventListener("click", encript0);
decriptBT.addEventListener("click", decript0);

function encript0() {
   createEncrypyion(transformWordInNr(encryptKey.value));
   formEncryption();
   A();
   B();
   C();
   D();
   // resultBox.innerText = myTextD;
   typeWriter(myTextD);
   myTextA = "";
   myTextB = [];
   myTextC = [];
   myTextD = "";
   myTextE = "";
   word.value = "";
   encryptKey.value = "";
}

function decript0() {
   createEncrypyion(transformWordInNr(encryptKey.value));
   formEncryption();
   A();
   E();
   // resultBox.innerText = myTextE;
   typeWriter(myTextE);
   myTextA = "";
   myTextB = [];
   myTextC = [];
   myTextD = "";
   myTextE = "";
   word.value = "";
   encryptKey.value = "";
}

function A() {
   myTextA = word.value;
}

function B() {
   for (i = 0; i < myTextA.length; i++) {
      myTextB[i] = myTextA[i];
   }
}

function C() {
   for (i = 0; i < myTextB.length; i++) {
      myTextC[i] = encryptA(myTextB[i]);
   }
}

function D() {
   for (i = 0; i < myTextC.length; i++) {
      myTextD += myTextC[i];
   }
}

function E() {
   let i = 0;
   while (i < myTextA.length) {
      encrText = myTextA[i] + myTextA[i + 1] + myTextA[i + 2];
      myTextE += decryptA(encrText);
      i = i + 3;
   }
}

function encryptA(key) {
   for (j = 0; j < 92; j++) {
      if (arrC[j].varA == key) {
         result = arrC[j].varB;
      }
   }
   return result;
}

function decryptA(key) {
   for (j = 0; j < 92; j++) {
      if (arrC[j].varB == key) {
         result = arrC[j].varA;
      }
   }
   return result;
}

function transformWordInNr(word) {
   let result = 0;
   for (i = 0; i < word.length; i++) {
      item = word[i];
      for (j = 0; j < 92; j++) {
         if (arrC[j].varA == item) {
            result += arrC[j].varC;
         }
      }
   }

   return result;
}

function createEncrypyion(key) {
   arrBdouble = arrBdefault.concat(arrBdefault);
   let x = key % 92;

   arrB2 = [];
   for (i = x; i < arrB.length + x; i++) {
      arrB2.push(arrBdouble[i]);
   }
   arrB = [...arrB2];
}

function formEncryption() {
   arrC = [];
   for (i = 0; i < arrA.length; i++) {
      obC = {
         varA: arrA[i],
         varB: arrB[i],
         varC: i,
      };
      arrC.push(obC);
   }
}

function typeWriter(word) {
   let sum = "";
   let i = 0;
   if (word ===''){
      audio2.src = "audio2.mp3";
      resultBox.innerText = sum;
      return;
   }
   audio1.src = "audio1.mp3";
   interval = setInterval(() => {
      if (i === word.length) {
         audio1.pause();
         clearInterval(interval);
         resultBox.innerText = sum;
         return;
      }
      sum += word[i];
      resultBox.innerText = sum;
      i++;
      
      if (audio1.ended) {
          audio1.src = "audio1.mp3";
      }
   }, 100);
      
}

createEncrypyion(0);
formEncryption();

const audio1 = new Audio();
audio1.autoplay = true;
// audio1.src = "audio1.mp3";
const audio2 = new Audio();
audio2.autoplay = true;
// audio2.src = "audio2.mp3";

function goHome() {
   location.assign('https://www.mariusonea.ro');
}
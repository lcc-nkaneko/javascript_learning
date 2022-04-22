import { Sub } from './sub.js';
import mapTest from './map';
import { array } from './array.js'
import { object as obj, Object2 } from './object'
import { promiseMethod, promiseVar, promiseChain, proAsync, asyncTest, addImage } from './promise'

let sub = new Sub('カルピス', 100);
sub.checkMethod();

mapTest();

array();

let objEtcA = Object.create(obj);
let objEtcB = Object.create(obj);
objEtcB.objectMethod('objEtcBはobjMethodで変更');
objEtcA.objName = 'objEtcAは直接変更';
console.log('結果: obj = ' + obj.objName);
console.log('結果: objEtcA = ' + objEtcA.objName);
console.log('結果: objEtcB = ' + objEtcB.objName);
let obj2 = new Object2();
obj2.getTitle();
console.log(obj);
console.log(obj2);

promiseMethod();
console.log(promiseVar);
// promiseChain();
// console.log(proAsync());

console.log(asyncTest());

addImage();

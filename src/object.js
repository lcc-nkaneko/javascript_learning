"use strict";  //通常エラーとなっていなかったバグになりうるコードをエラーチェックする。strictモード。

export let object = {  //Object.create()によるオブジェクト生成（インスタンス）

  objName: 'オブジェクト要素',
  objCount: 2,
  objArray: ['A', 'B', 'C'],
  objectMethod(input) {
    console.log('--objectの検証-------------------------')
    this.getObjArray();
    this.objName = input;
    console.log(this.objName);
    console.log(toString.call(this));
  },
  getObjArray: function () {
    console.log(this.objArray)
    return this.objArray;
  }

}


export function Object2() {  //コンストラクタ関数によるオブジェクト生成（インスタンス）
  this.title = 'タイトル';
  this.getTitle = function () {
    console.log('object2による出力： ' + this.title);
    console.log(toString.call(this));
  }
}

Object2.prototype = {
  protoTest: "test",
  getTest() { this.protoTest }
};

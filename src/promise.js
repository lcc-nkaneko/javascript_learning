'use strict';
export { promiseMethod, promiseVar, promiseChain, proAsync, asyncTest, addImage };

let promiseMethod = function () {
  console.log('--promise----------------------------------------');
  let promisetest = function () {
    return new Promise((resolve) => {
      resolve('OK。メソッド')
    })
  }
  console.log(promisetest());
}

const promiseVar = new Promise((ok) => {
  ok('OK。変数から');
});

//.then(ok_callback関数, ng_callback関数)  //okのコールバック関数だけでも良い。
//.then((ok_value) => {}, (ng_value) => {}) //ngパターンは書かずに.catchにする。
//.catch(ng_callback関数)
//.catchはPromiseチェーンの最後に記述すればよい。そうすることでチェーンの間で起こったNGも.catchで拾う。

function promiseChain() {
  console.log(chainMethod(300));

  let aaa = chainMethod(300).then((change) => {
    return chainMethod(change); //returnでPromiseでラップする ok(value)
  }).then((change) => {
    console.log('change: ' + change);
    return change;
  }).catch((e) => {
    console.log("error:" + e);
  })

  //.thenや.catchを行った結果は非同期処理で処理が完了していないため
  //Promise {<pending>}と表示される。
  console.log(aaa);

  setTimeout(() => {
    console.log(aaa);
  }, 1);
}

function chainMethod(pay) {
  return new Promise((resolve, reason) => {
    if (pay > 100) {
      let change = pay - 100;
      resolve(change);
    }
    reason('お金が足りません');
  })
}

//asyncに戻り値はPromise
async function proAsync() {
  console.log('---asyncで処理----')
  await promiseChain();
  console.log('---asyncで処理最後----')
  return 'asyncで作成';
}


async function asyncTest() {
  const chain = chainMethod(2000);
  return chain;
}

async function fetchMethod() {
  const url = 'https://dog.ceo/api/breeds/image/random';
  const options = {
    method: 'GET',
  }

  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error(res.status + 'です');
  } else {
    const json = await res.json();
    return json.message;
  }
}

function addImage() {
  const img = fetchMethod()
    .then(data => {
      const dogImgElement = document.getElementById('dogimgid');
      dogImgElement.src = data;
    }
    )
    .catch(e => {
      console.log(e);
    })
}

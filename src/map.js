export default function mapTest() {
  const myMap = new Map();

  myMap.set('id', 3);
  myMap.set('name', 'ホンダ');

  console.log('--mapの検証--------------------------------');
  console.log(myMap);

  let idMap = document.getElementById('mapdiv');

  window.addEventListener('load', () => {
    let myMapKeys = myMap.keys();
    for (let key of myMapKeys) {
      let addMap = document.createElement('p');
      addMap.innerHTML = key + ':' + myMap.get(key);
      idMap.appendChild(addMap);
    }
  })
}

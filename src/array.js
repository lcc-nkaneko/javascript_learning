export function array() {

  const score = [10, 20, 30, 40];

  const filterScore = score.filter((value) => {
    return value >= 30;
  })

  console.log('--arrayの検証--------------------------------');
  console.log(filterScore);

  let idArray = document.getElementById('arraydiv');

  window.addEventListener('load', () => {
    let addArray = document.createElement('p');
    addArray.innerHTML = filterScore;
    idArray.appendChild(addArray);
  })

  const members = ['山田', '田中', '井上', '室伏'];
  const member = members.find(value => {
    return value === '室伏'; //findは真偽値の戻り値が必要。
  });
  console.log(member);
}

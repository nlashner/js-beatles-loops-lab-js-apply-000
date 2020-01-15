learn open js-beatles-loops-lab

function theBeatlesPlay(arr1, arr2) {
  let newArr = []
  for (let i = 0; i < arr1.length; i++){
    let member = arr1[i]
    let instrument = arr2[i]
    newArr.push(member + ' plays ' + instrument)
  }
  return newArr
}

function johnLennonFacts(array){
  let newArr = []
  let i =0
  while (i < array.length){
    newStr = array[i] + '!!!'
    newArr.push(newStr)
    i++
  }
  return newArr
}

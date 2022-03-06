
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let arrayInLine = []
  if(matrix.length) {
    matrix.forEach( (subArray, index) => {
      if (Array.isArray(subArray)) {
        if (index % 2 !== 0) subArray.reverse()
        subArray.forEach( elem => {
          arrayInLine.push(elem)
        })
      } else arrayInLine.push(subArray)
    })
    return arrayInLine
  }
  return [];
}

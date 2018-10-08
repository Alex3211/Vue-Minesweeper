/* eslint-disable */
export default {
  generateArray: () => {
    let array = []
    for (let rowIndex = 0; rowIndex < 11; rowIndex++) {
      let row = []
      for (let colIndex = 0; colIndex < 22; colIndex++) {
        row.push({
          bombe: false,
          value: 0,
          used: false,
          id: `${rowIndex}${colIndex}`
        })
      }
      array.push(row)
    }
    return array;
  },
  setNumber: (array, adjacentFunction) => {
    array.forEach((row, i) => {
      row.forEach((column, t) => {
        if (!column.bombe) {
          array[i][t].value = adjacentFunction(array, t, i, array.length - 1, row.length - 1)
        }
      })
    })
    return array
  },
  AdjacentBomb: (array, colIndex, rowIndex, rowLenght, colLenght) => {
    let bombNumber = 0;
    for (let o = -1; o <= 1; o++) {
      for (let l = -1; l <= 1; l++) {
        // if ((rowIndex + o) < 0 || (rowIndex + o) > rowLenght ||
        //   (colIndex + l) < 0 || (colIndex + l) > colLenght ||
        //   (l !== 0 && o !== 0) && colIndex === 11 && rowIndex === 11) {
        // Pourquoi il y a des chiffres en dur ? ( 11 )
        if ((rowIndex + o) < 0 || (rowIndex + o) > rowLenght ||
          (colIndex + l) < 0 || (colIndex + l) > colLenght ||
          (l !== 0 && o !== 0) && colIndex === 11 && rowIndex === 11) {
          continue;
        }
        if (array[rowIndex + o][colIndex + l].bombe) {
          bombNumber++;
        }
      }
    }
    return bombNumber;
  },
  GenerateBomb: (array, colLength, rowLength) => {
    let caseNumber = 0
    array.forEach((e, i) => {
      e.forEach((secondElement, secondIndex) => {
        caseNumber++
        secondElement.bombe = false
        secondElement.value = 0
      })
    })
    let bombNumber = caseNumber * 0.2
    for (var i = 0; i < bombNumber; i++) {
      let x = Math.floor(Math.random() * Math.floor(colLength))
      let y = Math.floor(Math.random() * Math.floor(rowLength))
      if (!array[x][y].bombe) {
        array[x][y].bombe = true
      } else {
        i--
      }
    }
    return array
  }
}
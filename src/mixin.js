/* eslint-disable */
// getAdjacentCase = (origin) => {
//   let plateau = document.getElementById('app');
//   let originValues = {
//     x: origin.target['data-attribute'].pos.row,
//     y: origin.target['data-attribute'].pos.col
//   }
//   let adjacentValidCase = [];
//   for (let i = -1; i <= 1; i++) {
//     for (let t = -1; t <= 1; t++) {
//       const current = [];
//       Object.values(plateau.children).forEach(row => {
//         Object.values(row.children).forEach(column => {
//           if (column['data-attribute'].pos.row === i + originValues.x && column[
//               'data-attribute'].pos.col === t + originValues.y) current.push(column);
//         })
//       })
//       if (current[0] && ((!current[0].className.includes('green') && !current[0].className.includes(
//           'red')))) {
//         adjacentValidCase.push({
//           target: current[0]
//         });
//       }
//     }
//   }
//   return adjacentValidCase;
// }
function isWin(array) {
  let countTrue = 0;
  let countFalse = 0;
  array.forEach(row => row.forEach(column => {
    if (column.value && !column.used) {
      countTrue = countTrue + 1;
    } else {
      countFalse = countFalse + 1;
    }
  }))
  return countTrue === 0
}

function getAdjacentCase(element, oldArray) {
  const originValues = {
    x: element.x,
    y: element.y
  }
  let array = oldArray
  const adjacentValidCase = [];

  for (let i = -1; i <= 1; i++) {
    for (let t = -1; t <= 1; t++) {
      const current = [];
      array.forEach(row => {
        row.forEach(column => {
          if (column.x === originValues.x + i && column.y === originValues.y + t) adjacentValidCase.push(column);

        })
      })
    }
  }
  return adjacentValidCase;
}
export default {
  generateArray: (y, x) => {
    let array = []
    for (let rowIndex = 0; rowIndex <= y; rowIndex++) {
      let row = []
      for (let colIndex = 0; colIndex <= x; colIndex++) {
        row.push({
          bombe: false,
          value: 0,
          used: false,
          id: `${rowIndex}${colIndex}`,
          x: colIndex,
          y: rowIndex
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
        /* Pourquoi il y a des chiffres en dur ? ( 11 ) */


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
  },
  CheckCase: (element, oldArray, checkCase, isRecursive) => {
    let _col
    let score = 0;
    let gameBreak = false;
    let win = false;
    let array = (isRecursive) ? oldArray : oldArray
    array = array.map(row => row.map(col => {
      if (col.id === element.id) {
        _col = col
        if (!col.bombe && !col.used) {
          col.used = true
          score = score + 1
        }
        if (col.bombe) {
          gameBreak = true
        }
      }
      return col
    }))
    console.log(score);
    if (_col.value !== 0 && !gameBreak) {
      return {
        array,
        win: isWin(array),
        score,
        gameBreak: gameBreak
      }
    } else if (!gameBreak) {
      if (isWin(array)) {
        win = true
        return {
          array,
          win: win,
          score,
          gameBreak: gameBreak
        }
      }
      if (!_col.bombe && !isRecursive) {
        let adjacent = getAdjacentCase(_col, array);
        adjacent.forEach((item, i) => {
          let _current = array;
          if (!item.used && !item.bombe) {
            array.forEach(row => row.forEach(column => {
              if (column.id === item.id && !item.used && !column.bombe) {
                score = score + 1;
                column.used = true;
                const result = checkCase(item, _current, checkCase, (column.value === 0) ? false : true)
                _current = result.array
                score = score + result.score
                gameBreak = result.gameBreak
                win = result.win
              }
            }))
          }
          return {
            array: _current,
            win: isWin(_current),
            score,
            gameBreak: gameBreak
          };
        });
      }
    }
    return {
      array,
      win: isWin(array),
      score,
      gameBreak: gameBreak
    };
  },
}
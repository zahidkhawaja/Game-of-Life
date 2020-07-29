// Game of life logic
// Analyzing the current grid and returning a new grid (next generation)

export function determineLife(gridData) {

    // Row length
    const size = gridData[0].length - 1;
  
    // If row/column is outside the grid, evaluate to the opposite side
    function checkEdge(num) {
      if (num < 0) {
        num = size;
      } else if (num > size) {
        num = 0;
      }
      return num;
    }
  
    // Returning the next generation (nextGen) based on the game rules
    const nextGen = gridData.map((row, i) => {
      return row.map((current, j) => {
  
        // Sum of values in the surrounding cells (clockwise)
        const sum =
          gridData[checkEdge(i - 1)][j] +
          gridData[checkEdge(i - 1)][checkEdge(j + 1)] +
          gridData[i][checkEdge(j + 1)] +
          gridData[checkEdge(i + 1)][checkEdge(j + 1)] +
          gridData[checkEdge(i + 1)][j] +
          gridData[checkEdge(i + 1)][checkEdge(j - 1)] +
          gridData[i][checkEdge(j - 1)] +
          gridData[checkEdge(i - 1)][checkEdge(j - 1)];
  
        if (sum === 3) {
          return 1;
        } else if (sum === 2) {
          return current;
        } else {
          return 0;
        }
      });
    });
  
    return nextGen;
  }
  
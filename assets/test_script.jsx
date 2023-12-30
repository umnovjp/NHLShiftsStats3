for (h = 0; h < 2; h++) { // h = 0 home team D, h = 1 away team D
  for (i = 0; i < 3; i++) { for (j = 0; j < dArray[h].length; j++) {
      for (k = j + 1; k < dArray[h].length; k++) {tempTime = []; for (l = 0; l < dArray[h][j][i].length / 2; l++) {
          for (m = 0; m < dArray[h][k][i].length / 2; m++) { if ((dArray[h][k][i][2 * m] >= dArray[h][j][i][2 * l]) && (dArray[h][k][i][2 * m] <= dArray[h][j][i][2 * l + 1])) {
              if (dArray[h][k][i][2 * m + 1] >= dArray[h][j][i][2 * l + 1]) { tempTime.push(dArray[h][j][i][2 * l + 1] - dArray[h][k][i][2 * m]) }
              else { tempTime.push(dArray[h][k][i][2 * m + 1] - dArray[h][k][i][2 * m]) }}
            else if ((dArray[h][k][i][2 * m] <= dArray[h][j][i][2 * l]) && (dArray[h][k][i][2 * m + 1] >= dArray[h][j][i][2 * l])) {
              if (dArray[h][k][i][2 * m + 1] >= dArray[h][j][i][2 * l + 1]) { tempTime.push(dArray[h][j][i][2 * l + 1] - dArray[h][j][i][2 * l]) }
              else {tempTime.push(dArray[h][k][i][2 * m + 1] - dArray[h][j][i][2 * l])}
            }}}   // end l loop
        shifts = 0; const sum = tempTime.reduce((partialSum, a) => partialSum + a, 0);
        for (n = 0; n < tempTime.length; n++) { if (tempTime[n] >= 10) { shifts = shifts + 1 } }
        pairingsArray[i + 3 * h].push(sum); pairingsArray[i + 3 * h].push(shifts); console.log(h, i, j, k, tempTime);
      }}}} // end k, j, i and h loop periods
console.log(pairingsArray); tempTime2 = [];


for (h = 0; h < 2; h++) { // h = 0 home team D, h = 1 away team D
  for (i = 0; i < 3; i++) { for (j = 0; j < fArray[h].length; j++) {
      for (k = j + 1; k < fArray[h].length; k++) {shiftsPair = []; for (l = 0; l < fArray[h][j][i].length / 2; l++) {
          for (m = 0; m < fArray[h][k][i].length / 2; m++) { if ((fArray[h][k][i][2 * m] >= fArray[h][j][i][2 * l]) && (fArray[h][k][i][2 * m] <= fArray[h][j][i][2 * l + 1])) {
              if (fArray[h][k][i][2 * m + 1] >= fArray[h][j][i][2 * l + 1]) { shiftsPair.push(fArray[h][k][i][2 * m], fArray[h][j][i][2 * l + 1]) }
              else { shiftsPair.push(fArray[h][k][i][2 * m], fArray[h][k][i][2 * m + 1]) }}
            else if ((fArray[h][k][i][2 * m] <= fArray[h][j][i][2 * l]) && (fArray[h][k][i][2 * m + 1] >= fArray[h][j][i][2 * l])) {
              if (fArray[h][k][i][2 * m + 1] >= fArray[h][j][i][2 * l + 1]) { shiftsPair.push(fArray[h][j][i][2 * l], fArray[h][j][i][2 * l + 1]) }
              else {shiftsPair.push(fArray[h][j][i][2 * l], fArray[h][k][i][2 * m + 1])}
            }}}   // end m, l loop
            for (l = k + 1; l < fArray[h].length; l++) {tempTime = []; // if (i === 0  && h === 0) { console.log(j, k, l, shiftsPair);}
            for (m = 0; m < shiftsPair.length/2; m++){ 
              for (n = 0; n < fArray[h][l][i].length/2; n++) {if ((fArray[h][l][i][2*n]>=shiftsPair[2*m])&&(fArray[h][l][i][2*n]<shiftsPair[2*m+1])){
                if (fArray[h][l][i][2*n+1]>=shiftsPair[2*m+1]) {tempTime.push(shiftsPair[2 * m + 1] - fArray[h][l][i][2*n])}
                else { tempTime.push(fArray[h][l][i][2*n+1] - fArray[h][l][i][2*n]) }
                }
                else if (fArray[h][l][i][2 * n] <= shiftsPair[2 * m] && fArray[h][l][i][2 * n + 1] > shiftsPair[2 * m]) {
                  if (fArray[h][l][i][2 * n + 1] >= shiftsPair[2 * m + 1]) { tempTime.push(shiftsPair[2 * m + 1] - shiftsPair[2 * m]) }
                  else { tempTime.push(fArray[h][l][i][2 * n + 1] - shiftsPair[2 * m]) }
                }
            }
            } // end second m loop
            shifts = 0; const sum = tempTime.reduce((partialSum, a) => partialSum + a, 0);
            for (n = 0; n < tempTime.length; n++) { if (tempTime[n] >= 10) { shifts = shifts + 1;
            tempTime2.push(tempTime[n])} }
            linesArray[i + 3 * h].push(sum); linesArray[i + 3 * h].push(shifts, j, k, l); // console.log(i, j, k, tempTime);
          } // end second l loop
      }} // temp end k, j loops
  
    }} // end k, j, i and h loop periods
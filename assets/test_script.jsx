function lineByLine(h,f) { shiftsLine=[]; for (i=0;i<30;i++) {shiftsLine.push([])}
for (i=0;i<3;i++) { //f is line number 0,1,2,3, h is 0 or 1 home away team
for (l=0;l<fArray[h][finalLineup[2+h][3*f]][i].length/2;l++) { for (m=0;m<fArray[h][finalLineup[2+h][3*f+1]][i].length/2;m++) {if ((fArray[h][finalLineup[2+h][3*f+1]][i][2*m]>=fArray[h][finalLineup[2+h][3*f]][i][2*l]) && (fArray[h][finalLineup[2+h][3*f+1]][i][2*m]<=fArray[h][finalLineup[2+h][3*f]][i][2*l+1]))
{if (fArray[h][finalLineup[2+h][3*f+1]][i][2*m+1]>=fArray[h][finalLineup[2+h][3*f]][i][2*l+1]) {shiftsLine[i].push(fArray[h][finalLineup[2+h][3*f+1]][i][2*m], fArray[h][finalLineup[2+h][3*f]][i][2*l+1]) }
else { shiftsLine[i].push(fArray[h][finalLineup[2+h][3*f+1]][i][2*m], fArray[h][finalLineup[2+h][3*f+1]][i][2*m+1]) }}
else if ((fArray[h][finalLineup[2+h][3*f+1]][i][2*m]<=fArray[h][finalLineup[2+h][3*f]][i][2*l])&&(fArray[h][finalLineup[2+h][3*f+1]][i][2*m+1]>=fArray[h][finalLineup[2+h][3*f]][i][2*l])) {
  if (fArray[h][finalLineup[2+h][3*f+1]][i][2*m+1]>=fArray[h][finalLineup[2+h][3*f]][i][2*l+1]) { shiftsLine[i].push(fArray[h][finalLineup[2+h][3*f]][i][2*l], fArray[h][finalLineup[2+h][3*f]][i][2*l+1]) }
  else {shiftsLine[i].push(fArray[h][finalLineup[2+h][3*f]][i][2*l], fArray[h][finalLineup[2+h][3*f+1]][i][2*m+1])}}
}} // end first m,l loop
// start second l,m loop fArray[h][finalLineup[2+h][3*f]][i] = shiftsLine[i]
for (l=0;l<shiftsLine[i].length/2;l++) { for (m=0;m<fArray[h][finalLineup[2+h][3*f+2]][i].length/2;m++) {if ((fArray[h][finalLineup[2+h][3*f+2]][i][2*m]>=shiftsLine[i][2*l]) && (fArray[h][finalLineup[2+h][3*f+2]][i][2*m]<=shiftsLine[i][2*l+1]))
{if (fArray[h][finalLineup[2+h][3*f+2]][i][2*m+1]>=shiftsLine[i][2*l+1]) {shiftsLine[i+3].push(fArray[h][finalLineup[2+h][3*f+2]][i][2*m], shiftsLine[i][2*l+1]) }
else { shiftsLine[i+3].push(fArray[h][finalLineup[2+h][3*f+2]][i][2*m], fArray[h][finalLineup[2+h][3*f+2]][i][2*m+1]) }}
else if ((fArray[h][finalLineup[2+h][3*f+2]][i][2*m]<=shiftsLine[i][2*l])&&(fArray[h][finalLineup[2+h][3*f+2]][i][2*m+1]>=shiftsLine[i][2*l])) {
  if (fArray[h][finalLineup[2+h][3*f+2]][i][2*m+1]>=shiftsLine[i][2*l+1]) { shiftsLine[i+3].push(shiftsLine[i][2*l], shiftsLine[i][2*l+1]) }
  else {shiftsLine[i+3].push(shiftsLine[i][2*l], fArray[h][finalLineup[2+h][3*f+2]][i][2*m+1])}}
}} // end second m,l loop
for (j=1; j<finalLineup[3-h].length/3+1; j++) {for (l=0;l<fArray[1-h][finalLineup[3-h][3*(j-1)]][i].length/2;l++) { for (m=0;m<fArray[1-h][finalLineup[3-h][3*(j-1)+1]][i].length/2;m++) {if ((fArray[1-h][finalLineup[3-h][3*(j-1)+1]][i][2*m]>=fArray[1-h][finalLineup[3-h][3*(j-1)]][i][2*l]) && (fArray[1-h][finalLineup[3-h][3*(j-1)+1]][i][2*m]<=fArray[1-h][finalLineup[3-h][3*(j-1)]][i][2*l+1]))
{if (fArray[1-h][finalLineup[3-h][3*(j-1)+1]][i][2*m+1]>=fArray[1-h][finalLineup[3-h][3*(j-1)]][i][2*l+1]) {shiftsLine[6*j+i].push(fArray[1-h][finalLineup[3-h][3*(j-1)+1]][i][2*m], fArray[1-h][finalLineup[3-h][3*(j-1)]][i][2*l+1]) }
else { shiftsLine[6*j+i].push(fArray[1-h][finalLineup[3-h][3*(j-1)+1]][i][2*m], fArray[1-h][finalLineup[3-h][3*(j-1)+1]][i][2*m+1]) }}
else if ((fArray[1-h][finalLineup[3-h][3*(j-1)+1]][i][2*m]<=fArray[1-h][finalLineup[3-h][3*(j-1)]][i][2*l])&&(fArray[1-h][finalLineup[3-h][3*(j-1)+1]][i][2*m+1]>=fArray[1-h][finalLineup[3-h][3*(j-1)]][i][2*l])) {
  if (fArray[1-h][finalLineup[3-h][3*(j-1)+1]][i][2*m+1]>=fArray[1-h][finalLineup[3-h][3*(j-1)]][i][2*l+1]) { shiftsLine[6*j+i].push(fArray[1-h][finalLineup[3-h][3*(j-1)]][i][2*l], fArray[1-h][finalLineup[3-h][3*(j-1)]][i][2*l+1]) }
  else {shiftsLine[6*j+i].push(fArray[1-h][finalLineup[3-h][3*(j-1)]][i][2*l], fArray[1-h][finalLineup[3-h][3*(j-1)+1]][i][2*m+1])}}
}} // end first m,l loop
// start second l,m loop fArray[h][finalLineup[2+h][3*f]][i] = shiftsLine[i]
for (l=0;l<shiftsLine[6*j+i].length/2;l++) { for (m=0;m<fArray[1-h][finalLineup[3-h][3*(j-1)+2]][i].length/2;m++) {if ((fArray[1-h][finalLineup[3-h][3*(j-1)+2]][i][2*m]>=shiftsLine[6*j+i][2*l]) && (fArray[1-h][finalLineup[3-h][3*(j-1)+2]][i][2*m]<=shiftsLine[6*j+i][2*l+1]))
{if (fArray[1-h][finalLineup[3-h][3*(j-1)+2]][i][2*m+1]>=shiftsLine[6*j+i][2*l+1]) {shiftsLine[6*j+i+3].push(fArray[1-h][finalLineup[3-h][3*(j-1)+2]][i][2*m], shiftsLine[6*j+i][2*l+1]) }
else { shiftsLine[6*j+i+3].push(fArray[1-h][finalLineup[3-h][3*(j-1)+2]][i][2*m], fArray[1-h][finalLineup[3-h][3*(j-1)+2]][i][2*m+1]) }}
else if ((fArray[1-h][finalLineup[3-h][3*(j-1)+2]][i][2*m]<=shiftsLine[6*j+i][2*l])&&(fArray[1-h][finalLineup[3-h][3*(j-1)+2]][i][2*m+1]>=shiftsLine[6*j+i][2*l])) {
  if (fArray[1-h][finalLineup[3-h][3*(j-1)+2]][i][2*m+1]>=shiftsLine[6*j+i][2*l+1]) { shiftsLine[6*j+i+3].push(shiftsLine[6*j+i][2*l], shiftsLine[6*j+i][2*l+1]) }
  else {shiftsLine[6*j+i+3].push(shiftsLine[6*j+i][2*l], fArray[1-h][finalLineup[3-h][3*(j-1)+2]][i][2*m+1])}}
}}} // end second m,l, j loop}

} // end i loop
console.log(shiftsLine);
return finalLineup[3-h][1]
} // end function lineByLine

for (h = 0; h < 2; h++) {// h = 0 home team F, h = 1 away team F
  for (i = 0; i < 3; i++) { for (j = 0; j < fArray[h].length; j++) { // i loop for 3 periods
      for (k = j + 1; k < fArray[h].length; k++) {shiftsPair = []; for (l = 0; l < fArray[h][j][i].length / 2; l++) {
          for (m = 0; m < fArray[h][k][i].length / 2; m++) { if ((fArray[h][k][i][2 * m] >= fArray[h][j][i][2 * l]) && (fArray[h][k][i][2 * m] <= fArray[h][j][i][2 * l + 1])) {
              if (fArray[h][k][i][2 * m + 1] >= fArray[h][j][i][2 * l + 1]) { shiftsPair.push(fArray[h][k][i][2 * m], fArray[h][j][i][2 * l + 1]) }
              else { shiftsPair.push(fArray[h][k][i][2 * m], fArray[h][k][i][2 * m + 1]) }}
            else if ((fArray[h][k][i][2 * m] <= fArray[h][j][i][2 * l]) && (fArray[h][k][i][2 * m + 1] >= fArray[h][j][i][2 * l])) {
              if (fArray[h][k][i][2 * m + 1] >= fArray[h][j][i][2 * l + 1]) { shiftsPair.push(fArray[h][j][i][2 * l], fArray[h][j][i][2 * l + 1]) }
              else {shiftsPair.push(fArray[h][j][i][2 * l], fArray[h][k][i][2 * m + 1])}
            }}}// end m, l loop
            for (l = k + 1; l < fArray[h].length; l++) {tempTime = []; tempTime2 = [];
            for (m = 0; m < shiftsPair.length/2; m++){
              for (n = 0; n < fArray[h][l][i].length/2; n++) {if ((fArray[h][l][i][2*n]>=shiftsPair[2*m])&&(fArray[h][l][i][2*n]<shiftsPair[2*m+1])){
                if (fArray[h][l][i][2*n+1]>=shiftsPair[2*m+1]) {tempTime.push(fArray[h][l][i][2*n], shiftsPair[2 * m + 1])}
                else { tempTime.push(fArray[h][l][i][2*n], fArray[h][l][i][2*n+1]) }}
                else if (fArray[h][l][i][2 * n] <= shiftsPair[2 * m] && fArray[h][l][i][2 * n + 1] > shiftsPair[2 * m]) {
                  if (fArray[h][l][i][2 * n + 1] >= shiftsPair[2 * m + 1]) { tempTime.push(shiftsPair[2 * m], shiftsPair[2 * m + 1]) }
                  else { tempTime.push(shiftsPair[2 * m], fArray[h][l][i][2 * n + 1])}
                }}} // end second m loop
            for (m = 0; m < fiveOnFive5[h][i].length/2; m++) { for (n = 0; n < tempTime.length/2; n++) {if ((tempTime[2*n]>=fiveOnFive5[h][i][2*m])&&(tempTime[2*n]<=fiveOnFive5[h][i][2*m+1])){
              if (tempTime[2*n+1] >= fiveOnFive5[h][i][2*m+1]) {tempTime2.push(fiveOnFive5[h][i][2*m+1]-tempTime[2*n])}
              else {tempTime2.push(tempTime[2*n+1]-tempTime[2*n])}}
            else if ((tempTime[2*n] <= fiveOnFive5[h][i][2*m])&&(tempTime[2*n+1] >= fiveOnFive5[h][i][2*m])) {
              if (tempTime[2*n+1] >= fiveOnFive5[h][i][2*m+1]) {tempTime2.push(fiveOnFive5[h][i][2*m+1]-fiveOnFive5[h][i][2*m])}
              else {tempTime2.push(tempTime[2*n+1] - fiveOnFive5[h][i][2*m])}
            }}} // end second m,n loop to count only 5x5 plays
            shifts = 0; const sum = tempTime2.reduce((partialSum, a) => partialSum + a, 0);
            for (o = 0; o < tempTime.length; o++) { if (tempTime[o] >= 10) { shifts = shifts + 1;
            tempTime2.push(tempTime[o])}}
            linesArray[i + 3 * h].push(sum); linesArray[i + 3 * h].push(shifts, j, k, l); // console.log(i, j, k, tempTime);
          } // end second l loop
      }} // temp end k, j loops
    }} // end k, j, i and h loop periods
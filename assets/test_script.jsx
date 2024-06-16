function lineByLine1(h,f,j,i) { shiftsLine=[]; for (i=0;i<14;i++) {shiftsLine.push([])} shiftsLine[13]=[[],[]]
for (n=0;n<3;n++) { // n is player in a line but i is period
  //f is line number 0,1,2,3, j is opposite team line number 0,1,2,3, h is 0 or 1 home away team
for (l=0;l<fArray[h][finalLineup2[h][i][3*f]][n].length/2;l++) { for (m=0;m<fArray[h][finalLineup2[h][i][3*f+1]][n].length/2;m++) {if ((fArray[h][finalLineup2[h][i][3*f+1]][n][2*m]>=fArray[h][finalLineup2[h][i][3*f]][n][2*l]) && (fArray[h][finalLineup2[h][i][3*f+1]][n][2*m]<=fArray[h][finalLineup2[h][i][3*f]][n][2*l+1]))
{if (fArray[h][finalLineup2[h][i][3*f+1]][n][2*m+1]>=fArray[h][finalLineup2[h][i][3*f]][n][2*l+1]) {shiftsLine[n].push(fArray[h][finalLineup2[h][i][3*f+1]][n][2*m], fArray[h][finalLineup2[h][i][3*f]][n][2*l+1]) }
else { shiftsLine[n].push(fArray[h][finalLineup2[h][i][3*f+1]][n][2*m], fArray[h][finalLineup2[h][i][3*f+1]][n][2*m+1]) }}
else if ((fArray[h][finalLineup2[h][i][3*f+1]][n][2*m]<=fArray[h][finalLineup2[h][i][3*f]][n][2*l])&&(fArray[h][finalLineup2[h][i][3*f+1]][n][2*m+1]>=fArray[h][finalLineup2[h][i][3*f]][n][2*l])) {
  if (fArray[h][finalLineup2[h][i][3*f+1]][n][2*m+1]>=fArray[h][finalLineup2[h][i][3*f]][n][2*l+1]) { shiftsLine[n].push(fArray[h][finalLineup2[h][i][3*f]][n][2*l], fArray[h][finalLineup2[h][i][3*f]][n][2*l+1]) }
  else {shiftsLine[n].push(fArray[h][finalLineup2[h][i][3*f]][n][2*l], fArray[h][finalLineup2[h][i][3*f+1]][n][2*m+1])}}
}} // end first m,l loop
// start second l,m loop 
for (l=0;l<shiftsLine[n].length/2;l++) { for (m=0;m<fArray[h][finalLineup2[h][i][3*f+2]][n].length/2;m++) {if ((fArray[h][finalLineup2[h][i][3*f+2]][n][2*m]>=shiftsLine[n][2*l]) && (fArray[h][finalLineup2[h][i][3*f+2]][n][2*m]<=shiftsLine[n][2*l+1]))
{if (fArray[h][finalLineup2[h][i][3*f+2]][n][2*m+1]>=shiftsLine[n][2*l+1]) {shiftsLine[n+3].push(fArray[h][finalLineup2[h][i][3*f+2]][n][2*m], shiftsLine[n][2*l+1]) }
else { shiftsLine[n+3].push(fArray[h][finalLineup2[h][i][3*f+2]][n][2*m], fArray[h][finalLineup2[h][i][3*f+2]][n][2*m+1]) }}
else if ((fArray[h][finalLineup2[h][i][3*f+2]][n][2*m]<=shiftsLine[n][2*l])&&(fArray[h][finalLineup2[h][i][3*f+2]][n][2*m+1]>=shiftsLine[n][2*l])) {
  if (fArray[h][finalLineup2[h][i][3*f+2]][n][2*m+1]>=shiftsLine[n][2*l+1]) { shiftsLine[n+3].push(shiftsLine[n][2*l], shiftsLine[n][2*l+1]) }
  else {shiftsLine[n+3].push(shiftsLine[n][2*l], fArray[h][finalLineup2[h][i][3*f+2]][n][2*m+1])}}
}} // end second m,l loop
for (l=0;l<fArray[1-h][finalLineup2[1-h][i][3*j]][n].length/2;l++) { for (m=0;m<fArray[1-h][finalLineup2[1-h][i][3*j+1]][n].length/2;m++) {if ((fArray[1-h][finalLineup2[1-h][i][3*j+1]][n][2*m]>=fArray[1-h][finalLineup2[1-h][i][3*j]][n][2*l]) && (fArray[1-h][finalLineup2[1-h][i][3*j+1]][n][2*m]<=fArray[1-h][finalLineup2[1-h][i][3*j]][n][2*l+1]))
{if (fArray[1-h][finalLineup2[1-h][i][3*j+1]][n][2*m+1]>=fArray[1-h][finalLineup2[1-h][i][3*j]][n][2*l+1]) {shiftsLine[6+n].push(fArray[1-h][finalLineup2[1-h][i][3*j+1]][n][2*m], fArray[1-h][finalLineup2[1-h][i][3*j]][n][2*l+1]) }
else { shiftsLine[6+n].push(fArray[1-h][finalLineup2[1-h][i][3*j+1]][n][2*m], fArray[1-h][finalLineup2[1-h][i][3*j+1]][n][2*m+1]) }}
else if ((fArray[1-h][finalLineup2[1-h][i][3*j+1]][n][2*m]<=fArray[1-h][finalLineup2[1-h][i][3*j]][n][2*l])&&(fArray[1-h][finalLineup2[1-h][i][3*j+1]][n][2*m+1]>=fArray[1-h][finalLineup2[1-h][i][3*j]][n][2*l])) {
  if (fArray[1-h][finalLineup2[1-h][i][3*j+1]][n][2*m+1]>=fArray[1-h][finalLineup2[1-h][i][3*j]][n][2*l+1]) { shiftsLine[6+n].push(fArray[1-h][finalLineup2[1-h][i][3*j]][n][2*l], fArray[1-h][finalLineup2[1-h][i][3*j]][n][2*l+1]) }
  else {shiftsLine[6+n].push(fArray[1-h][finalLineup2[1-h][i][3*j]][n][2*l], fArray[1-h][finalLineup2[1-h][i][3*j+1]][n][2*m+1])}}
}} // end first m,l loop
// start second l,m loop
for (l=0;l<shiftsLine[6+n].length/2;l++) { for (m=0;m<fArray[1-h][finalLineup2[1-h][i][3*j+2]][n].length/2;m++) {if ((fArray[1-h][finalLineup2[1-h][i][3*j+2]][n][2*m]>=shiftsLine[6+n][2*l]) && (fArray[1-h][finalLineup2[1-h][i][3*j+2]][n][2*m]<=shiftsLine[6+n][2*l+1]))
{if (fArray[1-h][finalLineup2[1-h][i][3*j+2]][n][2*m+1]>=shiftsLine[6+n][2*l+1]) {shiftsLine[9+n].push(fArray[1-h][finalLineup2[1-h][i][3*j+2]][n][2*m], shiftsLine[6+n][2*l+1]) }
else { shiftsLine[9+n].push(fArray[1-h][finalLineup2[1-h][i][3*j+2]][n][2*m], fArray[1-h][finalLineup2[1-h][i][3*j+2]][n][2*m+1]) }}
else if ((fArray[1-h][finalLineup2[1-h][i][3*j+2]][n][2*m]<=shiftsLine[6+n][2*l])&&(fArray[1-h][finalLineup2[1-h][i][3*j+2]][n][2*m+1]>=shiftsLine[6+n][2*l])) {
  if (fArray[1-h][finalLineup2[1-h][i][3*j+2]][n][2*m+1]>=shiftsLine[6+n][2*l+1]) { shiftsLine[9+n].push(shiftsLine[6+n][2*l], shiftsLine[6+n][2*l+1]) }
  else {shiftsLine[9+n].push(shiftsLine[6+n][2*l], fArray[1-h][finalLineup2[1-h][i][3*j+2]][n][2*m+1])}}
}} // end second away m,l loop
shiftsLine[12].push([]);
for (l=0;l<shiftsLine[3+n].length/2;l++) {for (m=0;m<shiftsLine[9+n].length/2;m++) {if ((shiftsLine[9+n][2*m]>=shiftsLine[3+n][2*l])&&(shiftsLine[9+n][2*m]<=shiftsLine[3+n][2*l+1])){
if (shiftsLine[9+n][2*m+1]>=shiftsLine[3+n][2*l+1]){shiftsLine[12][n].push(shiftsLine[9+n][2*m], shiftsLine[3+n][2*l+1])}
else { shiftsLine[12][n].push(shiftsLine[9+n][2*m], shiftsLine[9+n][2*m+1]) }}
else if ((shiftsLine[9+n][2*m]<=shiftsLine[3+n][2*l])&&(shiftsLine[9+n][2*m+1]>=shiftsLine[3+n][2*l])) {
if (shiftsLine[9+n][2*m+1]>=shiftsLine[3+n][2*l+1]) { shiftsLine[12][n].push(shiftsLine[3+n][2*l], shiftsLine[3+n][2*l+1]) }
else {shiftsLine[12][n].push(shiftsLine[3+n][2*l], shiftsLine[9+n][2*m+1])}}
}} // end m,l loop line vs line
lineVsLineTime=0; lineVsLineShifts=0;
for (k=0;k<shiftsLine[12][n].length/2;k++) { lineVsLineTime=lineVsLineTime+shiftsLine[12][n][2*k+1]-shiftsLine[12][n][2*k];
if (shiftsLine[12][n][2*k+1]-shiftsLine[12][n][2*k]>=10) {lineVsLineShifts=lineVsLineShifts+1}}
shiftsLine[13][0].push(lineVsLineTime, lineVsLineShifts);
lineVsLineTime=0; lineVsLineShifts=0;
for (k=0;k<shiftsLine[3+n].length/2;k++) { lineVsLineTime=lineVsLineTime+shiftsLine[3+n][2*k+1]-shiftsLine[3+n][2*k];
if (shiftsLine[3+n][2*k+1]-shiftsLine[3+n][2*k]>=10) {lineVsLineShifts=lineVsLineShifts+1}}
shiftsLine[13][1].push(lineVsLineTime, lineVsLineShifts)
} // end n loop
return shiftsLine[13]} // end function lineByLine1
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
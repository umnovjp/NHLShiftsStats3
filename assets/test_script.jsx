if ((linesArray2[3].length<=4)&&(linesArray2[3].length>0)) {console.log ('one line away');
linesArray4 = []; for(i=3; i<6; i++) {for (j = 0; j<linesArray[i].length/5; j++){for (k=0; k<linesArray2[5].length-2; k++) {for (l=k+1; l<linesArray2[5].length-1; l++){for (m=l+1; m<linesArray2[5].length; m++){
  if((linesArray2[5][k] === linesArray[i][5*j+2])&&(linesArray2[5][l] === linesArray[i][5*j+3])&&(linesArray2[5][m] === linesArray[i][5*j+4])){linesArray4.push(linesArray[i][5*j], linesArray[i][5*j+1], linesArray[i][5*j+2], linesArray[i][5*j+3], linesArray[i][5*j+4])}
}}}}}
tempIndex = linesArray4.indexOf(Math.max(...linesArray4)); tempIndex2 = tempIndex%(linesArray4.length/3); 
console.log(linesArray4, Math.max(...linesArray4), tempIndex, tempIndex2); 
secondLineAway.innerHTML = awayF[3*linesArray4[tempIndex+2]+1] + ' ' + awayF[3*linesArray4[tempIndex+2]+2] + '<br>' + awayF[3*linesArray4[tempIndex+3]+1] + ' ' + awayF[3*linesArray4[tempIndex+3]+2]+ '<br>' + awayF[3*linesArray4[tempIndex+4]+1] + ' ' + awayF[3*linesArray4[tempIndex+4]+2];
secondLineTimeAway.innerHTML = linesArray4[tempIndex2] + '<br>' + linesArray4[tempIndex2 + linesArray4.length/3] + '<br>' + linesArray4[tempIndex2 + 2*linesArray4.length/3]
secondLineTime2Away.innerHTML = linesArray4[tempIndex2+1] + '<br>' + linesArray4[tempIndex2 + 1 + linesArray4.length/3] + '<br>' + linesArray4[tempIndex2 + 1 + 2*linesArray4.length/3];
console.log(linesArray4[tempIndex+2], linesArray4[tempIndex+3], linesArray4[tempIndex+4]);
linesArray5 = []; 
for (i = 0; i < awayF.length/3; i++) {if ((i === linesArray2[3][0])||(i === linesArray2[3][1])||(i === linesArray2[3][2])||(i === linesArray4[tempIndex + 2])||(i === linesArray4[tempIndex + 3])||(i === linesArray4[tempIndex + 4])) {}
else {linesArray5.push(i)}}
console.log(linesArray5); linesArray6 = [];
for (i = 3; i < 6; i++) {
for (j = 0; j<linesArray[i].length/5; j++) {for (k=0; k<linesArray5.length-2; k++) {for (l=k+1; l<linesArray5.length-1; l++) {for (m=l+1; m<linesArray5.length; m++) 
  {if((linesArray5[k]===linesArray[i][5*j+2])&&(linesArray5[l]===linesArray[i][5*j+3])&&(linesArray5[m]===linesArray[i][5*j+4])) {linesArray6.push(linesArray[i][5*j], linesArray[i][5*j+1], linesArray[i][5*j+2], linesArray[i][5*j+3], linesArray[i][5*j+4]);                      
  tempIndex = linesArray6.indexOf(Math.max(...linesArray6)); tempIndex2 = tempIndex%(linesArray6.length/3)}
}}}}} 
console.log(linesArray6,  Math.max(...linesArray6), tempIndex, tempIndex2); 
thirdLineAway.innerHTML = awayF[3*linesArray6[tempIndex+2]+1] + ' ' + awayF[3*linesArray6[tempIndex+2]+2] + '<br>' + awayF[3*linesArray6[tempIndex+3]+1] + ' ' + awayF[3*linesArray6[tempIndex+3]+2]+ '<br>' + awayF[3*linesArray6[tempIndex+4]+1] + ' ' + awayF[3*linesArray6[tempIndex+4]+2];
thirdLineTimeAway.innerHTML = linesArray6[tempIndex2] + '<br>' + linesArray6[tempIndex2 + linesArray6.length/3] + '<br>' + linesArray6[tempIndex2 + 2*linesArray6.length/3];
thirdLineTime2Away.innerHTML = linesArray6[tempIndex2+1] + '<br>' + linesArray6[tempIndex2 + 1 + linesArray6.length/3] + '<br>' + linesArray6[tempIndex2 + 1 + 2*linesArray6.length/3];
linesArray7 = []; 
console.log(linesArray6[tempIndex+2], linesArray6[tempIndex+3], linesArray6[tempIndex+4])
for (i = 0; i < linesArray5.length; i++) { if ((linesArray5[i]===linesArray6[tempIndex+2])||(linesArray5[i]===linesArray6[tempIndex+3])||(linesArray5[i]===linesArray6[tempIndex+4])){}
else {linesArray7.push(linesArray5[i])}}
console.log(linesArray7);
if (linesArray7.length = 2) {fourthLineAway.innerHTML = awayF[3*linesArray7[0]+1] + ' ' + awayF[3*linesArray7[0]+2] + '<br>' + awayF[3*linesArray7[1]+1] + ' ' + awayF[3*linesArray7[1]+2]}
else {console.log('use case will be added later')}
}       
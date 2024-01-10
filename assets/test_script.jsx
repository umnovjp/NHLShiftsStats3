for (i = 0; i < homeF.length/3; i++) {if (linesArray2[2].includes(i)) {} else linesArray2[4].push(i)}
                    
if ((homeF.length/3===12)&&(linesArray2[2].length===9)) {linesArray4 = []; for (i = 0; i < 3; i++){for (j = 0; j<linesArray[i].length/5; j++) {if ((linesArray2[4][0] === linesArray[i][5*j+2])&&(linesArray2[4][1] === linesArray[i][5*j+3])&&(linesArray2[4][2] === linesArray[i][5*j+4])) 
  linesArray4.push(linesArray[i][5*j], linesArray[i][5*j+1])}
fourthLine.innerHTML = homeF[3*linesArray2[4][0]+1] + ' ' + homeF[3*linesArray2[4][0]+2] + '<br>' + homeF[3*linesArray2[4][1]+1] + ' ' + homeF[3*linesArray2[4][1]+2] + '<br>' + homeF[3*linesArray2[4][2]+1] + ' ' + homeF[3*linesArray2[4][2]+2];
fourthLineTime2.innerHTML = linesArray4[1] + '<br>' + linesArray4[3] + '<br>' + linesArray4[5];
fourthLineTime.innerHTML = linesArray4[0] + '<br>' + linesArray4[2] + '<br>' + linesArray4[4]}}
if(linesArray2[2].length<=7){linesArray4 = []; for(i=0; i<3; i++){for (j = 0; j<linesArray[i].length/5; j++){for (k=0; k<linesArray2[4].length-2; k++) {for (l=k+1; l<linesArray2[4].length-1; l++){for (m=l+1; m<linesArray2[4].length; m++){
  if((linesArray2[4][k] === linesArray[i][5*j+2])&&(linesArray2[4][l] === linesArray[i][5*j+3])&&(linesArray2[4][m] === linesArray[i][5*j+4])){linesArray4.push(linesArray[i][5*j], linesArray[i][5*j+1], linesArray[i][5*j+2], linesArray[i][5*j+3], linesArray[i][5*j+4])}                      
}}}}}
tempIndex = linesArray4.indexOf(Math.max(...linesArray4)); tempIndex2 = tempIndex%(linesArray4.length/3);
console.log(linesArray4, Math.max(...linesArray4), tempIndex, tempIndex2);
// stopped here
thirdLine.innerHTML = homeF[3*linesArray4[tempIndex+2]+1] + ' ' + homeF[3*linesArray4[tempIndex+2]+2] + '<br>' + homeF[3*linesArray4[tempIndex+3]+1] + ' ' + homeF[3*linesArray4[tempIndex+3]+2]+ '<br>' + homeF[3*linesArray4[tempIndex+4]+1] + ' ' + homeF[3*linesArray4[tempIndex+4]+2];
thirdLineTime.innerHTML = linesArray4[tempIndex2] + '<br>' + linesArray4[tempIndex2 + linesArray4.length/3] + '<br>' + linesArray4[tempIndex2 + 2*linesArray4.length/3]
thirdLineTime2.innerHTML = linesArray4[tempIndex2+1] + '<br>' + linesArray4[tempIndex2 + 1 + linesArray4.length/3] + '<br>' + linesArray4[tempIndex2 + 2 + 2*linesArray4.length/3];
console.log(linesArray4[tempIndex+2], linesArray4[tempIndex+3], linesArray4[tempIndex+4]);
// stopped here
linesArray5 = [];
for (i = 0; i < linesArray2[4].length; i++) {if ((linesArray2[4][i]===linesArray4[tempIndex+2])||(linesArray2[4][i]===linesArray4[tempIndex+3])||(linesArray2[4][i]===linesArray4[tempIndex+4])) {}
else linesArray5.push(linesArray2[4][i])}
console.log(linesArray5, linesArray5.length)
if (linesArray5.length===2){fourthLine.innerHTML = homeF[3*linesArray5[0]+1] + ' ' + homeF[3*linesArray5[0]+2] + '<br>' + homeF[3*linesArray5[1]+1] + ' ' + homeF[3*linesArray5[1]+2]}
else if (linesArray5.length===3){fourthLine.innerHTML = homeF[3*linesArray5[0]+1] + ' ' + homeF[3*linesArray5[0]+2] + '<br>' + homeF[3*linesArray5[1]+1] + ' ' + homeF[3*linesArray5[1]+2]  + '<br>' + homeF[3*linesArray5[2]+1] + ' ' + homeF[3*linesArray5[2]+2];
for (i = 0; i < linesArray[0].length/5; i++) {if ((linesArray[0][5*i+2] === linesArray5[0])&&(linesArray[0][5*i+3] === linesArray5[1])&&(linesArray[0][5*i+4] === linesArray5[2]))
{// linesArray4.push(linesArray2[0][5*i], linesArray2[0][5*i+1], linesArray2[1][5*i], linesArray2[1][5*i+1], linesArray2[2][5*i], linesArray2[2][5*i+1]);
  console.log(i); tempIndex = i
}}
console.log(tempIndex)
fourthLineTime.innerHTML = linesArray[0][5*tempIndex] + '<br>' + linesArray[1][5*tempIndex] + '<br>' + linesArray[2][5*tempIndex];
fourthLineTime2.innerHTML = linesArray[0][5*tempIndex+1] + '<br>' + linesArray[1][5*tempIndex+1] + '<br>' + linesArray[2][5*tempIndex+1]}
else if (linesArray5.length===4) {console.log('will be added when required')}
}

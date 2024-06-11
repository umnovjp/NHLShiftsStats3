finalLineup =[[],[],[],[]]; tempArray3 = [homeF.length/3, awayF.length/3]; linesArray4 = [[],[]]; finalLineup2=[[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]],[[],[],[]]];                  
for (i=2; i<4; i++) {for (j=0; j<linesArray2[i].length; j++) {for (k=j+1; k<linesArray2[i].length; k++) {if (linesArray2[i][j]===linesArray2[i][k]) {console.log(j,k)
  if (finalLineup[i-2].includes(linesArray2[i][j])) {}
else {finalLineup[i-2].push(linesArray2[i][j])}
}}}

for (j=0;j<linesArray2[i].length/3;j++) {if ((finalLineup[i-2].includes(linesArray2[i][3*j]))||(finalLineup[i-2].includes(linesArray2[i][3*j+1]))||(finalLineup[i-2].includes(linesArray2[i][3*j+2]))){}
else {finalLineup[i].push(linesArray2[i][3*j], linesArray2[i][3*j+1], linesArray2[i][3*j+2])}}

  if (finalLineup[i].length===12) {}
else if (finalLineup[i].length===9) {for (j=0;j<tempArray3[i-2];j++){if (linesArray2[i].includes(j)){}
else finalLineup[i].push(j)}}
else if (finalLineup[i].length===6) {console.log('Two lines', finalLineup); linesArray4 = [[],[]]
for (j=3*(i-2);j<3+3*(i-2);j++) {for (k=0;k<linesArray[j].length/5;k++) {
if((finalLineup[i].includes(linesArray[j][5*k+2]))||(finalLineup[i].includes(linesArray[j][5*k+3]))||(finalLineup[i].includes(linesArray[j][5*k+4]))) {}
else {linesArray4[i-2].push(linesArray[j][5*k], linesArray[j][5*k+1], linesArray[j][5*k+2], linesArray[j][5*k+3], linesArray[j][5*k+4])}
}}
tempIndex = linesArray4[i-2].indexOf(Math.max(...linesArray4[i-2])); tempIndex2 = tempIndex%(linesArray4[i-2].length/3);
console.log(linesArray4, Math.max(...linesArray4[i-2]), tempIndex, tempIndex2);
finalLineup[i].push(linesArray4[i-2][tempIndex+2], linesArray4[i-2][tempIndex+3], linesArray4[i-2][tempIndex+4]);
for (j=0; j<tempArray3[h]; j++) {if (finalLineup[i].includes(j)){} else finalLineup[i].push(j)}
} // end if loop 2 lines
else if (finalLineup[i].length===3) {  console.log('One line', finalLineup); linesArray5 = [[],[]]; linesArray6 = [[],[]]; for (j=3*(i-2);j<3+3*(i-2);j++) {
for (k=0;k<linesArray[j].length/5;k++) {
if((finalLineup[i].includes(linesArray[j][5*k+2]))||(finalLineup[i].includes(linesArray[j][5*k+3]))||(finalLineup[i].includes(linesArray[j][5*k+4]))) {}          
else {linesArray5[i-2].push(linesArray[j][5*k], linesArray[j][5*k+1], linesArray[j][5*k+2], linesArray[j][5*k+3], linesArray[j][5*k+4])}
}}
tempIndex = linesArray5[i-2].indexOf(Math.max(...linesArray5[i-2])); tempIndex2 = tempIndex%(linesArray5[i-2].length/3); 
console.log(linesArray5, Math.max(...linesArray5[i-2]), tempIndex, tempIndex2);
finalLineup[i].push(linesArray5[i-2][tempIndex+2], linesArray5[i-2][tempIndex+3], linesArray5[i-2][tempIndex+4]);
for (j=3*(i-2);j<3+3*(i-2);j++) {for (k=0;k<linesArray[j].length/5;k++) {if ((finalLineup[i].includes(linesArray[j][5*k+2]))||(finalLineup[i].includes(linesArray[j][5*k+3]))||(finalLineup[i].includes(linesArray[j][5*k+4]))){}
else (linesArray6[i-2].push(linesArray[j][5*k], linesArray[j][5*k+1], linesArray[j][5*k+2], linesArray[j][5*k+3], linesArray[j][5*k+4]))}}
tempIndex = linesArray6[i-2].indexOf(Math.max(...linesArray6[i-2])); tempIndex2 = tempIndex%(linesArray6[i-2].length/3); 
console.log(linesArray6, Math.max(...linesArray6[i-2]), tempIndex, tempIndex2);
finalLineup[i].push(linesArray6[i-2][tempIndex+2], linesArray6[i-2][tempIndex+3], linesArray6[i-2][tempIndex+4]);
for (j=0; j<tempArray3[i-2]; j++) {if (finalLineup[i].includes(j)){} else finalLineup[i].push(j)}
console.log(finalLineup, linesArray6[i-2][tempIndex+2], linesArray6[i-2][tempIndex+3], linesArray6[i-2][tempIndex+4]);
} // end if 1 line loop      
else {console.log('case to be added', 'i', i, linesArray2[i].length, finalLineup[i].length)}
} // end i 2,3 loop 
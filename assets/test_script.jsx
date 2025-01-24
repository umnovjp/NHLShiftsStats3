if (finalLineup2[h+4][i].length===3) {console.log('One line', 'team', h, 'period', i, finalLineup2[h+4][i]); linesArray5 = [[[],[],[]],[[],[],[]]]; linesArray6 = [[[],[],[]],[[],[],[]]];
        for (j=3*h;j<3*h+3;j++) {for (k=0;k<linesArray[j].length/5;k++) {
          if((finalLineup2[h+4][i].includes(linesArray[j][5*k+2]))||(finalLineup2[h+4][i].includes(linesArray[j][5*k+3]))||(finalLineup2[h+4][i].includes(linesArray[j][5*k+4]))) {}
          else {linesArray5[h][i].push(linesArray[j][5*k], linesArray[j][5*k+1], linesArray[j][5*k+2], linesArray[j][5*k+3], linesArray[j][5*k+4])}
        }}
       tempIndex = linesArray5[h][i].indexOf(Math.max(...linesArray5[h][i])); tempIndex2 = tempIndex%(linesArray5[h][i].length/3); 
        console.log(linesArray5[h][i], Math.max(...linesArray5[h][i]), tempIndex, tempIndex2, linesArray5[h][i][tempIndex+2]);
        finalLineup2[h+4][i].push(linesArray5[h][i][tempIndex+2], linesArray5[h][i][tempIndex+3], linesArray5[h][i][tempIndex+4]);
        for (j=3*h;j<3+3*h;j++) {for (k=0;k<linesArray[j].length/5;k++) {if ((finalLineup2[h+4][i].includes(linesArray[j][5*k+2]))||(finalLineup2[h+4][i].includes(linesArray[j][5*k+3]))||(finalLineup2[h+4][i].includes(linesArray[j][5*k+4]))){}
        else (linesArray6[h][i].push(linesArray[j][5*k], linesArray[j][5*k+1], linesArray[j][5*k+2], linesArray[j][5*k+3], linesArray[j][5*k+4]))}}
        tempIndex = linesArray6[h][i].indexOf(Math.max(...linesArray6[h][i])); tempIndex2 = tempIndex%(linesArray6[h][i].length/3); 
        console.log(linesArray6[h][i], Math.max(...linesArray6[h][i]), tempIndex, tempIndex2);
        finalLineup2[h+4][i].push(linesArray6[h][i][tempIndex+2], linesArray6[h][i][tempIndex+3], linesArray6[h][i][tempIndex+4]);
        for (j=0; j<tempArray3[h]; j++) {if (finalLineup2[h+4][i].includes(j)){} else finalLineup2[h+4][i].push(j)}
        console.log(finalLineup2[h][i], linesArray6[h][i][tempIndex+2], linesArray6[h][i][tempIndex+3], linesArray6[h][i][tempIndex+4]);
      }
      // lineByLine041.innerHTML=awayF[1+3*finalLineup2[5][0][0]]+' '+awayF[2+3*finalLineup2[5][0][0]]+'<br>'+awayF[1+3*finalLineup2[5][0][1]]+' '+awayF[2+3*finalLineup2[5][0][1]]+'<br>'+awayF[1+3*finalLineup2[5][0][2]]+' '+awayF[2+3*finalLineup2[5][0][2]];
      // lineByLine043.innerHTML=awayF[1+3*finalLineup2[5][2][0]]+' '+awayF[2+3*finalLineup2[5][2][0]]+'<br>'+awayF[1+3*finalLineup2[5][2][1]]+' '+awayF[2+3*finalLineup2[5][2][1]]+'<br>'+awayF[1+3*finalLineup2[5][2][2]]+' '+awayF[2+3*finalLineup2[5][2][2]];
      
      // home team below
      // lineByLine201.innerHTML=homeF[1+3*finalLineup2[4][0][0]]+' '+homeF[2+3*finalLineup2[4][0][0]]+'<br>'+homeF[1+3*finalLineup2[4][0][1]]+' '+homeF[2+3*finalLineup2[4][0][1]]+'<br>'+homeF[1+3*finalLineup2[4][0][2]]+' '+homeF[2+3*finalLineup2[4][0][2]];
      // lineByLine203.innerHTML=homeF[1+3*finalLineup2[4][2][0]]+' '+homeF[2+3*finalLineup2[4][2][0]]+'<br>'+homeF[1+3*finalLineup2[4][2][1]]+' '+homeF[2+3*finalLineup2[4][2][1]]+'<br>'+homeF[1+3*finalLineup2[4][2][2]]+' '+homeF[2+3*finalLineup2[4][2][2]];
      
      // console.log('finalLineup2', finalLineup2); line 462
for (h=0;h<2;h++) {for (i=0;i<3;i++) {for (j=0;j<linesArray7[h][i].length/5;j++) {finalLineup2[h][i].push(linesArray7[h][i][5*j+2], linesArray7[h][i][5*j+3], linesArray7[h][i][5*j+4])}}}
            for (h=0;h<2;h++) {for (i=0;i<3;i++) {for (j=0;j<finalLineup2[h][i].length;j++) {for (k=j+1;k<finalLineup2[h][i].length;k++) {
              if (finalLineup2[h][i][j]===finalLineup2[h][i][k]) { if (finalLineup2[h+2][i].includes(finalLineup2[h][i][j])) {}
            else {finalLineup2[h+2][i].push(finalLineup2[h][i][j])}}
          }}
          // next 2 lines of code determines if there are unique lines if finalLineup2[h+2] is not empty if it is, lines are pushed to finalLineup2[h+4]
          for (j=0;j<finalLineup2[h][i].length/3;j++) {if ((finalLineup2[h+2][i].includes(finalLineup2[h][i][3*j]))||(finalLineup2[h+2][i].includes(finalLineup2[h][i][3*j+1]))||(finalLineup2[h+2][i].includes(finalLineup2[h][i][3*j+2]))){}
          else {finalLineup2[h+4][i].push(finalLineup2[h][i][3*j], finalLineup2[h][i][3*j+1], finalLineup2[h][i][3*j+2])}}
          if (finalLineup2[h+4][i].length===12) {}
          else if (finalLineup2[h+4][i].length===9) {for (j=0;j<tempArray3[h];j++){if (finalLineup2[h][i].includes(j)){}
          else finalLineup2[h+4][i].push(j)}}
          else if (finalLineup2[h+4][i].length===6) {console.log('Two lines', 'team', h, 'period', i, finalLineup2[h+4][i]); linesArray4 = [[[],[],[]],[[],[],[]]];
          for (j=3*h;j<3+3*h;j++) {for (k=0;k<linesArray[j].length/5;k++) {
            if((finalLineup2[h+4][i].includes(linesArray[j][5*k+2]))||(finalLineup2[h+4][i].includes(linesArray[j][5*k+3]))||(finalLineup2[h+4][i].includes(linesArray[j][5*k+4]))) {}
            else {linesArray4[h][i].push(linesArray[j][5*k], linesArray[j][5*k+1], linesArray[j][5*k+2], linesArray[j][5*k+3], linesArray[j][5*k+4])}
            }}
          tempIndex = linesArray4[h][i].indexOf(Math.max(...linesArray4[h][i])); tempIndex2 = tempIndex%(linesArray4[h][i].length/3);
          console.log(h, i, linesArray4[h][i], Math.max(...linesArray4[h][i]), tempIndex, tempIndex2);
          finalLineup2[h+4][i].push(linesArray4[h][i][tempIndex+2], linesArray4[h][i][tempIndex+3], linesArray4[h][i][tempIndex+4]);
          // finalLineup2[h+4][i].push(linesArray4[h][tempIndex+2], linesArray4[h][tempIndex+3], linesArray4[h][tempIndex+4]);
          for (j=0; j<tempArray3[h]; j++) {if (finalLineup2[h+4][i].includes(j)){} else {finalLineup2[h+4][i].push(j)}}
        }
        else if (finalLineup2[h+4][i].length===3) {console.log('One line', 'team', h, 'period', i, finalLineup2[h+4][i]); linesArray5 = [[[],[],[]],[[],[],[]]]; linesArray6 = [[[],[],[]],[[],[],[]]];
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
      else {console.log('case to be added', 'h', h, 'i', i,)}
      }} // i, h loops end finalLineup2

                          // shiftsLine structure: index 0,1,2 is for two players out of line for h team, 3,4,5 is entire line together for this line; 6,7,8 is for two players then 9,10,11 for entire line of 1-h team 
                          function lineByLine(h,f,j) { shiftsLine=[]; for (i=0;i<14;i++) {shiftsLine.push([])} shiftsLine[13]=[[],[]]
                          for (i=0;i<3;i++) { //f is line number 0,1,2,3, j is opposite team line number 0,1,2,3, h is 0 or 1 home away team
                      for (l=0;l<fArray[h][finalLineup[2+h][3*f]][i].length/2;l++) { for (m=0;m<fArray[h][finalLineup[2+h][3*f+1]][i].length/2;m++) {if ((fArray[h][finalLineup[2+h][3*f+1]][i][2*m]>=fArray[h][finalLineup[2+h][3*f]][i][2*l]) && (fArray[h][finalLineup[2+h][3*f+1]][i][2*m]<=fArray[h][finalLineup[2+h][3*f]][i][2*l+1]))
                        {if (fArray[h][finalLineup[2+h][3*f+1]][i][2*m+1]>=fArray[h][finalLineup[2+h][3*f]][i][2*l+1]) {shiftsLine[i].push(fArray[h][finalLineup[2+h][3*f+1]][i][2*m], fArray[h][finalLineup[2+h][3*f]][i][2*l+1]) }
                          else { shiftsLine[i].push(fArray[h][finalLineup[2+h][3*f+1]][i][2*m], fArray[h][finalLineup[2+h][3*f+1]][i][2*m+1]) }}
                          else if ((fArray[h][finalLineup[2+h][3*f+1]][i][2*m]<=fArray[h][finalLineup[2+h][3*f]][i][2*l])&&(fArray[h][finalLineup[2+h][3*f+1]][i][2*m+1]>=fArray[h][finalLineup[2+h][3*f]][i][2*l])) {
                            if (fArray[h][finalLineup[2+h][3*f+1]][i][2*m+1]>=fArray[h][finalLineup[2+h][3*f]][i][2*l+1]) { shiftsLine[i].push(fArray[h][finalLineup[2+h][3*f]][i][2*l], fArray[h][finalLineup[2+h][3*f]][i][2*l+1]) }
                            else {shiftsLine[i].push(fArray[h][finalLineup[2+h][3*f]][i][2*l], fArray[h][finalLineup[2+h][3*f+1]][i][2*m+1])}}
                      }} // end first m,l loop
                      // start second l,m loop 
                      for (l=0;l<shiftsLine[i].length/2;l++) { for (m=0;m<fArray[h][finalLineup[2+h][3*f+2]][i].length/2;m++) {if ((fArray[h][finalLineup[2+h][3*f+2]][i][2*m]>=shiftsLine[i][2*l]) && (fArray[h][finalLineup[2+h][3*f+2]][i][2*m]<=shiftsLine[i][2*l+1]))
                        {if (fArray[h][finalLineup[2+h][3*f+2]][i][2*m+1]>=shiftsLine[i][2*l+1]) {shiftsLine[i+3].push(fArray[h][finalLineup[2+h][3*f+2]][i][2*m], shiftsLine[i][2*l+1]) }
                          else { shiftsLine[i+3].push(fArray[h][finalLineup[2+h][3*f+2]][i][2*m], fArray[h][finalLineup[2+h][3*f+2]][i][2*m+1]) }}
                          else if ((fArray[h][finalLineup[2+h][3*f+2]][i][2*m]<=shiftsLine[i][2*l])&&(fArray[h][finalLineup[2+h][3*f+2]][i][2*m+1]>=shiftsLine[i][2*l])) {
                            if (fArray[h][finalLineup[2+h][3*f+2]][i][2*m+1]>=shiftsLine[i][2*l+1]) { shiftsLine[i+3].push(shiftsLine[i][2*l], shiftsLine[i][2*l+1]) }
                            else {shiftsLine[i+3].push(shiftsLine[i][2*l], fArray[h][finalLineup[2+h][3*f+2]][i][2*m+1])}}
                      }} // end second m,l loop
                      for (l=0;l<fArray[1-h][finalLineup[3-h][3*j]][i].length/2;l++) { for (m=0;m<fArray[1-h][finalLineup[3-h][3*j+1]][i].length/2;m++) {if ((fArray[1-h][finalLineup[3-h][3*j+1]][i][2*m]>=fArray[1-h][finalLineup[3-h][3*j]][i][2*l]) && (fArray[1-h][finalLineup[3-h][3*j+1]][i][2*m]<=fArray[1-h][finalLineup[3-h][3*j]][i][2*l+1]))
                        {if (fArray[1-h][finalLineup[3-h][3*j+1]][i][2*m+1]>=fArray[1-h][finalLineup[3-h][3*j]][i][2*l+1]) {shiftsLine[6+i].push(fArray[1-h][finalLineup[3-h][3*j+1]][i][2*m], fArray[1-h][finalLineup[3-h][3*j]][i][2*l+1]) }
                          else { shiftsLine[6+i].push(fArray[1-h][finalLineup[3-h][3*j+1]][i][2*m], fArray[1-h][finalLineup[3-h][3*j+1]][i][2*m+1]) }}
                          else if ((fArray[1-h][finalLineup[3-h][3*j+1]][i][2*m]<=fArray[1-h][finalLineup[3-h][3*j]][i][2*l])&&(fArray[1-h][finalLineup[3-h][3*j+1]][i][2*m+1]>=fArray[1-h][finalLineup[3-h][3*j]][i][2*l])) {
                            if (fArray[1-h][finalLineup[3-h][3*j+1]][i][2*m+1]>=fArray[1-h][finalLineup[3-h][3*j]][i][2*l+1]) { shiftsLine[6+i].push(fArray[1-h][finalLineup[3-h][3*j]][i][2*l], fArray[1-h][finalLineup[3-h][3*j]][i][2*l+1]) }
                            else {shiftsLine[6+i].push(fArray[1-h][finalLineup[3-h][3*j]][i][2*l], fArray[1-h][finalLineup[3-h][3*j+1]][i][2*m+1])}}
                      }} // end first m,l loop 
                      // start second l,m loop 
                      for (l=0;l<shiftsLine[6+i].length/2;l++) { for (m=0;m<fArray[1-h][finalLineup[3-h][3*j+2]][i].length/2;m++) {if ((fArray[1-h][finalLineup[3-h][3*j+2]][i][2*m]>=shiftsLine[6+i][2*l]) && (fArray[1-h][finalLineup[3-h][3*j+2]][i][2*m]<=shiftsLine[6+i][2*l+1]))
                        {if (fArray[1-h][finalLineup[3-h][3*j+2]][i][2*m+1]>=shiftsLine[6+i][2*l+1]) {shiftsLine[9+i].push(fArray[1-h][finalLineup[3-h][3*j+2]][i][2*m], shiftsLine[6+i][2*l+1]) }
                          else { shiftsLine[9+i].push(fArray[1-h][finalLineup[3-h][3*j+2]][i][2*m], fArray[1-h][finalLineup[3-h][3*j+2]][i][2*m+1]) }}
                          else if ((fArray[1-h][finalLineup[3-h][3*j+2]][i][2*m]<=shiftsLine[6+i][2*l])&&(fArray[1-h][finalLineup[3-h][3*j+2]][i][2*m+1]>=shiftsLine[6+i][2*l])) {
                            if (fArray[1-h][finalLineup[3-h][3*j+2]][i][2*m+1]>=shiftsLine[6+i][2*l+1]) { shiftsLine[9+i].push(shiftsLine[6+i][2*l], shiftsLine[6+i][2*l+1]) }
                            else {shiftsLine[9+i].push(shiftsLine[6+i][2*l], fArray[1-h][finalLineup[3-h][3*j+2]][i][2*m+1])}}
                          }} // end second away m,l loop
                          shiftsLine[12].push([]);
                      for (l=0;l<shiftsLine[3+i].length/2;l++) {for (m=0;m<shiftsLine[9+i].length/2;m++) {if ((shiftsLine[9+i][2*m]>=shiftsLine[3+i][2*l])&&(shiftsLine[9+i][2*m]<=shiftsLine[3+i][2*l+1])){
                        if (shiftsLine[9+i][2*m+1]>=shiftsLine[3+i][2*l+1]){shiftsLine[12][i].push(shiftsLine[9+i][2*m], shiftsLine[3+i][2*l+1])}
                        else { shiftsLine[12][i].push(shiftsLine[9+i][2*m], shiftsLine[9+i][2*m+1]) }}
                        else if ((shiftsLine[9+i][2*m]<=shiftsLine[3+i][2*l])&&(shiftsLine[9+i][2*m+1]>=shiftsLine[3+i][2*l])) {
                          if (shiftsLine[9+i][2*m+1]>=shiftsLine[3+i][2*l+1]) { shiftsLine[12][i].push(shiftsLine[3+i][2*l], shiftsLine[3+i][2*l+1]) }
                          else {shiftsLine[12][i].push(shiftsLine[3+i][2*l], shiftsLine[9+i][2*m+1])}}
                    }} // end m,l loop line vs line
                    lineVsLineTime=0; lineVsLineShifts=0;
                    for (k=0;k<shiftsLine[12][i].length/2;k++) { lineVsLineTime=lineVsLineTime+shiftsLine[12][i][2*k+1]-shiftsLine[12][i][2*k];
                    if (shiftsLine[12][i][2*k+1]-shiftsLine[12][i][2*k]>=10) {lineVsLineShifts=lineVsLineShifts+1}}
                    shiftsLine[13][0].push(lineVsLineTime, lineVsLineShifts);
                    lineVsLineTime=0; lineVsLineShifts=0;
                    for (k=0;k<shiftsLine[3+i].length/2;k++) { lineVsLineTime=lineVsLineTime+shiftsLine[3+i][2*k+1]-shiftsLine[3+i][2*k];
                      if (shiftsLine[3+i][2*k+1]-shiftsLine[3+i][2*k]>=10) {lineVsLineShifts=lineVsLineShifts+1}}
                      shiftsLine[13][1].push(lineVsLineTime, lineVsLineShifts)
                    } // end i loop
                      return shiftsLine[13]} // end function lineByLine 
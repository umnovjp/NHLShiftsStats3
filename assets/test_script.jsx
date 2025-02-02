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

      function lineByLine2(h,q,r,s,t,u,v,i) {shiftsLine2=[]; for (p=0;p<14;p++) {shiftsLine2.push([])} shiftsLine2[13]=[[],[]]
                    
      for (n=0;n<3;n++) {// n is player in a line but i is period
       //f is line number 0,1,2,3, j is opposite team line number 0,1,2,3, h is 0 or 1 home away team 
      // console.log(finalLineup2[4+h][i][3*f])
      for (l=0;l<fArray[h][finalLineup2[4+h][i][q]][n].length/2;l++) { for (m=0;m<fArray[h][finalLineup2[4+h][i][r]][n].length/2;m++) {if ((fArray[h][finalLineup2[4+h][i][r]][n][2*m]>=fArray[h][finalLineup2[4+h][i][q]][n][2*l]) && (fArray[h][finalLineup2[4+h][i][r]][n][2*m]<=fArray[h][finalLineup2[4+h][i][r]][n][2*l+1]))
      {if (fArray[h][finalLineup2[4+h][i][r]][n][2*m+1]>=fArray[h][finalLineup2[4+h][i][q]][n][2*l+1]) {shiftsLine2[n].push(fArray[h][finalLineup2[4+h][i][r]][n][2*m], fArray[h][finalLineup2[4+h][i][q]][n][2*l+1]) }
      else { shiftsLine2[n].push(fArray[h][finalLineup2[4+h][i][r]][n][2*m], fArray[h][finalLineup2[4+h][i][r]][n][2*m+1]) }}
      else if ((fArray[h][finalLineup2[4+h][i][r]][n][2*m]<=fArray[h][finalLineup2[4+h][i][q]][n][2*l])&&(fArray[h][finalLineup2[4+h][i][r]][n][2*m+1]>=fArray[h][finalLineup2[4+h][i][q]][n][2*l])) {
        if (fArray[h][finalLineup2[4+h][i][r]][n][2*m+1]>=fArray[h][finalLineup2[4+h][i][q]][n][2*l+1]) { shiftsLine2[n].push(fArray[h][finalLineup2[4+h][i][q]][n][2*l], fArray[h][finalLineup2[4+h][i][q]][n][2*l+1]) }
        else {shiftsLine2[n].push(fArray[h][finalLineup2[4+h][i][q]][n][2*l], fArray[h][finalLineup2[4+h][i][r]][n][2*m+1])}}
      }} // end first m,l loop 
      // start second l,m loop
      for (l=0;l<shiftsLine2[n].length/2;l++) { for (m=0;m<fArray[h][finalLineup2[4+h][i][s]][n].length/2;m++) {if ((fArray[h][finalLineup2[4+h][i][s]][n][2*m]>=shiftsLine2[n][2*l])&&(fArray[h][finalLineup2[4+h][i][s]][n][2*m]<=shiftsLine2[n][2*l+1]))
      {if (fArray[h][finalLineup2[4+h][i][s]][n][2*m+1]>=shiftsLine2[n][2*l+1]) {shiftsLine2[n+3].push(fArray[h][finalLineup2[4+h][i][s]][n][2*m], shiftsLine2[n][2*l+1]) }
        else { shiftsLine2[n+3].push(fArray[h][finalLineup2[4+h][i][s]][n][2*m], fArray[h][finalLineup2[4+h][i][s]][n][2*m+1]) }}
        else if ((fArray[h][finalLineup2[4+h][i][s]][n][2*m]<=shiftsLine2[n][2*l])&&(fArray[h][finalLineup2[4+h][i][s]][n][2*m+1]>=shiftsLine2[n][2*l])) {
        if (fArray[h][finalLineup2[4+h][i][s]][n][2*m+1]>=shiftsLine2[n][2*l+1]) { shiftsLine2[n+3].push(shiftsLine2[n][2*l], shiftsLine2[n][2*l+1]) }
        else {shiftsLine2[n+3].push(shiftsLine2[n][2*l], fArray[h][finalLineup2[4+h][i][s]][n][2*m+1])}}
      }} // end second m,l loop 
      for (l=0;l<fArray[1-h][finalLineup2[5-h][i][t]][n].length/2;l++) { for (m=0;m<fArray[1-h][finalLineup2[5-h][i][u]][n].length/2;m++) {if ((fArray[1-h][finalLineup2[5-h][i][u]][n][2*m]>=fArray[1-h][finalLineup2[5-h][i][t]][n][2*l]) && (fArray[1-h][finalLineup2[5-h][i][u]][n][2*m]<=fArray[1-h][finalLineup2[5-h][i][t]][n][2*l+1]))
      {if (fArray[1-h][finalLineup2[5-h][i][u]][n][2*m+1]>=fArray[1-h][finalLineup2[5-h][i][t]][n][2*l+1]) {shiftsLine2[6+n].push(fArray[1-h][finalLineup2[5-h][i][u]][n][2*m], fArray[1-h][finalLineup2[5-h][i][t]][n][2*l+1]) }
      else { shiftsLine2[6+n].push(fArray[1-h][finalLineup2[5-h][i][u]][n][2*m], fArray[1-h][finalLineup2[5-h][i][u]][n][2*m+1]) }}
      else if ((fArray[1-h][finalLineup2[5-h][i][u]][n][2*m]<=fArray[1-h][finalLineup2[5-h][i][t]][n][2*l])&&(fArray[1-h][finalLineup2[5-h][i][u]][n][2*m+1]>=fArray[1-h][finalLineup2[5-h][i][t]][n][2*l])) {
      if (fArray[1-h][finalLineup2[5-h][i][u]][n][2*m+1]>=fArray[1-h][finalLineup2[5-h][i][t]][n][2*l+1]) { shiftsLine2[6+n].push(fArray[1-h][finalLineup2[5-h][i][t]][n][2*l], fArray[1-h][finalLineup2[5-h][i][t]][n][2*l+1]) }
       else {shiftsLine2[6+n].push(fArray[1-h][finalLineup2[5-h][i][t]][n][2*l], fArray[1-h][finalLineup2[5-h][i][u]][n][2*m+1])}}
      }} // end first m,l loop
      // start second l,m loop
      for (l=0;l<shiftsLine2[6+n].length/2;l++) { for (m=0;m<fArray[1-h][finalLineup2[5-h][i][v]][n].length/2;m++) {if ((fArray[1-h][finalLineup2[5-h][i][v]][n][2*m]>=shiftsLine2[6+n][2*l]) && (fArray[1-h][finalLineup2[5-h][i][v]][n][2*m]<=shiftsLine2[6+n][2*l+1]))
      {if (fArray[1-h][finalLineup2[5-h][i][v]][n][2*m+1]>=shiftsLine2[6+n][2*l+1]) {shiftsLine2[9+n].push(fArray[1-h][finalLineup2[5-h][i][v]][n][2*m], shiftsLine2[6+n][2*l+1]) }
      else { shiftsLine2[9+n].push(fArray[1-h][finalLineup2[5-h][i][v]][n][2*m], fArray[1-h][finalLineup2[5-h][i][v]][n][2*m+1]) }}
      else if ((fArray[1-h][finalLineup2[5-h][i][v]][n][2*m]<=shiftsLine2[6+n][2*l])&&(fArray[1-h][finalLineup2[5-h][i][v]][n][2*m+1]>=shiftsLine2[6+n][2*l])) {
      if (fArray[1-h][finalLineup2[5-h][i][v]][n][2*m+1]>=shiftsLine2[6+n][2*l+1]) { shiftsLine2[9+n].push(shiftsLine2[6+n][2*l], shiftsLine2[6+n][2*l+1]) }
        else {shiftsLine2[9+n].push(shiftsLine2[6+n][2*l], fArray[1-h][finalLineup2[5-h][i][v]][n][2*m+1])}}
      }} // end second away m,l loop
      shiftsLine2[12].push([]);
      for (l=0;l<shiftsLine2[3+n].length/2;l++) {for (m=0;m<shiftsLine2[9+n].length/2;m++) {if ((shiftsLine2[9+n][2*m]>=shiftsLine2[3+n][2*l])&&(shiftsLine2[9+n][2*m]<=shiftsLine2[3+n][2*l+1])){
      if (shiftsLine2[9+n][2*m+1]>=shiftsLine2[3+n][2*l+1]){shiftsLine2[12][n].push(shiftsLine2[9+n][2*m], shiftsLine2[3+n][2*l+1])}
      else { shiftsLine2[12][n].push(shiftsLine2[9+n][2*m], shiftsLine2[9+n][2*m+1]) }}
      else if ((shiftsLine2[9+n][2*m]<=shiftsLine2[3+n][2*l])&&(shiftsLine2[9+n][2*m+1]>=shiftsLine2[3+n][2*l])) {
      if (shiftsLine2[9+n][2*m+1]>=shiftsLine2[3+n][2*l+1]) { shiftsLine2[12][n].push(shiftsLine2[3+n][2*l], shiftsLine2[3+n][2*l+1]) }
        else {shiftsLine2[12][n].push(shiftsLine2[3+n][2*l], shiftsLine2[9+n][2*m+1])}}
      }} // end m,l loop line vs line
      lineVsLineTime=0; lineVsLineShifts=0;
      for (k=0;k<shiftsLine2[12][n].length/2;k++) { lineVsLineTime=lineVsLineTime+shiftsLine2[12][n][2*k+1]-shiftsLine2[12][n][2*k];
      if (shiftsLine2[12][n][2*k+1]-shiftsLine2[12][n][2*k]>=10) {lineVsLineShifts=lineVsLineShifts+1}}
      shiftsLine2[13][0].push(lineVsLineTime, lineVsLineShifts);
      lineVsLineTime=0; lineVsLineShifts=0;
      for (k=0;k<shiftsLine2[3+n].length/2;k++) { lineVsLineTime=lineVsLineTime+shiftsLine2[3+n][2*k+1]-shiftsLine2[3+n][2*k];
      if (shiftsLine2[3+n][2*k+1]-shiftsLine2[3+n][2*k]>=10) {lineVsLineShifts=lineVsLineShifts+1}}
      shiftsLine2[13][1].push(lineVsLineTime, lineVsLineShifts)
      } // end n loop
      return shiftsLine2[13]} // end function lineByLine2
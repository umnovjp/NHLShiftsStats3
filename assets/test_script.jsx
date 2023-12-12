for (i = 0; i < tempArray6.length; i++) { // for each period
                  for (j = 0; j < tempArray6[i].length; j++) { // for each player
                    tempArray5 = tempArray6[i];
                    player1 = tempArray5[j];
                    for (k = j + 1; k < tempArray6[i].length; k++) { // for second player
                      tempTime = [];
                      player2 = tempArray5[k];
                      for (l = 0; l < 0.5 * player1.length; l++) {
                        tempArray = tempArray5[j];
                        for (m = 0; m < 0.5 * player2.length; m++) {
                          tempArray2 = tempArray5[k];
                          if (tempArray2[2 * m] >= tempArray[2 * l] && tempArray2[2 * m] <= tempArray[2 * l + 1]) {
                            if (tempArray2[2 * m + 1] >= tempArray[2 * l + 1]) { tempTime.push(tempArray[2 * l + 1] - tempArray2[2 * m]) }
                            else { tempTime.push(tempArray2[2 * m + 1] - tempArray2[2 * m]) }
                          }
                          else if (tempArray2[2 * m] <= tempArray[2 * l] && tempArray2[2 * m + 1] >= tempArray[2 * l]) {
                            if (tempArray2[2 * m + 1] >= tempArray[2 * l + 1]) { tempTime.push(tempArray[2 * l + 1] - tempArray[2 * l]) }
                            else { tempTime.push(tempArray2[2 * m + 1] - tempArray[2 * l]) }
                          }
                        }
                      } // end l cycle
                      shifts = 0;
                      const sum = tempTime.reduce((partialSum, a) => partialSum + a, 0);
                      for (n = 0; n < tempTime.length; n++) {
                        if (tempTime[n] >= 10) { shifts = shifts + 1 }
                      }
                      pairingsAwayArray.push(sum);
                      pairingsAwayArray.push(shifts);
                    }
                  }  // end j loop each D player
                } // end i loop for 3 periods   

                tempArray4 = awayShiftsFArray.splice(awayShiftsFArray.length / 3); tempArray5 = tempArray4.splice(tempArray4.length / 2);
                tempArray6[1] = tempArray4; tempArray6[2] = tempArray5; tempArray6[0] = awayShiftsFArray;
                tempArray5 = []; tempTime2 = [];

                for (i = 0; i < 3; i++) { // i < tempArray6.length
                  for (j = 0; j < tempArray6[i].length - 2; j++) {
                    tempArray5 = tempArray6[i];
                    for (k = j + 1; k < tempArray6[i].length - 1; k++) {
                      shiftsPair = [];
                      for (l = 0; l < 0.5 * tempArray5[j].length; l++) {
                        tempArray = tempArray5[j];
                        for (m = 0; m < 0.5 * tempArray5[k].length; m++) {
                          tempArray2 = tempArray5[k];
                          if (tempArray2[2 * m] >= tempArray[2 * l] && tempArray2[2 * m] < tempArray[2 * l + 1]) {
                            if (tempArray2[2 * m + 1] >= tempArray[2 * l + 1]) { shiftsPair.push(tempArray2[2 * m], tempArray[2 * l + 1]) }
                            else { shiftsPair.push(tempArray2[2 * m], tempArray2[2 * m + 1]) }
                          }
                          else if (tempArray2[2 * m] <= tempArray[2 * l] && tempArray2[2 * m + 1] > tempArray[2 * l]) {
                            if (tempArray2[2 * m + 1] >= tempArray[2 * l + 1]) { shiftsPair.push(tempArray[2 * l], tempArray[2 * l + 1]) }
                            else { shiftsPair.push(tempArray[2 * l], tempArray2[2 * m + 1]) }
                          }
                        }
                      } // end l F loop 
                      for (l = k + 1; l < tempArray6[i].length; l++) {//shiftsPair =[]; this is player #3 compared to pair
                        tempTime = [];
                        for (m = 0; m < 0.5 * shiftsPair.length; m++) {
                          for (n = 0; n < 0.5 * tempArray5[l].length; n++) {
                            tempArray3 = tempArray5[l];
                            if (tempArray3[2 * n] >= shiftsPair[2 * m] && tempArray3[2 * n] < shiftsPair[2 * m + 1]) {
                              if (tempArray3[2 * n + 1] >= shiftsPair[2 * m + 1]) { tempTime.push(shiftsPair[2 * m + 1] - tempArray3[2 * n],) }
                              else { tempTime.push(tempArray3[2 * n + 1] - tempArray3[2 * n]) }
                            }
                            else if (tempArray3[2 * n] <= shiftsPair[2 * m] && tempArray3[2 * n + 1] > shiftsPair[2 * m]) {
                              if (tempArray3[2 * n + 1] >= shiftsPair[2 * m + 1]) { tempTime.push(shiftsPair[2 * m + 1] - shiftsPair[2 * m]) }
                              else { tempTime.push(tempArray3[2 * n + 1] - shiftsPair[2 * m]) }
                            }
                          } // end n F loop
                        } // end m F loop 
                        shifts = 0;
                        const sum = tempTime.reduce((partialSum, a) => partialSum + a, 0);
                        for (n = 0; n < tempTime.length; n++) {
                          if (tempTime[n] >= 10) {
                            shifts = shifts + 1;
                            tempTime2.push(tempTime[n])
                          }
                        }
                        awayLinesArray.push(sum, shifts, j, k, l);
                      } // end l F loop
                    } // end k F loop
                  } // end j F loop
                } // end i F loop
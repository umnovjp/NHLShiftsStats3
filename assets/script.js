var scheduleContent = document.getElementById('schedule'); var gameId; var inputVal = '2021'; standingsArray = [];
// lines below will allow user to select date then to select game on that date
function getInputValue() {
  var inputVal = document.getElementById('datepicker').value; var date = inputVal.split('/');
  var formatted = date[2] + '-' + date[0] + '-' + date[1]; console.log(formatted)
  var requestURL = 'https://cors-anywhere.herokuapp.com/https://api-web.nhle.com/v1/schedule/' + formatted;
  fetch(requestURL, {"method": "GET", "headers": {}
  })
    .then(function (response) {return response.json();
    })
    .then(function (data) {console.log('I am in schedule then');
      console.log(data.gameWeek[0]);
      var numberOfGames = data.gameWeek[0].games.length; scheduleContent.textContent = '';
      for (var i = 0; i < numberOfGames; i++) {
        var gameName = document.createElement('button');
        gameName.setAttribute('id', 'game' + i); var idx = gameName.getAttribute('id');
        gameName.innerHTML = 'Game ' + i + ': ' + data.gameWeek[0].games[i].awayTeam.abbrev + ' vs ' + data.gameWeek[0].games[i].homeTeam.abbrev;
        document.getElementById('schedule').appendChild(gameName); gameName.addEventListener('click', displayGameData);
      }

      function displayGameData(event) {
        idx = event.currentTarget; idxString = event.currentTarget.textContent;
        idxArray = idxString.split(':'); idxNumber = idxArray[0].split(' ');
        gameNumber = idxNumber[1];
        const gameId = data.gameWeek[0].games[gameNumber].id; console.log(gameId);
        var requestURL = 'https://cors-anywhere.herokuapp.com/https://api-web.nhle.com/v1/gamecenter/' + gameId + '/boxscore';
        fetch(requestURL, {
          "method": "GET", "headers": {}
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {const gameInfo = document.createElement('section'); gameInfo.setAttribute('id', 'gameInfo');
            document.getElementById('schedule').appendChild(gameInfo);
            var standingsURL = 'https://cors-anywhere.herokuapp.com/https://api-web.nhle.com/v1/standings/' + formatted;
            fetch(standingsURL, {
              "method": "GET", "headers": {}
            })
              .then(function (response) {
                return response.json();
              })
              .then(function (data_standings) { console.log(data_standings.standings);
                for (i = 0; i < data_standings.standings.length; i++) {
                  if (data_standings.standings[i].teamAbbrev.default === data.awayTeam.abbrev) {
                    standingsArray.push(data_standings.standings[i].wins, data_standings.standings[i].losses, data_standings.standings[i].otLosses)
                    console.log(i, data.awayTeam.abbrev, data_standings.standings[i].wins, data_standings.standings[i].losses, data_standings.standings[i].otLosses)
                  }
                  else if (data_standings.standings[i].teamAbbrev.default === data.homeTeam.abbrev) {
                    standingsArray.push(data.homeTeam.abbrev, data_standings.standings[i].wins, data_standings.standings[i].losses, data_standings.standings[i].otLosses)
                    console.log(i, data.homeTeam.abbrev, data_standings.standings[i].wins, data_standings.standings[i].losses, data_standings.standings[i].otLosses)
                  }
                  else (console.log('No Such Abbrev'))}
                var gameTitle = document.createElement('h2'); gameTitle.textContent = '';
                gameTitle.innerHTML = 'You are watching stats for ' + data.awayTeam.abbrev + standingsArray[0] + ' W ' + standingsArray[1] + ' L ' + standingsArray[2] + ' O at ' + data.homeTeam.abbrev + standingsArray[3] + ' W ' + standingsArray[4] + ' L ' + standingsArray[5] + ' O game';
                document.getElementById('gameInfo').appendChild(gameTitle);
                const homeF = []; const awayF = []; const homeD = []; const awayD = []; const homeG = []; const awayG = []; const playerIdArray = []; // let playerIdeObject = {a: 1}; const hasKeyId = true;
                //console.log(data.boxscore.playerByGameStats.awayTeam.forwards, data.boxscore.playerByGameStats.awayTeam.defense, data.boxscore.playerByGameStats.awayTeam.goalies, data.boxscore.playerByGameStats.homeTeam.forwards, data.boxscore.playerByGameStats.homeTeam.defense, data.boxscore.playerByGameStats.homeTeam.goalies);
                var obj = data.playerByGameStats.homeTeam.forwards; var keys = Object.keys(obj); playerIdeObject = {};
                for (i = 0; i < keys.length; i++) {
                  var val = obj[keys[i]]; homeF.push(val.playerId, val.sweaterNumber, val.name.default); playerIdArray.push(val.playerId, [[], [], []]);
                  keyId = val.playerId; playerIdeObject[keyId] = []}
                var obj = data.playerByGameStats.homeTeam.defense; var keys = Object.keys(obj);
                for (i = 0; i < keys.length; i++) {
                  var val = obj[keys[i]]; homeD.push(val.playerId, val.sweaterNumber, val.name.default); playerIdArray.push(val.playerId, [[], [], []])
                  keyId = val.playerId; playerIdeObject[keyId] = []}
                var obj = data.playerByGameStats.homeTeam.goalies; var keys = Object.keys(obj);
                for (i = 0; i < keys.length; i++) {
                  var val = obj[keys[i]]; homeG.push(val.playerId, val.sweaterNumber, val.name.default); playerIdArray.push(val.playerId, [[], [], []])
                  keyId = val.playerId; playerIdeObject[keyId] = []}
                var obj = data.playerByGameStats.awayTeam.forwards; var keys = Object.keys(obj);
                for (i = 0; i < keys.length; i++) {var val = obj[keys[i]]; awayF.push(val.playerId, val.sweaterNumber, val.name.default); playerIdArray.push(val.playerId, [[], [], []])
                  keyId = val.playerId; playerIdeObject[keyId] = []}
                var obj = data.playerByGameStats.awayTeam.defense; var keys = Object.keys(obj);
                for (i = 0; i < keys.length; i++) {var val = obj[keys[i]]; awayD.push(val.playerId, val.sweaterNumber, val.name.default); playerIdArray.push(val.playerId, [[], [], []]);
                  keyId = val.playerId; playerIdeObject[keyId] = []}
                var obj = data.playerByGameStats.awayTeam.goalies; var keys = Object.keys(obj);
                for (i = 0; i < keys.length; i++) {var val = obj[keys[i]]; awayG.push(val.playerId, val.sweaterNumber, val.name.default); playerIdArray.push(val.playerId, [[], [], []]);
                  keyId = val.playerId; playerIdeObject[keyId] = []}
                console.log(homeF, homeD, homeG, awayF, awayD, awayG, playerIdArray)

                var shiftsURL = 'https://cors-anywhere.herokuapp.com/https://api.nhle.com/stats/rest/en/shiftcharts?cayenneExp=gameId=' + gameId;
                fetch(shiftsURL, { "method": "GET", "headers": {} })
                  .then(function (response) {return response.json()})
                  .then(function (data_shifts) {
                    console.log('I am in second shift then', data_shifts);
                    for (i = 0; i < data_shifts.data.length; i++) {
                      if ((data_shifts.data[i].typeCode === 517) && (data_shifts.data[i].period < 4)) {playerOrder = playerIdArray.indexOf(data_shifts.data[i].playerId);
                        shiftStart = data_shifts.data[i].startTime; shiftStart1 = shiftStart.split(':'); minutes = Number(shiftStart1[0]);
                        seconds = Number(shiftStart1[1]); shiftStart2 = minutes * 60 + seconds;
                        shiftEnd = data_shifts.data[i].endTime; shiftEnd1 = shiftEnd.split(':'); minutes = Number(shiftEnd1[0]);
                        seconds = Number(shiftEnd1[1]); shiftEnd2 = minutes * 60 + seconds;
                        playerIdArray[playerOrder + 1][data_shifts.data[i].period - 1].push(shiftStart2, shiftEnd2)}}
                    for (i = 0; i < playerIdArray.length / 2; i++) {currentKey = playerIdArray[2 * i]; playerIdeObject[currentKey] = playerIdArray[2 * i + 1]}
                    console.log(playerIdArray, playerIdeObject);
                    console.log(Object.keys(playerIdeObject), Object.values(playerIdeObject));

                    dArray = [[], []];
                    for (i = 0; i < playerIdArray.length / 2; i++) {for (j = 0; j < homeD.length / 3; j++) { if (playerIdArray[2 * i] === homeD[3 * j]) { dArray[0].push(playerIdArray[2 * i + 1]) } }
                      for (j = 0; j < awayD.length / 3; j++) { if (playerIdArray[2 * i] === awayD[3 * j]) { dArray[1].push(playerIdArray[2 * i + 1]) }}}
                    dArray2 = [[],[]]; // dArray2 is not used yet but will be used later as I switch to object instead of array
                    for (i = 0; i < Object.keys(playerIdeObject).length; i++) {for (j = 0; j < homeD.length/3; j++){if (Object.keys(playerIdeObject)[i]==homeD[3*j]){//console.log(i, j, Object.keys(playerIdeObject)[i]);
                        dArray2[0].push(Object.values(playerIdeObject)[i])}}
                      for (j = 0; j < awayD.length/3; j++){if (Object.keys(playerIdeObject)[i]==awayD[3*j]){console.log(i, j, Object.keys(playerIdeObject)[i]);
                        dArray2[1].push(Object.values(playerIdeObject)[i])}}} 
                        
                        fArray = [[], []];
                    for (i = 0; i < playerIdArray.length / 2; i++) {for (j = 0; j < homeF.length / 3; j++) { if (playerIdArray[2 * i] === homeF[3 * j]) { fArray[0].push(playerIdArray[2 * i + 1]) } }
                      for (j = 0; j < awayF.length / 3; j++) { if (playerIdArray[2 * i] === awayF[3 * j]) { fArray[1].push(playerIdArray[2 * i + 1]) }}}
                    
                    console.log('dArray', dArray, 'dArray2', dArray2, 'fArray', fArray); pairingsArray = [[], [], [], [], [], []]; linesArray = [[], [], [], [], [], []];
                    
                    dArrayTemp = [[[],[],[]],[[],[],[]]]; fArrayTemp = [[[],[],[]],[[],[],[]]];
                    for (i = 0; i < 2; i++) { for (j = 0; j < dArray[i].length; j++) { for (k = 0; k < 3; k++) {dArrayTemp[i][k] = dArrayTemp[i][k].concat(dArray[i][j][k])}}}
                    for (i = 0; i < 2; i++) { for (j = 0; j < fArray[i].length; j++) { for (k = 0; k < 3; k++) {fArrayTemp[i][k] = fArrayTemp[i][k].concat(fArray[i][j][k])}}}
                    console.log(dArrayTemp, fArrayTemp);
                     // new attempt to create 5x5 loop
                     dArrayTemp2 = [[[],[],[]],[[],[],[]]]; dArrayTemp3 = [[[],[],[]],[[],[],[]]]; fArrayTemp2 = [[[],[],[]],[[],[],[]]]; fArrayTemp3 = [[[],[],[]],[[],[],[]]]; 
                     for (i = 0; i < 2; i++) {for (j = 0; j < 3; j++) {for (k = 0; k < 1200; k++) {dArrayTemp2[i][j].push(0); fArrayTemp2[i][j].push(0)}}}
                     for (i = 0; i < 2; i++) {for (j = 0; j < 3; j++) for (k = 0; k < dArrayTemp[i][j].length/2; k++) 
                   {for (l = dArrayTemp[i][j][2*k]; l < dArrayTemp[i][j][2*k + 1]; l++) {dArrayTemp2[i][j][l] = dArrayTemp2[i][j][l] + 1}}}
                   for (i = 0; i < 2; i++) {for (j = 0; j < 3; j++) for (k = 0; k < fArrayTemp[i][j].length/2; k++) 
                   {for (l = fArrayTemp[i][j][2*k]; l < fArrayTemp[i][j][2*k + 1]; l++) {fArrayTemp2[i][j][l] = fArrayTemp2[i][j][l] + 1}}}
                   
                   for (i = 0; i < 2; i++) {for (j = 0; j < 3; j++) {for (k = 0; k < 1200; k++) {if (dArrayTemp2[i][j][k+1] === dArrayTemp2[i][j][k]) {delete dArrayTemp2[i][j][k]}}}} 
                   for (i = 0; i < 2; i++) {for (j = 0; j < 3; j++) {for (k = 0; k < 1200; k++) {if (fArrayTemp2[i][j][k+1] === fArrayTemp2[i][j][k]) {delete fArrayTemp2[i][j][k]}}}} 
                 
                 for (i = 0; i < 2; i++) {for (j = 0; j < 3; j++) {for (k = 0; k < 1200; k++) {if (!dArrayTemp2[i][j][k]) {} else {dArrayTemp3[i][j].push(dArrayTemp2[i][j][k], k)}}}}
                 for (i = 0; i < 2; i++) {for (j = 0; j < 3; j++) {for (k = 0; k < 1200; k++) {if (!fArrayTemp2[i][j][k]) {} else {fArrayTemp3[i][j].push(fArrayTemp2[i][j][k], k)}}}}
                   console.log(dArrayTemp3, fArrayTemp3);
                   fiveOnFive = [[[],[],[]],[[],[],[]]]; fiveOnFive2 = [[[],[],[]],[[],[],[]]]; fiveOnFive3 = [[[],[],[]],[[],[],[]]]; fiveOnFive4 = [[[],[],[]],[[],[],[]]]; fiveOnFive5 = [[[],[],[]],[[],[],[]]]; 
                   // fiveOnFive2 and fiveOnFive4 are used for comparison only not for script should be deleted later
                   // fiveOnFive is when team played with 2D but fiveOnFive3 is when team played with 3F. Player is allowed up to 3 seconds to make a change. fiveOnFive5 is when team played with 2D and 3F
                   for (i = 0; i < 2; i++) {for (j = 0; j < 3; j++) { if (dArrayTemp3[i][j][0] === 2) {fiveOnFive[i][j].push(0, dArrayTemp3[i][j][1]); fiveOnFive2[i][j].push(0, dArrayTemp3[i][j][1])}
                     for (k = 1; k < dArrayTemp3[i][j].length/2; k++) {if (dArrayTemp3[i][j][2*k] === 2) {fiveOnFive[i][j].push(dArrayTemp3[i][j][2*k-1], dArrayTemp3[i][j][2*k+1]); fiveOnFive2[i][j].push(dArrayTemp3[i][j][2*k-1], dArrayTemp3[i][j][2*k+1])}}}}
                   for (i = 0; i < 2; i++) {for (j = 0; j < 3; j++) {for (k = fiveOnFive[i][j].length/2-1; k > 0; k--) {if (fiveOnFive[i][j][2*k]-fiveOnFive[i][j][2*k-1]<4) {tempArray1=fiveOnFive[i][j].slice(0,2*k-1); tempArray2=fiveOnFive[i][j].slice(2*k+1);
                     fiveOnFive[i][j]=tempArray1.concat(tempArray2)
                     // console.log(i, j, k, fiveOnFive[i][j][2*k], fiveOnFive[i][j][2*k-1], tempArray1, tempArray2);
                     }}}}
                     for (i = 0; i < 2; i++) {for (j = 0; j < 3; j++) { if (fArrayTemp3[i][j][0] === 3) {fiveOnFive3[i][j].push(0, fArrayTemp3[i][j][1]); fiveOnFive4[i][j].push(0, fArrayTemp3[i][j][1])}
                     for (k = 1; k < fArrayTemp3[i][j].length/2; k++) {if (fArrayTemp3[i][j][2*k] === 3) {fiveOnFive3[i][j].push(fArrayTemp3[i][j][2*k-1], fArrayTemp3[i][j][2*k+1]); fiveOnFive4[i][j].push(fArrayTemp3[i][j][2*k-1], fArrayTemp3[i][j][2*k+1])}}}}
                   for (i = 0; i < 2; i++) {for (j = 0; j < 3; j++) {for (k = fiveOnFive3[i][j].length/2-1; k > 0; k--) {if (fiveOnFive3[i][j][2*k]-fiveOnFive3[i][j][2*k-1]<4) { // console.log('160', fiveOnFive3[i][j][2*k], fiveOnFive3[i][j][2*k-1] )
                     tempArray1=fiveOnFive3[i][j].slice(0,2*k-1); tempArray2=fiveOnFive3[i][j].slice(2*k+1);
                     fiveOnFive3[i][j]=tempArray1.concat(tempArray2)
                     // console.log(i, j, k, fiveOnFive[i][j][2*k], fiveOnFive[i][j][2*k-1], tempArray1, tempArray2);
                     }}}}
                     for (i = 0; i < 2; i++) {for (j = 0; j < 3; j++) {for (k = 0; k < fiveOnFive[i][j].length/2; k++)  {for (l = 0; l < fiveOnFive3[i][j].length/2; l++) {
                       if ((fiveOnFive[i][j][2*k] >= fiveOnFive3[i][j][2*l])&&(fiveOnFive[i][j][2*k+1] <= fiveOnFive3[i][j][2*l+1])) {fiveOnFive5[i][j].push(fiveOnFive[i][j][2*k], fiveOnFive[i][j][2*k+1])}
                       else if ((fiveOnFive[i][j][2*k] <= fiveOnFive3[i][j][2*l])&&(fiveOnFive[i][j][2*k+1] >= fiveOnFive3[i][j][2*l+1])) {fiveOnFive5[i][j].push(fiveOnFive3[i][j][2*l], fiveOnFive3[i][j][2*l+1])}
                       else if ((fiveOnFive[i][j][2*k]>=fiveOnFive3[i][j][2*l])&&(fiveOnFive[i][j][2*k+1]>=fiveOnFive3[i][j][2*l+1])&&(fiveOnFive[i][j][2*k]<fiveOnFive3[i][j][2*l+1])) {fiveOnFive5[i][j].push(fiveOnFive[i][j][2*k], fiveOnFive3[i][j][2*l+1])}
                       else if ((fiveOnFive[i][j][2*k]<=fiveOnFive3[i][j][2*l])&&(fiveOnFive[i][j][2*k+1]<=fiveOnFive3[i][j][2*l+1])&&(fiveOnFive[i][j][2*k+1]>fiveOnFive3[i][j][2*l])) {fiveOnFive5[i][j].push(fiveOnFive3[i][j][2*l], fiveOnFive[i][j][2*k+1])}
                     }}}} 
                    console.log(fiveOnFive); console.log(fiveOnFive3); console.log(fiveOnFive5); 

                    for (h = 0; h < 2; h++) { // h = 0 home team D, h = 1 away team D 
                      for (i = 0; i < 3; i++) { for (j = 0; j < dArray[h].length; j++) { for (k = j + 1; k < dArray[h].length; k++) {tempTime = []; tempTime2 = []; for (l = 0; l < dArray[h][j][i].length / 2; l++) {
                              for (m = 0; m < dArray[h][k][i].length / 2; m++) { if ((dArray[h][k][i][2 * m] >= dArray[h][j][i][2 * l]) && (dArray[h][k][i][2 * m] <= dArray[h][j][i][2 * l + 1])) {
                                  if (dArray[h][k][i][2 * m + 1] >= dArray[h][j][i][2 * l + 1]) { tempTime.push(dArray[h][k][i][2 * m], dArray[h][j][i][2 * l + 1]) }
                                  else { tempTime.push(dArray[h][k][i][2 * m], dArray[h][k][i][2 * m + 1]) }}
                                  else if ((dArray[h][k][i][2 * m] <= dArray[h][j][i][2 * l]) && (dArray[h][k][i][2 * m + 1] >= dArray[h][j][i][2 * l])) {
                                  if (dArray[h][k][i][2 * m + 1] >= dArray[h][j][i][2 * l + 1]) { tempTime.push(dArray[h][j][i][2 * l], dArray[h][j][i][2 * l + 1]) }
                                  else {tempTime.push(dArray[h][j][i][2 * l], dArray[h][k][i][2 * m + 1])}
                                }}}   // end l, m loop
                                for (l = 0; l < fiveOnFive5[h][i].length/2; l++) { for (m = 0; m < tempTime.length/2; m++) {if ((tempTime[2*m]>=fiveOnFive5[h][i][2*l])&&(tempTime[2*m]<=fiveOnFive5[h][i][2*l+1])){
                                  if (tempTime[2*m+1] >= fiveOnFive5[h][i][2*l+1]) {tempTime2.push(fiveOnFive5[h][i][2*l+1]-tempTime[2*m])}
                                  else {tempTime2.push(tempTime[2*m+1]-tempTime[2*m])}
                                }
                                else if ((tempTime[2*m] <= fiveOnFive5[h][i][2*l])&&(tempTime[2*m+1] >= fiveOnFive5[h][i][2*l])) {
                                  if (tempTime[2*m+1] >= fiveOnFive5[h][i][2*l+1]) {tempTime2.push(fiveOnFive5[h][i][2*l+1]-fiveOnFive5[h][i][2*l])}
                                  else {tempTime2.push(tempTime[2*m+1] - fiveOnFive5[h][i][2*l])}
                                }}} // end second m,l loop to count only 5x5 plays
                            shifts = 0; const sum = tempTime2.reduce((partialSum, a) => partialSum + a, 0);
                            for (n = 0; n < tempTime2.length; n++) { if (tempTime2[n] >= 10) { shifts = shifts + 1 } }
                            pairingsArray[i + 3 * h].push(sum); pairingsArray[i + 3 * h].push(shifts); // console.log(h, i, j, k, tempTime, tempTime2);
                          }}}} // end k, j, i and h loop periods 
                    console.log(pairingsArray); tempTime2 = [];
                    
                     dArrayTemp2 = [[[],[],[]],[[],[],[]]]; dArrayTemp3 = [[[],[],[]],[[],[],[]]]; fArrayTemp2 = [[[],[],[]],[[],[],[]]]; fArrayTemp3 = [[[],[],[]],[[],[],[]]];
                // fiveOnFive2 and fiveOnFive4 are used for comparison only not for script should be deleted later

                    for (h = 0; h < 2; h++) {// h = 0 home team D, h = 1 away team D
                      for (i = 0; i < 3; i++) { for (j = 0; j < fArray[h].length; j++) { // i loop for 3 periods
                          for (k = j + 1; k < fArray[h].length; k++) {shiftsPair = []; for (l = 0; l < fArray[h][j][i].length / 2; l++) {
                              for (m = 0; m < fArray[h][k][i].length / 2; m++) { if ((fArray[h][k][i][2 * m] >= fArray[h][j][i][2 * l]) && (fArray[h][k][i][2 * m] <= fArray[h][j][i][2 * l + 1])) {
                                  if (fArray[h][k][i][2 * m + 1] >= fArray[h][j][i][2 * l + 1]) { shiftsPair.push(fArray[h][k][i][2 * m], fArray[h][j][i][2 * l + 1]) }
                                  else { shiftsPair.push(fArray[h][k][i][2 * m], fArray[h][k][i][2 * m + 1]) }}
                                else if ((fArray[h][k][i][2 * m] <= fArray[h][j][i][2 * l]) && (fArray[h][k][i][2 * m + 1] >= fArray[h][j][i][2 * l])) {
                                  if (fArray[h][k][i][2 * m + 1] >= fArray[h][j][i][2 * l + 1]) { shiftsPair.push(fArray[h][j][i][2 * l], fArray[h][j][i][2 * l + 1]) }
                                  else {shiftsPair.push(fArray[h][j][i][2 * l], fArray[h][k][i][2 * m + 1])}
                                }}}// end m, l loop
                                for (l = k + 1; l < fArray[h].length; l++) {tempTime = []; tempTime2 = [];// if (i === 0  && h === 0) { console.log(j, k, l, shiftsPair);}
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

                        console.log('shiftsPair', shiftsPair, 'linesArray', linesArray); linesArray2 = [[],[],[],[],[],[]]
                        // create linesArray2 this is an array of lines where line is defined as 3F which spent 100s in a period playing 3F and 2D
                        for (i = 0; i<linesArray[0].length/5; i++) {if (linesArray[0][5*i]>100) {console.log('home F', linesArray[0][5*i], linesArray[0][5*i+1], linesArray[0][5*i+2], linesArray[0][5*i+3], linesArray[0][5*i + 4]); 
                        for (j = 0; j < 3; j++) {linesArray2[0].push(linesArray[j][5*i], linesArray[j][5*i+1], linesArray[j][5*i+2], linesArray[j][5*i+3], linesArray[j][5*i+4]);
                        }
                        linesArray2[2].push(linesArray[0][5*i+2], linesArray[0][5*i+3], linesArray[0][5*i+4])}}
                        for (i = 0; i<linesArray[3].length/5; i++) {if (linesArray[3][5*i]>100) {console.log('away F', linesArray[3][5*i], linesArray[3][5*i+1], linesArray[3][5*i+2], linesArray[3][5*i+3], linesArray[3][5*i + 4]); 
                        for (j = 3; j < 6; j++) {linesArray2[1].push(linesArray[j][5*i], linesArray[j][5*i+1], linesArray[j][5*i+2], linesArray[j][5*i+3], linesArray[j][5*i+4])
                          }
                          linesArray2[3].push(linesArray[3][5*i+2], linesArray[3][5*i+3], linesArray[3][5*i+4])}}
                          console.log(linesArray2);

                    // adding home team defense to screen 
                    firstDNumber.innerHTML = homeD[1] + ' ' + homeD[2]; secondDNumber.innerHTML = homeD[4] + ' ' + homeD[5]; thirdDNumber.innerHTML = homeD[7] + ' ' + homeD[8];
                    firstD1.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X'; secondD2.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X'; thirdD3.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X'; forthD4.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X';
                    var firstD2 = document.createElement('p3'); var firstD3 = document.createElement('p2'); var firstD4 = document.createElement('p3'); var firstD5 = document.createElement('p2');
                    firstD2.innerHTML = pairingsArray[0][1] + ' sh ' + pairingsArray[0][0] + ' sec ' + '<br>' + pairingsArray[1][1] + ' sh ' + pairingsArray[1][0] + ' sec ' + '<br>' + pairingsArray[2][1] + ' sh ' + pairingsArray[2][0] + ' sec ';
                    firstD3.innerHTML = pairingsArray[0][3] + ' sh ' + pairingsArray[0][2] + ' sec ' + '<br>' + pairingsArray[1][3] + ' sh ' + pairingsArray[1][2] + ' sec ' + '<br>' + pairingsArray[2][3] + ' sh ' + pairingsArray[2][2] + ' sec ';
                    firstD4.innerHTML = pairingsArray[0][5] + ' sh ' + pairingsArray[0][4] + ' sec ' + '<br>' + pairingsArray[1][5] + ' sh ' + pairingsArray[1][4] + ' sec ' + '<br>' + pairingsArray[2][5] + ' sh ' + pairingsArray[2][4] + ' sec ';
                    firstD5.innerHTML = pairingsArray[0][7] + ' sh ' + pairingsArray[0][6] + ' sec ' + '<br>' + pairingsArray[1][7] + ' sh ' + pairingsArray[1][6] + ' sec ' + '<br>' + pairingsArray[2][7] + ' sh ' + pairingsArray[2][6] + ' sec ';
                    document.getElementById('firstD2').appendChild(firstD2); document.getElementById('firstD3').appendChild(firstD3); document.getElementById('firstD4').appendChild(firstD4); document.getElementById('firstD5').appendChild(firstD5);
                    secondD1.innerHTML = pairingsArray[0][1] + ' sh ' + pairingsArray[0][0] + ' sec ' + '<br>' + pairingsArray[1][1] + ' sh ' + pairingsArray[1][0] + ' sec ' + '<br>' + pairingsArray[2][1] + ' sh ' + pairingsArray[2][0] + ' sec ';
                    var secondD3 = document.createElement('p3'); var secondD4 = document.createElement('p2'); var secondD5 = document.createElement('p3');
                    secondD3.innerHTML = pairingsArray[0][2 * homeD.length / 3 - 1] + ' sh ' + pairingsArray[0][2 * homeD.length / 3 - 2] + ' sec ' + '<br>' + pairingsArray[1][2 * homeD.length / 3 - 1] + ' sh ' + pairingsArray[1][2 * homeD.length / 3 - 2] + ' sec ' + '<br>' + pairingsArray[2][2 * homeD.length / 3 - 1] + ' sh ' + pairingsArray[2][2 * homeD.length / 3 - 2] + ' sec ';
                    secondD4.innerHTML = pairingsArray[0][2 * homeD.length / 3 + 1] + ' sh ' + pairingsArray[0][2 * homeD.length / 3] + ' sec ' + '<br>' + pairingsArray[1][2 * homeD.length / 3 + 1] + ' sh ' + pairingsArray[1][2 * homeD.length / 3] + ' sec ' + '<br>' + pairingsArray[2][2 * homeD.length / 3 + 1] + ' sh ' + pairingsArray[2][2 * homeD.length / 3] + ' sec ';
                    secondD5.innerHTML = pairingsArray[0][2 * homeD.length / 3 + 3] + ' sh ' + pairingsArray[0][2 * homeD.length / 3 + 2] + ' sec ' + '<br>' + pairingsArray[1][2 * homeD.length / 3 + 3] + ' sh ' + pairingsArray[1][2 * homeD.length / 3 + 2] + ' sec ' + '<br>' + pairingsArray[2][2 * homeD.length / 3 + 3] + ' sh ' + pairingsArray[2][2 * homeD.length / 3 + 2] + ' sec ';
                    thirdD1.innerHTML = pairingsArray[0][3] + ' sh ' + pairingsArray[0][2] + ' sec ' + '<br>' + pairingsArray[1][3] + ' sh ' + pairingsArray[1][2] + ' sec ' + '<br>' + pairingsArray[2][3] + ' sh ' + pairingsArray[2][2] + ' sec ';
                    thirdD2.innerHTML = secondD3.innerHTML; var thirdD4 = document.createElement('p3'); var thirdD5 = document.createElement('p2');
                    thirdD4.innerHTML = pairingsArray[0][4 * homeD.length / 3 - 5] + ' sh ' + pairingsArray[0][4 * homeD.length / 3 - 6] + ' sec ' + '<br>' + pairingsArray[1][4 * homeD.length / 3 - 5] + ' sh ' + pairingsArray[1][4 * homeD.length / 3 - 6] + ' sec ' + '<br>' + pairingsArray[2][4 * homeD.length / 3 - 5] + ' sh ' + pairingsArray[2][4 * homeD.length / 3 - 6] + ' sec ';
                    thirdD5.innerHTML = pairingsArray[0][4 * homeD.length / 3 - 3] + ' sh ' + pairingsArray[0][4 * homeD.length / 3 - 4] + ' sec ' + '<br>' + pairingsArray[1][4 * homeD.length / 3 - 3] + ' sh ' + pairingsArray[1][4 * homeD.length / 3 - 4] + ' sec ' + '<br>' + pairingsArray[2][4 * homeD.length / 3 - 3] + ' sh ' + pairingsArray[2][4 * homeD.length / 3 - 4] + ' sec ';
                    forthDNumber.innerHTML = homeD[10] + ' ' + homeD[11]; forthD2.innerHTML = secondD4.innerHTML; forthD3.innerHTML = thirdD4.innerHTML; forthD1.innerHTML = firstD4.innerHTML; var forthD5 = document.createElement('p3');
                    forthD5.innerHTML = pairingsArray[0][6 * homeD.length / 3 - 11] + ' sh ' + pairingsArray[0][6 * homeD.length / 3 - 12] + ' sec ' + '<br>' + pairingsArray[1][6 * homeD.length / 3 - 11] + ' sh ' + pairingsArray[1][6 * homeD.length / 3 - 12] + ' sec ' + '<br>' + pairingsArray[2][6 * homeD.length / 3 - 11] + ' sh ' + pairingsArray[2][6 * homeD.length / 3 - 12] + ' sec ';
                    fifthDNumber.innerHTML = homeD[13] + ' ' + homeD[14];
                    fifthD1.innerHTML = firstD5.innerHTML; fifthD2.innerHTML = secondD5.innerHTML; fifthD3.innerHTML = thirdD5.innerHTML; fifthD4.innerHTML = forthD5.innerHTML; fifthD5.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X';
                    document.getElementById('secondD3').appendChild(secondD3); document.getElementById('secondD4').appendChild(secondD4); document.getElementById('secondD5').appendChild(secondD5); document.getElementById('thirdD4').appendChild(thirdD4);
                    document.getElementById('thirdD5').appendChild(thirdD5); document.getElementById('forthD5').appendChild(forthD5);

                    if (homeD.length >= 18) { 
                      var firstD6 = document.createElement('p3'); var secondD6 = document.createElement('p2'); var thirdD6 = document.createElement('p3'); var forthD6 = document.createElement('p2'); var fifthD6 = document.createElement('p3');
                      sixthD6.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X'; sixthDNumber.innerHTML = homeD[16] + ' ' + homeD[17];
                      firstD6.innerHTML = pairingsArray[0][9] + ' sh ' + pairingsArray[0][8] + ' sec ' + '<br>' + pairingsArray[1][9] + ' sh ' + pairingsArray[1][8] + ' sec ' + '<br>' + pairingsArray[2][9] + ' sh ' + pairingsArray[2][8] + ' sec ';
                      secondD6.innerHTML = pairingsArray[0][2 * homeD.length / 3 + 5] + ' sh ' + pairingsArray[0][2 * homeD.length / 3 + 4] + ' sec ' + '<br>' + pairingsArray[1][2 * homeD.length / 3 + 5] + ' sh ' + pairingsArray[1][2 * homeD.length / 3 + 4] + ' sec ' + '<br>' + pairingsArray[2][2 * homeD.length / 3 + 5] + ' sh ' + pairingsArray[2][2 * homeD.length / 3 + 4] + ' sec ';
                      thirdD6.innerHTML = pairingsArray[0][4 * homeD.length / 3 - 1] + ' sh ' + pairingsArray[0][4 * homeD.length / 3 - 2] + ' sec ' + '<br>' + pairingsArray[1][4 * homeD.length / 3 - 1] + ' sh ' + pairingsArray[1][4 * homeD.length / 3 - 2] + ' sec ' + '<br>' + pairingsArray[2][4 * homeD.length / 3 - 1] + ' sh ' + pairingsArray[2][4 * homeD.length / 3 - 2] + ' sec ';
                      forthD6.innerHTML = pairingsArray[0][6 * homeD.length / 3 - 9] + ' sh ' + pairingsArray[0][6 * homeD.length / 3 - 10] + ' sec ' + '<br>' + pairingsArray[1][6 * homeD.length / 3 - 9] + ' sh ' + pairingsArray[1][6 * homeD.length / 3 - 10] + ' sec ' + '<br>' + pairingsArray[2][6 * homeD.length / 3 - 9] + ' sh ' + pairingsArray[2][6 * homeD.length / 3 - 10] + ' sec ';
                      fifthD6.innerHTML = pairingsArray[0][8 * homeD.length / 3 - 19] + ' sh ' + pairingsArray[0][8 * homeD.length / 3 - 20] + ' sec ' + '<br>' + pairingsArray[1][8 * homeD.length / 3 - 19] + ' sh ' + pairingsArray[1][8 * homeD.length / 3 - 20] + ' sec ' + '<br>' + pairingsArray[2][8 * homeD.length / 3 - 19] + ' sh ' + pairingsArray[2][8 * homeD.length / 3 - 20] + ' sec ';
                      sixthD1.innerHTML = firstD6.innerHTML; sixthD2.innerHTML = secondD6.innerHTML; sixthD3.innerHTML = thirdD6.innerHTML; sixthD4.innerHTML = forthD6.innerHTML; sixthD5.innerHTML = fifthD6.innerHTML;
                      document.getElementById('firstD6').appendChild(firstD6); document.getElementById('secondD6').appendChild(secondD6); document.getElementById('thirdD6').appendChild(thirdD6); document.getElementById('forthD6').appendChild(forthD6); document.getElementById('fifthD6').appendChild(fifthD6);
                    } // end if six D men 

                    if (homeD.length == 21) {
                      var firstD7 = document.createElement('p2'); var secondD7 = document.createElement('p3'); var thirdD7 = document.createElement('p2'); var forthD7 = document.createElement('p3'); var fifthD7 = document.createElement('p2'); var sixthD7 = document.createElement('p3');
                      seventhD7.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X'; seventhDNumber.innerHTML = homeD[19] + ' ' + homeD[20];
                      firstD7.innerHTML = pairingsArray[0][11] + ' sh ' + pairingsArray[0][10] + ' sec ' + '<br>' + pairingsArray[1][11] + ' sh ' + pairingsArray[1][10] + ' sec ' + '<br>' + pairingsArray[2][9] + ' sh ' + pairingsArray[2][8] + ' sec ';
                      secondD7.innerHTML = pairingsArray[0][21] + ' sh ' + pairingsArray[0][20] + ' sec ' + '<br>' + pairingsArray[1][21] + ' sh ' + pairingsArray[1][20] + ' sec ' + '<br>' + pairingsArray[2][21] + ' sh ' + pairingsArray[2][20] + ' sec ';
                      thirdD7.innerHTML = pairingsArray[0][29] + ' sh ' + pairingsArray[0][28] + ' sec ' + '<br>' + pairingsArray[1][29] + ' sh ' + pairingsArray[1][28] + ' sec ' + '<br>' + pairingsArray[2][29] + ' sh ' + pairingsArray[2][28] + ' sec ';
                      forthD7.innerHTML = pairingsArray[0][35] + ' sh ' + pairingsArray[0][34] + ' sec ' + '<br>' + pairingsArray[1][35] + ' sh ' + pairingsArray[1][34] + ' sec ' + '<br>' + pairingsArray[2][35] + ' sh ' + pairingsArray[2][34] + ' sec ';
                      fifthD7.innerHTML = pairingsArray[0][39] + ' sh ' + pairingsArray[0][38] + ' sec ' + '<br>' + pairingsArray[1][39] + ' sh ' + pairingsArray[1][38] + ' sec ' + '<br>' + pairingsArray[2][39] + ' sh ' + pairingsArray[2][38] + ' sec ';
                      sixthD7.innerHTML = pairingsArray[0][41] + ' sh ' + pairingsArray[0][40] + ' sec ' + '<br>' + pairingsArray[1][41] + ' sh ' + pairingsArray[1][40] + ' sec ' + '<br>' + pairingsArray[2][41] + ' sh ' + pairingsArray[2][40] + ' sec ';
                      seventhD1.innerHTML = firstD7.innerHTML; seventhD2.innerHTML = secondD7.innerHTML; seventhD3.innerHTML = thirdD7.innerHTML; seventhD4.innerHTML = forthD7.innerHTML; seventhD5.innerHTML = fifthD7.innerHTML; seventhD6.innerHTML = sixthD7.innerHTML;
                      document.getElementById('firstD7').appendChild(firstD7); document.getElementById('secondD7').appendChild(secondD7); document.getElementById('thirdD7').appendChild(thirdD7); document.getElementById('forthD7').appendChild(forthD7); document.getElementById('fifthD7').appendChild(fifthD7); document.getElementById('sixthD7').appendChild(sixthD7);
                    } // end if seven D men

                    // adding away team defense to screen
                    firstDNumberA.innerHTML = awayD[1] + ' ' + awayD[2]; secondDNumberA.innerHTML = awayD[4] + ' ' + awayD[5]; thirdDNumberA.innerHTML = awayD[7] + ' ' + awayD[8];
                    firstD1A.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X'; secondD2A.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X'; thirdD3A.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X'; forthD4A.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X';
                    var firstD2A = document.createElement('p3'); var firstD3A = document.createElement('p2'); var firstD4A = document.createElement('p3'); var firstD5A = document.createElement('p2');
                    firstD2A.innerHTML = pairingsArray[3][1] + ' sh ' + pairingsArray[3][0] + ' sec ' + '<br>' + pairingsArray[4][1] + ' sh ' + pairingsArray[4][0] + ' sec ' + '<br>' + pairingsArray[5][1] + ' sh ' + pairingsArray[5][0] + ' sec ';
                    firstD3A.innerHTML = pairingsArray[3][3] + ' sh ' + pairingsArray[3][2] + ' sec ' + '<br>' + pairingsArray[4][3] + ' sh ' + pairingsArray[4][2] + ' sec ' + '<br>' + pairingsArray[5][3] + ' sh ' + pairingsArray[5][2] + ' sec ';
                    firstD4A.innerHTML = pairingsArray[3][5] + ' sh ' + pairingsArray[3][4] + ' sec ' + '<br>' + pairingsArray[4][5] + ' sh ' + pairingsArray[4][4] + ' sec ' + '<br>' + pairingsArray[5][5] + ' sh ' + pairingsArray[5][4] + ' sec ';
                    firstD5A.innerHTML = pairingsArray[3][7] + ' sh ' + pairingsArray[3][6] + ' sec ' + '<br>' + pairingsArray[4][7] + ' sh ' + pairingsArray[4][6] + ' sec ' + '<br>' + pairingsArray[5][7] + ' sh ' + pairingsArray[5][6] + ' sec ';
                    document.getElementById('firstD2A').appendChild(firstD2A); document.getElementById('firstD3A').appendChild(firstD3A); document.getElementById('firstD4A').appendChild(firstD4A); document.getElementById('firstD5A').appendChild(firstD5A);
                    secondD1A.innerHTML = firstD2A.innerHTML;
                    var secondD3A = document.createElement('p3'); var secondD4A = document.createElement('p2'); var secondD5A = document.createElement('p3');
                    secondD3A.innerHTML = pairingsArray[3][2 * awayD.length / 3 - 1] + ' sh ' + pairingsArray[3][2 * awayD.length / 3 - 2] + ' sec ' + '<br>' + pairingsArray[4][2 * awayD.length / 3 - 1] + ' sh ' + pairingsArray[4][2 * awayD.length / 3 - 2] + ' sec ' + '<br>' + pairingsArray[5][2 * awayD.length / 3 - 1] + ' sh ' + pairingsArray[5][2 * awayD.length / 3 - 2] + ' sec ';
                    secondD4A.innerHTML = pairingsArray[3][2 * awayD.length / 3 + 1] + ' sh ' + pairingsArray[3][2 * awayD.length / 3] + ' sec ' + '<br>' + pairingsArray[4][2 * awayD.length / 3 + 1] + ' sh ' + pairingsArray[4][2 * awayD.length / 3] + ' sec ' + '<br>' + pairingsArray[5][2 * awayD.length / 3 + 1] + ' sh ' + pairingsArray[5][2 * awayD.length / 3] + ' sec ';
                    secondD5A.innerHTML = pairingsArray[3][2 * awayD.length / 3 + 3] + ' sh ' + pairingsArray[3][2 * awayD.length / 3 + 2] + ' sec ' + '<br>' + pairingsArray[4][2 * awayD.length / 3 + 3] + ' sh ' + pairingsArray[4][2 * awayD.length / 3 + 2] + ' sec ' + '<br>' + pairingsArray[5][2 * awayD.length / 3 + 3] + ' sh ' + pairingsArray[5][2 * awayD.length / 3 + 2] + ' sec ';
                    thirdD1A.innerHTML = firstD3A.innerHTML; thirdD2A.innerHTML = secondD3A.innerHTML; var thirdD4A = document.createElement('p3'); var thirdD5A = document.createElement('p2');
                    thirdD4A.innerHTML = pairingsArray[3][4 * awayD.length / 3 - 5] + ' sh ' + pairingsArray[3][4 * awayD.length / 3 - 6] + ' sec ' + '<br>' + pairingsArray[4][4 * awayD.length / 3 - 5] + ' sh ' + pairingsArray[4][4 * awayD.length / 3 - 6] + ' sec ' + '<br>' + pairingsArray[5][4 * awayD.length / 3 - 5] + ' sh ' + pairingsArray[5][4 * awayD.length / 3 - 6] + ' sec ';
                    thirdD5A.innerHTML = pairingsArray[3][4 * awayD.length / 3 - 3] + ' sh ' + pairingsArray[3][4 * awayD.length / 3 - 4] + ' sec ' + '<br>' + pairingsArray[4][4 * awayD.length / 3 - 3] + ' sh ' + pairingsArray[4][4 * awayD.length / 3 - 4] + ' sec ' + '<br>' + pairingsArray[5][4 * awayD.length / 3 - 3] + ' sh ' + pairingsArray[5][4 * awayD.length / 3 - 4] + ' sec ';
                    forthDNumberA.innerHTML = awayD[10] + ' ' + awayD[11]; forthD2A.innerHTML = secondD4A.innerHTML; forthD3A.innerHTML = thirdD4A.innerHTML; forthD1A.innerHTML = firstD4A.innerHTML; var forthD5A = document.createElement('p3');
                    forthD5A.innerHTML = pairingsArray[3][6 * awayD.length / 3 - 11] + ' sh ' + pairingsArray[3][6 * awayD.length / 3 - 12] + ' sec ' + '<br>' + pairingsArray[4][6 * awayD.length / 3 - 11] + ' sh ' + pairingsArray[4][6 * awayD.length / 3 - 12] + ' sec ' + '<br>' + pairingsArray[5][6 * awayD.length / 3 - 11] + ' sh ' + pairingsArray[5][6 * awayD.length / 3 - 12] + ' sec ';
                    fifthDNumberA.innerHTML = awayD[13] + ' ' + awayD[14];
                    fifthD1A.innerHTML = firstD5A.innerHTML; fifthD2A.innerHTML = secondD5A.innerHTML; fifthD3A.innerHTML = thirdD5A.innerHTML; fifthD4A.innerHTML = forthD5A.innerHTML; fifthD5A.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X';
                    document.getElementById('secondD3A').appendChild(secondD3A); document.getElementById('secondD4A').appendChild(secondD4A); document.getElementById('secondD5A').appendChild(secondD5A); document.getElementById('thirdD4A').appendChild(thirdD4A);
                    document.getElementById('thirdD5A').appendChild(thirdD5A); document.getElementById('forthD5A').appendChild(forthD5A);

                    if (awayD.length >= 18) {
                      var firstD6A = document.createElement('p3'); var secondD6A = document.createElement('p2'); var thirdD6A = document.createElement('p3'); var forthD6A = document.createElement('p2'); var fifthD6A = document.createElement('p3');
                      sixthD6A.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X'; sixthDNumberA.innerHTML = awayD[16] + ' ' + awayD[17];
                      firstD6A.innerHTML = pairingsArray[3][9] + ' sh ' + pairingsArray[3][8] + ' sec ' + '<br>' + pairingsArray[4][9] + ' sh ' + pairingsArray[4][8] + ' sec ' + '<br>' + pairingsArray[5][9] + ' sh ' + pairingsArray[5][8] + ' sec ';
                      secondD6A.innerHTML = pairingsArray[3][2 * awayD.length / 3 + 5] + ' sh ' + pairingsArray[3][2 * awayD.length / 3 + 4] + ' sec ' + '<br>' + pairingsArray[4][2 * awayD.length / 3 + 5] + ' sh ' + pairingsArray[4][2 * awayD.length / 3 + 4] + ' sec ' + '<br>' + pairingsArray[5][2 * awayD.length / 3 + 5] + ' sh ' + pairingsArray[5][2 * awayD.length / 3 + 4] + ' sec ';
                      thirdD6A.innerHTML = pairingsArray[3][4 * awayD.length / 3 - 1] + ' sh ' + pairingsArray[3][4 * awayD.length / 3 - 2] + ' sec ' + '<br>' + pairingsArray[4][4 * awayD.length / 3 - 1] + ' sh ' + pairingsArray[4][4 * awayD.length / 3 - 2] + ' sec ' + '<br>' + pairingsArray[5][4 * awayD.length / 3 - 1] + ' sh ' + pairingsArray[5][4 * awayD.length / 3 - 2] + ' sec ';
                      forthD6A.innerHTML = pairingsArray[3][6 * awayD.length / 3 - 9] + ' sh ' + pairingsArray[3][6 * awayD.length / 3 - 10] + ' sec ' + '<br>' + pairingsArray[4][6 * awayD.length / 3 - 9] + ' sh ' + pairingsArray[4][6 * awayD.length / 3 - 10] + ' sec ' + '<br>' + pairingsArray[5][6 * awayD.length / 3 - 9] + ' sh ' + pairingsArray[5][6 * awayD.length / 3 - 10] + ' sec ';
                      fifthD6A.innerHTML = pairingsArray[3][8 * awayD.length / 3 - 19] + ' sh ' + pairingsArray[3][8 * awayD.length / 3 - 20] + ' sec ' + '<br>' + pairingsArray[4][8 * awayD.length / 3 - 19] + ' sh ' + pairingsArray[4][8 * awayD.length / 3 - 20] + ' sec ' + '<br>' + pairingsArray[5][8 * awayD.length / 3 - 19] + ' sh ' + pairingsArray[5][8 * awayD.length / 3 - 20] + ' sec ';
                      sixthD1A.innerHTML = firstD6A.innerHTML; sixthD2A.innerHTML = secondD6A.innerHTML; sixthD3A.innerHTML = thirdD6A.innerHTML; sixthD4A.innerHTML = forthD6A.innerHTML; sixthD5A.innerHTML = fifthD6A.innerHTML;
                      document.getElementById('firstD6A').appendChild(firstD6A); document.getElementById('secondD6A').appendChild(secondD6A); document.getElementById('thirdD6A').appendChild(thirdD6A); document.getElementById('forthD6A').appendChild(forthD6A); document.getElementById('fifthD6A').appendChild(fifthD6A);
                    } // end if six D men away 

                    if (awayD.length == 21) {
                      var firstD7A = document.createElement('p2'); var secondD7A = document.createElement('p3'); var thirdD7A = document.createElement('p2'); var forthD7A = document.createElement('p3'); var fifthD7A = document.createElement('p2'); var sixthD7A = document.createElement('p3');
                      seventhD7A.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X'; seventhDNumberA.innerHTML = awayD[19] + ' ' + awayD[20];
                      firstD7A.innerHTML = pairingsArray[3][11] + ' sh ' + pairingsArray[3][10] + ' sec ' + '<br>' + pairingsArray[4][11] + ' sh ' + pairingsArray[4][10] + ' sec ' + '<br>' + pairingsArray[5][9] + ' sh ' + pairingsArray[5][8] + ' sec ';
                      secondD7A.innerHTML = pairingsArray[3][21] + ' sh ' + pairingsArray[3][20] + ' sec ' + '<br>' + pairingsArray[4][21] + ' sh ' + pairingsArray[4][20] + ' sec ' + '<br>' + pairingsArray[5][21] + ' sh ' + pairingsArray[5][20] + ' sec ';
                      thirdD7A.innerHTML = pairingsArray[3][29] + ' sh ' + pairingsArray[3][28] + ' sec ' + '<br>' + pairingsArray[4][29] + ' sh ' + pairingsArray[4][28] + ' sec ' + '<br>' + pairingsArray[5][29] + ' sh ' + pairingsArray[5][28] + ' sec ';
                      forthD7A.innerHTML = pairingsArray[3][35] + ' sh ' + pairingsArray[3][34] + ' sec ' + '<br>' + pairingsArray[4][35] + ' sh ' + pairingsArray[4][34] + ' sec ' + '<br>' + pairingsArray[5][35] + ' sh ' + pairingsArray[5][34] + ' sec ';
                      fifthD7A.innerHTML = pairingsArray[3][39] + ' sh ' + pairingsArray[3][38] + ' sec ' + '<br>' + pairingsArray[4][39] + ' sh ' + pairingsArray[4][38] + ' sec ' + '<br>' + pairingsArray[5][39] + ' sh ' + pairingsArray[5][38] + ' sec ';
                      sixthD7A.innerHTML = pairingsArray[3][41] + ' sh ' + pairingsArray[3][40] + ' sec ' + '<br>' + pairingsArray[4][41] + ' sh ' + pairingsArray[4][40] + ' sec ' + '<br>' + pairingsArray[5][41] + ' sh ' + pairingsArray[5][40] + ' sec ';
                      seventhD1A.innerHTML = firstD7A.innerHTML; seventhD2A.innerHTML = secondD7A.innerHTML; seventhD3A.innerHTML = thirdD7A.innerHTML; seventhD4A.innerHTML = forthD7A.innerHTML; seventhD5A.innerHTML = fifthD7A.innerHTML; seventhD6A.innerHTML = sixthD7A.innerHTML;
                      document.getElementById('firstD7A').appendChild(firstD7A); document.getElementById('secondD7A').appendChild(secondD7A); document.getElementById('thirdD7A').appendChild(thirdD7A); document.getElementById('forthD7A').appendChild(forthD7A); document.getElementById('fifthD7A').appendChild(fifthD7A); document.getElementById('sixthD7A').appendChild(sixthD7A);
                    } // end if seven D men away and end of adding DMen to display cycles
                    
                    for (i = 0; i < homeF.length/3; i++) {if (linesArray2[2].includes(i)) {} else linesArray2[4].push(i)}                                     
                    for (i = 0; i < awayF.length/3; i++) {if (linesArray2[3].includes(i)) {} else linesArray2[5].push(i)}
 
                    finalLineup =[[],[],[],[]]; tempArray3 = [homeF.length/3, awayF.length/3]; linesArray4 = [[],[]];
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
          for (j=0; j<tempArray3[i-2]; j++) {if (finalLineup[i].includes(j)){} else finalLineup[i].push(j)}
          } // end if loop 2 lines
          else if (finalLineup[i].length===3) {console.log('One line', finalLineup); linesArray5 = [[],[]]; linesArray6 = [[],[]]; for (j=3*(i-2);j<3+3*(i-2);j++) {
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

                    function lineNumber(h,i,j,k) {topFLimit = (1-h)*(homeF.length)/3 + h*(awayF.length)/3; // h may be 0 or 1 only!
                    if (topFLimit===12) {firstPart=[0,55,100,136,164,185,200,210,216,219]}
                    else if (topFLimit===11) {firstPart=[0,45,81,109,130,145,155,161,164]}
                    secondPart = (topFLimit-1-i)*(j-1-i); sum=0;
                    for (l=0;l<j-i;l++) {sum=sum+l}
                      return firstPart[i] + secondPart - sum + k-1-j} // end function lineNumber
                    console.log(tempArray3[0], tempArray3[1]) // line to be deleted later 
                    console.log('final lineup', finalLineup);

                  //   function lineByLine(h) {
                  //     for (i=0;i<3;i++){ //3 periods
                  //     for (j=0;j<finalLineup[1-h].length/3;j++) { //opposite team lines
                  //       //for (k=0;k<finalLineup[1-h].length/3;k++) {for (l=0;l<fArray[h][i][finalLineup[h][j]];l++){
                  //     // for (m=0;m<fArray[1-h][i][finalLineup[1-h][k]];m++)
                  //     // {
                        
                  //       console.log('new function', h)
                  //      // 
                  //     }
                  //   // }
                  //   // }}}
                  // }}

                    function lineByLine(h) {for (i=0; i<3; i++){ shiftsLine =[];
                      for (j=0;j<fArray[3-h].length;j++){ for (k=0;k<fArray[h][finalLineup].length;k++){}
                      return finalLineup[3-h][1]
                      }}
                    }
                   
                    headerHome.innerHTML = 'Players'; headerHome2.innerHTML = 'TOI sec'; headerHome3.innerHTML = 'shifts';
                    firstLine.innerHTML=homeF[1+3*finalLineup[2][0]]+' '+homeF[2+3*finalLineup[2][0]]+'<br>'+homeF[1+3*finalLineup[2][1]]+' '+homeF[2+3*finalLineup[2][1]]+'<br>'+homeF[1+3*finalLineup[2][2]]+' '+homeF[2+3*finalLineup[2][2]];
                    console.log(finalLineup[2][0],finalLineup[2][1],finalLineup[2][2],lineNumber(0,finalLineup[2][0],finalLineup[2][1],finalLineup[2][2]),finalLineup[2][3],finalLineup[2][4],finalLineup[2][5],lineNumber(0,finalLineup[2][3],finalLineup[2][4],finalLineup[2][5]),finalLineup[2][6],finalLineup[2][7],finalLineup[2][8],lineNumber(0,finalLineup[2][6],finalLineup[2][7],finalLineup[2][8]));
                    console.log(finalLineup[3][0],finalLineup[3][1],finalLineup[3][2],lineNumber(1,finalLineup[3][0],finalLineup[3][1],finalLineup[3][2]),finalLineup[3][3],finalLineup[3][4],finalLineup[3][5],lineNumber(1,finalLineup[3][3],finalLineup[3][4],finalLineup[3][5]),finalLineup[3][6],finalLineup[3][7],finalLineup[3][8],lineNumber(1,finalLineup[3][6],finalLineup[3][7],finalLineup[3][8]));
                    firstLineTime.innerHTML=linesArray[0][5*lineNumber(0,finalLineup[2][0],finalLineup[2][1],finalLineup[2][2])]+'<br>'+linesArray[1][5*lineNumber(0,finalLineup[2][0],finalLineup[2][1],finalLineup[2][2])]+'<br>'+linesArray[2][5*lineNumber(0,finalLineup[2][0],finalLineup[2][1],finalLineup[2][2])];
                    firstLineTime2.innerHTML=linesArray[0][1+5*lineNumber(0,finalLineup[2][0],finalLineup[2][1],finalLineup[2][2])]+'<br>'+linesArray[1][1+5*lineNumber(0,finalLineup[2][0],finalLineup[2][1],finalLineup[2][2])]+'<br>'+linesArray[2][1+5*lineNumber(0,finalLineup[2][0],finalLineup[2][1],finalLineup[2][2])];
                    var firstF1 = document.createElement('p2'); var firstF2 = document.createElement('p2'); var firstF3 = document.createElement('p2'); var firstF4 = document.createElement('p2');
                    firstF1.innerHTML = lineByLine(0); firstF2.innerHTML = lineByLine(1); firstF3.innerHTML = 'TBD3'; firstF4.innerHTML = 'TBD4';
                    document.getElementById('firstLineTime2').appendChild(firstF1); document.getElementById('firstLineTime2').appendChild(firstF2); document.getElementById('firstLineTime2').appendChild(firstF3); document.getElementById('firstLineTime2').appendChild(firstF4);
                    secondLine.innerHTML=homeF[1+3*finalLineup[2][3]]+' '+homeF[2+3*finalLineup[2][3]]+'<br>'+homeF[1+3*finalLineup[2][4]]+' '+homeF[2+3*finalLineup[2][4]]+'<br>'+homeF[1+3*finalLineup[2][5]]+' '+homeF[2+3*finalLineup[2][5]];
                    secondLineTime.innerHTML=linesArray[0][5*lineNumber(0,finalLineup[2][3],finalLineup[2][4],finalLineup[2][5])]+'<br>'+linesArray[1][5*lineNumber(0,finalLineup[2][3],finalLineup[2][4],finalLineup[2][5])]+'<br>'+linesArray[2][5*lineNumber(0,finalLineup[2][3],finalLineup[2][4],finalLineup[2][5])];
                    secondLineTime2.innerHTML=linesArray[0][1+5*lineNumber(0,finalLineup[2][3],finalLineup[2][4],finalLineup[2][5])]+'<br>'+linesArray[1][1+5*lineNumber(0,finalLineup[2][3],finalLineup[2][4],finalLineup[2][5])]+'<br>'+linesArray[2][1+5*lineNumber(0,finalLineup[2][3],finalLineup[2][4],finalLineup[2][5])];
                    var secondF1 = document.createElement('p2'); var secondF2 = document.createElement('p2'); var secondF3 = document.createElement('p2'); var secondF4 = document.createElement('p2');
                    secondF1.innerHTML = 'TBD21'; secondF2.innerHTML = 'TBD22'; secondF3.innerHTML = 'TBD2'; secondF4.innerHTML = 'TBD24';
                    document.getElementById('secondLineTime2').appendChild(secondF1); document.getElementById('secondLineTime2').appendChild(secondF2); document.getElementById('secondLineTime2').appendChild(secondF3); document.getElementById('secondLineTime2').appendChild(secondF4);
                    thirdLine.innerHTML=homeF[1+3*finalLineup[2][6]]+' '+homeF[2+3*finalLineup[2][6]]+'<br>'+homeF[1+3*finalLineup[2][7]]+' '+homeF[2+3*finalLineup[2][7]]+'<br>'+homeF[1+3*finalLineup[2][8]]+' '+homeF[2+3*finalLineup[2][8]];
                      thirdLineTime.innerHTML=linesArray[0][5*lineNumber(0,finalLineup[2][6],finalLineup[2][7],finalLineup[2][8])]+'<br>'+linesArray[1][5*lineNumber(0,finalLineup[2][6],finalLineup[2][7],finalLineup[2][8])]+'<br>'+linesArray[2][5*lineNumber(0,finalLineup[2][6],finalLineup[2][7],finalLineup[2][8])];
                      thirdLineTime2.innerHTML=linesArray[0][1+5*lineNumber(0,finalLineup[2][6],finalLineup[2][7],finalLineup[2][8])]+'<br>'+linesArray[1][1+5*lineNumber(0,finalLineup[2][6],finalLineup[2][7],finalLineup[2][8])]+'<br>'+linesArray[2][1+5*lineNumber(0,finalLineup[2][6],finalLineup[2][7],finalLineup[2][8])];
                      var thirdF1 = document.createElement('p3'); var thirdF2 = document.createElement('p2'); var thirdF3 = document.createElement('p3'); var thirdF4 = document.createElement('p2');
                      thirdF1.innerHTML = 'TBD31'; thirdF2.innerHTML = 'TBD32'; thirdF3.innerHTML = 'TBD33'; thirdF4.innerHTML = 'TBD34';
                      document.getElementById('thirdLineTime2').appendChild(thirdF1); document.getElementById('thirdLineTime2').appendChild(thirdF2); document.getElementById('thirdLineTime2').appendChild(thirdF3); document.getElementById('thirdLineTime2').appendChild(thirdF4);
                    if (homeF.length/3>=12) {fourthLine.innerHTML=homeF[1+3*finalLineup[2][9]]+' '+homeF[2+3*finalLineup[2][9]]+'<br>'+homeF[1+3*finalLineup[2][10]]+' '+homeF[2+3*finalLineup[2][10]]+'<br>'+homeF[1+3*finalLineup[2][11]]+' '+homeF[2+3*finalLineup[2][11]];
                    fourthLineTime.innerHTML=linesArray[0][5*lineNumber(0,finalLineup[2][9],finalLineup[2][10],finalLineup[2][11])]+'<br>'+linesArray[1][5*lineNumber(0,finalLineup[2][9],finalLineup[2][10],finalLineup[2][11])]+'<br>'+linesArray[2][5*lineNumber(0,finalLineup[2][9],finalLineup[2][10],finalLineup[2][11])];
                    fourthLineTime2.innerHTML=linesArray[0][1+5*lineNumber(0,finalLineup[2][9],finalLineup[2][10],finalLineup[2][11])]+'<br>'+linesArray[1][1+5*lineNumber(0,finalLineup[2][9],finalLineup[2][10],finalLineup[2][11])]+'<br>'+linesArray[2][1+5*lineNumber(0,finalLineup[2][9],finalLineup[2][10],finalLineup[2][11])];}
                    else if (homeF.length/3===11) {fourthLine.innerHTML=homeF[1+3*finalLineup[2][9]]+' '+homeF[2+3*finalLineup[2][9]]+'<br>'+homeF[1+3*finalLineup[2][10]]+' '+homeF[2+3*finalLineup[2][10]]}

                    headerAway.innerHTML = 'Players'; headerAway2.innerHTML = 'TOI sec'; headerAway3.innerHTML = 'shifts';
                    firstLineAway.innerHTML=awayF[1+3*finalLineup[3][0]]+' '+awayF[2+3*finalLineup[3][0]]+'<br>'+awayF[1+3*finalLineup[3][1]]+' '+awayF[2+3*finalLineup[3][1]]+'<br>'+awayF[1+3*finalLineup[3][2]]+' '+awayF[2+3*finalLineup[3][2]];
                    firstLineTimeAway.innerHTML=linesArray[3][5*lineNumber(1,finalLineup[3][0],finalLineup[3][1],finalLineup[3][2])]+'<br>'+linesArray[4][5*lineNumber(1,finalLineup[3][0],finalLineup[3][1],finalLineup[3][2])]+'<br>'+linesArray[5][5*lineNumber(1,finalLineup[3][0],finalLineup[3][1],finalLineup[3][2])];
                    firstLineTime2Away.innerHTML=linesArray[3][1+5*lineNumber(1,finalLineup[3][0],finalLineup[3][1],finalLineup[3][2])]+'<br>'+linesArray[4][1+5*lineNumber(1,finalLineup[3][0],finalLineup[3][1],finalLineup[3][2])]+'<br>'+linesArray[5][1+5*lineNumber(1,finalLineup[3][0],finalLineup[3][1],finalLineup[3][2])];
                    var firstF1A = document.createElement('p2'); firstF1A.innerHTML = firstF1.innerHTML; document.getElementById('firstLineTime2Away').appendChild(firstF1A);
                    secondLineAway.innerHTML=awayF[1+3*finalLineup[3][3]]+' '+awayF[2+3*finalLineup[3][3]]+'<br>'+awayF[1+3*finalLineup[3][4]]+' '+awayF[2+3*finalLineup[3][4]]+'<br>'+awayF[1+3*finalLineup[3][5]]+' '+awayF[2+3*finalLineup[3][5]];
                    secondLineTimeAway.innerHTML=linesArray[3][5*lineNumber(1,finalLineup[3][3],finalLineup[3][4],finalLineup[3][5])]+'<br>'+linesArray[4][5*lineNumber(1,finalLineup[3][3],finalLineup[3][4],finalLineup[3][5])]+'<br>'+linesArray[5][5*lineNumber(1,finalLineup[3][3],finalLineup[3][4],finalLineup[3][5])];
                    secondLineTime2Away.innerHTML=linesArray[3][1+5*lineNumber(1,finalLineup[3][3],finalLineup[3][4],finalLineup[3][5])]+'<br>'+linesArray[4][1+5*lineNumber(1,finalLineup[3][3],finalLineup[3][4],finalLineup[3][5])]+'<br>'+linesArray[5][1+5*lineNumber(1,finalLineup[3][3],finalLineup[3][4],finalLineup[3][5])];
                    var secondF1A = document.createElement('p2'); secondF1A.innerHTML = firstF2.innerHTML; document.getElementById('secondLineTime2Away').appendChild(secondF1A);
                    thirdLineAway.innerHTML=awayF[1+3*finalLineup[3][6]]+' '+awayF[2+3*finalLineup[3][6]]+'<br>'+awayF[1+3*finalLineup[3][7]]+' '+awayF[2+3*finalLineup[3][7]]+'<br>'+awayF[1+3*finalLineup[3][8]]+' '+awayF[2+3*finalLineup[3][8]];
                    thirdLineTimeAway.innerHTML=linesArray[3][5*lineNumber(1,finalLineup[3][6],finalLineup[3][7],finalLineup[3][8])]+'<br>'+linesArray[4][5*lineNumber(1,finalLineup[3][6],finalLineup[3][7],finalLineup[3][8])]+'<br>'+linesArray[5][5*lineNumber(1,finalLineup[3][6],finalLineup[3][7],finalLineup[3][8])];
                    thirdLineTime2Away.innerHTML=linesArray[3][1+5*lineNumber(1,finalLineup[3][6],finalLineup[3][7],finalLineup[3][8])]+'<br>'+linesArray[4][1+5*lineNumber(1,finalLineup[3][6],finalLineup[3][7],finalLineup[3][8])]+'<br>'+linesArray[5][1+5*lineNumber(1,finalLineup[3][6],finalLineup[3][7],finalLineup[3][8])];
                    var thirdF1A = document.createElement('p3'); thirdF1A.innerHTML = firstF3.innerHTML; document.getElementById('thirdLineTime2Away').appendChild(thirdF1A);

                    if (awayF.length/3>=12) {fourthLineAway.innerHTML=awayF[1+3*finalLineup[3][9]]+' '+awayF[2+3*finalLineup[3][9]]+'<br>'+awayF[1+3*finalLineup[3][10]]+' '+awayF[2+3*finalLineup[3][10]]+'<br>'+awayF[1+3*finalLineup[3][11]]+' '+awayF[2+3*finalLineup[3][11]];
                    fourthLineTimeAway.innerHTML=linesArray[3][5*lineNumber(1,finalLineup[3][9],finalLineup[3][10],finalLineup[3][11])]+'<br>'+linesArray[4][5*lineNumber(1,finalLineup[3][9],finalLineup[3][10],finalLineup[3][11])]+'<br>'+linesArray[5][5*lineNumber(1,finalLineup[3][9],finalLineup[3][10],finalLineup[3][11])];
                    fourthLineTime2Away.innerHTML=linesArray[3][1+5*lineNumber(1,finalLineup[3][9],finalLineup[3][10],finalLineup[3][11])]+'<br>'+linesArray[4][1+5*lineNumber(1,finalLineup[3][9],finalLineup[3][10],finalLineup[3][11])]+'<br>'+linesArray[5][1+5*lineNumber(1,finalLineup[3][9],finalLineup[3][10],finalLineup[3][11])]}
                    else if (awayF.length/3===11) {fourthLineAway.innerHTML=awayF[1+3*finalLineup[3][9]]+' '+awayF[2+3*finalLineup[3][9]]+'<br>'+awayF[1+3*finalLineup[3][10]]+' '+awayF[2+3*finalLineup[3][10]]}
                  }); // end second .then shifts
              }); // end second .then standings;
          }); // end second .then gamecenter; 
      } // end displayGameData 
    } // end second .then from getinputvalue
    ); 
} // end getInput Value function
// private lender playbook sex and the city sequel 
var scheduleContent = document.getElementById('schedule'); var gameId; var inputVal = '2021';
const homeRosterArray = []; const awayRosterArray = []; // const homeRosterIdArray = []; const awayRosterIdArray = [];
const homeRosterDArray = []; const awayRosterDArray = []; pairingsArray4 = []; standingsArray = [];

// lines below will allow user to search by year
function getInputValue() {
  var inputVal = document.getElementById('datepicker').value; var date = inputVal.split('/');
  var formatted = date[2] + '-' + date[0] + '-' + date[1]; console.log(formatted)
  var requestURL = 'https://cors-anywhere.herokuapp.com/https://api-web.nhle.com/v1/schedule/' + formatted; // old version https://statsapi.web.nhl.com/api/v1/schedule/?date=
  fetch(requestURL, {
    "method": "GET", "headers": {}
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log('I am in schedule then');
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
        const gameId = data.gameWeek[0].games[gameNumber].id;
        console.log(gameId);
        var requestURL = 'https://cors-anywhere.herokuapp.com/https://api-web.nhle.com/v1/gamecenter/' + gameId + '/boxscore';
        fetch(requestURL, {
          "method": "GET", "headers": {}
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            const gameInfo = document.createElement('section'); gameInfo.setAttribute('id', 'gameInfo');
            document.getElementById('schedule').appendChild(gameInfo);
            var standingsURL = 'https://cors-anywhere.herokuapp.com/https://api-web.nhle.com/v1/standings/' + formatted;
            fetch(standingsURL, {
              "method": "GET", "headers": {}
            })
              .then(function (response) {
                return response.json();
              })
              .then(function (data_standings) {
                console.log(data_standings.standings);
                for (i = 0; i < data_standings.standings.length; i++) {
                  if (data_standings.standings[i].teamAbbrev.default === data.awayTeam.abbrev) {
                    standingsArray.push(data_standings.standings[i].wins, data_standings.standings[i].losses, data_standings.standings[i].otLosses)
                    console.log(i, data.awayTeam.abbrev, data_standings.standings[i].wins, data_standings.standings[i].losses, data_standings.standings[i].otLosses)
                  }
                  else if (data_standings.standings[i].teamAbbrev.default === data.homeTeam.abbrev) {
                    standingsArray.push(data.homeTeam.abbrev, data_standings.standings[i].wins, data_standings.standings[i].losses, data_standings.standings[i].otLosses)
                    console.log(i, data.homeTeam.abbrev, data_standings.standings[i].wins, data_standings.standings[i].losses, data_standings.standings[i].otLosses)
                  }
                  // else (console.log('No Such Abbrev'));
                }
                var gameTitle = document.createElement('h2'); gameTitle.textContent = '';
                gameTitle.innerHTML = 'You are watching stats for ' + data.awayTeam.abbrev + standingsArray[0] + ' W ' + standingsArray[1] + ' L ' + standingsArray[2] + ' O at ' + data.homeTeam.abbrev + standingsArray[3] + ' W ' + standingsArray[4] + ' L ' + standingsArray[5] + ' O game';
                document.getElementById('gameInfo').appendChild(gameTitle);
                const homeF = []; const awayF = []; const homeD = []; const awayD = []; const homeG = []; const awayG = []; const playerIdArray = []; // let playerIdeObject = {a: 1}; const hasKeyId = true;
                console.log(data.boxscore.playerByGameStats.awayTeam.forwards, data.boxscore.playerByGameStats.awayTeam.defense, data.boxscore.playerByGameStats.awayTeam.goalies, data.boxscore.playerByGameStats.homeTeam.forwards, data.boxscore.playerByGameStats.awayTeam.defense, data.boxscore.playerByGameStats.awayTeam.goalies);
                var obj = data.boxscore.playerByGameStats.homeTeam.forwards; var keys = Object.keys(obj); playerIdeObject = {};
                for (i = 0; i < keys.length; i++) {
                  var val = obj[keys[i]]; homeF.push(val.playerId, val.sweaterNumber, val.name.default); playerIdArray.push(val.playerId, [[], [], []]);
                  keyId = val.playerId; playerIdeObject[keyId] = []}
                var obj = data.boxscore.playerByGameStats.homeTeam.defense; var keys = Object.keys(obj);
                for (i = 0; i < keys.length; i++) {
                  var val = obj[keys[i]]; homeD.push(val.playerId, val.sweaterNumber, val.name.default); playerIdArray.push(val.playerId, [[], [], []])
                  keyId = val.playerId; playerIdeObject[keyId] = []}
                var obj = data.boxscore.playerByGameStats.homeTeam.goalies; var keys = Object.keys(obj);
                for (i = 0; i < keys.length; i++) {
                  var val = obj[keys[i]]; homeG.push(val.playerId, val.sweaterNumber, val.name.default); playerIdArray.push(val.playerId, [[], [], []])
                  keyId = val.playerId; playerIdeObject[keyId] = []}
                var obj = data.boxscore.playerByGameStats.awayTeam.forwards; var keys = Object.keys(obj);
                for (i = 0; i < keys.length; i++) {
                  var val = obj[keys[i]]; awayF.push(val.playerId, val.sweaterNumber, val.name.default); playerIdArray.push(val.playerId, [[], [], []])
                  keyId = val.playerId; playerIdeObject[keyId] = []}
                var obj = data.boxscore.playerByGameStats.awayTeam.defense; var keys = Object.keys(obj);
                for (i = 0; i < keys.length; i++) {
                  var val = obj[keys[i]]; awayD.push(val.playerId, val.sweaterNumber, val.name.default); playerIdArray.push(val.playerId, [[], [], []]);
                  keyId = val.playerId; playerIdeObject[keyId] = []
                }
                var obj = data.boxscore.playerByGameStats.awayTeam.goalies; var keys = Object.keys(obj);
                for (i = 0; i < keys.length; i++) {
                  var val = obj[keys[i]]; awayG.push(val.playerId, val.sweaterNumber, val.name.default); playerIdArray.push(val.playerId, [[], [], []]);
                  keyId = val.playerId; playerIdeObject[keyId] = []
                }
                console.log(homeF, homeD, homeG, awayF, awayD, awayF, playerIdArray)

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
                    dArray2 = [[],[]];
                    for (i = 0; i < Object.keys(playerIdeObject).length; i++) {
                      for (j = 0; j < homeD.length/3; j++){if (Object.keys(playerIdeObject)[i]==homeD[3*j]){console.log(i, j, Object.keys(playerIdeObject)[i]);
                        dArray2[0].push(Object.values(playerIdeObject)[i])}}
                      for (j = 0; j < awayD.length/3; j++){if (Object.keys(playerIdeObject)[i]==awayD[3*j]){console.log(i, j, Object.keys(playerIdeObject)[i]);
                        dArray2[1].push(Object.values(playerIdeObject)[i])}}
                    }           
                    
                    console.log('dArray', dArray, 'dArray2', dArray2); pairingsArray = [[], [], [], [], [], []];
                    for (h = 0; h < 2; h++) { // h = 0 home team D, h = 1 away team D
                      for (i = 0; i < 3; i++) { for (j = 0; j < dArray[h].length; j++) {
                          for (k = j + 1; k < dArray[h].length; k++) {tempTime = []; for (l = 0; l < dArray[h][j][i].length / 2; l++) {
                              for (m = 0; m < dArray[h][k][i].length / 2; m++) { if ((dArray[h][k][i][2 * m] >= dArray[h][j][i][2 * l]) && (dArray[h][k][i][2 * m] <= dArray[h][j][i][2 * l + 1])) {
                                  if (dArray[h][k][i][2 * m + 1] >= dArray[h][j][i][2 * l + 1]) { tempTime.push(dArray[h][j][i][2 * l + 1] - dArray[h][k][i][2 * m]) }
                                  else { tempTime.push(dArray[h][k][i][2 * m + 1] - dArray[h][k][i][2 * m]) }}
                                else if ((dArray[h][k][i][2 * m] <= dArray[h][j][i][2 * l]) && (dArray[h][k][i][2 * m + 1] >= dArray[h][j][i][2 * l])) {
                                  if (dArray[h][k][i][2 * m + 1] >= dArray[h][j][i][2 * l + 1]) { tempTime.push(dArray[h][j][i][2 * l + 1] - dArray[h][j][i][2 * l]) }
                                  else {tempTime.push(dArray[h][k][i][2 * m + 1] - dArray[h][j][i][2 * l])}
                                }}}   // end l loop
                            shifts = 0; const sum = tempTime.reduce((partialSum, a) => partialSum + a, 0);
                            for (n = 0; n < tempTime.length; n++) { if (tempTime[n] >= 10) { shifts = shifts + 1 } }
                            pairingsArray[i + 3 * h].push(sum); pairingsArray[i + 3 * h].push(shifts); // console.log(i, j, k, tempTime);
                          }}}} // end i and h loop periods
                    console.log(pairingsArray); dArrayTemp = [[[],[],[]],[[],[],[]]];
                    for (i = 0; i < 2; i++) { for (j = 0; j < dArray[i].length; j++) { for (k = 0; k < 3; k++) {dArrayTemp[i][k] = dArrayTemp[i][k].concat(dArray[i][j][k])}}}
                    console.log(dArrayTemp);
                    dArrayTempSplit = [[[],[],[]],[[],[],[]]]; dArrayTempSplit2 = [[[],[],[]],[[],[],[]]]; dArrayTempSplit3 = [[[],[],[]],[[],[],[]]];// dArrayTempSplit2Ordered = [[[],[],[]],[[],[],[]]]; 
                    for (i = 0; i < 2; i++) {for (j = 0; j < 3; j++) {for (k = 0; k < dArrayTemp[i][j].length/2; k++){dArrayTempSplit[i][j].push(dArrayTemp[i][j][2*k])
                    dArrayTempSplit2[i][j].push(dArrayTemp[i][j][2*k]);
                    dArrayTempSplit2[i][j] = dArrayTempSplit2[i][j].sort((a, b) => a - b)}
                    for (k = 0; k < dArrayTempSplit2[i][j].length; k++) { console.log(dArrayTempSplit[i][j].indexOf(dArrayTempSplit2[i][j][k]), dArrayTempSplit[i][j].lastIndexOf(dArrayTempSplit2[i][j][k]))
                      if (dArrayTempSplit3[i][j].includes(dArrayTempSplit[i][j].indexOf(dArrayTempSplit[i][j][2*k]))){}
                  else dArrayTempSplit3[i][j].push(k)}
                  }}
                    console.log(dArrayTempSplit, dArrayTempSplit2, dArrayTempSplit3);

                    // adding home team defense to screen 
                    firstDNumber.innerHTML = homeD[1] + ' ' + homeD[2]; secondDNumber.innerHTML = homeD[4] + ' ' + homeD[5]; thirdDNumber.innerHTML = homeD[7] + ' ' + homeD[8];
                    firstD1.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X'; secondD2.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X'; thirdD3.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X'; forthD4.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X';
                    var firstD2 = document.createElement('p3'); var firstD3 = document.createElement('p2'); var firstD4 = document.createElement('p3'); var firstD5 = document.createElement('p2');
                    firstD2.innerHTML = pairingsArray[0][1] + ' sh ' + pairingsArray[0][0] + ' sec ' + '<br>' + pairingsArray[1][1] + ' sh ' + pairingsArray[1][0] + ' sec ' + '<br>' + pairingsArray[2][1] + ' sh ' + pairingsArray[2][0] + ' sec ';
                    firstD3.innerHTML = pairingsArray[0][3] + ' sh ' + pairingsArray[0][2] + ' sec ' + '<br>' + pairingsArray[1][3] + ' sh ' + pairingsArray[1][2] + ' sec ' + '<br>' + pairingsArray[2][3] + ' sh ' + pairingsArray[2][2] + ' sec ';
                    firstD4.innerHTML = pairingsArray[0][5] + ' sh ' + pairingsArray[0][4] + ' sec ' + '<br>' + pairingsArray[1][5] + ' sh ' + pairingsArray[1][4] + ' sec ' + '<br>' + pairingsArray[2][5] + ' sh ' + pairingsArray[2][4] + ' sec ';
                    firstD5.innerHTML = pairingsArray[0][7] + ' sh ' + pairingsArray[0][6] + ' sec ' + '<br>' + pairingsArray[1][7] + ' sh ' + pairingsArray[1][6] + ' sec ' + '<br>' + pairingsArray[2][7] + ' sh ' + pairingsArray[2][6] + ' sec ';
                    document.getElementById('firstD2').appendChild(firstD2); document.getElementById('firstD3').appendChild(firstD3); document.getElementById('firstD4').appendChild(firstD4); document.getElementById('firstD5').appendChild(firstD5);
                    secondD1.innerHTML = pairingsArray[0][1] + ' shifts ' + pairingsArray[0][0] + ' sec ' + '<br>' + pairingsArray[1][1] + ' sh ' + pairingsArray[1][0] + ' sec ' + '<br>' + pairingsArray[2][1] + ' sh ' + pairingsArray[2][0] + ' sec ';
                    var secondD3 = document.createElement('p3'); var secondD4 = document.createElement('p2'); var secondD5 = document.createElement('p3');
                    secondD3.innerHTML = pairingsArray[0][2 * homeD.length / 3 - 1] + ' shifts ' + pairingsArray[0][2 * homeD.length / 3 - 2] + ' sec ' + '<br>' + pairingsArray[1][2 * homeD.length / 3 - 1] + ' sh ' + pairingsArray[1][2 * homeD.length / 3 - 2] + ' sec ' + '<br>' + pairingsArray[2][2 * homeD.length / 3 - 1] + ' sh ' + pairingsArray[2][2 * homeD.length / 3 - 2] + ' sec ';
                    secondD4.innerHTML = pairingsArray[0][2 * homeD.length / 3 + 1] + ' shifts ' + pairingsArray[0][2 * homeD.length / 3] + ' sec ' + '<br>' + pairingsArray[1][2 * homeD.length / 3 + 1] + ' sh ' + pairingsArray[1][2 * homeD.length / 3] + ' sec ' + '<br>' + pairingsArray[2][2 * homeD.length / 3 + 1] + ' sh ' + pairingsArray[2][2 * homeD.length / 3] + ' sec ';
                    secondD5.innerHTML = pairingsArray[0][2 * homeD.length / 3 + 3] + ' shifts ' + pairingsArray[0][2 * homeD.length / 3 + 2] + ' sec ' + '<br>' + pairingsArray[1][2 * homeD.length / 3 + 3] + ' sh ' + pairingsArray[1][2 * homeD.length / 3 + 2] + ' sec ' + '<br>' + pairingsArray[2][2 * homeD.length / 3 + 3] + ' sh ' + pairingsArray[2][2 * homeD.length / 3 + 2] + ' sec ';
                    thirdD1.innerHTML = pairingsArray[0][3] + ' shifts ' + pairingsArray[0][2] + ' sec ' + '<br>' + pairingsArray[1][3] + ' sh ' + pairingsArray[1][2] + ' sec ' + '<br>' + pairingsArray[2][3] + ' sh ' + pairingsArray[2][2] + ' sec ';
                    thirdD2.innerHTML = secondD3.innerHTML; var thirdD4 = document.createElement('p3'); var thirdD5 = document.createElement('p2');
                    thirdD4.innerHTML = pairingsArray[0][4 * homeD.length / 3 - 5] + ' shifts ' + pairingsArray[0][4 * homeD.length / 3 - 6] + ' sec ' + '<br>' + pairingsArray[1][4 * homeD.length / 3 - 5] + ' sh ' + pairingsArray[1][4 * homeD.length / 3 - 6] + ' sec ' + '<br>' + pairingsArray[2][4 * homeD.length / 3 - 5] + ' sh ' + pairingsArray[2][4 * homeD.length / 3 - 6] + ' sec ';
                    thirdD5.innerHTML = pairingsArray[0][4 * homeD.length / 3 - 3] + ' shifts ' + pairingsArray[0][4 * homeD.length / 3 - 4] + ' sec ' + '<br>' + pairingsArray[1][4 * homeD.length / 3 - 3] + ' sh ' + pairingsArray[1][4 * homeD.length / 3 - 4] + ' sec ' + '<br>' + pairingsArray[2][4 * homeD.length / 3 - 3] + ' sh ' + pairingsArray[2][4 * homeD.length / 3 - 4] + ' sec ';
                    forthDNumber.innerHTML = homeD[10] + ' ' + homeD[11]; forthD2.innerHTML = secondD4.innerHTML; forthD3.innerHTML = thirdD4.innerHTML; forthD1.innerHTML = firstD4.innerHTML; var forthD5 = document.createElement('p3');
                    forthD5.innerHTML = pairingsArray[0][6 * homeD.length / 3 - 11] + ' shifts ' + pairingsArray[0][6 * homeD.length / 3 - 10] + ' sec ' + '<br>' + pairingsArray[1][6 * homeD.length / 3 - 11] + ' sh ' + pairingsArray[1][6 * homeD.length / 3 - 10] + ' sec ' + '<br>' + pairingsArray[2][6 * homeD.length / 3 - 11] + ' sh ' + pairingsArray[2][4 * homeD.length / 3 - 10] + ' sec ';
                    fifthDNumber.innerHTML = homeD[13] + ' ' + homeD[14];
                    fifthD1.innerHTML = firstD5.innerHTML; fifthD2.innerHTML = secondD5.innerHTML; fifthD3.innerHTML = thirdD5.innerHTML; fifthD4.innerHTML = forthD5.innerHTML; fifthD5.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X';
                    document.getElementById('secondD3').appendChild(secondD3); document.getElementById('secondD4').appendChild(secondD4); document.getElementById('secondD5').appendChild(secondD5); document.getElementById('thirdD4').appendChild(thirdD4);
                    document.getElementById('thirdD5').appendChild(thirdD5); document.getElementById('forthD5').appendChild(forthD5);

                    if (homeD.length >= 18) {
                      var firstD6 = document.createElement('p3'); var secondD6 = document.createElement('p2'); var thirdD6 = document.createElement('p3'); var forthD6 = document.createElement('p2'); var fifthD6 = document.createElement('p3');
                      sixthD6.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X'; sixthDNumber.innerHTML = homeD[16] + ' ' + homeD[17];
                      firstD6.innerHTML = pairingsArray[0][9] + ' sh ' + pairingsArray[0][8] + ' sec ' + '<br>' + pairingsArray[1][9] + ' sh ' + pairingsArray[1][8] + ' sec ' + '<br>' + pairingsArray[2][9] + ' sh ' + pairingsArray[2][8] + ' sec ';
                      secondD6.innerHTML = pairingsArray[0][2 * homeD.length / 3 + 5] + ' shifts ' + pairingsArray[0][2 * homeD.length / 3 + 4] + ' sec ' + '<br>' + pairingsArray[1][2 * homeD.length / 3 + 5] + ' sh ' + pairingsArray[1][2 * homeD.length / 3 + 4] + ' sec ' + '<br>' + pairingsArray[2][2 * homeD.length / 3 + 5] + ' sh ' + pairingsArray[2][2 * homeD.length / 3 + 4] + ' sec ';
                      thirdD6.innerHTML = pairingsArray[0][4 * homeD.length / 3 - 1] + ' shifts ' + pairingsArray[0][4 * homeD.length / 3 - 2] + ' sec ' + '<br>' + pairingsArray[1][4 * homeD.length / 3 - 1] + ' sh ' + pairingsArray[1][4 * homeD.length / 3 - 2] + ' sec ' + '<br>' + pairingsArray[2][4 * homeD.length / 3 - 1] + ' sh ' + pairingsArray[2][4 * homeD.length / 3 - 2] + ' sec ';
                      forthD6.innerHTML = pairingsArray[0][6 * homeD.length / 3 - 9] + ' shifts ' + pairingsArray[0][6 * homeD.length / 3 - 10] + ' sec ' + '<br>' + pairingsArray[1][6 * homeD.length / 3 - 9] + ' sh ' + pairingsArray[1][6 * homeD.length / 3 - 10] + ' sec ' + '<br>' + pairingsArray[2][6 * homeD.length / 3 - 9] + ' sh ' + pairingsArray[2][6 * homeD.length / 3 - 10] + ' sec ';
                      fifthD6.innerHTML = pairingsArray[0][8 * homeD.length / 3 - 19] + ' shifts ' + pairingsArray[0][8 * homeD.length / 3 - 20] + ' sec ' + '<br>' + pairingsArray[1][8 * homeD.length / 3 - 19] + ' sh ' + pairingsArray[1][8 * homeD.length / 3 - 20] + ' sec ' + '<br>' + pairingsArray[2][8 * homeD.length / 3 - 19] + ' sh ' + pairingsArray[2][8 * homeD.length / 3 - 20] + ' sec ';
                      sixthD1.innerHTML = firstD6.innerHTML; sixthD2.innerHTML = secondD6.innerHTML; sixthD3.innerHTML = thirdD6.innerHTML; sixthD4.innerHTML = forthD6.innerHTML; sixthD5.innerHTML = fifthD6.innerHTML;
                      document.getElementById('firstD6').appendChild(firstD6); document.getElementById('secondD6').appendChild(secondD6); document.getElementById('thirdD6').appendChild(thirdD6); document.getElementById('forthD6').appendChild(forthD6); document.getElementById('fifthD6').appendChild(fifthD6);
                    } // end if six D men 

                    if (homeD.length == 21) {
                      var firstD7 = document.createElement('p2'); var secondD7 = document.createElement('p3'); var thirdD7 = document.createElement('p2'); var forthD7 = document.createElement('p3'); var fifthD7 = document.createElement('p2'); var sixthD7 = document.createElement('p3');
                      seventhD7.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X'; seventhDNumber.innerHTML = homeD[19] + ' ' + homeD[20];
                      firstD7.innerHTML = pairingsArray[0][11] + ' sh ' + pairingsArray[0][10] + ' sec ' + '<br>' + pairingsArray[1][11] + ' sh ' + pairingsArray[1][10] + ' sec ' + '<br>' + pairingsArray[2][9] + ' sh ' + pairingsArray[2][8] + ' sec ';
                      secondD7.innerHTML = pairingsArray[0][21] + ' shifts ' + pairingsArray[0][20] + ' sec ' + '<br>' + pairingsArray[1][21] + ' sh ' + pairingsArray[1][20] + ' sec ' + '<br>' + pairingsArray[2][21] + ' sh ' + pairingsArray[2][20] + ' sec ';
                      thirdD7.innerHTML = pairingsArray[0][29] + ' shifts ' + pairingsArray[0][28] + ' sec ' + '<br>' + pairingsArray[1][29] + ' sh ' + pairingsArray[1][28] + ' sec ' + '<br>' + pairingsArray[2][29] + ' sh ' + pairingsArray[2][28] + ' sec ';
                      forthD7.innerHTML = pairingsArray[0][35] + ' shifts ' + pairingsArray[0][34] + ' sec ' + '<br>' + pairingsArray[1][35] + ' sh ' + pairingsArray[1][34] + ' sec ' + '<br>' + pairingsArray[2][35] + ' sh ' + pairingsArray[2][34] + ' sec ';
                      fifthD7.innerHTML = pairingsArray[0][39] + ' shifts ' + pairingsArray[0][38] + ' sec ' + '<br>' + pairingsArray[1][39] + ' sh ' + pairingsArray[1][38] + ' sec ' + '<br>' + pairingsArray[2][39] + ' sh ' + pairingsArray[2][38] + ' sec ';
                      sixthD7.innerHTML = pairingsArray[0][41] + ' shifts ' + pairingsArray[0][40] + ' sec ' + '<br>' + pairingsArray[1][41] + ' sh ' + pairingsArray[1][40] + ' sec ' + '<br>' + pairingsArray[2][41] + ' sh ' + pairingsArray[2][40] + ' sec ';
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
                    secondD3A.innerHTML = pairingsArray[3][2 * awayD.length / 3 - 1] + ' shifts ' + pairingsArray[3][2 * awayD.length / 3 - 2] + ' sec ' + '<br>' + pairingsArray[4][2 * awayD.length / 3 - 1] + ' sh ' + pairingsArray[4][2 * awayD.length / 3 - 2] + ' sec ' + '<br>' + pairingsArray[5][2 * awayD.length / 3 - 1] + ' sh ' + pairingsArray[5][2 * awayD.length / 3 - 2] + ' sec ';
                    secondD4A.innerHTML = pairingsArray[3][2 * awayD.length / 3 + 1] + ' shifts ' + pairingsArray[3][2 * awayD.length / 3] + ' sec ' + '<br>' + pairingsArray[4][2 * awayD.length / 3 + 1] + ' sh ' + pairingsArray[4][2 * awayD.length / 3] + ' sec ' + '<br>' + pairingsArray[5][2 * awayD.length / 3 + 1] + ' sh ' + pairingsArray[5][2 * awayD.length / 3] + ' sec ';
                    secondD5A.innerHTML = pairingsArray[3][2 * awayD.length / 3 + 3] + ' shifts ' + pairingsArray[3][2 * awayD.length / 3 + 2] + ' sec ' + '<br>' + pairingsArray[4][2 * awayD.length / 3 + 3] + ' sh ' + pairingsArray[4][2 * awayD.length / 3 + 2] + ' sec ' + '<br>' + pairingsArray[5][2 * awayD.length / 3 + 3] + ' sh ' + pairingsArray[5][2 * awayD.length / 3 + 2] + ' sec ';
                    thirdD1A.innerHTML = firstD3A.innerHTML; thirdD2A.innerHTML = secondD3A.innerHTML; var thirdD4A = document.createElement('p3'); var thirdD5A = document.createElement('p2');
                    thirdD4A.innerHTML = pairingsArray[3][4 * awayD.length / 3 - 5] + ' shifts ' + pairingsArray[3][4 * awayD.length / 3 - 6] + ' sec ' + '<br>' + pairingsArray[4][4 * awayD.length / 3 - 5] + ' sh ' + pairingsArray[4][4 * awayD.length / 3 - 6] + ' sec ' + '<br>' + pairingsArray[5][4 * awayD.length / 3 - 5] + ' sh ' + pairingsArray[5][4 * awayD.length / 3 - 6] + ' sec ';
                    thirdD5A.innerHTML = pairingsArray[3][4 * awayD.length / 3 - 3] + ' shifts ' + pairingsArray[3][4 * awayD.length / 3 - 4] + ' sec ' + '<br>' + pairingsArray[4][4 * awayD.length / 3 - 3] + ' sh ' + pairingsArray[4][4 * awayD.length / 3 - 4] + ' sec ' + '<br>' + pairingsArray[5][4 * awayD.length / 3 - 3] + ' sh ' + pairingsArray[5][4 * awayD.length / 3 - 4] + ' sec ';
                    forthDNumberA.innerHTML = awayD[10] + ' ' + awayD[11]; forthD2A.innerHTML = secondD4A.innerHTML; forthD3A.innerHTML = thirdD4A.innerHTML; forthD1A.innerHTML = firstD4A.innerHTML; var forthD5A = document.createElement('p3');
                    forthD5A.innerHTML = pairingsArray[3][6 * awayD.length / 3 - 11] + ' shifts ' + pairingsArray[3][6 * awayD.length / 3 - 10] + ' sec ' + '<br>' + pairingsArray[4][6 * awayD.length / 3 - 11] + ' sh ' + pairingsArray[4][6 * awayD.length / 3 - 10] + ' sec ' + '<br>' + pairingsArray[5][6 * awayD.length / 3 - 11] + ' sh ' + pairingsArray[5][4 * awayD.length / 3 - 10] + ' sec ';
                    fifthDNumberA.innerHTML = awayD[13] + ' ' + awayD[14];
                    fifthD1A.innerHTML = firstD5A.innerHTML; fifthD2A.innerHTML = secondD5A.innerHTML; fifthD3A.innerHTML = thirdD5A.innerHTML; fifthD4A.innerHTML = forthD5A.innerHTML; fifthD5A.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X';
                    document.getElementById('secondD3A').appendChild(secondD3A); document.getElementById('secondD4A').appendChild(secondD4A); document.getElementById('secondD5A').appendChild(secondD5A); document.getElementById('thirdD4A').appendChild(thirdD4A);
                    document.getElementById('thirdD5A').appendChild(thirdD5A); document.getElementById('forthD5A').appendChild(forthD5A);

                    if (awayD.length >= 18) {
                      var firstD6A = document.createElement('p3'); var secondD6A = document.createElement('p2'); var thirdD6A = document.createElement('p3'); var forthD6A = document.createElement('p2'); var fifthD6A = document.createElement('p3');
                      sixthD6A.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X'; sixthDNumberA.innerHTML = awayD[16] + ' ' + awayD[17];
                      firstD6A.innerHTML = pairingsArray[3][9] + ' sh ' + pairingsArray[3][8] + ' sec ' + '<br>' + pairingsArray[4][9] + ' sh ' + pairingsArray[4][8] + ' sec ' + '<br>' + pairingsArray[5][9] + ' sh ' + pairingsArray[5][8] + ' sec ';
                      secondD6A.innerHTML = pairingsArray[3][2 * awayD.length / 3 + 5] + ' shifts ' + pairingsArray[3][2 * awayD.length / 3 + 4] + ' sec ' + '<br>' + pairingsArray[4][2 * awayD.length / 3 + 5] + ' sh ' + pairingsArray[4][2 * awayD.length / 3 + 4] + ' sec ' + '<br>' + pairingsArray[5][2 * awayD.length / 3 + 5] + ' sh ' + pairingsArray[5][2 * awayD.length / 3 + 4] + ' sec ';
                      thirdD6A.innerHTML = pairingsArray[3][4 * awayD.length / 3 - 1] + ' shifts ' + pairingsArray[3][4 * awayD.length / 3 - 2] + ' sec ' + '<br>' + pairingsArray[4][4 * awayD.length / 3 - 1] + ' sh ' + pairingsArray[4][4 * awayD.length / 3 - 2] + ' sec ' + '<br>' + pairingsArray[5][4 * awayD.length / 3 - 1] + ' sh ' + pairingsArray[5][4 * awayD.length / 3 - 2] + ' sec ';
                      forthD6A.innerHTML = pairingsArray[3][6 * awayD.length / 3 - 9] + ' shifts ' + pairingsArray[3][6 * awayD.length / 3 - 10] + ' sec ' + '<br>' + pairingsArray[4][6 * awayD.length / 3 - 9] + ' sh ' + pairingsArray[4][6 * awayD.length / 3 - 10] + ' sec ' + '<br>' + pairingsArray[5][6 * awayD.length / 3 - 9] + ' sh ' + pairingsArray[5][6 * awayD.length / 3 - 10] + ' sec ';
                      fifthD6A.innerHTML = pairingsArray[3][8 * awayD.length / 3 - 19] + ' shifts ' + pairingsArray[3][8 * awayD.length / 3 - 20] + ' sec ' + '<br>' + pairingsArray[4][8 * awayD.length / 3 - 19] + ' sh ' + pairingsArray[4][8 * awayD.length / 3 - 20] + ' sec ' + '<br>' + pairingsArray[5][8 * awayD.length / 3 - 19] + ' sh ' + pairingsArray[5][8 * awayD.length / 3 - 20] + ' sec ';
                      sixthD1A.innerHTML = firstD6A.innerHTML; sixthD2A.innerHTML = secondD6A.innerHTML; sixthD3A.innerHTML = thirdD6A.innerHTML; sixthD4A.innerHTML = forthD6A.innerHTML; sixthD5A.innerHTML = fifthD6A.innerHTML;
                      document.getElementById('firstD6A').appendChild(firstD6A); document.getElementById('secondD6A').appendChild(secondD6A); document.getElementById('thirdD6A').appendChild(thirdD6A); document.getElementById('forthD6A').appendChild(forthD6A); document.getElementById('fifthD6A').appendChild(fifthD6A);
                    } // end if six D men away

                    if (awayD.length == 21) {
                      var firstD7A = document.createElement('p2'); var secondD7A = document.createElement('p3'); var thirdD7A = document.createElement('p2'); var forthD7A = document.createElement('p3'); var fifthD7A = document.createElement('p2'); var sixthD7A = document.createElement('p3');
                      seventhD7A.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X'; seventhDNumberA.innerHTML = awayD[19] + ' ' + awayD[20];
                      firstD7A.innerHTML = pairingsArray[3][11] + ' sh ' + pairingsArray[3][10] + ' sec ' + '<br>' + pairingsArray[4][11] + ' sh ' + pairingsArray[4][10] + ' sec ' + '<br>' + pairingsArray[5][9] + ' sh ' + pairingsArray[5][8] + ' sec ';
                      secondD7A.innerHTML = pairingsArray[3][21] + ' shifts ' + pairingsArray[3][20] + ' sec ' + '<br>' + pairingsArray[4][21] + ' sh ' + pairingsArray[4][20] + ' sec ' + '<br>' + pairingsArray[5][21] + ' sh ' + pairingsArray[5][20] + ' sec ';
                      thirdD7A.innerHTML = pairingsArray[3][29] + ' shifts ' + pairingsArray[3][28] + ' sec ' + '<br>' + pairingsArray[4][29] + ' sh ' + pairingsArray[4][28] + ' sec ' + '<br>' + pairingsArray[5][29] + ' sh ' + pairingsArray[5][28] + ' sec ';
                      forthD7A.innerHTML = pairingsArray[3][35] + ' shifts ' + pairingsArray[3][34] + ' sec ' + '<br>' + pairingsArray[4][35] + ' sh ' + pairingsArray[4][34] + ' sec ' + '<br>' + pairingsArray[5][35] + ' sh ' + pairingsArray[5][34] + ' sec ';
                      fifthD7A.innerHTML = pairingsArray[3][39] + ' shifts ' + pairingsArray[3][38] + ' sec ' + '<br>' + pairingsArray[4][39] + ' sh ' + pairingsArray[4][38] + ' sec ' + '<br>' + pairingsArray[5][39] + ' sh ' + pairingsArray[5][38] + ' sec ';
                      sixthD7A.innerHTML = pairingsArray[3][41] + ' shifts ' + pairingsArray[3][40] + ' sec ' + '<br>' + pairingsArray[4][41] + ' sh ' + pairingsArray[4][40] + ' sec ' + '<br>' + pairingsArray[5][41] + ' sh ' + pairingsArray[5][40] + ' sec ';
                      seventhD1A.innerHTML = firstD7A.innerHTML; seventhD2A.innerHTML = secondD7A.innerHTML; seventhD3A.innerHTML = thirdD7A.innerHTML; seventhD4A.innerHTML = forthD7A.innerHTML; seventhD5A.innerHTML = fifthD7A.innerHTML; seventhD6A.innerHTML = sixthD7A.innerHTML;
                      document.getElementById('firstD7A').appendChild(firstD7A); document.getElementById('secondD7A').appendChild(secondD7A); document.getElementById('thirdD7A').appendChild(thirdD7A); document.getElementById('forthD7A').appendChild(forthD7A); document.getElementById('fifthD7A').appendChild(fifthD7A); document.getElementById('sixthD7A').appendChild(sixthD7A);
                    } // end if seven D men away

                  }); // end second .then shifts
              }); // end second .then standings;
          }); // end second .then gamecenter;
      } // end displayGameData     
    } // end second .then from getinputvalue
    );
} // end getInput Value function $65k at 4.50% on 3/27
// check tix casa. climb sierra blanca; split functions
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
                for (i = 0; i < data_standings.standings.length; i++) {if (data_standings.standings[i].teamAbbrev.default === data.awayTeam.abbrev) {
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
            for (i = 0; i < keys.length; i++) { var val = obj[keys[i]]; homeF.push(val.playerId, val.sweaterNumber, val.name.default); playerIdArray.push(val.playerId, [[],[],[]]); 
              keyId = val.playerId; playerIdeObject[keyId] = [] }
            var obj = data.boxscore.playerByGameStats.homeTeam.defense; var keys = Object.keys(obj);
            for (i = 0; i < keys.length; i++) { var val = obj[keys[i]]; homeD.push(val.playerId, val.sweaterNumber, val.name.default); playerIdArray.push(val.playerId, [[],[],[]]) 
              keyId = val.playerId; playerIdeObject[keyId] = [] }
            var obj = data.boxscore.playerByGameStats.homeTeam.goalies; var keys = Object.keys(obj);
            for (i = 0; i < keys.length; i++) { var val = obj[keys[i]]; homeG.push(val.playerId, val.sweaterNumber, val.name.default); playerIdArray.push(val.playerId, [[],[],[]]) 
              keyId = val.playerId; playerIdeObject[keyId] = [] }
            var obj = data.boxscore.playerByGameStats.awayTeam.forwards; var keys = Object.keys(obj);
            for (i = 0; i < keys.length; i++) { var val = obj[keys[i]]; awayF.push(val.playerId, val.sweaterNumber, val.name.default); playerIdArray.push(val.playerId, [[],[],[]]) 
              keyId = val.playerId; playerIdeObject[keyId] = [] }
            var obj = data.boxscore.playerByGameStats.awayTeam.defense; var keys = Object.keys(obj);
            for (i = 0; i < keys.length; i++) { var val = obj[keys[i]]; awayD.push(val.playerId, val.sweaterNumber, val.name.default); playerIdArray.push(val.playerId, [[],[],[]]);
              keyId = val.playerId; playerIdeObject[keyId] = []  }
            var obj = data.boxscore.playerByGameStats.awayTeam.goalies; var keys = Object.keys(obj);
            for (i = 0; i < keys.length; i++) { var val = obj[keys[i]]; awayG.push(val.playerId, val.sweaterNumber, val.name.default); playerIdArray.push(val.playerId, [[],[],[]]); 
              keyId = val.playerId; playerIdeObject[keyId] = [] }
            console.log(homeF, homeD, homeG, awayF, awayD, awayF, playerIdArray)

            var shiftsURL = 'https://cors-anywhere.herokuapp.com/https://api.nhle.com/stats/rest/en/shiftcharts?cayenneExp=gameId=' + gameId;
            fetch(shiftsURL, {"method": "GET", "headers": {}})
              .then(function (response) {
                return response.json();
              })
              .then(function (data_shifts) { console.log('I am in second shift then', data_shifts); 
              for (i = 0; i < data_shifts.data.length; i++) {if ((data_shifts.data[i].typeCode === 517)&&(data_shifts.data[i].period<4)) 
                {playerOrder = playerIdArray.indexOf(data_shifts.data[i].playerId);
                      shiftStart = data_shifts.data[i].startTime; shiftStart1 = shiftStart.split(':'); minutes = Number(shiftStart1[0]); 
                      seconds = Number(shiftStart1[1]); shiftStart2 = minutes * 60 + seconds; 
                      shiftEnd = data_shifts.data[i].endTime; shiftEnd1 = shiftEnd.split(':'); minutes = Number(shiftEnd1[0]); 
                      seconds = Number(shiftEnd1[1]); shiftEnd2 = minutes * 60 + seconds; 
                playerIdArray[playerOrder+1][data_shifts.data[i].period-1].push(shiftStart2, shiftEnd2)
                
            }}
            for (i = 0; i < playerIdArray.length/2; i++) {currentKey = playerIdArray[2*i];
              playerIdeObject[currentKey] = playerIdArray[2*i+1]}
               console.log(playerIdArray, playerIdeObject);
               dArray = [[],[]];
               for (i = 0; i < playerIdArray.length/2; i++) {for (j = 0; j < homeD.length/3; j++){if (playerIdArray[2*i]===homeD[3*j]){dArray[0].push(playerIdArray[2*i+1])}
              else if (playerIdArray[2*i]===awayD[3*j]){dArray[1].push(playerIdArray[2*i+1])}}}
               console.log(dArray); pairingsArray = [[],[],[]];
               for (h = 0; h < 2; h++){
               for (i = 0; i < 3; i++) {for (j = 0; j < dArray[0].length; j++)
                {for (k = j + 1; k < dArray[0].length; k++) {tempTime = []; 
                  for (l = 0; l < dArray[0][j][i].length/2; l++) { 
                  for (m = 0; m < dArray[0][k][i].length/2; m++)
                  {if ((dArray[0][k][i][2*m] >= dArray[0][j][i][2*l]) && (dArray[0][k][i][2*m] <= dArray[0][j][i][2*l+1])) {
                    if (dArray[0][k][i][2*m+1] >= dArray[0][j][i][2*l + 1]) {tempTime.push(dArray[0][j][i][2*l + 1] - dArray[0][k][i][2*m])}
                    else {tempTime.push(dArray[0][k][i][2*m + 1] - dArray[0][k][i][2*m])}   
                  }
                  else if ((dArray[0][k][i][2*m] <= dArray[0][j][i][2*l]) && (dArray[0][k][i][2*m+1] >= dArray[0][j][i][2*l])) {
                    if (dArray[0][k][i][2*m+1] >= dArray[0][j][i][2*l+1]) {tempTime.push(dArray[0][j][i][2*l+1] - dArray[0][j][i][2*l])}
                    else {tempTime.push(dArray[0][k][i][2*m+1] - dArray[0][j][i][2*l])}
                  }}}   // end l loop
                shifts = 0; const sum = tempTime.reduce((partialSum, a) => partialSum + a, 0);
                      for (n = 0; n < tempTime.length; n++) { if (tempTime[n] >= 10) { shifts = shifts + 1 }
                      }
                      pairingsArray[i].push(sum); pairingsArray[i].push(shifts); // console.log(i, j, k, tempTime);
                }}}} // end i and h loop periods
                console.log(pairingsArray);
               
               firstDNumber.innerHTML = homeD[1] + ' ' + homeD[2];
               firstD1.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X';
               var firstD2 = document.createElement('p3');
                firstD2.innerHTML = pairingsArray[0][1] + ' sh ' + pairingsArray[0][0] + ' sec ' + '<br>' + pairingsArray[1][1] + ' sh ' + pairingsArray[1][0] + ' sec ' + '<br>' + pairingsArray[2][1] + ' sh ' + pairingsArray[2][0] + ' sec ';
                document.getElementById('firstD2').appendChild(firstD2);
                var firstD3 = document.createElement('p2');
                firstD3.innerHTML = pairingsArray[0][3] + ' sh ' + pairingsArray[0][2] + ' sec ' + '<br>' + pairingsArray[1][3] + ' sh ' + pairingsArray[1][2] + ' sec ' + '<br>' + pairingsArray[2][3] + ' sh ' + pairingsArray[2][2] + ' sec ';
                document.getElementById('firstD3').appendChild(firstD3);
                var firstD4 = document.createElement('p3');
                firstD4.innerHTML = pairingsArray[0][5] + ' sh ' + pairingsArray[0][4] + ' sec ' + '<br>' + pairingsArray[1][5] + ' sh ' + pairingsArray[1][4] + ' sec ' + '<br>' + pairingsArray[2][5] + ' sh ' + pairingsArray[2][4] + ' sec ';
                document.getElementById('firstD4').appendChild(firstD4);
                var firstD5 = document.createElement('p2');
                firstD5.innerHTML = pairingsArray[0][7] + ' sh ' + pairingsArray[0][6] + ' sec ' + '<br>' + pairingsArray[1][7] + ' sh ' + pairingsArray[1][6] + ' sec ' + '<br>' + pairingsArray[2][7] + ' sh ' + pairingsArray[2][6] + ' sec ';
                document.getElementById('firstD5').appendChild(firstD5);
               
               secondDNumber.innerHTML = homeD[4] + ' ' + homeD[5];
                secondD1.innerHTML = pairingsArray[0][1] + ' shifts ' + pairingsArray[0][0] + ' sec ' + '<br>' + pairingsArray[1][1] + ' sh ' + pairingsArray[1][0] + ' sec ' + '<br>' + pairingsArray[2][1] + ' sh ' + pairingsArray[2][0] + ' sec ';
                secondD2.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X';
                var secondD3 = document.createElement('p3');
                secondD3.innerHTML = pairingsArray[0][2*homeD.length/3-1] + ' shifts ' + pairingsArray[0][2*homeD.length/3-2] + ' sec ' + '<br>' + pairingsArray[1][2*homeD.length/3-1] + ' sh ' + pairingsArray[1][2*homeD.length/3-2] + ' sec ' + '<br>' + pairingsArray[2][2*homeD.length/3-1] + ' sh ' + pairingsArray[2][2*homeD.length/3-2] + ' sec ';
                console.log(2*homeD.length/3-1, pairingsArray[0][2*homeD.length/3-1], pairingsArray[0][2*homeD.length/3-2])
                var secondD4 = document.createElement('p2');
                secondD4.innerHTML = pairingsArray[0][2*homeD.length/3+1] + ' shifts ' + pairingsArray[0][2*homeD.length/3] + ' sec ' + '<br>' + pairingsArray[1][2*homeD.length/3+1] + ' sh ' + pairingsArray[1][2*homeD.length/3] + ' sec ' + '<br>' + pairingsArray[2][2*homeD.length/3+1] + ' sh ' + pairingsArray[2][2*homeD.length/3] + ' sec ';
                var secondD5 = document.createElement('p3');
                secondD5.innerHTML = pairingsArray[0][2*homeD.length/3+3] + ' shifts ' + pairingsArray[0][2*homeD.length/3+2] + ' sec ' + '<br>' + pairingsArray[1][2*homeD.length/3+3] + ' sh ' + pairingsArray[1][2*homeD.length/3+2] + ' sec ' + '<br>' + pairingsArray[2][2*homeD.length/3+3] + ' sh ' + pairingsArray[2][2*homeD.length/3+2] + ' sec ';
                thirdDNumber.innerHTML = homeD[7] + ' ' + homeD[8];
                thirdD1.innerHTML = pairingsArray[0][3] + ' shifts ' + pairingsArray[0][2] + ' sec ' + '<br>' + pairingsArray[1][3] + ' sh ' + pairingsArray[1][2] + ' sec ' + '<br>' + pairingsArray[2][3] + ' sh ' + pairingsArray[2][2] + ' sec ';
                thirdD3.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X'; thirdD2.innerHTML = secondD3.innerHTML;
                var thirdD4 = document.createElement('p3');
                var thirdD5 = document.createElement('p2');
                forthDNumber.innerHTML = homeD[10] + ' ' + homeD[11]; forthD2.innerHTML = secondD4.innerHTML
                forthD1.innerHTML = pairingsArray[0][5] + ' shifts ' + pairingsArray[0][4] + ' sec ' + '<br>' + pairingsArray[1][5] + ' sh ' + pairingsArray[1][4] + ' sec ' + '<br>' + pairingsArray[2][5] + ' sh ' + pairingsArray[2][4] + ' sec ';
                forthD4.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X';
                var forthD5 = document.createElement('p3');
                fifthDNumber.innerHTML = homeD[13] + ' ' + homeD[14];
                fifthD1.innerHTML = pairingsArray[0][7] + ' shifts ' + pairingsArray[0][6] + ' sec ' + '<br>' + pairingsArray[1][7] + ' sh ' + pairingsArray[1][6] + ' sec ' + '<br>' + pairingsArray[2][7] + ' sh ' + pairingsArray[2][6] + ' sec ';
                fifthD5.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X';                

                if (homeD.length == 15) {// secondD3.innerHTML = pairingsArray[0][9] + ' shifts ' + pairingsArray[0][8] + ' sec ' + '<br>' + pairingsArray[1][9] + ' sh ' + pairingsArray[1][8] + ' sec ' + '<br>' + pairingsArray[2][9] + ' sh ' + pairingsArray[2][8] + ' sec ';
                // secondD4.innerHTML = pairingsArray[0][11] + ' shifts ' + pairingsArray[0][10] + ' sec ' + '<br>' + pairingsArray[1][11] + ' sh ' + pairingsArray[1][10] + ' sec ' + '<br>' + pairingsArray[2][11] + ' sh ' + pairingsArray[2][10] + ' sec ';
                // secondD5.innerHTML = pairingsArray[0][13] + ' shifts ' + pairingsArray[0][12] + ' sec ' + '<br>' + pairingsArray[1][13] + ' sh ' + pairingsArray[1][12] + ' sec ' + '<br>' + pairingsArray[2][13] + ' sh ' + pairingsArray[2][12] + ' sec ';
                thirdD4.innerHTML = pairingsArray[0][15] + ' shifts ' + pairingsArray[0][14] + ' sec ' + '<br>' + pairingsArray[1][15] + ' sh ' + pairingsArray[1][14] + ' sec ' + '<br>' + pairingsArray[2][15] + ' sh ' + pairingsArray[2][14] + ' sec ';
                thirdD5.innerHTML = pairingsArray[0][17] + ' shifts ' + pairingsArray[0][16] + ' sec ' + '<br>' + pairingsArray[1][17] + ' sh ' + pairingsArray[1][16] + ' sec ' + '<br>' + pairingsArray[2][17] + ' sh ' + pairingsArray[2][16] + ' sec ';
                forthD5.innerHTML = pairingsArray[0][19] + ' shifts ' + pairingsArray[0][18] + ' sec ' + '<br>' + pairingsArray[1][19] + ' sh ' + pairingsArray[1][18] + ' sec ' + '<br>' + pairingsArray[2][19] + ' sh ' + pairingsArray[2][18] + ' sec ';
                } // end if five D men
                else if (homeD.length == 18) {var firstD6 = document.createElement('p3'); var secondD6 = document.createElement('p2'); var thirdD6 = document.createElement('p3'); var forthD6 = document.createElement('p2'); var fifthD6 = document.createElement('p3');
                sixthD6.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X'; sixthDNumber.innerHTML = homeD[16] + ' ' + homeD[17];
                firstD6.innerHTML = pairingsArray[0][9] + ' sh ' + pairingsArray[0][8] + ' sec ' + '<br>' + pairingsArray[1][9] + ' sh ' + pairingsArray[1][8] + ' sec ' + '<br>' + pairingsArray[2][9] + ' sh ' + pairingsArray[2][8] + ' sec ';
                // secondD3.innerHTML = pairingsArray[0][11] + ' shifts ' + pairingsArray[0][10] + ' sec ' + '<br>' + pairingsArray[1][11] + ' sh ' + pairingsArray[1][10] + ' sec ' + '<br>' + pairingsArray[2][11] + ' sh ' + pairingsArray[2][10] + ' sec ';
                // secondD4.innerHTML = pairingsArray[0][13] + ' shifts ' + pairingsArray[0][12] + ' sec ' + '<br>' + pairingsArray[1][13] + ' sh ' + pairingsArray[1][12] + ' sec ' + '<br>' + pairingsArray[2][13] + ' sh ' + pairingsArray[2][12] + ' sec ';
                // secondD5.innerHTML = pairingsArray[0][15] + ' shifts ' + pairingsArray[0][14] + ' sec ' + '<br>' + pairingsArray[1][15] + ' sh ' + pairingsArray[1][14] + ' sec ' + '<br>' + pairingsArray[2][15] + ' sh ' + pairingsArray[2][14] + ' sec ';
                secondD6.innerHTML = pairingsArray[0][17] + ' shifts ' + pairingsArray[0][16] + ' sec ' + '<br>' + pairingsArray[1][17] + ' sh ' + pairingsArray[1][16] + ' sec ' + '<br>' + pairingsArray[2][17] + ' sh ' + pairingsArray[2][16] + ' sec ';
                thirdD4.innerHTML = pairingsArray[0][19] + ' shifts ' + pairingsArray[0][18] + ' sec ' + '<br>' + pairingsArray[1][19] + ' sh ' + pairingsArray[1][18] + ' sec ' + '<br>' + pairingsArray[2][19] + ' sh ' + pairingsArray[2][18] + ' sec ';
                thirdD5.innerHTML = pairingsArray[0][21] + ' shifts ' + pairingsArray[0][20] + ' sec ' + '<br>' + pairingsArray[1][21] + ' sh ' + pairingsArray[1][20] + ' sec ' + '<br>' + pairingsArray[2][21] + ' sh ' + pairingsArray[2][20] + ' sec ';
                thirdD6.innerHTML = pairingsArray[0][23] + ' shifts ' + pairingsArray[0][22] + ' sec ' + '<br>' + pairingsArray[1][23] + ' sh ' + pairingsArray[1][22] + ' sec ' + '<br>' + pairingsArray[2][23] + ' sh ' + pairingsArray[2][22] + ' sec ';
                forthD5.innerHTML = pairingsArray[0][25] + ' shifts ' + pairingsArray[0][24] + ' sec ' + '<br>' + pairingsArray[1][25] + ' sh ' + pairingsArray[1][24] + ' sec ' + '<br>' + pairingsArray[2][25] + ' sh ' + pairingsArray[2][24] + ' sec ';
                forthD6.innerHTML = pairingsArray[0][27] + ' shifts ' + pairingsArray[0][26] + ' sec ' + '<br>' + pairingsArray[1][27] + ' sh ' + pairingsArray[1][26] + ' sec ' + '<br>' + pairingsArray[2][27] + ' sh ' + pairingsArray[2][26] + ' sec ';
                fifthD6.innerHTML = pairingsArray[0][29] + ' shifts ' + pairingsArray[0][28] + ' sec ' + '<br>' + pairingsArray[1][29] + ' sh ' + pairingsArray[1][28] + ' sec ' + '<br>' + pairingsArray[2][29] + ' sh ' + pairingsArray[2][28] + ' sec ';
                sixthD1.innerHTML = firstD6.innerHTML; sixthD2.innerHTML = secondD6.innerHTML; sixthD3.innerHTML = thirdD6.innerHTML; sixthD4.innerHTML = forthD6.innerHTML; sixthD5.innerHTML = fifthD6.innerHTML;
                thirdD2.innerHTML = secondD3.innerHTML; forthD2.innerHTML = secondD4.innerHTML; forthD3.innerHTML = thirdD4.innerHTML; fifthD2.innerHTML = secondD5.innerHTML; fifthD3.innerHTML = thirdD5.innerHTML; fifthD4.innerHTML = forthD5.innerHTML
                } // end if six D men
                else if (homeD.length == 21) {var firstD6 = document.createElement('p3'); var secondD6 = document.createElement('p2'); var thirdD6 = document.createElement('p3'); var forthD6 = document.createElement('p2'); var fifthD6 = document.createElement('p3');
                var firstD7 = document.createElement('p2'); var secondD7 = document.createElement('p3'); var thirdD7 = document.createElement('p2'); var forthD7 = document.createElement('p3'); var fifthD7 = document.createElement('p2'); var sixthD7 = document.createElement('p3');
                sixthD6.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X'; seventhD7.innerHTML = 'X' + '<br>' + 'X' + '<br>' + 'X'; sixthDNumber.innerHTML = homeD[16] + ' ' + homeD[17]; seventhDNumber.innerHTML = homeD[19] + ' ' + homeD[20];
                firstD6.innerHTML = pairingsArray[0][9] + ' sh ' + pairingsArray[0][8] + ' sec ' + '<br>' + pairingsArray[1][9] + ' sh ' + pairingsArray[1][8] + ' sec ' + '<br>' + pairingsArray[2][11] + ' sh ' + pairingsArray[2][10] + ' sec ';
                firstD7.innerHTML = pairingsArray[0][11] + ' sh ' + pairingsArray[0][10] + ' sec ' + '<br>' + pairingsArray[1][11] + ' sh ' + pairingsArray[1][10] + ' sec ' + '<br>' + pairingsArray[2][9] + ' sh ' + pairingsArray[2][8] + ' sec ';
                // secondD3.innerHTML = pairingsArray[0][13] + ' shifts ' + pairingsArray[0][12] + ' sec ' + '<br>' + pairingsArray[1][13] + ' sh ' + pairingsArray[1][12] + ' sec ' + '<br>' + pairingsArray[2][13] + ' sh ' + pairingsArray[2][12] + ' sec ';
                secondD4.innerHTML = pairingsArray[0][15] + ' shifts ' + pairingsArray[0][14] + ' sec ' + '<br>' + pairingsArray[1][15] + ' sh ' + pairingsArray[1][14] + ' sec ' + '<br>' + pairingsArray[2][15] + ' sh ' + pairingsArray[2][14] + ' sec ';
                secondD5.innerHTML = pairingsArray[0][17] + ' shifts ' + pairingsArray[0][16] + ' sec ' + '<br>' + pairingsArray[1][17] + ' sh ' + pairingsArray[1][16] + ' sec ' + '<br>' + pairingsArray[2][17] + ' sh ' + pairingsArray[2][16] + ' sec ';
                secondD6.innerHTML = pairingsArray[0][19] + ' shifts ' + pairingsArray[0][18] + ' sec ' + '<br>' + pairingsArray[1][19] + ' sh ' + pairingsArray[1][18] + ' sec ' + '<br>' + pairingsArray[2][19] + ' sh ' + pairingsArray[2][18] + ' sec ';
                secondD7.innerHTML = pairingsArray[0][21] + ' shifts ' + pairingsArray[0][20] + ' sec ' + '<br>' + pairingsArray[1][21] + ' sh ' + pairingsArray[1][20] + ' sec ' + '<br>' + pairingsArray[2][21] + ' sh ' + pairingsArray[2][20] + ' sec ';
                thirdD4.innerHTML = pairingsArray[0][23] + ' shifts ' + pairingsArray[0][22] + ' sec ' + '<br>' + pairingsArray[1][23] + ' sh ' + pairingsArray[1][22] + ' sec ' + '<br>' + pairingsArray[2][23] + ' sh ' + pairingsArray[2][22] + ' sec ';
                thirdD5.innerHTML = pairingsArray[0][25] + ' shifts ' + pairingsArray[0][24] + ' sec ' + '<br>' + pairingsArray[1][25] + ' sh ' + pairingsArray[1][24] + ' sec ' + '<br>' + pairingsArray[2][25] + ' sh ' + pairingsArray[2][24] + ' sec ';
                thirdD6.innerHTML = pairingsArray[0][27] + ' shifts ' + pairingsArray[0][26] + ' sec ' + '<br>' + pairingsArray[1][27] + ' sh ' + pairingsArray[1][26] + ' sec ' + '<br>' + pairingsArray[2][27] + ' sh ' + pairingsArray[2][26] + ' sec ';
                thirdD7.innerHTML = pairingsArray[0][29] + ' shifts ' + pairingsArray[0][28] + ' sec ' + '<br>' + pairingsArray[1][29] + ' sh ' + pairingsArray[1][28] + ' sec ' + '<br>' + pairingsArray[2][29] + ' sh ' + pairingsArray[2][28] + ' sec ';
                forthD5.innerHTML = pairingsArray[0][31] + ' shifts ' + pairingsArray[0][30] + ' sec ' + '<br>' + pairingsArray[1][31] + ' sh ' + pairingsArray[1][30] + ' sec ' + '<br>' + pairingsArray[2][31] + ' sh ' + pairingsArray[2][30] + ' sec ';
                forthD6.innerHTML = pairingsArray[0][33] + ' shifts ' + pairingsArray[0][32] + ' sec ' + '<br>' + pairingsArray[1][33] + ' sh ' + pairingsArray[1][32] + ' sec ' + '<br>' + pairingsArray[2][33] + ' sh ' + pairingsArray[2][33] + ' sec ';
                forthD7.innerHTML = pairingsArray[0][35] + ' shifts ' + pairingsArray[0][34] + ' sec ' + '<br>' + pairingsArray[1][35] + ' sh ' + pairingsArray[1][34] + ' sec ' + '<br>' + pairingsArray[2][35] + ' sh ' + pairingsArray[2][34] + ' sec ';
                fifthD6.innerHTML = pairingsArray[0][37] + ' shifts ' + pairingsArray[0][36] + ' sec ' + '<br>' + pairingsArray[1][37] + ' sh ' + pairingsArray[1][36] + ' sec ' + '<br>' + pairingsArray[2][37] + ' sh ' + pairingsArray[2][36] + ' sec ';
                fifthD7.innerHTML = pairingsArray[0][39] + ' shifts ' + pairingsArray[0][38] + ' sec ' + '<br>' + pairingsArray[1][39] + ' sh ' + pairingsArray[1][38] + ' sec ' + '<br>' + pairingsArray[2][39] + ' sh ' + pairingsArray[2][38] + ' sec ';
                sixthD7.innerHTML = pairingsArray[0][41] + ' shifts ' + pairingsArray[0][40] + ' sec ' + '<br>' + pairingsArray[1][41] + ' sh ' + pairingsArray[1][40] + ' sec ' + '<br>' + pairingsArray[2][41] + ' sh ' + pairingsArray[2][40] + ' sec ';
                seventhD1.innerHTML = firstD7.innerHTML; seventhD2.innerHTML = secondD7.innerHTML; seventhD3.innerHTML = thirdD7.innerHTML; seventhD4.innerHTML = forthD7.innerHTML; seventhD5.innerHTML = fifthD7.innerHTML; seventhD6.innerHTML = sixthD7.innerHTML;
                sixthD1.innerHTML = firstD6.innerHTML; sixthD2.innerHTML = secondD6.innerHTML; sixthD3.innerHTML = thirdD6.innerHTML; sixthD4.innerHTML = forthD6.innerHTML; sixthD5.innerHTML = fifthD6.innerHTML;
                thirdD2.innerHTML = secondD3.innerHTML; forthD2.innerHTML = secondD4.innerHTML; forthD3.innerHTML = thirdD4.innerHTML; fifthD2.innerHTML = secondD5.innerHTML; fifthD3.innerHTML = thirdD5.innerHTML; fifthD4.innerHTML = forthD5.innerHTML
                document.getElementById('firstD7').appendChild(firstD7); document.getElementById('secondD7').appendChild(secondD7); document.getElementById('thirdD7').appendChild(thirdD7); document.getElementById('forthD7').appendChild(forthD7); document.getElementById('fifthD7').appendChild(fifthD7); document.getElementById('sixthD7').appendChild(sixthD7);
              } // end if seven D men
                
                document.getElementById('firstD6').appendChild(firstD6); 
                document.getElementById('secondD3').appendChild(secondD3); document.getElementById('secondD4').appendChild(secondD4); document.getElementById('secondD5').appendChild(secondD5); document.getElementById('secondD6').appendChild(secondD6); document.getElementById('thirdD4').appendChild(thirdD4);
                document.getElementById('thirdD5').appendChild(thirdD5); document.getElementById('thirdD6').appendChild(thirdD6); document.getElementById('forthD5').appendChild(forthD5); document.getElementById('forthD6').appendChild(forthD6); document.getElementById('fifthD6').appendChild(fifthD6);
          }); // end second .then shifts
          }); // end second .then standings;
          }); // end second .then gamecenter;
      } // end displayGameData        
      
      

    } // end second .then from getinputvalue
    );
} // end getInput Value function $65k at 4.50% on 3/27
// check tix casa. climb sierra blanca; split functions
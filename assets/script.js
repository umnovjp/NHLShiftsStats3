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
        gameName.innerHTML = 'Game ' + i + ': ' + data.gameWeek[0].games[i].awayTeam.abbrev + 'W' + 'L' + ' O vs ' + data.gameWeek[0].games[i].homeTeam.abbrev + 'W' + 'L' + 'O';
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
            const homeF = []; const awayF = []; const homeD = []; const awayD = []; const homeG = []; const awayG = []; 
            console.log(data.boxscore.playerByGameStats.awayTeam.forwards, data.boxscore.playerByGameStats.awayTeam.defense, data.boxscore.playerByGameStats.awayTeam.goalies, data.boxscore.playerByGameStats.homeTeam.forwards, data.boxscore.playerByGameStats.awayTeam.defense, data.boxscore.playerByGameStats.awayTeam.goalies);
            var obj = data.boxscore.playerByGameStats.homeTeam.forwards; var keys = Object.keys(obj);
            for (i = 0; i < keys.length; i++) { var val = obj[keys[i]]; homeF.push(val.playerId, val.sweaterNumber, val.name.default) }
            var obj = data.boxscore.playerByGameStats.homeTeam.defense; var keys = Object.keys(obj);
            for (i = 0; i < keys.length; i++) { var val = obj[keys[i]]; homeD.push(val.playerId, val.sweaterNumber, val.name.default) }
            var obj = data.boxscore.playerByGameStats.homeTeam.goalies; var keys = Object.keys(obj);
            for (i = 0; i < keys.length; i++) { var val = obj[keys[i]]; homeG.push(val.playerId, val.sweaterNumber, val.name.default) }
            var obj = data.boxscore.playerByGameStats.awayTeam.forwards; var keys = Object.keys(obj);
            for (i = 0; i < keys.length; i++) { var val = obj[keys[i]]; awayF.push(val.playerId, val.sweaterNumber, val.name.default) }
            var obj = data.boxscore.playerByGameStats.awayTeam.defense; var keys = Object.keys(obj);
            for (i = 0; i < keys.length; i++) { var val = obj[keys[i]]; awayD.push(val.playerId, val.sweaterNumber, val.name.default) }
            var obj = data.boxscore.playerByGameStats.awayTeam.goalies; var keys = Object.keys(obj);
            for (i = 0; i < keys.length; i++) { var val = obj[keys[i]]; awayG.push(val.playerId, val.sweaterNumber, val.name.default) }
            console.log(homeF, homeD, homeG, awayF, awayD, awayF)

            var shiftsURL = 'https://cors-anywhere.herokuapp.com/https://api.nhle.com/stats/rest/en/shiftcharts?cayenneExp=gameId=' + gameId;
            fetch(shiftsURL, {
              "method": "GET", "headers": {}
            })
              .then(function (response) {
                return response.json();
              })
              .then(function (data_shifts) {
                console.log(data_shifts);
               
          }); // end second .then shifts

          }); // end second .then standings
          }); // end second .then gamecenter
      } // end displayGameData         

    } // end second .then from getinputvalue
    );
} // end getInput Value function $65k at 4.50% on 3/27
// check tix casa. climb sierra blanca; split functions
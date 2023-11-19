var scheduleURL = 'https://cors-anywhere.herokuapp.com/https://api-web.nhle.com/v1/schedule/' + formatted;
        fetch(scheduleURLURL, { "method": "GET", "headers": { }
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (data) { 
            console.log('schedule', data);            
          });
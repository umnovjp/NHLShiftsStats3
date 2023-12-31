# NHLShiftsStats3
## Background
Original repo is located at https://github.com/umnovjp/NHLShiftStats1. It was working in 98% of games. But with NHL changing its APIs without any announcement I realized that it was better to start new repo from scratch instead of fixing original one. One of the reasons is that trying to fix issues with original repo created too many new hurdles. Like fixing one led to a new one. And as script progressed, I knew I am on the right path after 2 years of JavaScript experience. What I could not accomplish with 1200 lines of code last year, I did with just 400 lines. Compare script.js files! Another NHL stats repo https://github.com/umnovjp/NHLShiftStats1 will be easier to fix. 
## Usage
First thing is to select a date. And remember to select date when games actually were played. ![calendar](image.png) 
Then you will be prompted to select a game. Press one button to select a game. ![select a game](image-1.png) Separate tables will be displayed for home and away team defensemen. ![Alt text](image-2.png) You can easy determine defensive pairs from this table. It is not that easy for forward lines. Because lines of three forwards are not that easy to display in a 2D table. Also, special teams are frequently played with 2 or 4 forwards depending on if it is penalty kill or power play. This script limits 5x5 play as play with 2D and 3F only. 
## Known Failures
Some game data are not displayed correctly because of obvious errors in NHL API data. Example is STL at FLA game on 12/21/2023 where data for many shifts are duplicated. Another example is TOR at CBJ game on 12/23/2023 where many shifts are duplicated while some non existing overlapping shifts are added. Game CBJ at NJD on 12/28/2023 generated unreliable results for DMen because there were 3 of them on ice frequently. Most likely one D(#2?) was dressed as an F, but game report still counts him as D. Game CHI at DAL on 12/29 can determine only one CHI line because of early injury to one F. They changed line combinations continuously leaving only one line intact. 
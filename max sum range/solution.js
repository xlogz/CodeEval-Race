var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  var getDays = line.indexOf(";");
  var days = line.slice(0,getDays);
  var gains = line.slice(getDays+1).replace(/[ ,]+/g, ",");
  gains = gains.split(",");
  var currentSum = 0;
  var count = 0;
  for(var i = 0; i < gains.length-days+1; i++){
    for(var b = 0; b < days; b++){
      count += parseInt(gains[b+i]);
    }
    if(count > currentSum){
      currentSum = count;
    }
    count = 0;
  }
  return currentSum;
}

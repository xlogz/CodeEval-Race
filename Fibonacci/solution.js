var fs  = require("fs");
var filename = process.argv[2] || 'test.txt';

fs.readFileSync(filename).toString().split('\n').forEach(function (line) {
  if (line != "") {
    console.log(solution(line));
  }
});

function solution(line){
  var recurse = function(num){
    if(line === 0){
      return 0;
    }else if(line === 2){
      return 1;
    }else{
      return recurse(num-1) + recurse(num-2);
    }
  };
  
  return recurse(line);
}


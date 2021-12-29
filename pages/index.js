const netstat = require('node-netstat');
 
netstat.parsers.linux = netstat.parserFactories.linux({
  parseName: true,
});
 
netstat({}, item => console.log(item));

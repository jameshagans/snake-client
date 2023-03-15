const net = require("net"); 

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  //interpert incoming data as text
  conn.setEncoding("utf-8")

  conn.on("data", (data) => {
  // code that does something when data sent by the server
  console.log(data)
});
  
  return conn;
}

console.log('Connecting...'); 
connect()
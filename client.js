const net = require("net"); 

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  //interpert incoming data as text
  conn.setEncoding("utf-8")

  //send a message to our terminal when connected to server
  conn.on('connect', () => {
    console.log('Suscssfully connected!')
  })

  //Set Name 
  conn.on('connect', () => {
    conn.write( "Name: JJH")
    // setInterval(() => {
    //   conn.write( "Move: up");
    // }, 500)
  })
  


  //take in any data sent by server
  conn.on("data", (data) => {
  // code that does something when data sent by the server
  console.log(data)
});


  
  return conn;
}

module.exports = connect; 
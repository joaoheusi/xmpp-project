// Iot Node - Proccess

// Import xmpp lib dependency
const xmpp = require("simple-xmpp");

// When online logs that it has successfully connected
xmpp.on("online", (data) => {
  console.log(`Conectado como ${data.jid.user}`);
  send();
});

function get_current_temperature() {
  date = Date.now();
  random = Math.random() * (1 - 0.95) + 0.95;
  divider = 66666666666;
  temperature = (date / divider) * random;
  return temperature.toFixed(2);
}

function send() {
  setTimeout(send, 5000);
  xmpp.send(
    "user@localhost",
    `SAO - Current temperature = ${get_current_temperature()}`
  );
}

// If any error occurs, program logs the error
xmpp.on("error", (error) => console.log(`something went wrong!${error} `));

// Calls connect function with the specified XMPP user info
xmpp.connect({
  jid: "iot-node-1@localhost",
  password: "password",
  host: "localhost",
  port: 5222,
});

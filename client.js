// User - Client - Proccess

// Import xmpp lib dependency
const xmpp = require("simple-xmpp");

function get_from_user(from_message) {
  return from_message.split("@")[0];
}

// When online logs that it has successfully connected
xmpp.on("online", (data) => {
  console.log(`Conectado como ${data.jid.user}`);
});

// Logs the message received when event "chat" happens
xmpp.on("chat", (from, message) => {
  time = new Date();
  message_timestamp = new Intl.DateTimeFormat("en-US", {
    dateStyle: "short",
    timeStyle: "medium",
  }).format(time);
  console.log(`${message_timestamp} [${get_from_user(from)}]: ${message}`);
});

// If any error occurs, program logs the error
xmpp.on("error", (error) => console.log(`something went wrong!${error} `));

// Calls connect function with the specified XMPP user info
xmpp.connect({
  jid: "user@localhost",
  password: "password",
  host: "localhost",
  port: 5222,
});

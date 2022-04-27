import MongoDb from "./services/MongoDb";
import MQTT from "./services/MQTT";

import config from "./config";

MongoDb.connect({
  username: config.dbUser,
  password: config.dbPass,
  host: config.dbHost,
  dbName: config.dbName,
});

new MQTT({
  username: config.mqttBrokerUser,
  password: config.mqttBrokerPass,
  host: config.mqttBrokerHost,
  port: config.mqttBrokerPort,
});

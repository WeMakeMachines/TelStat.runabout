import mqtt from "mqtt";

import mqqtEvents from "./mqqtEvents";

interface MQTT_ConnectionOptions {
  host: string;
  username: string;
  password: string;
  port: number;
}

export default class MQTT {
  public readonly client: mqtt.Client;

  constructor({ host, username, password, port }: MQTT_ConnectionOptions) {
    this.client = mqtt.connect(host, {
      username,
      password,
      port,
    });

    mqqtEvents(this.client);
  }
}

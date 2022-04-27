import dotenv, { DotenvParseOutput } from "dotenv";

interface EnvironmentVariables extends DotenvParseOutput {
  MONGO_DB_HOST: string;
  MONGO_DB_NAME: string;
  MONGO_DB_USER: string;
  MONGO_DB_PASS: string;
  MQTT_BROKER_HOST: string;
  MQTT_BROKER_PORT: string;
  MQTT_BROKER_USER: string;
  MQTT_BROKER_PASS: string;
}

class ConfigError extends Error {}

class Config {
  public readonly namespace = "app.telstat.runabout";
  public readonly dbHost: string;
  public readonly dbName: string;
  public readonly dbUser: string;
  public readonly dbPass: string;
  public readonly mqttBrokerHost: string;
  public readonly mqttBrokerPort: number;
  public readonly mqttBrokerUser: string;
  public readonly mqttBrokerPass: string;

  constructor(props: EnvironmentVariables) {
    this.dbHost = props.MONGO_DB_HOST;
    this.dbName = props.MONGO_DB_NAME;
    this.dbUser = props.MONGO_DB_USER;
    this.dbPass = props.MONGO_DB_PASS;
    this.mqttBrokerHost = props.MQTT_BROKER_HOST;
    this.mqttBrokerPort = Number(props.MQTT_BROKER_PORT) || 1883;
    this.mqttBrokerUser = props.MQTT_BROKER_USER;
    this.mqttBrokerPass = props.MQTT_BROKER_PASS;
  }
}

const { parsed } = dotenv.config();

const config = new Config(parsed as EnvironmentVariables);

export default config;

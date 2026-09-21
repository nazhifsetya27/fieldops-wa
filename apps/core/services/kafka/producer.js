import { kafka } from "./index";

const producer = kafka.producer();

await producer.connect();
await producer.send({
  topic: "test-topic",
  messages: [{ value: "hello kafka js user!" }],
});

await producer.disconnect();

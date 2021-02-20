const messages = ["Carolina", "Julio", "Paulina", "Sofia", "Hector"];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = { randomMsg };

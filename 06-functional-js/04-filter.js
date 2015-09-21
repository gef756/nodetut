function getShortMessages(messages) {
  return messages.filter(function (msgObj) {
    return msgObj.message.length < 50;
  }).map(function (msgObj) {
    return msgObj.message;
  });
}

module.exports = getShortMessages;

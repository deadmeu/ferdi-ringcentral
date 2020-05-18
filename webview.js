"use strict";

module.exports = Ferdi => {
  const getMessages = function getMessages() {
    // TODO: Insert your notification-finding code here
    Ferdi.setBadge(0, 0);
  };

  Ferdi.loop(getMessages);
};

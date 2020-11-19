import axios from "axios";

export default {
  // Saves a message to the database
  saveMessage: function(messageData) {
    return axios.post("/messages", messageData);
  }
};

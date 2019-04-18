// custom library to generate API response
let generateResponse = (err, message, status, data) => {
    let response = {
      error: err,
      message: message,
      status: status,
      data: data
    }
    return response
  }
  
  // Export the custom library
  module.exports = {
    generateResponse: generateResponse
  }
  
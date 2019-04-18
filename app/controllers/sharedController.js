let generateMessage = (req, res) => {
    res.send('Run: http://127.0.0.1:3000/setcookie/(your_key)/(your_value)   &   http://127.0.0.1:3000/getcookie/(your_key)');
}

// export controller
module.exports = {
    generateMessage: generateMessage
}
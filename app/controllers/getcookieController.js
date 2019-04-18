let getValue = (req, res) => {
    if(req.cookies[req.params.key]){
        res.send('cookie found, value: ' + req.cookies[req.params.key]);
    }else{
        res.send('cookie not found');
    }
}

// export controller
module.exports = {
    getValue: getValue
}
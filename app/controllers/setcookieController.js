let setValue= (req, res) => {
    res.cookie(req.params.key, req.params.val).send('cookie set: {' + req.params.key + ' : ' + req.params.val + '}'); 
}

// export controller
module.exports = {
    setValue: setValue
}
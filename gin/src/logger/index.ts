module.exports = (options) => {
    return (req, res, next) => {
        if(req.method == 'OPTIONS')
        {
            res.status(200).send();
        }
        else
        {
            console.log('%s request from %s to %s', req.method, req.ip, req.path);
        }

        next();
    };
};
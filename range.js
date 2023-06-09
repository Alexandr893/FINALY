module.exports = (req, response, next) => {
    response.header('Content-Range','Access-Control-Expose-Headers','products 0-10/10');
    next()
};
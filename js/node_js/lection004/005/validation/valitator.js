function checkParams(schema) {
    return (req, res, next) => {
        const validatationResult = schema.validate(req.params);
        if (validatationResult.error) {
            return res.status(400).send(validatationResult.error.details);
        };
        next();
    }
}

function checkBody(schema) {
    return (req, res, next) => {
        const validatationResult = schema.validate(req.body);
        if (validatationResult.error) {
            return res.status(400).send(validatationResult.error.details);
        };
        next();
    }
}

module.exports = { checkParams, checkBody };
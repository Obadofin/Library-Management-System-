const validate = (requireFields = []) => {
    return (req, res, next) => {
        const missingFields = [];

        requireFields.forEach(field => {
            if (
                req.body[field] === undefined ||
                req.body[field] === null ||
                req.body[field] === ''
            ) {
                missingFields.push(field);
            }
        });

        if (missingFields.length > 0) {
            return res.status(400);
            throw new Error(
                `Missing required fields: ${missingFields.join(', ')}`);
        }

        next();
    };
};

module.exports = validate;

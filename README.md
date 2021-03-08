# Validation with Joi

## sample schema

```javascript
const Joi = require('joi');

const schemaValidation = Joi.object({
    title: Joi.string().max(15).required(),
    nota: Joi.string().min(5).max(50)
});

module.exports = schemaValidation;

```

## sample route

```javascript
const Router = require('express');
const router = Router();

const schemaValidation = require('../controllers/validation')

router.post('/', async (req, res) => {
    try {
        await schemaValidation.validateAsync({
            title: req.body.title,
            nota: req.body.nota
        });
        const nota = await req.body;
        res.json({ message: "Nota Recibida", nota })
    } catch (error) {
        res.status(500).json({ error: error.details[0].message });
    }
})

module.exports = router;

```
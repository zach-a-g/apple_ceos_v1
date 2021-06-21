const express = require(`express`);
const router = express.Router();

router.get(`/`, (request, response) => {
    response.render(`template`, {
        locals: {
            title: `Home Page`
        },
        partials: {
            body: `partials/home`
        }
    })
})

module.exports = router;
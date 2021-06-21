const express = require(`express`);
const router = express.Router();

const ceoModel = require(`../model/db`)


router.get(`/:slug?`, (request, response) => {
    if (!!request.params.slug) {
        const executive = ceoModel.find(ceo => ceo.slug === require.params.slug);
        response.render(`template`, {
            locals: {
                title: `CEO DETAILS`,
                ceo: executive
            },
            partials: {
                body: `partials/ceoDetails`
            }
        })

    } else {
        response.render(`template`, {
            locals: {
                title: `CEO LIST`,
                data: ceoModel
            },
            partials: {
                body: `partials/ceoList`
            }
        });
    }
})

module.exports = router;
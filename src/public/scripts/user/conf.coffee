ajaxUtil = require('common').ajaxUtil

module.exports = () -> 

    ajaxUtil.confAjax 
        failure: (err) -> util.error err
        labelTechnicalError: "Erreur téchnique"

    ajaxUtil.confReferentiel 
        url: window.referentielUrl
        failure: (err) -> util.error err
        labelTechnicalError: "Erreur téchnique"
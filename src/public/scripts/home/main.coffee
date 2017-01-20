util = require('common').util
ajaxUtil = require('common').ajaxUtil
$ = require 'jquery'

initAjax = () -> 
    

$(document).ready () -> 
    util.setDebug true

    ajaxUtil.confAjax {
        failure: (err) -> util.error err
        labelTechnicalError: "Erreur téchnique"
    }

    ajaxUtil.confReferentiel {
        url: window.getAllReferentielUrl
        failure: (err) -> util.error err
        labelTechnicalError: "Erreur téchnique"
    }

    ajaxUtil.toSend {
        url: window.getAllUsersUrl,
        success: (resp) -> util.debug resp
    }

    ajaxUtil.toReferentiel 'pays', (resp) -> util.debug resp
    
    



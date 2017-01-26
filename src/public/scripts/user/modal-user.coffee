Vue  = require 'vue'
util = require('common').util

module.exports =
    el: '#modal_user'
    data:
        titre: "User"
        show: false
        userData: {}
        actionSave: null
        nom: null
        etatNom: 'clean'
        prenom: null
        etatPrenom: 'clean'
    methods: 
        validForm: () -> 
            results = []
            if resultNom = this.validNom() then results = results.concat resultNom
            if resultPrenom = this.validPrenom() then results = results.concat resultPrenom
            if results.length is 0 then null else results
        
        validNom: () -> 
            if util.isBlank this.nom then this.etatNom = 'error';['name is blank'] else this.etatNom = 'success';null
        
        validPrenom: () -> 
            if util.isBlank this.prenom then this.etatPrenom = 'error';['prenom is blank'] else this.etatPrenom = 'success';null
        
        close: () -> this.clean(); this.actionSave = null; this.show = false
        
        clean: () -> this.user = {}; this.etatNom = this.etatPrenom = 'clean'
        
        save: () -> if this.validForm() is null then this.actionSave(this.user); this.close() 
        
    computed:
        user:
            get: () -> this.userData.nom = this.nom; this.userData.prenom = this.prenom; this.userData
            set: (value) -> 
                this.userData = if value then value else {}
                this.nom = this.userData.nom; this.prenom = this.userData.prenom
    
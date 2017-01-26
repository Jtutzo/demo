common     = require 'common'
util       = common.util
ajaxUtil   = common.ajaxUtil
dateUtil   = common.dateUtil
$          = require 'jquery'
resources  = require './resources'
conf       = require './conf'
_          = require 'underscore'
Vue        = require 'vue'
components = require '../../components'

Vue.component 'modal', components.modalBootstrap
Vue.component 'edit-text', components.editText

VmModal = require './modal-user'

$(document).ready () -> 

    conf()
    
    window.vmModal = new Vue VmModal
    
    window.vm = new Vue 
        el: '#app',
        data: 
            users: []
            idUserChecked : []
        methods:
            loadUsers: () -> (resources.loadUsers (res) -> vm.$data.users = res;true);true
            
            toFormatDate: (date, format) -> (date = dateUtil.toBuild date);dateUtil.toFormat date, format
            
            addUser: () -> 
                vmModal.titre = "Add User"
                vmModal.show = true
                vmModal.user = {}
                self = this
                vmModal.actionSave = (user) -> resources.saveUser user, (user) -> self.users.push(user)
            
            updateUser: () -> 
                util.argumentException this.idUserChecked.length isnt 1, "user checked must be equals to 1 (update user)" 
                vmModal.titre = "Update User"
                vmModal.show = true; vmModal.user = (_.where this.users, {id: this.idUserChecked[0]})[0]
                vmModal.actionSave = (user) -> resources.saveUser user
            
            removeUser: () -> 
                util.argumentException this.idUserChecked.length < 0, "user checked must be superior to 0 (remove users)" 
                self = this
                resources.removeUser this.idUserChecked, (idUsers) -> 
                    self.users = _.reject self.users, (value) -> _.contains idUsers, value.id
                    self.checkAll = false
            
        computed: 
            checkAll: 
                get: () -> this.idUserChecked.length > 0
                set: (value) -> 
                    if value then this.idUserChecked = _.map this.users, (user) -> user.id
                    else this.idUserChecked = []
            
            disableButtonUpdate: () -> return this.idUserChecked.length isnt 1
        
            disableButtonRemove: () -> return this.idUserChecked.length is 0

    resources.loadUsers (res) -> vm.$data.users = res

    
    



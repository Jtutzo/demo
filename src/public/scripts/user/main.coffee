common    = require 'common'
util      = common.util
ajaxUtil  = common.ajaxUtil
dateUtil  = common.dateUtil
$         = require 'jquery'
resources = require './resources'
conf      = require './conf'
_         = require 'underscore'
Vue       = require 'vue'
require 'bootstrap'

(require '../../components/modal')()

$(document).ready () -> 

    conf()
    
    window.vm = new Vue 
        el: '#app',
        data: 
            users: []
            idUserChecked : []
            allIsChecked: false,
            showModal: false
        methods:
            loadUsers: () -> (resources.loadUsers (res) -> vm.$data.users = res;true);true
            toFormatDate: (date, format) -> (date = dateUtil.toBuild date);dateUtil.toFormat date, format
        computed: 
            checkAll: 
                get: () -> this.allIsChecked
                set: (value) -> 
                    this.allIsChecked = value
                    if value then this.idUserChecked = _.map this.users, (user) -> user.id
                    else this.idUserChecked = []
            
    resources.loadUsers (res) -> vm.$data.users = res
    
    ###
    window.vmModal = new Vue 
        el :'#modal_user'
        data: 
            showModal: false
    ###

    
    



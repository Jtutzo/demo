template = require './template.handlebars'
Vue      = require 'vue'

module.exports = () -> 
    
    Vue.component 'modal', 
        template: template(),
        props: ['show'],
        methods: 
            close: () -> this.show = false
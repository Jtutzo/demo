<template>
    <div :class="[classDiv, etatDiv]" :id="id" v-show="show">
        <label :class="classLabel" v-show="showLabel">{{labelData}}</label>
        <div :class="classControl">
            <input :class="classInput" :value="value" @input="$emit('input', $event.target.value)" :type="type" :placeholder="placeholder" @blur="blur" @focus="focus">
        </div>
    </div>
</template>

<script>
    
    var _    = require('underscore');
    var util = require('common').util
    
    var defaultId = "edit-text";
    var countId   = 0;
    
    var hasErrorClass   = "text-danger has-error";
    var hasSuccessClass = "text-success has-success";
    
    module.exports = {
        
        /**
        * Propriétés
        */
        props: {
            id: {
                type: String,
                default: function() {
                    return defaultId + "-" + countId++;
                }
            },
            classDiv: {
                type: String,
                default: "form-group row"
            },
            classLabel: {
                type: String,
                default: "col-form-label"
            },
            classControl: {
                type: String,
                default: "col-form-label"
            },
            classInput: {
                type: String,
                default: "form-control"
            },
            required: {
                type: [Boolean, String],
                default: false
            },
            maxLength: Number,
            type: {
                type: String,
                default: "text",
                validator: function(value) {
                    return _.contains(["text", "number", "password", "tel", "email"], value);
                }
            },
            min: Number,
            max: Number,
            label: String,
            placeholder: String,
            value: {
                required: true
            },
            show: {
                Boolean,
                default: true
            },
            enable: Boolean,
            etat: {
                type: String,
                default: "clean",
                validator: function(value) {
                    return _.contains(["clean", "error", "success"], value);
                }
            }
        },
        
        /**
        * Data
        */
        data: function() {
            return {
                showLabel: util.isNotNullOrUndefined(this.label),
                labelData: (util.isNotNullOrUndefined(this.label) && this.required)?this.label + " *":this.label,
                etatDiv: (this.etat === 'success'?hasSuccessClass:(this.etat === 'error'?hasErrorClass:''))
            }
        },
        
        /**
        * Méthodes
        */
        methods: {
            blur: function() {
                this.$emit("blur");
            },
            focus: function() {
                this.$emit("focus");
            }
        },
        
        /**
        * Watch
        */
        watch: {
            etat: function(value) {
                if (value === 'clean') {
                    this.etatDiv = '';
                } else if (value === 'success') {
                    this.etatDiv = hasSuccessClass;
                } else if (value === 'error') {
                    this.etatDiv = hasErrorClass;
                }
            }
        }
    }
    
</script>

<style scoped>

</style>
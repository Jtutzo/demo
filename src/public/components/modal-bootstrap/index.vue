<template>  
    <div class="modal fade" :id="id" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" @click="$emit('close')"><span aria-hidden="true">&times;</span></button>
                    <slot name="header">
                        default header
                    </slot>
                </div>
                <div class="modal-body">
                    <slot name="body">
                        default body
                    </slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer">
                        default footer  
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    $ = require('jquery');
    require('bootstrap');
    
     module.exports = {
        mounted: function () {
            var self = this;
            $(this.$el).on('hide.bs.modal', function(e) {
                e.stopPropagation();
                self.$emit('close');
            });
        },
        props: ['id', 'show'],
        watch: {
            show: function(value) {
                if (value) {
                    $('<a data-toggle="modal" href="#' + this.id + '"></a>').appendTo("#" + this.id).click().remove()
                } else {
                    $('<a data-dismiss="modal"></a>').appendTo("#" + this.id).click().remove()
                }
            }
        }
    }
</script>

<style scoped></style>
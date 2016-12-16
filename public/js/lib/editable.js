componentUtil.register('editable-text', {
    structModel: [
        {name: 'id', type: 'string', default: null, required: false, mustBeObs: false, base: null, description: "id du component"},
        {name: 'classDiv', type: 'string', default: null, required: false, mustBeObs: false, base: "form-group row", description: "Class du composant"},
        {name: 'classLabel', type: 'string', default: "col-sm-2", required: false, mustBeObs: false, base: "col-form-label", description: "Class du label"},
        {name: 'classControl', type: 'string', default: "col-sm-10", required: false, mustBeObs: false, base: null, description: "Class de la div de control"},
        {name: 'required', type: 'boolean', default: false, required: false, mustBeObs: true, base: null, description: "Si le champ est obligatoire"},
        {name: 'maxLength', type: 'number', default: null, required: false, mustBeObs: false, base: null, description: "taille max du champ de saisi"},
        {name: 'format', type: 'string', default: "text", required: false, mustBeObs: false, base: null, description: "Format de la valeur"},
        {name: 'validation', type: 'function', default: null, required: false, mustBeObs: false, base: null, description: "Méthode de validation"},
        {name: 'min', type: 'number', default: null, required: false, mustBeObs: false, base: null, description: "Valeur min d'un nombre"},
        {name: 'max', type: 'number', default: null, required: false, mustBeObs: false, base: null, description: "Valeur max d'un nombre"},
        {name: 'label', type: 'string', default: null, required: false, mustBeObs: false, base: null, description: "libelle du champ"},
        {name: 'placeholder', type: 'string', default: null, required: false, mustBeObs: false, base: null, description: "Placeholder du champ"},
        {name: 'value', type: 'NA', default: null, required: false, mustBeObs: true, base: null, description: "Valeur du composant"},
        {name: 'visible', type: 'boolean', default: true, required: false, mustBeObs: true, base: null, description: "Si le composant est visible"},
        {name: 'enable', type: 'boolean', default: true, required: false, mustBeObs: true, base: null, description: "Si le composant autorise les modifications"}
    ],
    viewModel: function(self, params) {

        if (typeof self['label'] === 'string' && self['label'].trim() != 0) {
            self['visibleLabel'] = ko.observable(true);
            if (self.required() === true) {
                self['label'] += " *";
            }
        } else {
            self['visibleLabel'] = ko.observable(false);
        }

        self['error'] = ko.observable(false);

        self['blur'] = function() {
            var error = editableUtil.validation(self, self.value());
            self.error((error !== null)?true:false);
        }

        self['focus'] = function() {
            self.error(false);
        }

    },
    template: { element: 'editable-text-template' }
});

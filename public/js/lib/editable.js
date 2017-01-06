

componentUtil.register('editable-text', {
    structModel: [
        {name: 'id', type: 'string', default: null, required: false, mustBeObs: false, base: null, description: "id du component"},
        {name: 'classDiv', type: 'string', default: null, required: false, mustBeObs: false, base: "form-group row", description: "Class du composant"},
        {name: 'classLabel', type: 'string', default: "col-sm-2", required: false, mustBeObs: false, base: "col-form-label", description: "Class du label"},
        {name: 'classControl', type: 'string', default: "col-sm-10", required: false, mustBeObs: false, base: null, description: "Class de la div de control"},
        {name: 'required', type: 'boolean', default: false, required: false, mustBeObs: false, base: null, description: "Si le champ est obligatoire"},
        {name: 'maxLength', type: 'number', default: null, required: false, mustBeObs: false, base: null, description: "taille max du champ de saisi"},
        {name: 'format', type: 'string', default: "text", required: false, mustBeObs: false, base: null, description: "Format de la valeur"},
        {name: 'validation', type: 'function', default: null, required: false, mustBeObs: false, base: null, description: "Méthode de validation"},
        {name: 'min', type: 'number', default: null, required: false, mustBeObs: false, base: null, description: "Valeur min d'un nombre"},
        {name: 'max', type: 'number', default: null, required: false, mustBeObs: false, base: null, description: "Valeur max d'un nombre"},
        {name: 'label', type: 'string', default: null, required: false, mustBeObs: false, base: null, description: "libelle du champ"},
        {name: 'placeholder', type: 'string', default: null, required: false, mustBeObs: false, base: null, description: "Placeholder du champ"},
        {name: 'value', type: 'NA', default: null, required: false, mustBeObs: true, base: null, description: "Valeur du composant"},
        {name: 'visible', type: 'boolean', default: true, required: false, mustBeObs: true, base: null, description: "Si le composant est visible"},
        {name: 'enable', type: 'boolean', default: true, required: false, mustBeObs: true, base: null, description: "Si le composant autorise les modifications"},
        {name: 'error', type: 'boolean', default: false, required: false, mustBeObs: true, base: null, description: "Si le champ est en erreur"}
    ],
    viewModel: function(self, params) {

        if (typeof self['label'] === 'string' && self['label'].trim() != 0) {
            self['visibleLabel'] = ko.observable(true);
            if (self['required'] === true) {
                self['label'] += " *";
            }
        } else {
            self['visibleLabel'] = ko.observable(false);
        }

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

componentUtil.register('editable-select', {
    structModel: [
        {name: 'id', type: 'string', default: null, required: false, mustBeObs: false, base: null, description: "id du component"},
        {name: 'classDiv', type: 'string', default: null, required: false, mustBeObs: false, base: "form-group row", description: "Class du composant"},
        {name: 'classLabel', type: 'string', default: "col-sm-2", required: false, mustBeObs: false, base: "col-form-label", description: "Class du label"},
        {name: 'classControl', type: 'string', default: "col-sm-10", required: false, mustBeObs: false, base: null, description: "Class de la div de control"},
        {name: 'required', type: 'boolean', default: false, required: false, mustBeObs: false, base: null, description: "Si le champ est obligatoire"},
        {name: 'multiple', type: 'boolean', default: false, required: false, mustBeObs: false, base: null, description: "simple ou multiple"},
        {name: 'maxChoice', type: 'number', default: 10, required: false, mustBeObs: false, base: null, description: "Maximum de choix pour un select de type multiple"},
        {name: 'reference', type: 'string', default: null, required: false, mustBeObs: false, base: null, description: "Referrence à afficher (si c'est un objet)"},
        {name: 'url', type: 'string', default: null, required: false, mustBeObs: false, base: null, description: "Url pour initialiser la liste de sélection"},
        {name: 'label', type: 'string', default: null, required: false, mustBeObs: false, base: null, description: "libelle du champ"},
        {name: 'placeholder', type: 'string', default: null, required: false, mustBeObs: false, base: null, description: "Placeholder du champ"},
        {name: 'value', type: 'NA', default: null, required: false, mustBeObs: true, base: null, description: "Valeur du composant"},
        {name: 'visible', type: 'boolean', default: true, required: false, mustBeObs: true, base: null, description: "Si le composant est visible"},
        {name: 'enable', type: 'boolean', default: true, required: false, mustBeObs: true, base: null, description: "Si le composant autorise les modifications"},
        {name: 'originalOptions', type: 'array', default: [], required: false, mustBeObs: true, base: null, description: "Options du select"},
        {name: 'error', type: 'boolean', default: false, required: false, mustBeObs: true, base: null, description: "Si le champ est en erreur"}
    ],
    viewModel: function(self, params) {

        self['options'] = ko.observableArray([]);
        self['selectedOptions'] = (self.multiple)?ko.observableArray([]):ko.observable();
        var subscribeValue = null;
        var subscribeSelectedOptions = null;

        if (typeof self['label'] === 'string' && self['label'].trim() != 0) {
            self['visibleLabel'] = ko.observable(true);
            if (self['required'] === true) {
                self['label'] += " *";
            }
        } else {
            self['visibleLabel'] = ko.observable(false);
        }

        self['blur'] = function() {
            var error = editableUtil.validation(self, self.value());
            self.error((error !== null)?true:false);
        }

        self['focus'] = function() {
            self.error(false);
        }

        self.originalOptions.subscribe(function(value) {
            updateOptions(value);
        });

        initSubscribeValue();
        initSubscribeSelectedOptions();
        loadOptions();

        function loadOptions() {
            if (util.isString(self['url'])) {
                util.ajax(self['url'], null, function(obj) {
                    util.notObjectException(obj, "component editable-select => Erreur lors de la réponse ajax.");
                    var datas = [];
                    if (util.isArray(obj.data)) {
                        datas = obj.data;
                    }
                    self.originalOptions(datas);
                }, function(err) {
                    throw err;
                });
            } else {
                updateOptions(ko.utils.unwrapObservable(self.originalOptions()));
            }
        }

        function updateOptions(options) {
            var datas = [];
            var reference = self['reference'];
            if (util.isArray(options)) {
                for (var i = 0; i < options.length; i++) {
                    if (util.isObject(options[i]) && util.isString(reference)) {
                        datas.push({id: options[i].id, text: options[i][reference]});
                    } else {
                        datas.psuh(options[i]);
                    }
                }
            }
            self.options(datas);
            updateSelectedOptions(self.value());
            updateValue(self.value());
        }

        function updateValue(selections) {
            subscribeValue.dispose();
            var newSelections = [];
            var originalOptions = self.originalOptions();
            if (util.isNotNullOrUndefined(selections) && util.isArray(originalOptions)) {
                selections = util.isArray(selections)?selections:[selections];
                for (var i = 0; i < selections.length; i++) {
                    var selection = selections[i];
                    for (var j = 0; j < originalOptions.length; j++) {
                        option = originalOptions[j];
                        if ((util.isObject(option) && option.id == (util.isObject(selection)?selection.id:selection)) || option == selection) {
                            newSelections.push(option);
                        }
                    }
                }
            }
            self.value((self['multiple'])?newSelections:((newSelections.length > 0)?newSelections[0]:null));
            initSubscribeValue();
        }

        function updateSelectedOptions(selections) {
            subscribeSelectedOptions.dispose();
            var newSelections = [];
            var originalOptions = self.originalOptions();
            if (util.isNotNullOrUndefined(selections) && util.isArray(originalOptions)) {
                selections = util.isArray(selections)?selections:[selections];
                for (var i = 0; i < selections.length; i++) {
                    var selection = selections[i];
                    for (var j = 0; j < originalOptions.length; j++) {
                        option = originalOptions[j];
                        if ((util.isObject(option) && option.id == (util.isObject(selection)?selection.id:selection)) || option == selection) {
                            newSelections.push(option.id);
                        }
                    }
                }
            }
            self.selectedOptions((self['multiple'])?newSelections:((newSelections.length > 0)?newSelections[0]:null));
            initSubscribeSelectedOptions();
        }

        function initSubscribeValue() {
            subscribeValue = self.value.subscribe(function(selections) {
                updateSelectedOptions(selections);
                updateValue(selections);
            });
        }

        function initSubscribeSelectedOptions() {
            subscribeSelectedOptions = self.selectedOptions.subscribe(function(selections) {
                updateValue(selections);
            });
        }

    },
    template: { element: 'editable-select-template' }
});

componentUtil.register('editable-date', {
    structModel: [
        {name: 'id', type: 'string', default: null, required: false, mustBeObs: false, base: null, description: "id du component"},
        {name: 'classDiv', type: 'string', default: null, required: false, mustBeObs: false, base: "form-group row", description: "Class du composant"},
        {name: 'classLabel', type: 'string', default: "col-sm-2", required: false, mustBeObs: false, base: "col-form-label", description: "Class du label"},
        {name: 'classControl', type: 'string', default: "col-sm-10", required: false, mustBeObs: false, base: null, description: "Class de la div de control"},
        {name: 'required', type: 'boolean', default: false, required: false, mustBeObs: false, base: null, description: "Si le champ est obligatoire"},
        {name: 'maxLength', type: 'number', default: null, required: false, mustBeObs: false, base: null, description: "taille max du champ de saisi"},
        {name: 'validation', type: 'function', default: null, required: false, mustBeObs: false, base: null, description: "Méthode de validation"},
        {name: 'min', type: 'number', default: null, required: false, mustBeObs: false, base: null, description: "Valeur min d'un nombre"},
        {name: 'max', type: 'number', default: null, required: false, mustBeObs: false, base: null, description: "Valeur max d'un nombre"},
        {name: 'label', type: 'string', default: null, required: false, mustBeObs: false, base: null, description: "libelle du champ"},
        {name: 'placeholder', type: 'string', default: null, required: false, mustBeObs: false, base: null, description: "Placeholder du champ"},
        {name: 'value', type: 'NA', default: null, required: false, mustBeObs: true, base: null, description: "Valeur du composant"},
        {name: 'visible', type: 'boolean', default: true, required: false, mustBeObs: true, base: null, description: "Si le composant est visible"},
        {name: 'enable', type: 'boolean', default: true, required: false, mustBeObs: true, base: null, description: "Si le composant autorise les modifications"},
        {name: 'error', type: 'boolean', default: false, required: false, mustBeObs: true, base: null, description: "Si le champ est en erreur"},
        {name: 'langue', type: 'string', default: 'fr', required: false, mustBeObs: false, base: null, description: "Langue de la date (en, fr, it, es)"}
    ],
    viewModel: function(self, params) {

        var formatByLangue = {
            'en': 'MM/DD/YYYY',
            'fr': 'DD/MM/YYYY',
            'it': 'DD/MM/YYYY',
            'es': 'DD/MM/YYYY',
        }

        if (util.isNotString(self['langue']) || util.isEmpty(self['langue'])
            || util.noContain(['fr', 'en', 'it', 'es'], self['langue'])) {
            self['langue'] = 'en';
        }

        self['format'] = formatByLangue[self['langue']];

        if (typeof self['label'] === 'string' && self['label'].trim() != 0) {
            self['visibleLabel'] = ko.observable(true);
            if (self['required'] === true) {
                self['label'] += " *";
            }
        } else {
            self['visibleLabel'] = ko.observable(false);
        }

        self['blur'] = function() {
            var error = editableUtil.validation(self, self.value());
            self.error((error !== null)?true:false);
        }

        self['focus'] = function() {
            self.error(false);
        }

    },
    template: { element: 'editable-date-template' }
});

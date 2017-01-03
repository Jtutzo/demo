
var vmModalUser = null;

$(document).ready(function() {

    vmModalUser = new function() {
        var self = this;

        //Definition des variables du context de la modal
        self['show'] = ko.observable(false);
        self['title'] = ko.observable("add user");
        self['user'] = {nom: ko.observable(), prenom: ko.observable()};
        self['actionCalback'] = null;
        self['pays'] = ko.observable();
        self['optionsPays'] = ko.observableArray([]);

        /**
        * Ouvre la modal
        * @param user
        * @param actionCalback (exécuté lorsque l'on appuit sur le bouton save)
        */
        self['open'] = function(user, actionCalback) {
            self.close();
            if (util.isNotNullOrUndefined(user)) {
                self.title("Update user");
                self['user']['id'] = user['id'];
                self['user'].nom(user['nom']);
                self['user'].prenom(user['prenom']);
            } else {
                self.title("Add user");
            }
            self['actionCalback'] = actionCalback;
            self.show(true);
        }

        /**
        * Ferme la modal sans action
        */
        self['close'] = function() {
            self.show(false);
            self['user']['id'] = undefined;
            self['user'].nom(null);
            self['user'].prenom(null);
        }

        /**
        * Sauvegarde l'utilisateur
        */
        self['save'] = function() {
            var user = {
                id: self['user']['id'],
                nom: self['user'].nom(),
                prenom: self['user'].prenom()
            }
            if (util.isFunction(self['actionCalback'])) {
                self.actionCalback(user);
            }
        }
    }

    ko.applyBindings(vmModalUser, $("div#modal_user").get(0));
});

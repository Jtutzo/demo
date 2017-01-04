
var vmModalUser = null;

$(document).ready(function() {

    vmModalUser = new function() {
        var self = this;

        //Definition des variables du context de la modal
        self['show'] = ko.observable(false);
        self['title'] = ko.observable("add user");
        self['user'] = {nom: ko.observable(), prenom: ko.observable(), date: ko.observable()};
        self['actionCalback'] = null;
        self['pays'] = ko.observable();
        self['optionsPays'] = ko.observableArray([]);
        self['date'] = ko.observable(new Date());

        self['nomError'] = ko.observable(false);
        self['prenomError'] = ko.observable(false);
        self['paysError'] = ko.observable(false);
        self['dateError'] = ko.observable(false);

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
                self.pays(user['idPays']);
                self['user'].date(user['date']);
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
            self['actionCalback'] = null;
            self['user']['id'] = undefined;
            self['user'].nom(null);
            self['user'].prenom(null);
            self.pays(null);
            self['user'].date(null);
            self.nomError(false);
            self.prenomError(false);
            self.paysError(false);
            self.dateError(false);
        }

        /**
        * Sauvegarde l'utilisateur
        */
        self['save'] = function() {
            var user = {
                id: self['user']['id'],
                nom: self['user'].nom(),
                prenom: self['user'].prenom(),
                date: self['user'].date()
            }
            var pays = ko.utils.unwrapObservable(self.pays());
            if (util.isObject(pays)) {
                user['idPays'] = self.pays().id
                user['pays'] = pays;
            } else {
                user['idPays'] = null;
                user['pays'] = null;
            }
            if (util.isFunction(self['actionCalback'])) {
                self.actionCalback(user);
            }
        }
    }

    ko.applyBindings(vmModalUser, $("div#modal_user").get(0));
});

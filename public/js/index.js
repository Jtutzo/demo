
var vmMaster = null;
var vmDatePicker = null;

$(document).ready(function() {

    //Configuration par défault de l'ajax
    util.confAjax({
        success: function(obj) {
            console.log(obj);
        },
        failure: function(err) {
            console.error(err);
        }
    }, true);

    vmMaster = new function() {
        var self = this;

        //Definition des variables du context de la page
        self['users'] = ko.observableArray([]);
        self['updateEnable'] = ko.observable(false);
        self['removeEnable'] = ko.observable(false);
        self['usersSelected'] = [];
        self['selectedAll'] = ko.observable();
        self['valuesSelected'] = ko.observableArray([]);

        /**
        * (Re)charge les utilisateurs
        */
        self['refreshUsers'] = function() {
            loadUsers(function(users) {
                self.users(users);
            });
        }

        /**
        * Ajoute un utilisateur dans le tableau
        */
        self['addUser'] = function() {
            vmModalUser.open(null, function(user) {
                saveUser(user, function(resp) {
                    var liste = self.users();
                    liste.push(resp);
                    self.users(liste);
                    vmModalUser.close();
                });
            });
        }

        /**
        * Modifie un utilisateur du tableau
        */
        self['updateUser'] = function() {
            util.argumentException(self.valuesSelected().length !== 1, "Imposible de modifier plus d'un utilisateur.");
            var listeUsers = getUsersSelected();
            vmModalUser.open(listeUsers[0], function(user) {
                saveUser(user, function(resp) {
                    var liste = self.users();
                    var index = null;
                    liste.forEach(function(el, i) {
                        if (el['id'] === resp['id']) index = i;
                    });
                    if (index !== null) liste[index] = resp;
                    self.users(liste);
                    vmModalUser.close();
                });
            });
        }

        /**
        * Supprime des utilisateurs du tableau
        */
        self['removeUsers'] = function() {
            removeUser(self.valuesSelected(), function(resp) {
                var liste = self.users().filter(function(el) {
                    var retour = true;
                    resp.forEach(function(el2) {
                        if (el['id'] == el2) retour = false;
                    })
                    return retour;
                });
                self.users(liste);
                self.valuesSelected([]);
            })
        }

        /**
        * Sélectionne/déselectionne de tous les utilisateurs lorsque l'on click sur la checkbox "all"
        */
        self['selectedAll'].subscribe(function() {
            if (self.selectedAll()) {
                self.valuesSelected(getAllIdUsers());
            } else {
                self.valuesSelected([]);
            }
        })

        /**
        * Sélectionne une ligne
        */
        self['selectedLine'] = function(user) {
            var index = self.valuesSelected().indexOf(user['id'].toString());
            var liste = self.valuesSelected();
            if (index === -1) {
                liste.push(user['id'].toString())
            } else {
                liste.splice(index, 1);
            }
            self.valuesSelected(liste);
        }

        /**
        * Modifie le tableau de sélection des utilisateurs
        */
        self['valuesSelected'].subscribe(function() {
            toggleButton();
        })

        /**
        * Retourne les utilisateurs sélectionnés
        */
        function getUsersSelected() {
            var retour = [];
            for (var i = 0; i < self.valuesSelected().length; i++) {
                for (var j = 0; j < self.users().length; j++) {
                    if (self.users()[j]['id'] == self.valuesSelected()[i]) {
                        retour.push(self.users()[j]);
                    }
                }
            }
            return retour;
        }

        /**
        * Retourne tous les Ids des utilisateurs
        */
        function getAllIdUsers() {
            var retour = []
            self.users().forEach(function(el) {
                retour.push(el['id'].toString());
            })
            return retour;
        }

        /**
        * Modifie la visibilité des boutons d'actions
        */
        function toggleButton() {
            if (self.valuesSelected().length < 1) {
                self.updateEnable(false);
                self.removeEnable(false);
            } else if (self.valuesSelected().length === 1) {
                self.updateEnable(true);
                self.removeEnable(true);
            } else {
                self.updateEnable(false);
                self.removeEnable(true);
            }
        }
    };

    ko.applyBindings(vmMaster, $("div#main").get(0));
    vmMaster.refreshUsers();

});

/**
* Load all users
* @param callback function à executer après le chargment
*/
function loadUsers(callback) {
    util.ajax(window.getAllUsersUrl, null, function(obj) {
        var resp = (util.isObject(obj) && util.isArray(obj.data))?obj.data:[];
        if (util.isFunction(callback)) {
            callback(resp);
        }
    });
}

/**
* Save an user
* @param user
* @param callback function à executer après le chargment
*/
function saveUser(user, callback) {
    util.nullOrUndefinedException(user, "user mustn't be null or undefined.");

    var data = {user: JSON.stringify(user)};

    util.ajax(window.saveUserUrl, data, function(obj) {
        var resp = (util.isObject(obj))?obj.data:null;
        if(util.isFunction(callback)) {
            callback(resp);
        }
    });
}

/**
* Remove users selected
* @param listIdUsers
* @param callback function à executer après la supression
*/
function removeUser(listIdUsers, callback) {
    util.notArrayException(listIdUsers, "listIdUser must be an array value.");

    var data = {idUsers : JSON.stringify(listIdUsers)};

    util.ajax(window.removeUserUrl, data, function(obj) {
        var resp = (util.isObject(obj))?obj.data:null;
        if(util.isFunction(callback)) {
            callback(resp);
        }
    });
}

// @ts-nocheck

sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("chedraui.com.Employees.controller.App", {
            onInit: function () {
                this.oView = this.getView();
            },

            onValidate: function () {
                var inputEmployee = this.oView.byId("inputEmployee");
                var valueEmployee = inputEmployee.getValue();

                if (valueEmployee.length === 6) {
                   // inputEmployee.setDescription("OK");
                   this.oView.byId("labelCountry").setVisible(true);
                   this.oView.byId("slCountry").setVisible(true);
                } else {
                   // inputEmployee.setDescription("Not OK");
                   this.oView.byId("labelCountry").setVisible(false);
                   this.oView.byId("slCountry").setVisible(false);
                }
            }
        });
    });

/*
 * File: app/controller/AssignAccountNumberToCountryController.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('cobuy.controller.AssignAccountNumberToCountryController', {
    extend: 'Ext.app.Controller',

    models: [
        'BankerForCountry',
        'BankCollectForCountry'
    ],
    stores: [
        'BankerForCountries'
    ],
    views: [
        'AssignmentOfBankAccountNumberToCountryMainpanel',
        'AssigningAccountToCountryWin'
    ],

    refs: [
        {
            ref: 'allAssignedAccountNumberToCountryGrid',
            selector: 'assignmentofbankaccountnumbertocountrymainpanel grid'
        },
        {
            ref: 'allAccountsForCountryGrid',
            selector: 'bankaccountsassignedtoacountrymainpanel grid'
        }
    ],

    onAssignAccountToCountryButtonClick: function(button, e, eOpts) {
        var grid = this.getAllAssignedAccountNumberToCountryGrid(),

            record = grid.getSelectionModel().getSelection();

        //get the country id

        var id = record[0].get('id');
        console.log('tyhe country is is:', id);

        	if(record[0]) {
                var editWin = Ext.create('cobuy.view.AssigningAccountToCountryWin');
                var form = editWin.down('form');
                Ext.Ajax.request({
                    url: '/cobuy/index.php?r=Banker/retrieveCountryName',
                    params: {
                        id:id
                    },
                    success: function(response){
                       var jsonResponse = Ext.decode(response.responseText);
                        if (jsonResponse.success) {

                            var country_name = jsonResponse.country;
                        }

                        var values = {
                            id: id,
                            country:country_name
                        };
                        form.loadRecord(record[0]);

                           form.getForm().setValues(values);
                    }



                 });

        			editWin.show();
        		} else {
        				Ext.Msg.alert('Error', 'Please Select a country to assign account to');
        		}
    },

    onSaveAssignedAccountNumbersToCountryButtonClick: function(button, e, eOpts) {
        var win = button.up('window'),
        			formPanel = win.down('form'),
        			store = this.getAllAssignedAccountNumberToCountryGrid().getStore();

        			if(formPanel.getForm().isValid()){
        				formPanel.getForm().submit({
        					clientValidation: true,
        					url: '/cobuy/index.php?r=Banker/AssignThisAccountToCountry',
                           //success or failure
        					success: function(form, action) {
        						var result = action.result;
        						if(result.success) {
        							Ext.Msg.alert('Success!', result.msg);
                                    //Ext.Msg.alert('Success!', 'New  Group Information Saved.');
        							//store.load();
        							store.load();

        							win.close();
        						} else {
        							Ext.Msg.alert(result.msg);
        						}
        					},
        					failure: function(form, action) {
        						var result = action.result;
                                switch(action.failureType) {
        							case Ext.form.action.Action.CLIENT_INVALID:
        							Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
        							break;
        							case Ext.form.action.Action.CONNECT_FAILURE:
        							Ext.Msg.alert('Failure', 'Ajax communication failed');
        							break;
        							case Ext.form.action.Action.SERVER_INVALID:
        								Ext.Msg.alert('Failure', result.msg);
        						}
        					}
        				});
        			}
    },

    onBankAccountAssignedToCountryGridpanelItemDblClick: function(dataview, record, item, index, e, eOpts) {
        var panel = dataview.up('assignmentofbankaccountnumbertocountrymainpanel');
        var form = panel.down('#countryidform');
        form.getForm().loadRecord(record);


        var grouppanel = dataview.up('assignmentofbankaccountnumbertocountrymainpanel');
        var comp = grouppanel.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        //if(comp !== 'resourcesinaresourcegrouppanel'){
           grouppanel.remove(comp);
            grouppanel.insert(1, {
            xtype: 'bankaccountsassignedtoacountrymainpanel',
            flex: 2.5
            });
    },

    onBankAccountAssignedToCountryPanelRender: function(component, eOpts) {
        //get the country id
        var upperpanel = component.up('assignmentofbankaccountnumbertocountrymainpanel');

        var form = upperpanel.down('#countryidform');

        var country_id = form.down('hiddenfield[name=id]').getValue();

        //load the grid

        component.down('grid').getStore().load({
            params:{
                id:country_id
            }
        });

    },

    onEditBankAccountToCountryButtonClick: function(button, e, eOpts) {
        var grid = this.getAllAccountsForCountryGrid(),
        		record = grid.getSelectionModel().getSelection();

        		if(record[0]) {
        			var editWin = Ext.create('cobuy.view.EditAssignedAccountToCountryWin');
        			var form = editWin.down('form');
                    var country_id = record[0].get('country_id');
                    var bank_id = record[0].get('bank_id');
                    console.log('this record is :', record[0]);

        	    Ext.Ajax.request({
                    url: '/cobuy/index.php?r=Banker/retrieveCountryWithBankAccount',
                    params: {
                        country_id:country_id,
                        bank_id:bank_id
                    },
                    success: function(response){
                       var jsonResponse = Ext.decode(response.responseText);
                        if (jsonResponse.success) {

                            var country_name = jsonResponse.country;
                            var bank_name = jsonResponse.bank[0].bank_name;
                            var account_name = jsonResponse.bank[0].account_name;
                            var account_number = jsonResponse.bank[0].account_number;

                        }

                        var values = {
                            country_id: country_id,
                            bank_id:bank_id,
                            country:country_name,
                            bank_name:bank_name,
                            account_number:account_number,
                            account_name:account_name,
                            payment_mode:record[0].get('payment_mode')
                        };
                        //form.loadRecord(record[0]);

                           form.getForm().setValues(values);
                    }



                 });
        			editWin.show();
        		} else {
        				Ext.Msg.alert('Error', 'Please Select a bank account to edit');
        		}
    },

    onSaveAssignedAccountsForCountryButtonClick: function(button, e, eOpts) {
        var win = button.up('window'),
        			formPanel = win.down('form');
        			store = this.getAllAccountsForCountryGrid().getStore();
                    var country_id = formPanel.down('hiddenfield[name=country_id]').getValue();
                    var bank_id = formPanel.down('hiddenfield[name=bank_id]').getValue();

        			if(formPanel.getForm().isValid()){
        				formPanel.getForm().submit({
        					clientValidation: true,
        					url:'/cobuy/index.php?r=Banker/updateCountryBankAccount',
                            params:{
                                country_id:country_id,
                                bank_id:bank_id
                            },
                           //success or failure
        					success: function(form, action) {
        						var result = action.result;
        						if(result.success) {
        							Ext.Msg.alert('Success!', result.msg);
                                    //Ext.Msg.alert('Success!', 'New product created successfully.');
                            store.load({
                                params:{
                                    id:country_id

                                }
                                });
        							//store.load();

        							win.close();
        						} else {
        							Ext.Msg.alert(result.msg);
        						}
        					},
        					failure: function(form, action) {
        						var result = action.result;
                                switch(action.failureType) {
        							case Ext.form.action.Action.CLIENT_INVALID:
        							Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
        							break;
        							case Ext.form.action.Action.CONNECT_FAILURE:
        							Ext.Msg.alert('Failure', 'Ajax communication failed');
        							break;
        							case Ext.form.action.Action.SERVER_INVALID:
        								Ext.Msg.alert('Failure', result.msg);
        						}
        					}
        				});
        			}
    },

    onApproveOrDisapproveBankAccountToCountryButtonClick: function(button, e, eOpts) {
        var grid = this.getAllAccountsForCountryGrid(),
        		record = grid.getSelectionModel().getSelection();

        		if(record[0]) {
                    if(record[0].get('approved') == 0){
                       var editWin = Ext.create('cobuy.view.ApproveBankAccountToCountryWin');
                    }else{
                        var editWin = Ext.create('cobuy.view.DisapproveThisAccountForThisCountryWin');
                    }

        			var form = editWin.down('form');
                    var country_id = record[0].get('country_id');
                    var bank_id = record[0].get('bank_id');
                    console.log('this record is :', record[0]);

        	    Ext.Ajax.request({
                    url: '/cobuy/index.php?r=Banker/retrieveCountryWithBankAccount',
                    params: {
                        country_id:country_id,
                        bank_id:bank_id
                    },
                    success: function(response){
                       var jsonResponse = Ext.decode(response.responseText);
                        if (jsonResponse.success) {

                            var country_name = jsonResponse.country;
                            var bank_name = jsonResponse.bank[0].bank_name;
                            var account_name = jsonResponse.bank[0].account_name;
                            var account_number = jsonResponse.bank[0].account_number;
                            var swift_code = jsonResponse.bank[0].swift_code;
                            var sort_code = jsonResponse.bank[0].sort_code;
                            var approved = jsonResponse.bank[0].approved;

                            console.log('the approved is:', record[0].get('approved'));

                        }

                        var values = {
                            country_id: country_id,
                            bank_id:bank_id,
                            country:country_name,
                            bank_name:bank_name,
                            account_number:account_number,
                            account_name:account_name,
                            payment_mode:record[0].get('payment_mode'),
                            swift_code: swift_code,
                            sort_code:sort_code,
                            approved:record[0].get('approved'),
                            current_payment_mode:record[0].get('payment_mode'),
                            status:record[0].get('status')
                        };
                        //form.loadRecord(record[0]);

                           form.getForm().setValues(values);
                    }



                 });
        			editWin.show();
        		} else {
        				Ext.Msg.alert('Error', 'Please Select a bank account approve or disapprove');
        		}
    },

    onSaveApproveOrDisapproveBankAccountToCountryButtonClick: function(button, e, eOpts) {
        var win = button.up('window'),
        			formPanel = win.down('form');
        			store = this.getAllAccountsForCountryGrid().getStore();
                    var country_id = formPanel.down('hiddenfield[name=country_id]').getValue();
                    var bank_id = formPanel.down('hiddenfield[name=bank_id]').getValue();

        			if(formPanel.getForm().isValid()){
        				formPanel.getForm().submit({
        					clientValidation: true,
        					url:'/cobuy/index.php?r=Banker/approveCountryBankAccount',
                            params:{
                                country_id:country_id,
                                bank_id:bank_id
                            },
                           //success or failure
        					success: function(form, action) {
        						var result = action.result;
        						if(result.success) {
        							Ext.Msg.alert('Success!', result.msg);
                                    //Ext.Msg.alert('Success!', 'New product created successfully.');
                            store.load({
                                params:{
                                    id:country_id

                                }
                                });
        							//store.load();

        							win.close();
        						} else {
        							Ext.Msg.alert(result.msg);
        						}
        					},
        					failure: function(form, action) {
        						var result = action.result;
                                switch(action.failureType) {
        							case Ext.form.action.Action.CLIENT_INVALID:
        							Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
        							break;
        							case Ext.form.action.Action.CONNECT_FAILURE:
        							Ext.Msg.alert('Failure', 'Ajax communication failed');
        							break;
        							case Ext.form.action.Action.SERVER_INVALID:
        								Ext.Msg.alert('Failure', result.msg);
        						}
        					}
        				});
        			}
    },

    onSaveDisapproveThisAccountForCountryButtonClick: function(button, e, eOpts) {
        var win = button.up('window'),
        			formPanel = win.down('form');
        			store = this.getAllAccountsForCountryGrid().getStore();
                    var country_id = formPanel.down('hiddenfield[name=country_id]').getValue();
                    var bank_id = formPanel.down('hiddenfield[name=bank_id]').getValue();

        			if(formPanel.getForm().isValid()){
        				formPanel.getForm().submit({
        					clientValidation: true,
        					url:'/cobuy/index.php?r=Banker/DisapproveCountryBankAccount',
                            params:{
                                country_id:country_id,
                                bank_id:bank_id
                            },
                           //success or failure
        					success: function(form, action) {
        						var result = action.result;
        						if(result.success) {
        							Ext.Msg.alert('Success!', result.msg);
                                    //Ext.Msg.alert('Success!', 'New product created successfully.');
                            store.load({
                                params:{
                                    id:country_id

                                }
                                });
        							//store.load();

        							win.close();
        						} else {
        							Ext.Msg.alert(result.msg);
        						}
        					},
        					failure: function(form, action) {
        						var result = action.result;
                                switch(action.failureType) {
        							case Ext.form.action.Action.CLIENT_INVALID:
        							Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
        							break;
        							case Ext.form.action.Action.CONNECT_FAILURE:
        							Ext.Msg.alert('Failure', 'Ajax communication failed');
        							break;
        							case Ext.form.action.Action.SERVER_INVALID:
        								Ext.Msg.alert('Failure', result.msg);
        						}
        					}
        				});
        			}
    },

    onActivateOrDeactivateAccountForCountryWinButtonClick: function(button, e, eOpts) {

        var grid = this.getAllAccountsForCountryGrid(),
        		record = grid.getSelectionModel().getSelection();

        		if(record[0]) {
                    var editWin = Ext.create('cobuy.view.ActivateDeactivateAccountForCountryWin');

        			var form = editWin.down('form');
                    var country_id = record[0].get('country_id');
                    var bank_id = record[0].get('bank_id');
                    console.log('this record is :', record[0]);

        	    Ext.Ajax.request({
                    url: '/cobuy/index.php?r=Banker/retrieveCountryWithBankAccount',
                    params: {
                        country_id:country_id,
                        bank_id:bank_id
                    },
                    success: function(response){
                       var jsonResponse = Ext.decode(response.responseText);
                        if (jsonResponse.success) {

                            var country_name = jsonResponse.country;
                            var bank_name = jsonResponse.bank[0].bank_name;
                            var account_name = jsonResponse.bank[0].account_name;
                            var account_number = jsonResponse.bank[0].account_number;
                            var swift_code = jsonResponse.bank[0].swift_code;
                            var sort_code = jsonResponse.bank[0].sort_code;
                            var approved = jsonResponse.bank[0].approved;

                            console.log('the approved is:', record[0].get('approved'));

                        }

                        var values = {
                            country_id: country_id,
                            bank_id:bank_id,
                            country:country_name,
                            bank_name:bank_name,
                            account_number:account_number,
                            account_name:account_name,
                            payment_mode:record[0].get('payment_mode'),
                            swift_code: swift_code,
                            sort_code:sort_code,
                            approved:record[0].get('approved'),
                            current_payment_mode:record[0].get('payment_mode'),
                            status:record[0].get('status'),
                            current_approval:record[0].get('approved')
                        };
                        //form.loadRecord(record[0]);

                           form.getForm().setValues(values);
                    }



                 });
        			editWin.show();
        		} else {
        				Ext.Msg.alert('Error', 'Please Select a bank account to  activate or deactivate');
        		}
    },

    onSaveActicatedOrDeactivatedAccountForCountryButtonClick: function(button, e, eOpts) {

        var win = button.up('window'),
        			formPanel = win.down('form');
        			store = this.getAllAccountsForCountryGrid().getStore();
                    var country_id = formPanel.down('hiddenfield[name=country_id]').getValue();
                    var bank_id = formPanel.down('hiddenfield[name=bank_id]').getValue();

        			if(formPanel.getForm().isValid()){
        				formPanel.getForm().submit({
        					clientValidation: true,
        					url:'/cobuy/index.php?r=Banker/activateOrDeactivateCountryBankAccount',
                            params:{
                                country_id:country_id,
                                bank_id:bank_id
                            },
                           //success or failure
        					success: function(form, action) {
        						var result = action.result;
        						if(result.success) {
        							Ext.Msg.alert('Success!', result.msg);
                                    //Ext.Msg.alert('Success!', 'New product created successfully.');
                            store.load({
                                params:{
                                    id:country_id

                                }
                                });
        							//store.load();

        							win.close();
        						} else {
        							Ext.Msg.alert(result.msg);
        						}
        					},
        					failure: function(form, action) {
        						var result = action.result;
                                switch(action.failureType) {
        							case Ext.form.action.Action.CLIENT_INVALID:
        							Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
        							break;
        							case Ext.form.action.Action.CONNECT_FAILURE:
        							Ext.Msg.alert('Failure', 'Ajax communication failed');
        							break;
        							case Ext.form.action.Action.SERVER_INVALID:
        								Ext.Msg.alert('Failure', result.msg);
        						}
        					}
        				});
        			}
    },

    onDeleteThisAccountFromThisCountryButtonClick: function(button, e, eOpts) {

        var grid = this.getAllAccountsForCountryGrid();
        		var record= grid.getSelectionModel().getSelection();

        if(record[0]){


        	Ext.Msg.show({
                         title:'Delete?',
                         msg: 'Are you sure you want to remove this bank account from the country?',
                         buttons: Ext.Msg.YESNO,
                         icon: Ext.Msg.QUESTION,
                         fn: function (buttonId){
                            if (buttonId == 'yes'){
                                Ext.Ajax.request({
                                    url: '/cobuy/index.php?r=Banker/DeleteOneBankAccountFromCountry',
                                    params: {
                                        country_id: record[0].get('country_id'),
                                        bank_id: record[0].get('bank_id')

                                    },
                                    success: function(conn, response, options, eOpts) {

                                        var result = Ext.JSON.decode(conn.responseText);

                                        if (result.success) {

                                            Ext.Msg.alert('Success!', result.msg);
                                            grid.getStore().load({
                                                id:record[0].get('country_id')
                                            });

                                        } else {
                                            var error = Ext.JSON.decode(conn.responseText);
                                            Ext.Msg.alert('Error', error.msg);
                                        }
                                    },
                                    failure: function(conn, response, options, eOpts) {

                                        Ext.Msg.alert('Failure', 'Communication Error');
                                    }
                                });
                            }
                         }
                    });

        }else {
        				Ext.Msg.alert('Error', 'Please Select a Bank account for a country to delete');
        		}

    },

    onBankAccountForCountryGridpanelItemDblClick: function(dataview, record, item, index, e, eOpts) {
        this.onEditBankAccountToCountryButtonClick();
    },

    onAssignBankAccountToCountryPanelRender: function(component, eOpts) {
        component.down('grid').getStore().load();
    },

    init: function(application) {
        this.control({
            "assignmentofbankaccountnumbertocountrymainpanel button#assignBtn": {
                click: this.onAssignAccountToCountryButtonClick
            },
            "assigningaccounttocountrywin button#assignBtn": {
                click: this.onSaveAssignedAccountNumbersToCountryButtonClick
            },
            "assignmentofbankaccountnumbertocountrymainpanel listofcountriesontheplatform": {
                itemdblclick: this.onBankAccountAssignedToCountryGridpanelItemDblClick
            },
            "bankaccountsassignedtoacountrymainpanel": {
                render: this.onBankAccountAssignedToCountryPanelRender
            },
            "bankaccountsassignedtoacountrymainpanel button#editBtn": {
                click: this.onEditBankAccountToCountryButtonClick
            },
            "editassignedaccounttocountrywin button#assignBtn": {
                click: this.onSaveAssignedAccountsForCountryButtonClick
            },
            "bankaccountsassignedtoacountrymainpanel button#approveBtn": {
                click: this.onApproveOrDisapproveBankAccountToCountryButtonClick
            },
            "approvebankaccounttocountrywin button#assignBtn": {
                click: this.onSaveApproveOrDisapproveBankAccountToCountryButtonClick
            },
            "disapprovethisaccountforthiscountrywin button#assignBtn": {
                click: this.onSaveDisapproveThisAccountForCountryButtonClick
            },
            "bankaccountsassignedtoacountrymainpanel button#activateBtn": {
                click: this.onActivateOrDeactivateAccountForCountryWinButtonClick
            },
            "activatedeactivateaccountforcountrywin button#activateBtn": {
                click: this.onSaveActicatedOrDeactivatedAccountForCountryButtonClick
            },
            "bankaccountsassignedtoacountrymainpanel button#deleteBtn": {
                click: this.onDeleteThisAccountFromThisCountryButtonClick
            },
            "bankaccountsassignedtoacountrymainpanel grid": {
                itemdblclick: this.onBankAccountForCountryGridpanelItemDblClick
            },
            "assignmentofbankaccountnumbertocountrymainpanel ": {
                render: this.onAssignBankAccountToCountryPanelRender
            }
        });
    }

});
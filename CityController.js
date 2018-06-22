/*
 * File: app/controller/CityController.js
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

Ext.define('cobuy.controller.CityController', {
    extend: 'Ext.app.Controller',

    models: [
        'City'
    ],
    stores: [
        'Cities'
    ],
    views: [
        'CityGridPanel',
        'CityMainpanel',
        'NewCityWin',
        'EditCityWin'
    ],

    refs: [
        {
            ref: 'allCitiesGrid',
            selector: 'citymainpanel grid'
        }
    ],

    onAddCityButtonClick: function(button, e, eOpts) {
        var win = Ext.create('cobuy.view.NewCityWin');

        win.show();
    },

    onEditCityButtonClick: function(button, e, eOpts) {
        var grid = this.getAllCitiesGrid(),
        		record = grid.getSelectionModel().getSelection();

        		if(record[0]) {
        			var editWin = Ext.create('cobuy.view.EditCityWin');
        			var form = editWin.down('form');
        			Ext.Ajax.request({

        				 url: '/cobuy/index.php?r=City/obtainCityExtraInformation',
        			     params: {
        					state_id: record[0].get('state_id')
        				},
                     //success or failure
        				success: function(response){
        				var jsonResponse = Ext.decode(response.responseText);
        					if (jsonResponse.success) {

        					var state = jsonResponse.state;



        					}

        					var values = {
                                state:state


        					};


        					form.loadRecord(record[0]);

        					form.getForm().setValues(values);


        				}




        			});

        			editWin.show();
        		} else {
        				Ext.Msg.alert('Error!', 'Please Select a City to edit');
        		}
    },

    onDeleteCityButtonClick: function(button, e, eOpts) {
        var grid = this.getAllCitiesGrid();
        		var record= grid.getSelectionModel().getSelection();

        if(record[0]){


        	Ext.Msg.show({
                         title:'Delete?',
                         msg: 'Are you sure you want to delete this State?',
                         buttons: Ext.Msg.YESNO,
                         icon: Ext.Msg.QUESTION,
                         fn: function (buttonId){
                            if (buttonId == 'yes'){
                                Ext.Ajax.request({
                                    url: '/cobuy/index.php?r=City/DeleteThisCity',
                                    params: {
                                        id: record[0].get('id')

                                    },
                                    success: function(conn, response, options, eOpts) {

                                        var result = Ext.JSON.decode(conn.responseText);

                                        if (result.success) {

                                            Ext.Msg.alert('Success!', result.msg);
                                            grid.getStore().load();

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
        				Ext.Msg.alert('Error!', 'Please Select a City to delete');
        		}

    },

    onSaveNewCityButtonClick: function(button, e, eOpts) {
        var win = button.up('window'),
        			formPanel = win.down('form'),
        			store = this.getAllCitiesGrid().getStore();

        			if(formPanel.getForm().isValid()){
        				formPanel.getForm().submit({
        					clientValidation: true,
        					url: '/cobuy/index.php?r=City/createnewcity',
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

    onSaveEdittedCityButtonClick: function(button, e, eOpts) {
        var win = button.up('window'),
        			formPanel = win.down('form'),
        			store = this.getAllCitiesGrid().getStore();

        			if(formPanel.getForm().isValid()){
        				formPanel.getForm().submit({
        					clientValidation: true,
        					url: '/cobuy/index.php?r=City/updatecity',
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

    onCityMainpanelGridpanelItemDblClick: function(dataview, record, item, index, e, eOpts) {
        this.onEditCityButtonClick();
    },

    onCityGridpanelFocus: function(component, e, eOpts) {
        component.getStore().load();
    },

    onCityPanelRender: function(component, eOpts) {
        component.down('grid').getStore().load();
    },

    init: function(application) {
        this.control({
            "citymainpanel button#addBtn": {
                click: this.onAddCityButtonClick
            },
            "citymainpanel button#editBtn": {
                click: this.onEditCityButtonClick
            },
            "citymainpanel button#deleteBtn": {
                click: this.onDeleteCityButtonClick
            },
            "newcitywin button#addBtn": {
                click: this.onSaveNewCityButtonClick
            },
            "editcitywin button#addBtn": {
                click: this.onSaveEdittedCityButtonClick
            },
            "citymainpanel grid": {
                itemdblclick: this.onCityMainpanelGridpanelItemDblClick,
                focus: this.onCityGridpanelFocus
            },
            "citymainpanel": {
                render: this.onCityPanelRender
            }
        });
    }

});
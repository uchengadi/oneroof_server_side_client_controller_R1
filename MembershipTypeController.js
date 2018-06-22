/*
 * File: app/controller/MembershipTypeController.js
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

Ext.define('cobuy.controller.MembershipTypeController', {
    extend: 'Ext.app.Controller',

    models: [
        'MembershipType'
    ],
    stores: [
        'MembershipTypes'
    ],
    views: [
        'MembershiptypeGridpanel',
        'MembershipTypeMainpanel',
        'NewMembershipTypeWin',
        'EditMembershipTypeWin'
    ],

    refs: [
        {
            ref: 'allMembershipTypeGrid',
            selector: 'membershiptypemainpanel grid'
        }
    ],

    onAddMembershipTypeButtonClick: function(button, e, eOpts) {
        var win = Ext.create('cobuy.view.NewMembershipTypeWin');

        win.show();
    },

    onEditMembershipTypeButtonClick: function(button, e, eOpts) {
        var grid = this.getAllMembershipTypeGrid(),
        		record = grid.getSelectionModel().getSelection();

        		if(record[0]) {
        			var editWin = Ext.create('cobuy.view.EditMembershipTypeWin');
        			var form = editWin.down('form');
        			//var grouptype_id = record[0].get('grouptype_id');

                    form.loadRecord(record[0]);
        			editWin.show();
        		} else {
        				Ext.Msg.alert('Error!', 'Please Select a Membership Type to edit');
        		}
    },

    onDeleteMembershipTypeButtonClick: function(button, e, eOpts) {
        var grid = this.getAllMembershipTypeGrid();
        		var record= grid.getSelectionModel().getSelection();

        if(record[0]){


        	Ext.Msg.show({
                         title:'Delete?',
                         msg: 'Are you sure you want to delete this Membership type?',
                         buttons: Ext.Msg.YESNO,
                         icon: Ext.Msg.QUESTION,
                         fn: function (buttonId){
                            if (buttonId == 'yes'){
                                Ext.Ajax.request({
                                    url: '/cobuy/index.php?r=Membershiptype/DeleteThisMembershiptype',
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
        				Ext.Msg.alert('Error', 'Please Select a Membership type to delete');
        		}

    },

    onSaveNewMembershipTypeButtonClick: function(button, e, eOpts) {
        var win = button.up('window'),
        			formPanel = win.down('form'),
        			store = this.getAllMembershipTypeGrid().getStore();

        			if(formPanel.getForm().isValid()){
        				formPanel.getForm().submit({
        					clientValidation: true,
        					url: '/cobuy/index.php?r=Membershiptype/addNewMembershipType',
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

    onSaveEdittedMembershipTypeButtonClick: function(button, e, eOpts) {
        var win = button.up('window'),
        			formPanel = win.down('form'),
        			store = this.getAllMembershipTypeGrid().getStore();

        			if(formPanel.getForm().isValid()){
        				formPanel.getForm().submit({
        					clientValidation: true,
        					url: '/cobuy/index.php?r=Membershiptype/updateMembershipType',
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

    onMembershipTypeGridpanelItemDblClick: function(dataview, record, item, index, e, eOpts) {
        this.onEditMembershipTypeButtonClick();
    },

    onMembershiptypePanelRender: function(component, eOpts) {
        component.down('grid').getStore().load();
    },

    init: function(application) {
        this.control({
            "membershiptypemainpanel button#addBtn": {
                click: this.onAddMembershipTypeButtonClick
            },
            "membershiptypemainpanel button#editBtn": {
                click: this.onEditMembershipTypeButtonClick
            },
            "membershiptypemainpanel button#deleteBtn": {
                click: this.onDeleteMembershipTypeButtonClick
            },
            "newmembershiptypewin button#addBtn": {
                click: this.onSaveNewMembershipTypeButtonClick
            },
            "editmembershiptypewin button#addBtn": {
                click: this.onSaveEdittedMembershipTypeButtonClick
            },
            "membershiptypemainpanel grid": {
                itemdblclick: this.onMembershipTypeGridpanelItemDblClick
            },
            "membershiptypemainpanel": {
                render: this.onMembershiptypePanelRender
            }
        });
    }

});
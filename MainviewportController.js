/*
 * File: app/controller/MainviewportController.js
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

Ext.define('cobuy.controller.MainviewportController', {
    extend: 'Ext.app.Controller',

    stores: [
        'States',
        'Cities',
        'MembershipTypes',
        'MembershipFees',
        'MembershiptypeHasFees',
        'Containers',
        'Services',
        'Categories',
        'Products',
        'AuthorizationItems',
        'Members',
        'MembershipSubscriptions',
        'Currencies',
        'Timezones',
        'PlatformSettings',
        'Stores',
        'Orders',
        'AllSubscriptionPayments',
        'OrderDeliveries',
        'Payments',
        'OrderHasProducts',
        'CurrencyExchanges',
        'Languages',
        'HomeActivitiesComboStore',
        'Countries',
        'Continent',
        'EveryProduct',
        'ProductCategoryForAService',
        'ProductTypesForACategory',
        'VideoPurpose',
        'ProductConstituents',
        'AllMembers',
        'StoreTypes',
        'IncompleteOrders',
        'YetForDeliveryOrders',
        'ClosedOrders',
        'PaymentStatus',
        'PaymentModes',
        'Bankers',
        'UnverifiedPayments',
        'StaffMembers',
        'FailedPayments',
        'Gender',
        'Religion',
        'MaritalStatus',
        'MembershipCategory',
        'BusinessCategory',
        'DeliveredOrders',
        'PendingOrdersForDelivery',
        'OnTransitOrders',
        'DeliveryStatusFromTransit',
        'FailedOrders',
        'OrdersOnDispute',
        'BankerForCountries',
        'AuthRoles',
        'AuthItemsAssignment',
        'Operations',
        'Tasks',
        'StateForACountry',
        'CityForAState',
        'StateForADeliveryCountry',
        'CityForADeliveryState',
        'StateForACorporateCountry',
        'CityForACorporateCity',
        'MembersAwaitingPaymentConfirmation',
        'UnverifiedSubscriptionPayments',
        'FailedSubscriptionPayment',
        'MemberStatus',
        'UserRole',
        'ProductTypes',
        'MeasurementTypes',
        'ProductsInCart',
        'BinaryChoice',
        'WebsiteStatus',
        'AboutUs',
        'WebsiteServices',
        'WebsiteMembership',
        'TermsAndConditions',
        'NumberOfYears',
        'AllServices',
        'AllCategories',
        'AllProductTypes',
        'AllHamperContainers',
        'AllNonCustomHampers',
        'ServiceForHamper',
        'ServiceCategoryForHamper',
        'CategoryProductTypesForHamper'
    ],
    views: [
        'MembershipFeeGridPanel',
        'MembershipFeeMainpanel',
        'AssignMembershipSubscriptionToFeesMainpanel',
        'AssignmentOfBankAccountNumberToCountryMainpanel',
        'BankerMainpanel',
        'AllNonCustomHampersGrid',
        'SearchProductForHamperForm',
        'AddingProductsToHamperForm',
        'AddingProductsToHamperWin',
        'HamperManagerMainpanel',
        'HamperContainersMainpanel',
        'HamperContainersGrid'
    ],

    onCountryMainpanelButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'countrymainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'countrymainpanel',
            flex: 0.8
            });

        }
    },

    onStatesMainpanelButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'statemainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'statemainpanel',
            flex: 0.80
            });

        }
    },

    onCitiesMainpanelButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'citymainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'citymainpanel',
            flex: 0.80
            });

        }
    },

    onMembershipTypeMainpanelButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'membershiptypemainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'membershiptypemainpanel',
            flex: 0.80
            });

        }
    },

    onProductCategoryMainpanelButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'productcategorymainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'productcategorymainpanel',
            flex: 0.80
            });

        }
    },

    onServicesMainpanelButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'servicemainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'servicemainpanel',
            flex: 0.80
            });

        }
    },

    onProductsMainpanelButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'productmainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'productmainpanel',
            flex: 0.80
            });

        }
    },

    onProductConstituentsButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'productconstituentmainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'productconstituentmainpanel',
            flex: 0.80
            });

        }
    },

    onStaffMembershipButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'staffmembermainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'staffmembermainpanel',
            flex: 0.80
            });

        }
    },

    onNonMembersButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'membermainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'membermainpanel',
            flex: 0.80
            });

        }
    },

    onMemberNumberButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'membershipnumbermainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'membershipnumbermainpanel',
            flex: 0.80
            });

        }
    },

    onMembershipSubscriptionButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        //if(comp !== 'membershipsubscriptionmainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'membershipsubscriptionmainpanel',
            flex: 0.80
            });

        //}
    },

    onFeeButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'membershipfeemainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'membershipfeemainpanel',
            flex: 0.80
            });

        }
    },

    onAssignFeesToMembershiptypeButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'assignmembershipsubscriptiontofeesmainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'assignmembershipsubscriptiontofeesmainpanel',
            flex: 0.80
            });

        }
    },

    onCurrenciesButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'currencymainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'currencymainpanel',
            flex: 0.80
            });

        }
    },

    onTimezoneButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'timezonemainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'timezonemainpanel',
            flex: 0.80
            });

        }
    },

    onPlatfornSettingsButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'platformsettingsmainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'platformsettingsmainpanel',
            flex: 0.80
            });

        }
    },

    onLanguageButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'languagesmainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'languagesmainpanel',
            flex: 0.80
            });

        }
    },

    onStoreButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'storesmainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'storesmainpanel',
            flex: 0.80
            });

        }
    },

    onCurrencyExchangeButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'currencyexchangeratemainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'currencyexchangeratemainpanel',
            flex: 0.80
            });

        }
    },

    onBankButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'bankermainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'bankermainpanel',
            flex: 0.80
            });

        }
    },

    onAssignmentOfBankAccountNumberToCountryButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'assignmentofbankaccountnumbertocountrymainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'assignmentofbankaccountnumbertocountrymainpanel',
            flex: 0.80
            });

        }
    },

    onUnfulfilledOrdersButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'unfullfilledordersmainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'unfullfilledordersmainpanel',
            flex: 0.80
            });

        }
    },

    onIncompleteOrdersButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'incompleteordersmainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'incompleteordersmainpanel',
            flex: 0.80
            });

        }
    },

    onYetToBeAssignedOrdersButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'yettobeassignedordersmainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'yettobeassignedordersmainpanel',
            flex: 0.80
            });

        }
    },

    onClosedOrdersButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'closedordersmainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'closedordersmainpanel',
            flex: 0.80
            });

        }
    },

    onAssignedOrdersForDeliveryButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'assignedordersfordeliverymainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'assignedordersfordeliverymainpanel',
            flex: 0.80
            });

        }
    },

    onAllPaymentdButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'allpaymentsmainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'allpaymentsmainpanel',
            flex: 0.80
            });

        }
    },

    onInverifiedPaymentButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'unverifiedpaymentmainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'unverifiedpaymentmainpanel',
            flex: 0.80
            });

        }
    },

    onFailedPaymentsButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'failedpaymentmainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'failedpaymentmainpanel',
            flex: 0.80
            });

        }
    },

    onDeliveredOrderButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'deliveredordersmainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'deliveredordersmainpanel',
            flex: 0.80
            });

        }
    },

    onPendingDeliveryButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'pendingdeliverymainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'pendingdeliverymainpanel',
            flex: 0.80
            });

        }
    },

    onOnTransitDeliveryButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'deliveriesontransitmainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'deliveriesontransitmainpanel',
            flex: 0.80
            });

        }
    },

    onFailedDeliveryButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'faileddeliverymainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'faileddeliverymainpanel',
            flex: 0.80
            });

        }
    },

    onDeliveryOnDisputeButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'deliveryondisputemainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'deliveryondisputemainpanel',
            flex: 0.80
            });

        }
    },

    onRoleButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'rolesmain'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'rolesmain',
            flex: 0.80
            });

        }
    },

    onTaskButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'tasksmain'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'tasksmain',
            flex: 0.80
            });

        }
    },

    onOperationsButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'operationsmain'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'operationsmain',
            flex: 0.80
            });

        }
    },

    onAuthorizationButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'authassignmentmain'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'authassignmentmain',
            flex: 0.80
            });

        }
    },

    onContainerButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'containermainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'containermainpanel',
            flex: 0.80
            });

        }
    },

    onAllSubscriptionPaymentsButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'allsubscriptionpaymentsmainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'allsubscriptionpaymentsmainpanel',
            flex: 0.80
            });

        }
    },

    onUnverifiedSubscriptionPaymentButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'unverifiedsubscriptionmainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'unverifiedsubscriptionmainpanel',
            flex: 0.80
            });

        }
    },

    onFailedSubscriptionPaymentButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'failedsubscriptionpaymentmainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'failedsubscriptionpaymentmainpanel',
            flex: 0.80
            });

        }
    },

    onProductTypeButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'producttypemainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'producttypemainpanel',
            flex: 0.80
            });

        }
    },

    onSpecificationParameterButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'productspecificationsmainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'productspecificationsmainpanel',
            flex: 0.80
            });

        }
    },

    onMemberStatusButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'memberstatusmainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'memberstatusmainpanel',
            flex: 0.80
            });

        }
    },

    onAssigningSpecificationsToProducttypeButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'assignspecificationstoproducttypes'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'assignspecificationstoproducttypes',
            flex: 0.80
            });

        }
    },

    onAProductSpecificationButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'assigningspecficationvaluestoproductmainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'assigningspecficationvaluestoproductmainpanel',
            flex: 0.80
            });

        }
    },

    onAboutUsButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'websiteaboutusmainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'websiteaboutusmainpanel',
            flex: 0.80
            });

        }
    },

    onWebsiteServiceInformationButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'websiteservicemainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'websiteservicemainpanel',
            flex: 0.80
            });

        }
    },

    onWebsiteMembershipInformationButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'websitemembershipmainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'websitemembershipmainpanel',
            flex: 0.80
            });

        }
    },

    onTermsAndConditionsButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'termsandconditionsmainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'termsandconditionsmainpanel',
            flex: 0.80
            });

        }
    },

    onLoggingOffFromSolutionButtonClick: function(button, e, eOpts) {


        Ext.Ajax.request({
        			url: '/cobuy/index.php?r=Members/logout',
        			success: function(conn, response, options, eOpts) {
        				var result = Ext.JSON.decode(conn.responseText, true);

        				if(!result) {
        					result = {};
        					result.success = false;
        					result.msg = conn.responseText;
        				}
        				if(result.success) {
        					button.up('mainviewport').destroy();
        					window.location.reload();
        				} else {
        					Ext.Msg.show({
        						title: 'Error!',
        						msg: result.msg,
        						icon: Ext.Msg.ERROR,
        						buttons: Ext.Msg.OK
        					});
        				}
        			},
        			failure: function(conn, response, options, eOpts) {
        				Ext.Msg.show ({
        					title: 'Error!',
        					msg: conn.responseText,
        					icon: Ext.Msg.ERROR,
        					buttons: Ext.Msg.OK
        				});
        			}
        		});
    },

    onChangeOwnPasswordButtonClick: function(button, e, eOpts) {
        var win = Ext.create('cobuy.view.ChangeOwnPasswordWin');

        win.show();
    },

    onHampersAndGiftButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'hampermanagermainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'hampermanagermainpanel',
            flex: 0.8
            });

        }
    },

    onHamperContainerButtonClick: function(button, e, eOpts) {
        //console.log('app button clicked');
        var viewport = button.up('mainviewport');
        var comp = viewport.getComponent(1).getItemId();
        //console.log('itemid is:', comp);
        if(comp !== 'hampercontainersmainpanel'){
           viewport.remove(comp);
            viewport.insert(1, {
            xtype: 'hampercontainersmainpanel',
            flex: 0.8
            });

        }
    },

    init: function(application) {
        this.control({
            "mainviewport button#countriesBtn": {
                click: this.onCountryMainpanelButtonClick
            },
            "mainviewport button#stateBtn": {
                click: this.onStatesMainpanelButtonClick
            },
            "mainviewport button#citiesBtn": {
                click: this.onCitiesMainpanelButtonClick
            },
            "mainviewport button#membershiptypeBtn": {
                click: this.onMembershipTypeMainpanelButtonClick
            },
            "mainviewport button#categoryBtn": {
                click: this.onProductCategoryMainpanelButtonClick
            },
            "mainviewport button#servicesBtn": {
                click: this.onServicesMainpanelButtonClick
            },
            "mainviewport button#productsBtn": {
                click: this.onProductsMainpanelButtonClick
            },
            "mainviewport button#constituentsBtn": {
                click: this.onProductConstituentsButtonClick
            },
            "mainviewport button#staffmembersBtn": {
                click: this.onStaffMembershipButtonClick
            },
            "mainviewport button#nonstaffmembersBtn": {
                click: this.onNonMembersButtonClick
            },
            "mainviewport button#membershipnumbersBtn": {
                click: this.onMemberNumberButtonClick
            },
            "mainviewport button#subscriptiontypeBtn": {
                click: this.onMembershipSubscriptionButtonClick
            },
            "mainviewport button#feesBtn": {
                click: this.onFeeButtonClick
            },
            "mainviewport button#assignfeetotypesBtn": {
                click: this.onAssignFeesToMembershiptypeButtonClick
            },
            "mainviewport button#currenciesBtn": {
                click: this.onCurrenciesButtonClick
            },
            "mainviewport button#timezonesBtn": {
                click: this.onTimezoneButtonClick
            },
            "mainviewport button#platformsettingsBtn": {
                click: this.onPlatfornSettingsButtonClick
            },
            "mainviewport button#languagesBtn": {
                click: this.onLanguageButtonClick
            },
            "mainviewport button#storesettingsBtn": {
                click: this.onStoreButtonClick
            },
            "mainviewport button#currencyexchangeBtn": {
                click: this.onCurrencyExchangeButtonClick
            },
            "mainviewport button#bankaccountnumberBtn": {
                click: this.onBankButtonClick
            },
            "mainviewport button#assignaccountnumbertocountryBtn": {
                click: this.onAssignmentOfBankAccountNumberToCountryButtonClick
            },
            "mainviewport button#order_unfulfilledordersBtn": {
                click: this.onUnfulfilledOrdersButtonClick
            },
            "mainviewport button#orders_incompleteordersBtn": {
                click: this.onIncompleteOrdersButtonClick
            },
            "mainviewport button#orders_yettobeassignedordersBtn": {
                click: this.onYetToBeAssignedOrdersButtonClick
            },
            "mainviewport button#order_closedordersBtn": {
                click: this.onClosedOrdersButtonClick
            },
            "mainviewport button#order_assignordersfordeliveryBtn": {
                click: this.onAssignedOrdersForDeliveryButtonClick
            },
            "mainviewport button#paymentsBtn": {
                click: this.onAllPaymentdButtonClick
            },
            "mainviewport button#unverifiedpaymentsBtn": {
                click: this.onInverifiedPaymentButtonClick
            },
            "mainviewport button#failedpaymentsBtn": {
                click: this.onFailedPaymentsButtonClick
            },
            "mainviewport button#deliveredordersBtn": {
                click: this.onDeliveredOrderButtonClick
            },
            "mainviewport button#pendingdeliveriesBtn": {
                click: this.onPendingDeliveryButtonClick
            },
            "mainviewport button#ontransitdeliveriesBtn": {
                click: this.onOnTransitDeliveryButtonClick
            },
            "mainviewport button#faileddeliveriesBtn": {
                click: this.onFailedDeliveryButtonClick
            },
            "mainviewport button#deliveriesondesputeBtn": {
                click: this.onDeliveryOnDisputeButtonClick
            },
            "mainviewport button#roleBtn": {
                click: this.onRoleButtonClick
            },
            "mainviewport button#taskBtn": {
                click: this.onTaskButtonClick
            },
            "mainviewport button#operationsBtn": {
                click: this.onOperationsButtonClick
            },
            "mainviewport button#authorizationsBtn": {
                click: this.onAuthorizationButtonClick
            },
            "mainviewport button#containerBtn": {
                click: this.onContainerButtonClick
            },
            "mainviewport button#subscriptionpaymentsBtn": {
                click: this.onAllSubscriptionPaymentsButtonClick
            },
            "mainviewport button#unverifiedsubscriptionpaymentsBtn": {
                click: this.onUnverifiedSubscriptionPaymentButtonClick
            },
            "mainviewport button#failedsubscriptionpaymentsBtn": {
                click: this.onFailedSubscriptionPaymentButtonClick
            },
            "mainviewport button#producttypeBtn": {
                click: this.onProductTypeButtonClick
            },
            "mainviewport button#measurementparaBtn": {
                click: this.onSpecificationParameterButtonClick
            },
            "mainviewport button#statusBtn": {
                click: this.onMemberStatusButtonClick
            },
            "mainviewport button#typehasspecificationBtn": {
                click: this.onAssigningSpecificationsToProducttypeButtonClick
            },
            "mainviewport button#productspecificationsBtn": {
                click: this.onAProductSpecificationButtonClick
            },
            "mainviewport button#aboutusBtn": {
                click: this.onAboutUsButtonClick
            },
            "mainviewport button#serviceBtn": {
                click: this.onWebsiteServiceInformationButtonClick
            },
            "mainviewport button#membershipBtn": {
                click: this.onWebsiteMembershipInformationButtonClick
            },
            "mainviewport button#termsandconditionsBtn": {
                click: this.onTermsAndConditionsButtonClick
            },
            "mainviewport button#logoffBtn": {
                click: this.onLoggingOffFromSolutionButtonClick
            },
            "mainviewport button#changeOwnPasswordBtn": {
                click: this.onChangeOwnPasswordButtonClick
            },
            "mainviewport button#hampersandgiftBtn": {
                click: this.onHampersAndGiftButtonClick
            },
            "mainviewport button#hampercontainersBtn": {
                click: this.onHamperContainerButtonClick
            }
        });
    }

});
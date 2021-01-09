sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast'
], function (oCont, msg) {
    'use strict';

    return oCont.extend("controlDevices.controller.App", {

        _mobileNumber: String,
        _baseURL: String,

        onInit: function () {
            this.onConfirm();
            this._baseURL = 'https://young-shore-98437.herokuapp.com/';
        },

        _msgToWhatsapp: function(deviceName, deviceNumber, deviceStatus, mobile){

            var url = this._baseURL + deviceName + '/' + deviceNumber + '/' + deviceStatus;
            var oData = {
                "mobile": mobile
            }
            console.log('calling URL..', url);
            var aData  = $.ajax({
                type: "POST",
                data: JSON.stringify(oData),
                url: url,
                contentType: 'application/json',
                processData: false,
                success: function(data){
                    console.log("success"+data);
                },
                error: function(e){
                    console.log("error: "+e);
                }
            });
        },

        onConfirm: function () {
            this._mobileNumber = this.getView().byId("mobileNumber").getValue();
        },

        _raiseMsg: function () {
            msg.show("Please enter and confirm your mobile number");
        },

        _getDeviceStatus: function(state){
            if (state){
                var status = 'on';
            }else{
                status = 'off';
            }
            return status;
        },

        onChangeLight1: function (e) {
            if (this._mobileNumber) {
                var status = this._getDeviceStatus(e.getParameter('state'));
                this._msgToWhatsapp('lights', '1', status, this._mobileNumber);
                console.log("Light1 state is " + e.getParameter('state'));
                console.log(this._mobileNumber);
            }
            else {
                this._raiseMsg();
            }
        },
        onChangeLight2: function (e) {
            if (this._mobileNumber) {
                var status = this._getDeviceStatus(e.getParameter('state'));
                this._msgToWhatsapp('lights', '2', status, this._mobileNumber);
                console.log("Light2 state is " + e.getParameter('state'));
                console.log(this._mobileNumber);
            }
            else {
                this._raiseMsg();
            }
        },
        onChangeLight3: function (e) {
            if (this._mobileNumber) {
                var status = this._getDeviceStatus(e.getParameter('state'));
                this._msgToWhatsapp('lights', '3', status, this._mobileNumber);
                console.log("Light3 state is " + e.getParameter('state'));
                console.log(this._mobileNumber);
            }
            else {
                this._raiseMsg();
            }
        },
        onChangeLight4: function (e) {
            if (this._mobileNumber) {
                var status = this._getDeviceStatus(e.getParameter('state'));
                this._msgToWhatsapp('lights', '4', status, this._mobileNumber);
                console.log("Light4 state is " + e.getParameter('state'));
                console.log(this._mobileNumber);
            }
            else {
                this._raiseMsg();
            }
        },
        onChangeLight5: function (e) {
            if (this._mobileNumber) {
                var status = this._getDeviceStatus(e.getParameter('state'));
                this._msgToWhatsapp('lights', '5', status, this._mobileNumber);
                console.log("Light5 state is " + e.getParameter('state'));
                console.log(this._mobileNumber);
            }
            else {
                this._raiseMsg();
            }
        },


        onChangeMotor1: function (e) {
            if (this._mobileNumber) {
                var status = this._getDeviceStatus(e.getParameter('state'));
                this._msgToWhatsapp('motors', '1', status, this._mobileNumber);
                console.log("Motor1 state is " + e.getParameter('state'));
                console.log(this._mobileNumber);
            }
            else {
                this._raiseMsg();
            }
        },
        onChangeMotor2: function (e) {
            if (this._mobileNumber) {
                var status = this._getDeviceStatus(e.getParameter('state'));
                this._msgToWhatsapp('motors', '2', status, this._mobileNumber);
                console.log("Motor2 state is " + e.getParameter('state'));
                console.log(this._mobileNumber);
            }
            else {
                this._raiseMsg();
            }
        },
        onChangeMotor3: function (e) {
            if (this._mobileNumber) {
                var status = this._getDeviceStatus(e.getParameter('state'));
                this._msgToWhatsapp('motors', '3', status, this._mobileNumber);
                console.log("Motor3 state is " + e.getParameter('state'));
                console.log(this._mobileNumber);
            }
            else {
                this._raiseMsg();
            }
        },
        onChangeMotor4: function (e) {
            if (this._mobileNumber) {
                var status = this._getDeviceStatus(e.getParameter('state'));
                this._msgToWhatsapp('motors', '4', status, this._mobileNumber);
                console.log("Motor4 state is " + e.getParameter('state'));
                console.log(this._mobileNumber);
            }
            else {
                this._raiseMsg();
            }
        },
        onChangeMotor5: function (e) {
            if (this._mobileNumber) {
                var status = this._getDeviceStatus(e.getParameter('state'));
                this._msgToWhatsapp('motors', '5', status, this._mobileNumber);
                console.log("Motor5 state is " + e.getParameter('state'));
                console.log(this._mobileNumber);
            }
            else {
                this._raiseMsg();
            }
        }

    });

});
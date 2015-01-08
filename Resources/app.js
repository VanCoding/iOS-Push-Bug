var win = Ti.UI.createWindow({backgroundColor:"green"});
win.open();

var callbacks = {
    types: [
    Titanium.Network.NOTIFICATION_TYPE_BADGE,
    Titanium.Network.NOTIFICATION_TYPE_SOUND,
    Titanium.Network.NOTIFICATION_TYPE_ALERT
    ],
    success:function(e){
        console.log("SUCCESS",e.deviceToken);
    },
    error:function(e){
        console.log("ERROR",new Date().getTime());
    },
    callback: function(e){
        console.log("CALLBACK",new Date().getTime());
    }
};

if(Ti.App.iOS.registerUserNotificationSettings){
    function onUserNotificationSettings(){
        delete callbacks.types;
        Ti.Network.registerForPushNotifications(callbacks);
        Ti.App.iOS.removeEventListener("usernotificationsettings",onUserNotificationSettings);
    }
    Ti.App.iOS.addEventListener("usernotificationsettings",onUserNotificationSettings)
    Ti.App.iOS.registerUserNotificationSettings(callbacks)
}else{
    Ti.Network.registerForPushNotifications(callbacks)
}

({
	searchLink : function(component, event, helper) {
        var url = 'https://www.google.co.jp/';
        helper.navigate(component, url);
	},
    mapLink : function(component, event, helper) {
        var url = 'https://www.google.co.jp/maps/place/Salesforce.com+Inc/@37.792457,-122.3987053,15z/data=!4m5!1m2!2m1!1ssalesforce.com!3m1!1s0x80858066a8b9520d:0x34ad2c4dce45d5ca?hl=ja';
        helper.navigate(component, url);
	},
    youtubeLink : function(component, event, helper) {
        var url = 'https://www.youtube.com/channel/UCqYUx7Mnn62SDbKJ6wsw8xw';
        helper.navigate(component, url);
	},
    translateLink : function(component, event, helper) {
        var url = 'https://translate.google.co.jp/?hl=ja&tab=cT';
        helper.navigate(component, url);
	},
})
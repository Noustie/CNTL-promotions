/*Small-Business Omniture Variables */

var omniLoc= String(window.location);
var omniIndex= omniLoc.substring(omniLoc.indexOf("small-business/")+15);
//alert(omniIndex);
//small-business/
if(omniIndex == ""){
	s.pageName="ctl|smb|homepage";
	s.server="centurylink.com";
	s.channel="Small Business";
	s.prop3="unknown";
	s.prop24="ctl|smb|homepage";
	s.prop25="ctl|smb|homepage";
	s.prop26="ctl|smb|homepage";
	s.prop27="ctl|smb|homepage";
	s.prop38="static";
	s.prop39="";
	s.prop52="ctl";
	/* Conversion Variables */
	s.eVar24="unknown";
	s.eVar41="Small Business";
	s.eVar53="ctl|smb|homepage";
	s.eVar54="ctl|smb|homepage";
	s.eVar55="ctl|smb|homepage";
	s.eVar48="static";
	s.eVar49="";
	s.eVar56="ctl";

}
//small-business/customer-support pages
if(omniIndex == "customer-support/"){
	s.pageName="smb|customer_support";
	s.prop24="smb|customer_support";
	s.prop25="smb|customer_support";
	s.prop26="smb|customer_support";
	s.prop27="smb|customer_support";
	s.eVar35="smb|customer_support";
	s.eVar37="smb|customer_support";
}
if(omniIndex == "customer-support/calling_features.html"){
	s.pageName="smb|customer_support|usesr_guides|local_phone|calling_features";
	s.prop24="smb|customer_support";
	s.prop25="smb|customer_support|user_guides";
	s.prop26="smb|customer_support|user_guides|local_phone";
	s.prop27="smb|customer_support|user_guides|local_phone|calling_features";
	s.eVar35="smb|customer_support";
	s.eVar37="smb|customer_support|user_guides";
}
if(omniIndex == "customer-support/internet.html"){
	s.pageName="smb|customer_support|user_guides|HSI";
	s.prop24="smb|customer_support";
	s.prop25="smb|customer_support|user_guides";
	s.prop26="smb|customer_support|user_guides|HSI";
	s.prop27="smb|customer_support|user_guides|HSI";
	s.eVar35="smb|customer_support";
	s.eVar37="smb|customer_support|user_guides";
}
if(omniIndex == "customer-support/isp-list.html"){
	s.pageName="smb|customer_support|isp_list";
	s.prop24="smb|customer_support";
	s.prop25="smb|customer_support|isp_list";
	s.prop26="smb|customer_support|isp_list";
	s.prop27="smb|customer_support|isp_list";
	s.eVar35="smb|customer_support";
	s.eVar37="smb|smb|customer_support|isp_list";
}
if(omniIndex == "customer-support/local-phone.html"){
	s.pageName="smb|customer_support|user_guides|local_phone";
	s.prop24="smb|customer_support";
	s.prop25="smb|customer_support|user_guides";
	s.prop26="smb|customer_support|user_guides|local_phone";
	s.prop27="smb|customer_support|user_guides|local_phone";
	s.eVar35="smb|customer_support";
	s.eVar37="smb|customer_support|user_guides";
}
if(omniIndex == "customer-support/long_distance_service.html"){
	s.pageName="smb|customer_support|user_guides|long_distance";
	s.prop24="smb|customer_support";
	s.prop25="smb|customer_support|user_guides";
	s.prop26="smb|customer_support|user_guides|long_distance";
	s.prop27="smb|customer_support|user_guides|long_distance";
	s.eVar35="smb|customer_support";
	s.eVar37="smb|customer_support|user_guides";
}
if(omniIndex == "customer-support/online_billing.html"){
	s.pageName="smb|customer_support|biling|qwest_billing|online_billing";
	s.prop24="smb|customer_support";
	s.prop25="smb|customer_support|billing";
	s.prop26="smb|customer_support|billing|qwest_billing";
	s.prop27="smb|customer_support|billing|qwest_billing|online_billing";
	s.eVar35="smb|customer_support";
	s.eVar37="smb|customer_support|billing";
}
if(omniIndex == "customer-support/paying_your_bill.html"){
	s.pageName="smb|customer_support|billing|qwest_billing|paying_your_bill";
	s.prop24="smb|customer_support";
	s.prop25="smb|customer_support|billing";
	s.prop26="smb|customer_support|billing|qwest_billing";
	s.prop27="smb|customer_support|billing|qwest_billing"|paying_your_bill;
	s.eVar35="smb|customer_support";
	s.eVar37="smb|customer_support|billing";
}
if(omniIndex == "customer-support/payment_options.html"){
	s.pageName="smb|customer_support|payment_options";
	s.prop24="smb|customer_support";
	s.prop25="smb|customer_support|payment_options";
	s.prop26="smb|customer_support|payment_options";
	s.prop27="smb|customer_support|payment_options";
	s.eVar35="smb|customer_support";
	s.eVar37="smb|customer_support|payment_options";
}
if(omniIndex == "customer-support/telephones_equipment.html"){
	s.pageName="smb|customer_support|user_guides|telephones_equipment";
	s.prop24="smb|customer_support";
	s.prop25="smb|customer_support|user_guides";
	s.prop26="smb|customer_support|user_guides";
	s.prop27="smb|customer_support|user_guides|telephones_equipment";
	s.eVar35="smb|customer_support";
	s.eVar37="smb|customer_support|user_guides";
}
if(omniIndex == "customer-support/understanding_your_bill.html"){
	s.pageName="smb|customer_support|billing|qwest_billing";
	s.prop24="smb|customer_support";
	s.prop25="smb|customer_support|billing";
	s.prop26="smb|customer_support|billing|qwest_billing";
	s.prop27="smb|customer_support|billing|qwest_billing";
	s.eVar35="smb|customer_support";
	s.eVar37="smb|customer_support|billing|qwest_billing";
}
if(omniIndex == "customer-support/user-guides.html"){
	s.pageName="smb|customer_support|user_guides";
	s.prop24="smb|customer_support";
	s.prop25="smb|customer_support|user_guides";
	s.prop26="smb|customer_support|user_guides";
	s.prop27="smb|customer_support|user_guides";
	s.eVar35="smb|customer_support";
	s.eVar37="smb|customer_support|user_guides";
}
if(omniIndex == "customer-support/help.html"){
	s.pageName="smb|customer_support|email_us";
	s.prop24="smb|customer_support";
	s.prop25="smb|customer_support|email_us";
	s.prop26="smb|customer_support|email_us";
	s.prop27="smb|customer_support|email_us";
	s.eVar35="smb|customer_support";
	s.eVar37="smb|customer_support|email_us";
}
if(omniIndex == "customer-support/faqs.html"){
	s.pageName="smb|customer_support|faqs";
	s.prop24="smb|customer_support";
	s.prop25="smb|customer_support|faqs";
	s.prop26="smb|customer_support|faqs";
	s.prop27="smb|customer_support|faqs";
	s.eVar35="smb|customer_support";
	s.eVar37="smb|customer_support|faqs";
}

///small-business/products
if(omniIndex == "products/"){
	s.pageName="smb|products";
	s.prop24="smb|products";
	s.prop25="smb|products";
	s.prop26="smb|products";
	s.prop27="smb|products";
	s.eVar35="smb|products";
	s.eVar37="smb|products";
}
if(omniIndex == "products/business-solutions"){
	s.pageName="smb|products";
	s.prop24="smb|products";
	s.prop25="smb|products";
	s.prop26="smb|products";
	s.prop27="smb|products";
	s.eVar35="smb|products";
	s.eVar37="smb|products";
}
if(omniIndex == "products"){
	s.pageName="smb|products";
	s.prop24="smb|products";
	s.prop25="smb|products";
	s.prop26="smb|products";
	s.prop27="smb|products";
	s.eVar35="smb|products";
	s.eVar37="smb|products";
}
if(omniIndex == "products"){
	s.pageName="smb|products";
	s.prop24="smb|products";
	s.prop25="smb|products";
	s.prop26="smb|products";
	s.prop27="smb|products";
	s.eVar35="smb|products";
	s.eVar37="smb|products";
}
if(omniIndex == "products"){
	s.pageName="smb|products";
	s.prop24="smb|products";
	s.prop25="smb|products";
	s.prop26="smb|products";
	s.prop27="smb|products";
	s.eVar35="smb|products";
	s.eVar37="smb|products";
}
if(omniIndex == "products"){
	s.pageName="smb|products";
	s.prop24="smb|products";
	s.prop25="smb|products";
	s.prop26="smb|products";
	s.prop27="smb|products";
	s.eVar35="smb|products";
	s.eVar37="smb|products";
}
if(omniIndex == "products"){
	s.pageName="smb|products";
	s.prop24="smb|products";
	s.prop25="smb|products";
	s.prop26="smb|products";
	s.prop27="smb|products";
	s.eVar35="smb|products";
	s.eVar37="smb|products";
}
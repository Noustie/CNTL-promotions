var cust_info = {
	domain: subcookiejar.fetch("profile_cookie") || null,
	type: subcookiejar.fetch('customerType','customerType') || null,
	company: "Unknown",
	customerType: "unknown"
}

if ( !!cust_info.domain && !!cust_info.domain.shoppingDomain ) {
	switch(cust_info.domain.shoppingDomain) {
		case 'Q':
			cust_info.company = "Qwest";
			break;
		case 'CTL':
			cust_info.company = "CenturyLink";
			break;
		default:
			cust_info.company = "Unknown";
			break;
	}
	if ( cust_info.domain.domainOverlap == 'Y') {
		cust_info.company = "Overlapped";
	}
} else {
	cust_info.company = "unknown";
}
switch(cust_info.type){
	case "NC":
		cust_info.customerType = "New Customer";
		break;
	case 'EC':
		cust_info.customerType = "Existing Customer: Legacy " + cust_info.company;
		break;
	default:
		cust_info.customerType = "unknown";
}

eBiz_prop3 = cust_info.customerType;
eBiz_evar24 = eBiz_prop3;	
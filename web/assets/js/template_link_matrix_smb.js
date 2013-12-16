/* TEST COMMENT - ST 091211 */
/* TEST COMMENT - ML 091311 v2 */
/* TEST Comment to check...	*/
var generalUrls = {'myaccount':{'Q':qportal_url+'/smallbusiness/appmanager/smb/login','CTL':ctlmyacct_url+'/eam/login.do'},'shop':{Q:qcookie_url+'/MasterWebPortal/shopAuthentication',CTL:ctl_url+'/shop/index.html'}, 'smb':{'Q':qshop_url+'/MasterWebPortal/freeRange/smb/shopjumpin.action','CTL':ctl_url+'/shop/index.html'}};

/* Link Matrix for ALL pages - template links
 *
 * Format is : id=>EC/NC=>Q, CTL, EQ=>URL
 */

 var linkMatrix={"zam":{
	"sb_global-nav-contact-us":{
		CTL: qshop_url+"/small-business/support/",
		Q: qshop_url+"/small-business/customer-support/"
	},
	"sb_thankyou_faq":{
		CTL: ctlsecure_url+"/Pages/Support/HelpAndFAQ/",
		Q: faq_url+"/index.php?interface=2"
	},
	"sb_c_sdd_a_cs":{
		CTL: qshop_url+"/small-business/support/",
		Q: qshop_url+"/small-business/customer-support/"
	},
	"tpl_res-dd-movies":{
		CTL: "http://www.centurylink.net/?sc_cid=directory_videostore",
		Q: "https://qweststore.cellmania.com/centurylink/home.do?"
	},
	"sb_c_sdd_a_cs_footer" : {
		CTL: qshop_url+"/small-business/support/",
		Q: qshop_url+"/small-business/customer-support/"
	},
	"site-search-submit":{
		CTL: "#SEARCH",
		Q: "#SEARCH"
	},
	"tpl_footer-store-locator":{
		CTL: ctl_url+"/Pages/Support/storeLocator.html",
		Q: "http://storelocator.centurylinkapps.com/"
	},
	"tpl_footer-legal-notices":{
		CTL: ctl_url+"/Pages/AboutUs/Legal/CopyrightNotices/",
		Q: q_url+"/legal/"
	},
	"tpl_footer-yellow-pages":{
		CTL: "http://www.centurylinkyellowpages.com/",
		Q: "http://www.dexknows.com/"
	},
	"tpl_footer-email-offers":{
		CTL: ctl_url+"/shop/SpecialOffers/connect5.jsp",
		Q: q_url+"/residential/products/newsletter.html",
		EQ: eq_url+"/embarq/assets/pages/GetEmails/"
	},
	"tpl_footer-referral-program":{
		CTL: ctl_url+"/shop/rewardsLanding.html",
		Q: "http://www.qwestreferafriend.com/",
		EQ: eq_url+"/Residential/SpecialOffers/RebatesAndReferrals"
	},
	"smb_ctoc":{
		type:'popup',
		CTL: ctlsecure_url+"/common/popups/small-business/lctl_c2call.html",
		Q: qshop_url+"/common/popups/small-business/lq_c2call.html"
	},
	"tpl_res-dd-security-backup":{
		CTL: ctl_url+ "/home/ease/",
		Q: q_url+"/residential/qwestatease/learn/index.html",
		EQ: "http://www.centurylink.net/security/index.php?sc_cid=directory_security"
	},
	"tpl_res-dd-free-wifi":{
		CTL: ctl_url+"/shop/Internet/WiFi/wiFi.jsp",
		Q: "#UNAVAILABLE",
		EQ: ctl_url+"/shop/Internet/WiFi/wiFi.jsp"
	},
	"tpl_res-dd-home-wireless-network":{
		CTL: q_url+"/internethelp/",
		Q: q_url+"/residential/homewirelessnetwork/",
		EQ: ctlsecure_url+"/Pages/Personal/Internet/HSI/speedDemo.jsp"
	},
	"tpl_res-dd-contact-cs":{
		CTL: ctl_url+"/Pages/Support/",
		Q: q_url+"/customerService/index.html",
		EQ: eq_url+"/Support/Residential/ContactUs/"
	},
	"tpl_res-dd-move-services":{
		CTL: ctlsecure_url+"/Pages/Support/MovingResources/",
		Q: q_url+"/residential/movers/indexA.html",
		EQ: eqsecure_url+"/Support/Residential/"
	},
	"sb_c_sdd_a_bh":{
		CTL: qshop_url+"/small-business/support/",
		Q: qshop_url+"/small-business/customer-support/billing-payments/"
	},

	"sb_c_sdd_a_bh_footer":{
		CTL: qshop_url+"/small-business/support/",
		Q: qshop_url+"/small-business/customer-support/billing-payments/"
	},
	"sb_c_sdd_a_phg":{
		CTL: qshop_url+"/small-business/support/",
		Q: qshop_url+"/small-business/customer-support/user-guides.html"
	},
	"sb_c_sdd_a_phg_footer":{
		CTL: qshop_url+"/small-business/support/",
		Q: qshop_url+"/small-business/customer-support/user-guides.html"
	},
	"sb_c_sdd_a_cu_footer":{
		CTL: qshop_url+"/small-business/support/",
		Q: qshop_url+"/small-business/customer-support/"
	},
	"sb_c_sdd_a_cu":{
		CTL: qshop_url+"/small-business/support/",
		Q: qshop_url+"/small-business/customer-support/"
	},
	"sb_c_sdd_a_faq":{
		CTL: ctlsecure_url+"/Pages/Support/HelpAndFAQ",
		Q: "http://faq.centurylink.com/index.php?interface=2"
	},
	"tpl_footer-smb-email-us":{
		CTL: ctlsecure_url+"/Pages/Support/ContactUs/",
		Q: q_url+"/corporate/customerService/contactus/"
	},
	"sb_c_sdd_a_faq_footer":{
		CTL: ctlsecure_url+"/Pages/Support/HelpAndFAQ",
		Q: "http://faq.centurylink.com/index.php?interface=2"
	},
	"sb_global-quick-bill-pay":{
		type:'TCAT|newwindow',
		CTL: ctleam_url+"/eam/login.do",
		Q: qshop_url+"/MasterWebPortal/freeRange/QuickPay.action"
	},
	"tpl_res-dd-request-repair":{
		type:'TCAT',
		CTL: "https://selfservice.centurylink.com/ticketing/residential/displayResidentialTicketingLanding.do",
		Q: qshop_url+"/MasterWebPortal/freeRange/acctMgmt/RepairLoginAction.action"
		}
},
"ctam":{
	"sb_cc_ccpro_compare_table":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/",
			Q: qshop_url+"/small-business/products/bundles/business-bundles/core-connect-pro"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/",
			Q: qshop_url+"/MasterWebPortal/SmallBusiness/CoreConnectPro"
		}
	},
	"sb_cc_bus_ph":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/core-connect/",
			Q: qshop_url+"/small-business/products/bundles/business-bundles/core-connect"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/core-connect/",
			Q: qshop_url+"/MasterWebPortal/SmallBusiness/CoreConnect"
		}
	},
	"sb_cc_wireless":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/core-connect/",
			Q: qshop_url+"/small-business/products/bundles/business-bundles/core-connect"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/core-connect/",
			Q: qshop_url+"/MasterWebPortal/SmallBusiness/CoreConnect"
		}
	},
	"sb_cc_enhanced_services":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/core-connect/",
			Q: qshop_url+"/small-business/products/bundles/business-bundles/core-connect"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/core-connect/",
			Q: qshop_url+"/MasterWebPortal/SmallBusiness/CoreConnect"
		}
	},
	"sb_cc_enhanced_data_protection":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/core-connect/",
			Q: qshop_url+"/small-business/products/bundles/business-bundles/core-connect"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/core-connect/",
			Q: qshop_url+"/MasterWebPortal/SmallBusiness/CoreConnect"
		}
	},
	"sb_cc_enhanced_net_protection":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/core-connect/",
			Q: qshop_url+"/small-business/products/bundles/business-bundles/core-connect"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/core-connect/",
			Q: qshop_url+"/MasterWebPortal/SmallBusiness/CoreConnect"
		}
	},
	"sb_cc_hosting_services":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/core-connect/",
			Q: qshop_url+"/small-business/products/bundles/business-bundles/core-connect"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/core-connect/",
			Q: qshop_url+"/MasterWebPortal/SmallBusiness/CoreConnect"
		}
	},
	"sb_cc_bundles":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/core-connect/",
			Q: qshop_url+"/small-business/products/bundles/business-bundles/core-connect"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/core-connect/",
			Q: qshop_url+"/MasterWebPortal/SmallBusiness/CoreConnect"
		}
	},
	"sb_cc_bus_ph_voip":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/core-connect/",
			Q: qshop_url+"/small-business/products/bundles/business-bundles/core-connect"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/core-connect/",
			Q: qshop_url+"/MasterWebPortal/SmallBusiness/CoreConnect"
		}
	},
	"sb_cc_bus_ph_ll_distance":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/core-connect/",
			Q: qshop_url+"/small-business/products/bundles/business-bundles/core-connect"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/core-connect/",
			Q: qshop_url+"/MasterWebPortal/SmallBusiness/CoreConnect"
		}
	},
	"sb_cc_bus_internet_hsi":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/core-connect/",
			Q: qshop_url+"/small-business/products/bundles/business-bundles/core-connect"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/core-connect/",
			Q: qshop_url+"/MasterWebPortal/SmallBusiness/CoreConnect"
		}
	},
	"sb_cc_bus_internet_data_networking":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/core-connect/",
			Q: qshop_url+"/small-business/products/bundles/business-bundles/core-connect"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/core-connect/",
			Q: qshop_url+"/MasterWebPortal/SmallBusiness/CoreConnect"
		}
	},
	"sb_title_bus_ph":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/business-phone/local-long-distance-service/",
			Q: qshop_url+"/small-business/products/business-phone/local-long-distance-service/"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/business-phone/local-long-distance-service/",
			Q: qshop_url+"/small-business/products/business-phone/local-long-distance-service/"
		}
	},
	"sb_icon_bus_ph":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/business-phone/local-long-distance-service/",
			Q: qshop_url+"/small-business/products/business-phone/local-long-distance-service/"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/business-phone/local-long-distance-service/",
			Q: qshop_url+"/small-business/products/business-phone/local-long-distance-service/"
		}
	},
	"sb_bus_ph":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/business-phone/local-long-distance-service/",
			Q: qshop_url+"/small-business/products/business-phone/local-long-distance-service/"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/business-phone/local-long-distance-service/",
			Q: qshop_url+"/small-business/products/business-phone/local-long-distance-service/"
		}
	},
	"sb_wireless_cat":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/verizon-business-mobile/",
			Q: qshop_url+"/small-business/products/verizon-business-mobile/"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/verizon-business-mobile/",
			Q: qshop_url+"/small-business/products/verizon-business-mobile/"
		}
	},
	"sb_head_wireless":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/verizon-business-mobile/",
			Q: qshop_url+"/small-business/products/verizon-business-mobile/"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/verizon-business-mobile/",
			Q: qshop_url+"/small-business/products/verizon-business-mobile/"
		}
	},
	"sb_prod_wireless":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/verizon-business-mobile/",
			Q: qshop_url+"/small-business/products/verizon-business-mobile/"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/verizon-business-mobile/",
			Q: qshop_url+"/small-business/products/verizon-business-mobile/"
		}
	},
	"sb_prod_audio_conferencing":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/small-business/products/business-phone/audio-conferencing/",
			Q: qshop_url+"/small-business/products/business-phone/audio-conferencing/"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/small-business/products/business-phone/audio-conferencing/",
			Q: qshop_url+"/small-business/products/business-phone/audio-conferencing/"
		}
	},
	"sb_audio_conferencing_cat":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/small-business/products/business-phone/audio-conferencing/",
			Q: qshop_url+"/small-business/products/business-phone/audio-conferencing/"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/small-business/products/business-phone/audio-conferencing/",
			Q: qshop_url+"/small-business/products/business-phone/audio-conferencing/"
		}
	},
	"sb_bus_internet":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/internet-data/business-class-high-speed-internet/",
			Q: qshop_url+"/small-business/products/business-internet-data/high-speed-internet/"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/internet-data/business-class-high-speed-internet/",
			Q: qshop_url+"/small-business/products/business-internet-data/high-speed-internet/"
		}
	},
	"sb_title_bus_internet":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/internet-data/business-class-high-speed-internet/",
			Q: qshop_url+"/small-business/products/business-internet-data/high-speed-internet/"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/internet-data/business-class-high-speed-internet/",
			Q: qshop_url+"/small-business/products/business-internet-data/high-speed-internet/"
		}
	},
	"sb_icon_bus_internet":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/internet-data/business-class-high-speed-internet/",
			Q: qshop_url+"/small-business/products/business-internet-data/high-speed-internet/"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/internet-data/business-class-high-speed-internet/",
			Q: qshop_url+"/small-business/products/business-internet-data/high-speed-internet/"
		}
	},
	"sb_bundles":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/",
			Q: qshop_url+"/small-business/products/bundles/business-bundles/"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/",
			Q: qshop_url+"/small-business/products/bundles/business-bundles/"
		}
	},
	"sb_bundles_nav":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/",
			Q: qshop_url+"/small-business/products/bundles/business-bundles/"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/",
			Q: qshop_url+"/small-business/products/bundles/business-bundles/"
		}
	},
	"sb_cc_checkavailability":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/core-connect/",
			Q: qshop_url+"/small-business/products/bundles/business-bundles/core-connect/"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/core-connect/",
			Q: qshop_url+"/MasterWebPortal/SmallBusiness/CoreConnect"
		}
	},
	"sb_ccp_checkavailability":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/",
			Q: qshop_url+"/small-business/products/bundles/business-bundles/core-connect-pro/"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/bundles/",
			Q: qshop_url+"/MasterWebPortal/SmallBusiness/CoreConnectPro"
		}
	},
	"sb_enhanced_services":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/small-business/products/enhanced-business-services/",
			Q: qshop_url+"/small-business/products/enhanced-business-services/communication-tools"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/small-business/products/enhanced-business-services/",
			Q: qshop_url+"/small-business/products/enhanced-business-services/communication-tools"
		}
	},
	"sb_comm_tools_footer":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/small-business/products/enhanced-business-services/",
			Q: qshop_url+"/small-business/products/enhanced-business-services/communication-tools"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/small-business/products/enhanced-business-services/",
			Q: qshop_url+"/small-business/products/enhanced-business-services/communication-tools"
		}
	},
	"sb_prod_bus_tv":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/directv-business-tv",
			Q: qshop_url+"/small-business/products/business-tv"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/directv-business-tv",
			Q: qshop_url+"/small-business/products/business-tv"
		}
	},
	"sb_title_tv_bus":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/directv-business-tv",
			Q: qshop_url+"/small-business/products/business-tv"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/directv-business-tv",
			Q: qshop_url+"/small-business/products/business-tv"
		}
	},
	"sb_icon_business_tv":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/directv-business-tv",
			Q: qshop_url+"/small-business/products/business-tv"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/directv-business-tv",
			Q: qshop_url+"/small-business/products/business-tv"
		}
	},
	"sb_head_bus_tv":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/directv-business-tv",
			Q: qshop_url+"/small-business/products/business-tv"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/directv-business-tv",
			Q: qshop_url+"/small-business/products/business-tv"
		}
	},
	"sb_business_tv":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/directv-business-tv",
			Q: qshop_url+"/small-business/products/business-tv"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/directv-business-tv",
			Q: qshop_url+"/small-business/products/business-tv"
		}
	},
	"sb_tv_restaurants":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/directv-business-tv",
			Q: qshop_url+"/small-business/products/business-tv"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/directv-business-tv",
			Q: qshop_url+"/small-business/products/business-tv"
		}
	},
	"sb_tv_bus":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/directv-business-tv",
			Q: qshop_url+"/small-business/products/business-tv"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/directv-business-tv",
			Q: qshop_url+"/small-business/products/business-tv"
		}
	},
	"sb_tv_private_office":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/directv-business-tv",
			Q: qshop_url+"/small-business/products/business-tv"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/directv-business-tv",
			Q: qshop_url+"/small-business/products/business-tv"
		}
	},
	"sb_business_tv_head":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/directv-business-tv",
			Q: qshop_url+"/small-business/products/business-tv"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/directv-business-tv",
			Q: qshop_url+"/small-business/products/business-tv"
		}
	},
	"sb_tv_restaurants_head":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/directv-business-tv",
			Q: qshop_url+"/small-business/products/business-tv"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/directv-business-tv",
			Q: qshop_url+"/small-business/products/business-tv"
		}
	},
	"sb_tv_bus_head":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/directv-business-tv",
			Q: qshop_url+"/small-business/products/business-tv"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/directv-business-tv",
			Q: qshop_url+"/small-business/products/business-tv"
		}
	},
	"sb_tv_private_office_head":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/directv-business-tv",
			Q: qshop_url+"/small-business/products/business-tv"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/directv-business-tv",
			Q: qshop_url+"/small-business/products/business-tv"
		}
	},
	"sb_wireless":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/verizon-business-mobile/",
			Q: qshop_url+"/small-business/products/verizon-business-mobile/"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/verizon-business-mobile/",
			Q: qshop_url+"/small-business/products/verizon-business-mobile/"
		}
	},
	"sb_wireless_mobile":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/verizon-business-mobile/",
			Q: qshop_url+"/small-business/products/verizon-business-mobile/"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/verizon-business-mobile/",
			Q: qshop_url+"/small-business/products/verizon-business-mobile/"
		}
	},
	"sb_title_wireless_mobile":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/verizon-business-mobile/",
			Q: qshop_url+"/small-business/products/verizon-business-mobile/"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/verizon-business-mobile/",
			Q: qshop_url+"/small-business/products/verizon-business-mobile/"
		}
	},
	"sb_title_audio_conferencing":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/small-business/products/business-phone/audio-conferencing/",
			Q: qshop_url+"/small-business/products/business-phone/audio-conferencing/"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/small-business/products/business-phone/audio-conferencing/",
			Q: qshop_url+"/small-business/products/business-phone/audio-conferencing/"
		}
	},
	"sb_wireless_head":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/verizon-business-mobile/",
			Q: qshop_url+"/small-business/products/verizon-business-mobile/"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/verizon-business-mobile/",
			Q: qshop_url+"/small-business/products/verizon-business-mobile/"
		}
	},
	"sb_wireless_mobile_head":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/verizon-business-mobile/",
			Q: qshop_url+"/small-business/products/verizon-business-mobile/"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/verizon-business-mobile/",
			Q: qshop_url+"/small-business/products/verizon-business-mobile/"
		}
	},
	"sb_wireless_broadband_head":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/verizon-business-mobile/",
			Q: qshop_url+"/small-business/products/verizon-business-mobile/"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/verizon-business-mobile/",
			Q: qshop_url+"/small-business/products/verizon-business-mobile/"
		}
	},
	"sb_wireless_broadband":{
		EC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/verizon-business-mobile/",
			Q: qshop_url+"/small-business/products/verizon-business-mobile/"
		},
		NC:{
			type:'TCATSMB',
			CTL:qshop_url+"/smallbusiness/products/verizon-business-mobile/",
			Q: qshop_url+"/small-business/products/verizon-business-mobile/"
		}
	},
	"sb_bp_internet_head":{
		type:'TCATSMB',
		CTL:qshop_url+"/smallbusiness/products/bundles/",
		Q: qshop_url+"/small-business/products/bundles/"
	},
	"sb_bp_internet_foot":{
		type:'TCATSMB',
		CTL:qshop_url+"/smallbusiness/products/bundles/",
		Q: qshop_url+"/small-business/products/bundles/business-bundles/"
	},
	"sb_hsi_head":{
		type:'TCATSMB',
		CTL:qshop_url+"/smallbusiness/products/internet-data/business-class-high-speed-internet/",
		Q: qshop_url+"/small-business/products/business-internet-data/"
	},
	"sb_hsi_foot":{
		type:'TCATSMB',
		CTL:qshop_url+"/smallbusiness/products/internet-data/business-class-high-speed-internet/",
		Q: qshop_url+"/small-business/products/business-internet-data/"
	},
	"sb_local_ld_head":{
		type:'TCATSMB',
		CTL:qshop_url+"/smallbusiness/products/business-phone/local-long-distance-service/",
		Q: qshop_url+"/small-business/products/business-phone/"
	},
	"sb_local_ld_foot":{
		type:'TCATSMB',
		CTL:qshop_url+"/smallbusiness/products/business-phone/local-long-distance-service/",
		Q: qshop_url+"/small-business/products/business-phone/"
	},
	"sb_hsi_foot_profiled":{
		type:'TCATSMB',
		CTL:qshop_url+"/smallbusiness/products/internet-data/business-class-high-speed-internet/",
		Q: qshop_url+"/small-business/products/business-internet-data/high-speed-internet/"
	},
	"sb_hsi_head_profiled":{
		type:'TCATSMB',
		CTL:qshop_url+"/smallbusiness/products/internet-data/business-class-high-speed-internet/",
		Q: qshop_url+"/small-business/products/business-internet-data/high-speed-internet/"
	},
	"sb_local_ld_head_profiled":{
		type:'TCATSMB',
		CTL:qshop_url+"/smallbusiness/products/business-phone/local-long-distance-service/",
		Q: qshop_url+"/small-business/products/business-phone/local-long-distance-service/"
	},
	"sb_local_ld_foot_profiled":{
		type:'TCATSMB',
		CTL:qshop_url+"/smallbusiness/products/business-phone/local-long-distance-service/",
		Q: qshop_url+"/small-business/products/business-phone/local-long-distance-service/"
	},
	"sb-contact-us":{
		type:'TCATSMB',
		CTL: qshop_url+"/small-business/support/",
		Q: qshop_url+"/small-business/customer-support/"
	},
	"tpl_res-dd-wireless-phone":{
		EC:{
			CTL: ctl_url+"/shop/SpecialOffers/voice1.jsp",
			Q: "https://store.verizonwireless.com/store/qwest_nse"
		},
		NC:{
			CTL: ctl_url+"/shop/SpecialOffers/voice1.jsp",
			Q: "https://store.verizonwireless.com/store/qwest_nse"
			}
	}
 },

"mam":{
	"sb_mam":{
		type:'TCATSMB',
		CTL: ctleam_url+"/eam/entryPoint.do",
		Q: qshop_url+"/MasterWebPortal/FreeRange",
		EQ: ctleam_url+"/eam/entryPoint.do"

	}
 },

"chctam":{
	"/small-business/products/bundles/":{
		CTL: qshop_url+"/smallbusiness/products/bundles/"
	},
	"/small-business/customer-support/":{
		CTL: ctleam_url+"/eam/login.do"
	}
 }

 }


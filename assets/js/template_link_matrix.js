/* TEST COMMENT - ST 091211 */
/* TEST COMMENT - ML 091311 v2 */

var generalUrls = {'myaccount':{'Q':qcookie_url+'/MasterWebPortal/myaccountAuthentication','CTL':ctleam_url+'/entrycheck/eam/loggedin.html'},'shop':{Q:qcookie_url+'/MasterWebPortal/shopAuthentication',CTL:ctl_url+'/shop/index.html'}};

/* Link Matrix for ALL pages - template links
 *
 * Format is : id=>EC/NC=>Q, CTL, EQ=>URL
 */
 
 var linkMatrix={"zam":{
	"account-autopaybill-benefits-download":{
		CTL: ctl_url+"/common/pdfs/CenturyLink-Autopay-Enrollment-Form.pdf",
		Q: ctl_url+"/common/pdfs/CenturyLink-Autopay-Enrollment-Form-Q.pdf"
	}, 
	"account-autopaybill-expect-terms":{
		CTL: ctl_url+"/Pages/AboutUs/Legal/webSiteUserAgreement.jsp",
		Q: faq_url+"/cgi-bin/qwest.cfg/php/enduser/std_adp.php?p_faqid=658"
	},
	"account-autopaybill-manage-faq1":{
		CTL: faq_url+"/cgi-bin/qwest.cfg/php/enduser/std_adp.php?p_faqid=1697",
		Q: faq_url+"/cgi-bin/qwest.cfg/php/enduser/std_adp.php?p_faqid=337"
	},
	"account-autopaybill-manage-faq2":{
		CTL: faq_url+"/cgi-bin/qwest.cfg/php/enduser/std_adp.php?p_faqid=1698",
		Q: faq_url+"/cgi-bin/qwest.cfg/php/enduser/std_adp.php?p_faqid=1699"
	}, 
	"account-autopaybill-manage-faq3":{
		CTL: faq_url+"/cgi-bin/qwest.cfg/php/enduser/std_adp.php?p_faqid=1700",
		Q: faq_url+"/cgi-bin/qwest.cfg/php/enduser/std_adp.php?p_faqid=195"
	}, 
	"account-autopaybill-manage-faq4":{
		CTL: faq_url+"/cgi-bin/qwest.cfg/php/enduser/std_adp.php?p_faqid=1701",
		Q: faq_url+"/cgi-bin/qwest.cfg/php/enduser/std_adp.php?p_faqid=96"
	}, 
	"account-autopaybill-manage-faq5":{
		CTL: faq_url+"/cgi-bin/qwest.cfg/php/enduser/std_adp.php?p_faqid=1702",
		Q: faq_url+"/cgi-bin/qwest.cfg/php/enduser/std_adp.php?p_faqid=1569"
	}, 
	"account-autopaybill-manage-faq6":{
		CTL: "https://eam.centurylink.com/eam/troubleLoginUserID.do",
		Q: faq_url+"/cgi-bin/qwest.cfg/php/enduser/std_adp.php?p_faqid=380"
	}, 
	"account-autopaybill-manage-faq7":{
		CTL: faq_url+"/cgi-bin/qwest.cfg/php/enduser/std_adp.php?p_faqid=1703",
		Q: faq_url+"/cgi-bin/qwest.cfg/php/enduser/std_adp.php?p_faqid=1704"
	}, 
	"account-autopaybill-manage-faq8":{
		CTL: faq_url+"/cgi-bin/qwest.cfg/php/enduser/std_adp.php?p_faqid=1705",
		Q: faq_url+"/cgi-bin/qwest.cfg/php/enduser/std_adp.php?p_faqid=1563"
	}, 
	"account-autopaybill-manage-call":{
		type:'popup',
		CTL: ctl_url+"/common/popups/residential/callus_pay_c.html",
		Q: ctl_url+"/common/popups/residential/callus_pay_cq.html"
	}, 
	"account-autopaybill-help-understand-bill":{
		CTL: "http://portalgb.knowledgebase.net/article.aspx?article=274005&p=11102",
		Q: q_url+"/residential/customerService/understand/"
	}, 
	"account-autopaybill-help-payment-arrangements":{
		CTL: faq_url+"/cgi-bin/qwest.cfg/php/enduser/std_adp.php?p_faqid=1706",
		Q: q_url+"/residential/customerService/understand/your_bill_explained.html#arrange"
	}, 
	"account-autopaybill-help-restore":{
		CTL: faq_url+"/cgi-bin/qwest.cfg/php/enduser/std_adp.php?p_faqid=1706",
		Q: faq_url+"/cgi-bin/qwest.cfg/php/enduser/std_adp.php?p_faqid=657"
	}, 
	"account-autopaybill-help-mail-payment":{
		CTL: faq_url+"/cgi-bin/qwest.cfg/php/enduser/std_adp.php?p_faqid=1702",
		Q: q_url+"/residential/manage/mailPayment.html"
	}, 
	"account-autopaybill-help-faqs":{
		CTL: ctl_url+"/Pages/Support/HelpAndFAQ/",
		Q: faq_url+"/cgi-bin/qwest.cfg/php/enduser/std_alp.php"
	}, 
	"account-autopaybill-help-call":{
		type:'popup',
		CTL: ctl_url+"/common/popups/residential/callus_pay_c.html",
		Q: ctl_url+"/common/popups/residential/callus_pay_cq.html"
	},
	"sb_c_sdd_a_cs":{
		CTL: qshop_url+"/small-business/support/",
		Q: qshop_url+"/small-business/customer-support/"
	}, 
	"smb_ctoc":{
		type:'popup',
		CTL: ctlsecure_url+"/common/popups/small-business/lctl_c2call.html",
		Q: qshop_url+"/common/popups/small-business/lq_c2call.html"
	}, 
	"sb_global-nav-contact-us":{
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
	"sb_c_sdd_a_bh":{
		CTL: ctlsecure_url+"/smallbusiness/customer-support/",
		Q: qshop_url+"/small-business/customer-support/billing-payments/"
	}, 
	"sb_c_sdd_a_phg":{
		CTL: qshop_url+"/small-business/support/",
		Q: qshop_url+"/small-business/customer-support/user-guides.html"
	}, 
	"site-search-submit":{
		CTL: "#SEARCH",
		Q: "#SEARCH"
	},
	"tpl_global-contact-info-call":{
		type:'popup',
		CTL: ctl_url+"/assets/popups/callus_ctl.html",
		Q: ctl_url+"/assets/popups/callus_qcenturylink.html"
	},
	"tpl_global-nav-store_locator-link":{
 		CTL: ctl_url+"/Pages/Support/storeLocator.html",
 		Q: "http://storelocator.centurylinkapps.com/",
 		EQ: ctl_url+"/Pages/Support/storeLocator.html"
	},
	"tpl_global-nav-contact-us-link":{
		CTL: ctlsecure_url+"/Pages/Support/ContactUs/",
		Q: q_url+"/corporate/customerService/contactus/",
		EQ: eqsecure_url+"/Support/Residential/"
	},
	"tpl_global-nav-email-offers-link":{
		CTL: ctl_url+"/shop/SpecialOffers/connect5.jsp",
		Q: q_url+"/residential/products/newsletter.html",
		EQ: eq_url+"/embarq/assets/pages/GetEmails/"
	},
	"tpl_global-nav-mobile-link":{
		CTL: ctl_url,
		Q: qmobile_url
	},
	"tpl_global-nav-customer-support-link":{
		CTL: ctl_url+"/Pages/Support/ProductGuides/",
		Q: q_url+"/customerService/",
		EQ: eq_url+"/Support/Residential/"
	},	
	"tpl_global-contact-info-chat":{
        type: "popup",
        CTL: ctlsecure_url +"/assets/popups/clicktochat-ctl.html", 
        Q: qshop_url+"/global/popups/clicktochat.html",  
        EQ: ctlsecure_url+"/assets/popups/clicktochat-ctl.html" 
    },
	"chat-offers-prepaid":{
		type: "popup",
		CTL: ctl_url+"/assets/popups/clicktochat-ctl.html",
		Q: q_url+"/global/popups/clicktochat.html",
		EQ: ctl_url+"/assets/popups/clicktochat-ctl.html"
	},
	"tpl_global-nav-quick-bill-pay":{
		CTL: ctleam_url+"/entrycheck/eam/loggedin.html",
		Q: qshop_url+"/MasterWebPortal/freeRange/QuickPay.action",
		EQ: ctleam_url+"/entrycheck/eam/loggedin.html"
	},
	"tpl_res-dd-security-backup":{
		CTL: ctl_url + "/home/ease/",
		Q: q_url+"/residential/qwestatease/learn/index.html",
		EQ: "http://www.centurylink.net/security/index.php?sc_cid=directory_security"
	},
	"tpl_res-dd-free-wifi":{
		CTL: ctl_url+"/shop/Internet/WiFi/wiFi.jsp",
		Q: "#UNAVAILABLE",
		EQ: ctl_url+"/shop/Internet/WiFi/wiFi.jsp"
	},
	"tpl_res-dd-home-wireless-network":{
		CTL: "http://www.centurylink.net/support",
		Q: q_url+"/residential/homewirelessnetwork/",
		EQ: ctlsecure_url+"/Pages/Personal/Internet/HSI/speedDemo.jsp"
	},
	"tpl_res-dd-movies":{	
		CTL: "http://www.centurylink.net/store/cinemanow/genre.php?sc_cid=directory_videostore",
		Q: "https://qweststore.cellmania.com/qwest/home.do",
		EQ: "http://www.centurylink.net/store/cinemanow/genre.php?sc_cid=directory_videostore"
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
	"tpl_menu-lvl1-help-moving":{
		CTL: ctl_url+"/Pages/Support/MovingResources/",
		Q: q_url+"/residential/movers/indexA.html"
	},
	"tpl_menu-lvl2-help-moving":{
		CTL: ctl_url+"/Pages/Support/MovingResources/",
		Q: q_url+"/residential/movers/indexA.html"
	},
	"tpl_footer-store-locator":{
		CTL: ctl_url+"/Pages/Support/storeLocator.html",
		Q: "http://storelocator.centurylinkapps.com/"
	},
	"tpl_footer-legal":{
		CTL: ctl_url+"/Pages/AboutUs/Legal/",
		Q: q_url+"/legal/index.html"
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
	"tpl_ext-footer-quick-bill-pay":{
		CTL: ctleam_url+"/entrycheck/eam/loggedin.html",
		Q: qshop_url+"/MasterWebPortal/freeRange/QuickPay.action"
	},
	"tpl_ext-footer-billing-questions":{
		CTL: ctl_url+"/Pages/Support/BillingSupport/",
		Q: q_url+"/residential/customerService/contactus/makeselection.html"
	},
	"tpl_ext-footer-help-new-bill":{
		CTL: "http://www.centurytelembarqmerger.com/billinghelp/",
		Q: q_url+"/residential/customerService/understand/your_bill_explained.html"
	},
	"tpl_ext-footer-check-email":{
		CTL: "http://www.centurylink.net/",
		Q: "https://www.mycenturylink.com/login/"
	},
	"tpl_ext-footer-hsi-support":{
		CTL: ctl_url+"/Pages/Support/ContactUs/",
		Q: q_url+"/internethelp/"
	},
	"tpl_ext-footer-modem-support":{
		CTL: ctl_url+"/Pages/Support/ProductGuides/",
		Q: q_url+"/internethelp/modems/"
	},
	"tpl_ext-footer-home-phone-support":{
		CTL: ctl_url+"/Pages/Support/ProductGuides/",
		Q: q_url+"/residential/customerService/contactus/phone.html"
	},
	"tpl_ext-footer-directv-support":{
		CTL: ctl_url+ "/Pages/Support/ContactUs/",
		Q: q_url+"/residential/customerService/contactus/tv.html"
	},
	"tpl_ext-footer-wireless-support":{
		CTL: "",
		Q: q_url+"/residential/customerService/contactus/wireless.html"
	},
	"tpl_ext-footer-backup-security-support":{
		CTL: ctl_url + "/home/ease/",
		Q: q_url+"/residential/qwestatease/learn/index.html",
		EQ: "http://www.centurylink.net/security/index.php?sc_cid=directory_security"
	},
	"tpl_ext-footer-user-guides":{
		CTL: ctl_url+"/Pages/Support/ProductGuides/",
		Q: q_url+"/residential/userguides/"
	},
	"tpl_ext-footer-request-repair":{
		CTL: ctl_selfservice_url+"/ticketing/residential/displayResidentialTicketingLanding.do",
		Q:q_url+"/MasterWebPortal/freeRange/acctMgmt/RepairLoginAction.action"
	},
	"tpl_ext-footer-special-offers":{
		CTL: ctl_url+"/shop/SpecialOffers/specialOffersLanding.jsp",
		Q: q_url+"/residential/specialoffers/",
		EQ: eq_url+"/Residential/SpecialOffers"
	},
	"tpl_ext-footer-home-security":{
		CTL: ctl_url+"/shop/HomeSecurity/index.html",
		Q: "#UNAVAILABLE"
	},
	"tpl_ext-footer-backup-security":{
		CTL: ctl_url + "/home/ease/",
		Q: q_url+"/residential/qwestatease/learn/index.html"
	},
	"tpl_ext-footer-free-wifi":{
		CTL: ctl_url+"/shop/Internet/WiFi/wiFi.jsp",
		Q: "#UNAVAILABLE"
	},
	"tpl_ext-footer-home-wifi-network":{
		CTL: ctl_url+"/shop/Internet/WiFi/wiFi.jsp",
		Q: q_url+"/residential/homewirelessnetwork/"
	},
	"tpl_ext-footer-wheres-tech":{
		CTL: ctl_selfservice_url+"/ticketing/residential/displayResidentialTicketLookup.do",
		Q: qshop_url+"/MasterWebPortal/freeRange/WIMT.action"
	},
	"tpl_ext-footer-movies":{
		CTL: "http://www.centurylink.net/store/cinemanow/genre.php?sc_cid=directory_videostore",	
		Q: "https://centurylinkstore.cellmania.com/qwest/home.do"
	},
	"hp-quicklink-cs-internet-help":{
		CTL: ctl_url+"/Pages/Support/ContactUs/",
		Q: q_url+"/internethelp/"
	},
	"hp-quicklink-cs-email-support":{
		CTL: "http://www.centurylink.net/support",
		Q: q_url+"/internethelp/email.html"
	},
	"hp-quicklink-cs-phone-help":{
		CTL: ctl_url+"/Pages/Support/ProductGuides/",
		Q: q_url+"/residential/customerService/contactus/phone.html",
		EQ: eq_url+"/Support/Residential/Voice/"
	},
	"hp-quicklink-cs-help-resources":{
		CTL: ctl_url+"/Pages/Support/ProductGuides/",
		Q: q_url+"/customerService/",
		EQ: eq_url+"/Support/Residential/"
	},
	"hp-quicklink-cs-repair":{
		type:'TCAT',
		CTL: ctl_selfservice_url+"/ticketing/residential/displayResidentialTicketingLanding.do",
		Q: q_url+"/MasterWebPortal/ManageMyAccount/repairs"
	},
	"hp-quicklink-cs-ask-twitter":{
		CTL: "http://twitter.com/centurylink",
		Q: "http://twitter.com/talktoqwest"
	},
	"hp-quicklink-email-go-to-hp":{
		CTL: "http://www.centurylink.net",
		Q: "http://www.mycenturylink.com"
	},
	"hp-quicklink-email-create-account":{
		CTL: "https://secure.centurylink.net/register/index.php",
		Q: "http://www.mycenturylink.com/files/redirect/?to=register"
	},
	"hp-quicklink-cs-send-us-an-email":{
		CTL: ctl_url+"/Pages/Support/ContactUs/",
		Q: q_url+"/residential/customerService/help.html"
	},
	"hp-secondary-moving-learn-more":{
		CTL: ctl_url+"/Pages/Support/MovingResources/",
		Q: q_url+"/residential/movers/indexA.html"
	},
	"hp-wo-set-up-my-account":{
		CTL: ctlmyacct_url+"/eam/registration.do?enrollButton.x=52&enrollButton.y=7",
		Q: qcookie_url + "/MasterWebPortal/freeRange/acctMgmt/RegisterForMyAccount_validateBtn"
	},
	"hp-wo-what-is-my-account":{
			type:'popup',
			CTL: ctl_url+"/common/popups/residential/what_is_my_account.html",
			Q: ctl_url+"/common/popups/residential/what_is_myaccount.html"
	},
	"home-supplementary-movers":{
		CTL: ctlsecure_url+"/Pages/Support/MovingResources/",
		Q: q_url+"/residential/movers/indexA.html"
	},
	"home-internet-secondary-ec-change-help":{
		CTL: ctlsecure_url+"/Pages/Support/ContactUs/",
		Q: q_url+"/internethelp/",
		EQ: eq_url+"/Support/Residential/"
	},
	"home-internetonly-secondary-ec-change-help":{
		CTL: ctlsecure_url+"/Pages/Support/ContactUs/",
		Q: q_url+"/internethelp/",
		EQ: eq_url+"/Support/Residential/"
	},
	"home-internetupgrades-ec-links-help":{
		CTL: ctlsecure_url+"/Pages/Support/ContactUs/",
		Q: q_url+"/internethelp/",
		EQ: ctlsecure_url+"/Pages/Support/ContactUs/"
	},
	"home-homesecurity-secmontab-start-now2":{
		CTL: ctl_url+"/shop/HomeSecurity/index.html",
		Q: "#UNAVAILABLE",
		EQ: ctl_url+"/shop/HomeSecurity/index.html"
	},
	"home-homesecurity-secmontab-start-now":{
		CTL: ctl_url+"/shop/HomeSecurity/index.html",
		Q: "#UNAVAILABLE",
		EQ: ctl_url+"/shop/HomeSecurity/index.html"
	},
	"home-homesecurity-wirelesstab-start-now2":{
		CTL: ctl_url+"/shop/HomeSecurity/index.html",
		Q: "#UNAVAILABLE",
		EQ: ctl_url+"/shop/HomeSecurity/index.html"
	},
	"home-homesecurity-wirelesstab-start-now":{
		CTL: ctl_url+"/shop/HomeSecurity/index.html",
		Q: "#UNAVAILABLE",
		EQ: ctl_url+"/shop/HomeSecurity/index.html"
	},
	"home-bundles-ec-help":{
		CTL: ctlsecure_url+"/Pages/Support/HelpAndFAQ/",
		Q: "http://faq.centurylink.com/index.php?cat=6",
		EQ: ctlsecure_url+"/Pages/Support/HelpAndFAQ/"
	},
	"home-specialoffers-callouts-email":{
		CTL: ctl_url+"/shop/SpecialOffers/connect5.jsp",
		Q: q_url+"/residential/products/newsletter.html",
		EQ: eq_url+"/embarq/assets/pages/GetEmails/"
	},
	"home-specialoffers-callouts-movies":{
		CTL: "http://www.centurylink.net/store/cinemanow/genre.php?sc_cid=directory_videostore",
		Q: "https://centurylinkstore.cellmania.com/qwest/home.do",
		EQ: "http://www.centurylink.net/store/cinemanow/genre.php?sc_cid=directory_videostore"
	},
	"home-specialoffers-callouts-moving":{
		CTL: ctl_url+"/Pages/Support/MovingResources/",
		Q: q_url+"/residential/movers/indexA.html",
		EQ: eq_url+"/Support/Residential/"
	},
	"home-sitemap-backup-security-support":{
		CTL: ctl_url+ "/shop/Internet/ProtectionPlans/protectionPlans.jsp",
		Q: q_url+"/residential/internet/qwestatease/",
		EQ: eq_url+ "/shop/Internet/ProtectionPlans/protectionPlans.jsp"
	},
	"home-sitemap-wireless-networking":{
		CTL: ctl_url+ "/support",
		Q: q_url+"/residential/homewirelessnetwork/",
		EQ: eq_url+ ""
	},
	"home-sitemap-internet-help":{
		CTL: ctl_url+ "/Pages/Support/ContactUs/",
		Q: q_url+"/internethelp/",
		EQ: eq_url+ ""
	},
	"home-sitemap-referral-programs":{
		CTL: ctlsecure_url+ "/shop/rewardsLanding.html",
		Q: "http://www.qwestreferafriend.com/",
		EQ: eq_url+ ""
	},
	"home-sitemap-contact-us":{
		CTL: ctl_url+ "/Pages/Support/ContactUs/",
		Q: q_url+ "/customerService/",
		EQ: eq_url+ ""
	},
	"home-sitemap-move-transfer-service":{
		CTL: ctl_url+ "/Pages/Support/MovingResources/",
		Q: q_url+"/residential/movers/indexA.html",
		EQ: eq_url+ ""
	},
	"home-sitemap-online-help-faq":{
		CTL: ctlsecure_url+ "/Pages/Support/HelpAndFAQ/",
		Q: "http://faq.centurylink.com",
		EQ: eq_url+ ""
	},
	"home-sitemap-find-a-retail-store":{
		CTL: ctl_url+ "/Pages/Support/storeLocator.html",
		Q: "http://storelocator.centurylinkapps.com",
		EQ: eq_url+ ""
	},
	"home-sitemap-troubleshoot-phone-problems":{
		CTL: ctl_url+ "/Pages/Support/ProductGuides/",
		Q: q_url+"/residential/customerService/contactus/phone.html",
		EQ: eq_url+ ""
	},
	"home-sitemap-product-user-guides":{
		CTL: ctl_url+ "/Pages/Support/ProductGuides/",
		Q: q_url+"/residential/userguides/",
		EQ: eq_url+ ""
	},
	"home-sitemap-TAP":{
		CTL: ctl_url+ "/Pages/Support/LifeLine/",
		Q: q_url+"/TAP/",
		EQ: eq_url+ ""
	},
	"home-sitemap-billing-and-payments":{
		CTL: "http://www.centurytelembarqmerger.com/billinghelp/",
		Q: q_url+"/residential/customerService/understand/your_bill_explained.html",
		EQ: eq_url+ ""
	},
	"home-sitemap-legal":{
		CTL: ctl_url+ "/Pages/AboutUs/Legal/",
		Q: q_url+"/legal/index.html"
	},
	"home-sitemap-smb-business-solutions":{
		CTL: ctl_url+ "/smallbusiness/products/business-solutions/",
		Q: q_url+"/small-business/products/business-solutions/ "
	},
	"home-sitemap-smb-business-internet-data":{
		CTL: ctl_url+ "/smallbusiness/products/business-internet-data/Internet",
		Q: q_url+"/small-business/products/business-internet-data/lq"
	},
	"home-sitemap-smb-enhanced-business-services":{
		CTL: ctl_url+ "/smallbusiness/products/enhanced-business-services/",
		Q: q_url+"/business/products/products-and-services/list.html"
	},
	"home-sitemap-smb-business-phone":{
		CTL: ctl_url+ "/smallbusiness/products/business-phone/",
		Q: q_url+"/small-business/products/business-phone/"
	},
	"home-sitemap-smb-business-mobile":{
		CTL: ctl_url+ "/smallbusiness/products/verizon-business-mobile/",
		Q: q_url+"/small-business/products/verizon-business-mobile/"
	},
	"home-sitemap-smb-business-tv":{
		CTL: ctl_url+ "/smallbusiness/products/directv-business-tv/",
		Q: q_url+"/small-business/products/business-tv/"
	},
	"home-sitemap-smb-television-equipment":{
		CTL: ctl_url+ "/smallbusiness/products/telephones-equipment/",
		Q: q_url+"/small-business/products/telephones-equipment/"
	},
	"home-sitemap-smb-faqs":{
		CTL: q_url+ "/small-business/support/",
		Q: q_url+"/small-business/customer-support/"
	},
	"home-sitemap-smb-product-guides":{
		CTL: q_url+ "/small-business/support/",
		Q: q_url+"/small-business/customer-support/user-guides/"
	},
	"home-sitemap-smb-billing-support":{
		CTL: q_url+ "/small-business/support/",
		Q: q_url+"/small-business/customer-support/billing-payments/"
	},
	"home-sitemap-smb-contact-us":{
		CTL: q_url+ "/small-business/support/",
		Q: q_url+"/small-business/customer-support/"
	},
	"home-sitemap-smb-my-account":{
		CTL: q_url+ "/small-business/support/",
		Q: q_url+"/small-business/customer-support/"
	},
	"sorry-error-faq":{
		CTL: ctlsecure_url+"/Pages/Support/HelpAndFAQ/",
		Q: q_url+"/customerService/index.html?pages=faqs"
	},
	"sorry-error-contactus":{
		CTL: ctlsecure_url+"/Pages/Support/ContactUs/",
		Q: q_url+"/corporate/customerService/contactus/"
	},
	"sorry-error-legal":{
		CTL: ctlsecure_url+"/Pages/AboutUs/Legal/",
		Q: q_url+"/legal/index.html"
	},
	"home-internetbasics-get-started":{
		type:'popup',
		CTL: ctl_url+"/assets/popups/home-inet-basics-callus_ctl.html",
		Q: ctl_url+"/assets/popups/home-inet-basics-callus_qcenturylink.html"
	},
	"home-dtv-tab-span-mas-mexico-continue":{
		type:'popup',
		CTL: ctl_url+"/assets/popups/callus_ctl.html",
		Q: ctl_url+"/assets/popups/callus_qcenturylink.html"
	},
	"home-dtv-tab-span-optimo-mas-choice-continue":{
		type:'popup',
		CTL: ctl_url+"/assets/popups/callus_ctl.html",
		Q: ctl_url+"/assets/popups/callus_qcenturylink.html"
	},
	"home-dtv-tab-span-lo-maximo-continue":{
		type:'popup',
		CTL: ctl_url+"/assets/popups/callus_ctl.html",
		Q: ctl_url+"/assets/popups/callus_qcenturylink.html"
	},
	"home-dtv-tab-span-mas-ultra-continue":{
		type:'popup',
		CTL: ctl_url+"/assets/popups/callus_ctl.html",
		Q: ctl_url+"/assets/popups/callus_qcenturylink.html"
	},
	"tpl_footer-contact-us":{
		CTL: ctlsecure_url+"/Pages/Support/ContactUs/",
		Q: q_url+"/corporate/customerService/contactus/"
	},
	"tpl_global-contact-info-email-us":{
		CTL: ctlsecure_url+"/Pages/Support/ContactUs/",
		Q: q_url+"/residential/customerService/help.html"
	},
	"specialoff-bundletab-plock-triple":{
		CTL: "http://promotions.centurylink.com/offers/triplesavings",
		Q: "http://promotions.centurylink.com/offers/triple"
	},
	"home-internetbasics-program-tab-get-started":{
		type:'popup',
		CTL: ctl_url+"/assets/popups/home-inet-basics-callus_ctl.html",
		Q: ctl_url+"/assets/popups/home-inet-basics-callus_qcenturylink.html"
	},
	"change-services-contact-cs":{
		type: "popup",
		CTL: ctl_url+"/assets/popups/clicktochat-ctl.html",
		Q: q_url+"/global/popups/clicktochat.html"
	},
	"change-services-moving-chat":{
		CTL: ctl_url+"/Pages/Support/MovingResources/",
		Q: q_url+"/residential/movers/indexA.html"
	},
	"hp_secondary_qwestatease":{CTL: ctl_url + "/home/ease/",Q:q_url + "/residential/internet/qwestatease/"}
},
"ctam":{
	"sb_p_sdd_a_bs":{
		EC:{
			type:'TCAT',
			CTL:ctl_url+"/smallbusiness/products/business-solutions.jsp",
			Q: qshop_url+"/small-business/products/business-solutions/index.vm"
		},
		NC:{
			type:'TCAT',
			CTL:ctl_url+"/smallbusiness/products/business-solutions.jsp",
			Q: qshop_url+"/small-business/products/business-solutions/index.vm"
		}
	},
	"sb_p_sdd_a_bci":{
		EC:{
			type:'TCAT',
			CTL:ctl_url+"/smallbusiness/products/business-internet-data/",
			Q:  qshop_url+"/small-business/products/business-internet-data/index.vm"
		},
		NC:{
			type:'TCAT',
			CTL:ctl_url+"/smallbusiness/products/business-internet-data/",
			Q: qshop_url+"/small-business/products/business-internet-data/index.vm"
		}
	},
	"sb_p_sdd_a_ebs":{
		EC:{
			type:'TCAT',
			CTL:ctl_url+"/smallbusiness/products/enchanced-business-services/",
			Q:  q_url+"/business/products/products-and-services/list.html"
		},
		NC:{
			type:'TCAT',
			CTL:ctl_url+"/smallbusiness/products/enchanced-business-services/",
			Q: q_url+"/business/products/products-and-services/list.html"
		}
	},
	"sb_sdd_a_bp":{
		EC:{
			type:'TCAT',
			CTL:ctl_url+"/smallbusiness/products/business-phone/",
			Q:  qshop_url+"/small-business/products/business-phone/index.vm"
		},
		NC:{
			type:'TCAT',
			CTL:ctl_url+"/smallbusiness/products/business-phone/",
			Q: qshop_url+"/small-business/products/business-phone/index.vm"
		}
	},
	"sb_p_sdd_b_bm":{
		EC:{
			type:'TCAT',
			CTL:ctl_url+"/smallbusiness/products/verizon-business-mobile/",
			Q:  qshop_url+"/small-business/products/verizon-business-mobile/index.vm"
		},
		NC:{
			type:'TCAT',
			CTL:ctl_url+"/smallbusiness/products/verizon-business-mobile/",
			Q: qshop_url+"/small-business/products/verizon-business-mobile/index.vm"
		}
	},
	"sb_p_sdd_b_btv":{
		EC:{
			type:'TCAT',
			CTL:ctl_url+"/smallbusiness/products/directv-business-tv/",
			Q:  qshop_url+"/small-business/products/business-tv/index.vm"
		},
		NC:{
			type:'TCAT',
			CTL:ctl_url+"/smallbusiness/products/directv-business-tv/",
			Q: qshop_url+"/small-business/products/business-tv/index.vm"
		}
	},
	"sb_p_sdd_b_te":{
		EC:{
			type:'TCAT',
			CTL:ctl_url+"/smallbusiness/products/telephones-equipment/",
			Q:  qshop_url+"/small-business/products/telephones-equipment/index.vm"
		},
		NC:{
			type:'TCAT',
			CTL:ctl_url+"/smallbusiness/products/telephones-equipment/",
			Q: qshop_url+"/small-business/products/telephones-equipment/index.vm"
		}
	},	
	"sb_h_hero1":{
		EC:{
			type:'TCAT',
			CTL:ctl_url+"/smallbusiness/products/verizon-business-mobile/",
			Q:  qshop_url+"/small-business/products/verizon-business-mobile/index.vm"
		},
		NC:{
			type:'TCAT',
			CTL:ctl_url+"/smallbusiness/products/verizon-business-mobile/",
			Q: qshop_url+"/small-business/products/verizon-business-mobile/index.vm"
		}
	},
	"sb_h_hero2":{
		EC:{
			type:'TCAT',
			CTL:ctl_url+"/smallbusiness/products/business-internet-data/",
			Q:  qshop_url+"/small-business/products/business-internet-data/index.vm"
		},
		NC:{
			type:'TCAT',
			CTL:ctl_url+"/smallbusiness/products/business-internet-data/",
			Q: qshop_url+"/small-business/products/business-internet-data/index.vm"
		}
	},
	"sb_h_hero3":{
		EC:{
			type:'TCAT',
			CTL:ctl_url+"/smallbusiness/products/business-solutions.jsp",
			Q:  qshop_url+"/small-business/products/business-solutions/index.vm"
		},
		NC:{
			type:'TCAT',
			CTL:ctl_url+"/smallbusiness/products/business-solutions.jsp",
			Q: qshop_url+"/small-business/products/business-solutions/index.vm"
		}
	},
	"sb_h_hero4":{
		EC:{
			type:'TCAT',
			CTL:ctl_url+"/smallbusiness/directv-business-tv",
			Q:  qshop_url+"/small-business/products/business-tv/index.vm"
		},
		NC:{
			type:'TCAT',
			CTL:ctl_url+"/smallbusiness/directv-business-tv",
			Q: qshop_url+"/small-business/products/business-tv/index.vm"
		}
	},
	"sb_h_banner":{
		EC:{
			type:'TCAT',
			CTL:ctl_url+"/smallbusiness/products/business-solutions.jsp",
			Q:  qshop_url+"/small-business/products/business-solutions/index.vm"
		},
		NC:{
			type:'TCAT',
			CTL:ctl_url+"/smallbusiness/products/business-solutions.jsp",
			Q: qshop_url+"/small-business/products/business-solutions/index.vm"
		}
	},
	"tpl_res-dd-get-internet":{
		EC:{
			type:'TCAT',
			CTL:ctlsecure_url+"/shop/Internet/HSI/availability.html",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true",	
			EQ: eqsecure_url+"/Residential/InternetAccess",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL:ctlsecure_url+"/shop/Internet/HSI/availability.html?Internet=true&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true",	
			EQ: eqsecure_url+"/Residential/InternetAccess"
		}
	},
	"tpl_res-dd-tv-service":{
		EC:{
			type:'TCAT',
			CTL:ctlsecure_url+"/Pages/Personal/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",	
			EQ: eqsecure_url+"/Residential/InternetAccess",
			topicName: 'shopTVResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/Pages/Personal/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/shop/residential/internet/",
			EQ: eqsecure_url+"/Residential/InternetAccess"
		}
	},
	"tpl_res-dd-home-phone":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/Pages/Personal/Voice/index.html",
			Q: qshop_url+"/MasterWebPortal/residential/locallanding",
			EQ: eqsecure_url+"/Residential/Voice",
			topicName: 'shopVoiceResidential'
		},
		NC:{
			CTL: ctl_url+"/shop/bundleUnlimited.flow?Phone=true",
			Q: qshop_url + "/MasterWebPortal/freeRange/centurylink/ShopDoubleBundle?Phone=true",
			EQ: eqsecure_url+"/Residential/Voice/LocalServicePlans"
		}		
	},
	"tpl_res-dd-wireless-phone":{
		EC:{
			CTL: "/shop/SpecialOffers/voice1.jsp",
			Q: "https://store.verizonwireless.com/store/qwest_nse",
			EQ: "/shop/SpecialOffers/voice1.jsp",
			topicName: 'shopDataResidential'
		},
		NC:{
			CTL: "/shop/SpecialOffers/voice1.jsp",
			Q: "https://store.verizonwireless.com/store/qwest_nse",
			EQ: "/shop/SpecialOffers/voice1.jsp"
		}
	},
	"tpl_res-dd-bundle-services":{
		EC:{
		type:'TCAT',
			CTL: ctl_url+"/shop/configBundle.flow",	
			Q: q_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eqsecure_url+"/Residential/Voice/BundledServices",
			topicName: 'shopBundlesResidential'
		},
		NC:{
		type:'TCAT',
			CTL: ctl_url+"/shop/configBundle.flow?Phone=true&Internet=true&DIRECTV=true&Wireless=true",
			Q: q_url+"/shop/residential/eccustomizebundles",
			EQ: eqsecure_url+"/Residential/Voice/BundledServices"
		}
	},
	"tpl_res-dd-internet":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eqsecure_url+"/Residential/InternetAccess",
			topicName: 'shopDataResidential'
		},
		NC:{
		type:'TCAT',
			CTL: ctlsecure_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: q_url+"/shop/residential/internet/",	
			EQ: eqsecure_url+"/Residential/InternetAccess"
		}
	},
	"tpl_res-dd-home-phone":{
		EC:{
			type:'TCAT',
			CTL:ctlsecure_url+"/shop/Voice/",
			Q: qshop_url+"/MasterWebPortal/residential/locallanding",
			EQ: eqsecure_url+"/Residential/Voice",
			topicName: 'shopVoiceResidential'
		},
		NC:{
			CTL: ctlsecure_url+"/shop/bundleUnlimited.flow",
			Q: "",
			EQ: eqsecure_url+"/Residential/Voice/LocalServicePlans"
		}
	},
	"tpl_menu-lvl2-internet-availability":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eq_url+"/Residential/InternetAccess",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp?Internet=true&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true",
			EQ: eqsecure_url+"/Residential/InternetAccess"
		}
	},
	"tpl_ext-footer-move-services":{
		EC: {
			CTL: ctl_url+"/Pages/Support/MovingResources/",
			Q: q_url+"/residential/movers/indexA.html",
			EQ: eq_url+"/Support/Residential/",
			topicName: 'movers'
		},
		NC: {
			CTL: ctl_url+"/Pages/Support/MovingResources/",
			Q: q_url+"/residential/movers/indexA.html",
			EQ: eq_url+"/Support/Residential/"
		}
	},
	"tpl_ext-footer-new-services":{
		EC: {
			type:'TCAT',
			CTL:ctl_url+"/shop/",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: ctl_url+"/shop/",
			topicName: 'shopBundlesResidential'			
		},
		NC: {
			type:'TCAT',
			CTL:ctl_url+"/shop/",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: ctl_url+"/shop/"
		}
	},
	"tpl_ext-footer-build-bundle":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/configBundle.flow",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eq_url+"/Residential/Voice/BundledServices",
			topicName: 'shopBundlesResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Bundles/index.html",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eq_url+"/Residential/Voice/BundledServices"
		}
	},
	"tpl_ext-footer-tv-services":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/television.flow",
			Q: qshop_url+"/MasterWebPortal/residential/directvlanding",
			EQ: eq_url+"/Residential/Entertainment/",
			topicName: 'shopTVResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/television.flow",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eq_url+"/Residential/Entertainment/"
		}
	},
	"home-homesecurity-already-customer":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/configBundle.flow",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eq_url+"/Residential/Voice/BundledServices",
			topicName: 'shopBundlesResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Voice/",
			Q: qshop_url+"/MasterWebPortal/residential/locallanding",
			EQ: eq_url+"/Residential/Voice/BundledServices"
		}
	},
	"home-internet-already-customer":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eq_url+"/Residential/InternetAccess/HighSpeedInternet",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eq_url+"/Residential/InternetAccess/HighSpeedInternet"
		}
	},
	"home-internet-check-avail":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true&Phone=true",
			EQ: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/availability.html?Internet=true&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true&Phone=true",
			EQ: eq_url+"/embarq.portal?_nfpb=true&_pageLabel=Products_Residential_InternetAccess_Home&ctatrue=true"
		}
	},
	"home-internet-speeds-tab-check-avail":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Phone=true&Internet=true",
			EQ: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/availability.html?Phone=true&Internet=true",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Phone=true&Internet=true",
			EQ: eq_url+"/embarq.portal?_nfpb=true&_pageLabel=Products_Residential_InternetAccess_Home&ctatrue=true"
		}
	},
	"home-internet-features-tab-check-avail":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Phone=true&Internet=true",
			EQ: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/availability.html?Phone=true&Internet=true",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Phone=true&Internet=true",
			EQ: eq_url+"/embarq.portal?_nfpb=true&_pageLabel=Products_Residential_InternetAccess_Home&ctatrue=true"
		}
	},
	"home-internet-equipment-tab-check-avail":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Phone=true&Internet=true",
			EQ: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/availability.html?Phone=true&Internet=true",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Phone=true&Internet=true",
			EQ: eq_url+"/embarq.portal?_nfpb=true&_pageLabel=Products_Residential_InternetAccess_Home&ctatrue=true"
		}
	},
		"home-internet-table-start-now-1_5":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Phone=true&Internet=true",
			EQ: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp"
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/configBundle.flow?hsi=1.5&Phone=true&Internet=true",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Phone=true&Internet=true",
			EQ: eq_url+"/embarq.portal?_nfpb=true&_pageLabel=Products_Residential_InternetAccess_Home&ctatrue=true"
		}
	},
	"home-internet-table-start-now-7":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Phone=true&Internet=true",
			EQ: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp"
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/availability.html?Phone=true&Internet=true",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Phone=true&Internet=true",
			EQ: eq_url+"/embarq.portal?_nfpb=true&_pageLabel=Products_Residential_InternetAccess_Home&ctatrue=true"
		}
	},
	"home-internet-table-start-now-25":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Phone=true&Internet=true",
			EQ: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp"
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/availability.html?Phone=true&Internet=true",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Phone=true&Internet=true",
			EQ: eq_url+"/embarq.portal?_nfpb=true&_pageLabel=Products_Residential_InternetAccess_Home&ctatrue=true"
		}
	},
	"home-internet-table-start-now-40":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Phone=true&Internet=true",
			EQ: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp"
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/availability.html?Phone=true&Internet=true",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Phone=true&Internet=true",
			EQ: eq_url+"/embarq.portal?_nfpb=true&_pageLabel=Products_Residential_InternetAccess_Home&ctatrue=true"
		}
	},
	"home-internet-secondary-ec-order":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/Pages/Personal/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eq_url+"/Residential/InternetAccess/HighSpeedInternet",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/Pages/Personal/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eq_url+"/Residential/InternetAccess/HighSpeedInternet"
		}
	},
	"home-internet-secondary-ec-change-speed":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/Pages/Personal/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eqsecure_url+"/Residential/InternetAccess/HighSpeedInternet",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/Pages/Personal/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eqsecure_url+"/Residential/InternetAccess/HighSpeedInternet"
		}
	},
	"home-internet-secondary-banner":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Phone=true&Internet=true",
			EQ: eq_url+"/Residential/InternetAccess/HighSpeedInternet",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp?Phone=true&Internet=true",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Phone=true&Internet=true",
			EQ: eq_url+"/Residential/InternetAccess/HighSpeedInternet"
		}
	},
	"home-internetonly-already-customer":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eq_url+"/Residential/InternetAccess/HighSpeedInternet",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eq_url+"/Residential/InternetAccess/HighSpeedInternet"
		}
	}, 
	"home-internetonly-check-avail":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eq_url+"/embarq.portal?_nfpb=true&_pageLabel=Products_Residential_InternetAccess_Home&ctatrue=true",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: "/MasterWebPortal/freeRange/centurylink/ShopDoubleBundle?Internet=true&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true",
			EQ:"http://promotions.centurylink.com/marketingLanding/puredeal/"
		}
	},
	"home-internetonly-compare-speeds":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eq_url+"/embarq.portal?_nfpb=true&_pageLabel=Products_Residential_InternetAccess_Home&ctatrue=true",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: "/MasterWebPortal/freeRange/centurylink/ShopDoubleBundle?Internet=true&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true",
			EQ:"http://promotions.centurylink.com/marketingLanding/puredeal/"
		}
	},
	"home-internetonly-features":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eq_url+"/embarq.portal?_nfpb=true&_pageLabel=Products_Residential_InternetAccess_Home&ctatrue=true",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: "/MasterWebPortal/freeRange/centurylink/ShopDoubleBundle?Internet=true&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true",
			EQ:"http://promotions.centurylink.com/marketingLanding/puredeal/"
		}
	},
	"home-internetonly-equipment":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eq_url+"/embarq.portal?_nfpb=true&_pageLabel=Products_Residential_InternetAccess_Home&ctatrue=true",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: "/MasterWebPortal/freeRange/centurylink/ShopDoubleBundle?Internet=true&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true",
			EQ:"http://promotions.centurylink.com/marketingLanding/puredeal/"
		}
	},
		"home-internetonly-table-start-now-1_5":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eq_url+"/embarq.portal?_nfpb=true&_pageLabel=Products_Residential_InternetAccess_Home&ctatrue=true",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: "/MasterWebPortal/freeRange/centurylink/ShopDoubleBundle?Internet=true&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true",
			EQ:"http://promotions.centurylink.com/marketingLanding/puredeal/",
			topicName: 'shopDataResidential'
		}
	},
	"home-internetonly-table-start-now-7":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential",
			EQ: eq_url+"/embarq.portal?_nfpb=true&_pageLabel=Products_Residential_InternetAccess_Home&ctatrue=true",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: "/MasterWebPortal/freeRange/centurylink/ShopDoubleBundle?Internet=true&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true",
			EQ:"http://promotions.centurylink.com/marketingLanding/puredeal/"
		}
	},
	"home-internetonly-table-start-now-25":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eq_url+"/embarq.portal?_nfpb=true&_pageLabel=Products_Residential_InternetAccess_Home&ctatrue=true",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: "/MasterWebPortal/freeRange/centurylink/ShopDoubleBundle?Internet=true&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true",
			EQ:"http://promotions.centurylink.com/marketingLanding/puredeal/"
		}
	},
	"home-internetonly-table-start-now-40":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eq_url+"/embarq.portal?_nfpb=true&_pageLabel=Products_Residential_InternetAccess_Home&ctatrue=true",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: "/MasterWebPortal/freeRange/centurylink/ShopDoubleBundle?Internet=true&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true",
			EQ:"http://promotions.centurylink.com/marketingLanding/puredeal/"
		}
	},
	"home-internetonly-secondary-ec-order":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/Pages/Personal/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eq_url+"/Residential/InternetAccess/HighSpeedInternet",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/Pages/Personal/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eq_url+"/Residential/InternetAccess/HighSpeedInternet"
		}
	},
	"home-internetonly-secondary-ec-change-speed":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/Pages/Personal/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eqsecure_url+"/Residential/InternetAccess/HighSpeedInternet",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/Pages/Personal/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eqsecure_url+"/Residential/InternetAccess/HighSpeedInternet"
		}
	},
	"home-internetonly-secondary-banner":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eq_url+"/embarq.portal?_nfpb=true&_pageLabel=Products_Residential_InternetAccess_Home&ctatrue=true",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: "/MasterWebPortal/freeRange/centurylink/ShopDoubleBundle?Internet=true&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true",
			EQ:"http://promotions.centurylink.com/marketingLanding/puredeal/"
		}
	},
	"home-internetupgrades-already-customer":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eq_url+"/Residential/InternetAccess/HighSpeedInternet",
			topicName: 'shopDataResidential'
			
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbnadlanding",
			EQ: eq_url+"/Residential/InternetAccess/HighSpeedInternet"
		}
	},
	"home-internetupgrades-check-avail":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eqsecure_url+"/Residential/InternetAccess",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true",
			EQ: eqsecure_url+"/Residential/InternetAccess"
		}
	},
	"home-internetupgrades-speeds-tab-check-avail":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eqsecure_url+"/Residential/InternetAccess",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true",
			EQ: eqsecure_url+"/Residential/InternetAccess"
		}
	},
	"home-internetupgrades-features-tab-check-avail":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eqsecure_url+"/Residential/InternetAccess",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true",
			EQ: eqsecure_url+"/Residential/InternetAccess"
		}
	},
	"home-internetupgrades-equipment-tab-check-avail":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eqsecure_url+"/Residential/InternetAccess",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true",
			EQ: eqsecure_url+"/Residential/InternetAccess"
		}
	},
		"home-internetupgrades-table-start-now-1_5":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eqsecure_url+"/Residential/InternetAccess",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true",
			EQ: eqsecure_url+"/Residential/InternetAccess"
		}
	},
	"home-internetupgrades-table-start-now-7":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eqsecure_url+"/Residential/InternetAccess",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true",
			EQ: eqsecure_url+"/Residential/InternetAccess"
		}
	},
	"home-internetupgrades-table-start-now-25":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eqsecure_url+"/Residential/InternetAccess",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true",
			EQ: eqsecure_url+"/Residential/InternetAccess"
		}
	},
	"home-internetupgrades-table-start-now-40":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eqsecure_url+"/Residential/InternetAccess",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true",
			EQ: eqsecure_url+"/Residential/InternetAccess"
		}
	},
	"home-internetupgrades-ec-links-change-speed":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eqsecure_url+"/Residential/InternetAccess",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eqsecure_url+"/Residential/InternetAccess"
		}
	},
	"home-internetupgrades-ec-links-equipment":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eqsecure_url+"/Residential/InternetAccess",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eqsecure_url+"/Residential/InternetAccess"
		}
	},
	"home-internetupgrades-secondary-banner-check-avail":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eqsecure_url+"/Residential/InternetAccess",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true",
			EQ: eqsecure_url+"/Residential/InternetAccess"
		}
	},
	"home-mobile-available-area-top":{ 
		EC:{
			type:'TCAT',
			CTL: "https://store.verizonwireless.com/store/CenturyLink",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding?Wireless=true&Internet=true"
		},
		NC:{
			type:'TCAT',
			CTL: "/MasterWebPortal/freeRange/shop/ShopNC_viewNCBundlesPage?Wireless=true&Internet=true",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding?Wireless=true&Internet=true"
		}
	},
	"home-mobile-available-area-bottom":{
		EC:{
			type:'TCAT',
			CTL: "https://store.verizonwireless.com/store/CenturyLink",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding?Wireless=true&Internet=true"
		},
		NC:{
			type:'TCAT',
			CTL: "/MasterWebPortal/freeRange/shop/ShopNC_viewNCBundlesPage?Wireless=true&Internet=true",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding?Wireless=true&Internet=true"
		}
	},
	"home-phone-already-customer":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/Voice/",
			Q: qshop_url+"/MasterWebPortal/residential/locallanding",
			EQ: eq_url+"/Residential/Voice",
			topicName: 'shopVoiceResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/Voice/",
			Q: qshop_url+"/MasterWebPortal/residential/locallanding?Phone=true",
			EQ: eq_url+"/Residential/Voice"
		}
	},
	"home-phone-start-now":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/bundleUnlimited.flow",
			Q: qshop_url+"/MasterWebPortal/residential/locallanding",
			EQ: eq_url+"/Residential/Voice",
			topicName: 'shopVoiceResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/MasterWebPortal/freeRange/shop/ShopNC_viewNCBundlesPage?Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/locallanding?Phone=true",
			EQ: eq_url+"/Residential/Voice"
		}
	},
	"home-phone-available-area":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/bundleUnlimited.flow",
			Q: qshop_url+"/MasterWebPortal/residential/locallanding",
			EQ: eq_url+"/Residential/Voice",
			topicName: 'shopVoiceResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/MasterWebPortal/freeRange/shop/ShopNC_viewNCBundlesPage?Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eq_url+"/Residential/Voice"
		}
	},
	"home-phone-available-area-features":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/bundleUnlimited.flow",
			Q: qshop_url+"/MasterWebPortal/residential/locallanding",
			EQ: eq_url+"/Residential/Voice",
			topicName: 'shopVoiceResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/bundleUnlimited.flow",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eq_url+"/Residential/Voice"
		}
	},
	"home-phone-available-area-intl":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/bundleUnlimited.flow",
			Q: qshop_url+"/MasterWebPortal/residential/locallanding",
			EQ: eq_url+"/Residential/Voice",
			topicName: 'shopVoiceResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/bundleUnlimited.flow",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eq_url+"/Residential/Voice"
		}
	},
	"home-phone-add-ld":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Voice/voiceLongDistancePlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/longdistance",
			EQ: ctl_url+"/shop/Voice/voiceLongDistancePlans.jsp",
			topicName: 'shopVoiceResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Voice/voiceLongDistancePlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/longdistance",
			EQ: ctl_url+"/shop/Voice/voiceLongDistancePlans.jsp"
		}
	},
	"home-bundles-already-customer":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/configBundle.flow",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eq_url+"/Residential/Voice/BundledServices",
			topicName: "shopBundlesResidential"
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/configBundle.flow",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eq_url+"/Residential/Voice/BundledServices"
		}
	},
	"home-bundles-top-banner":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/configBundle.flow",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eq_url+"/Residential/Voice/BundledServices",
			topicName: "shopBundlesResidential"
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Bundles/index.html",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eq_url+"/Residential/Voice/BundledServices"
		}
	},
	"home-bundles-title":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/configBundle.flow",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eq_url+"/Residential/Voice/BundledServices",
			topicName: "shopBundlesResidential"
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Bundles/index.html",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eq_url+"/Residential/Voice/BundledServices"
		}
	},
	"home-bundles-build-bundle":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/configBundle.flow",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eq_url+"/Residential/Voice/BundledServices",
			topicName: "shopBundlesResidential"
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/MasterWebPortal/freeRange/centurylink/ShopDoubleBundle?Phone=true&Internet=true",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding?Phone=true&Internet=true",
			EQ: eq_url+"/Residential/Voice/BundledServices"
		}
	},
	"home-bundles-triple-start-now":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Bundles/index.html",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding?Phone=true&Internet=true",
			EQ: eq_url+"/Residential/Voice/BundledServices",
			topicName: "shopBundlesResidential"
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/MasterWebPortal/freeRange/centurylink/ShopDoubleBundle?Phone=true&Internet=true&DIRECTV=true",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding?Phone=true&Internet=true",
			EQ: eq_url+"/Residential/Voice/BundledServices"
		}
	},
	"home-bundles-dbl-start-now":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Bundles/index.html",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding?Phone=true&Internet=true",
			EQ: eq_url+"/Residential/Voice/BundledServices",
			topicName: "shopBundlesResidential"
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/MasterWebPortal/freeRange/centurylink/ShopDoubleBundle?Phone=true&Internet=true",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding?Phone=true&Internet=true",
			EQ: eq_url+"/Residential/Voice/BundledServices"
		}
	},
	"home-bundles-ec-manage-bundle":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/configBundle.flow",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eqsecure_url+"/Residential/Voice/BundledServices",
			topicName: "shopBundlesResidential"
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/MasterWebPortal/freeRange/centurylink/ShopDoubleBundle?Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eqsecure_url+"/Residential/Voice/BundledServices"
		}
	},
	"home-moving-start-now-move":{
		EC:{
			CTL: ctl_url+"/Pages/Support/MovingResources/",
			Q: q_url+"/residential/movers/indexA.html",
			EQ: eq_url+"/Support/Residential/"
		},
		NC:{
			CTL: ctl_url+"/Pages/Support/MovingResources/",
			Q: q_url+"/residential/movers/indexA.html",
			EQ: eq_url+"/Support/Residential/"
		}
	},
	"home-moving-start-now-new":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Bundles/index.html",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eq_url+"/Residential/Voice/BundledServices"
		},
		NC:{
			type:'TCAT',
			TL: ctl_url+"/shop/Bundles/index.html",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eq_url+"/Residential/Voice/BundledServices"
		}
	},
	"home-specialoffers-already-customer":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/configBundle.flow",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eqsecure_url+"/Residential/Voice/BundledServices"
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/configBundle.flow",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eqsecure_url+"/Residential/Voice/BundledServices"
		}
	},
	"home-specialoffers-tv-promo-wholehome-learn":{
		EC:{
			CTL: ctl_url+"/Pages/Personal/Television/Directv/directvEquipment.jsp",
			Q: ctl_url+"/home/tv/#benefits",
			EQ: ctl_url+"/Pages/Personal/Television/Directv/directvEquipment.jsp"
		},
		NC:{
			CTL: ctl_url+"/Pages/Personal/Television/Directv/directvEquipment.jsp",
			Q: ctl_url+"/home/tv/#benefits",
			EQ: ctl_url+"/Pages/Personal/Television/Directv/directvEquipment.jsp"
		}
	},
	"home-specialoffers-tv-promo-dvr-learn":{
		EC:{
			CTL: ctl_url+"/Pages/Personal/Television/Directv/directvEquipment.jsp",
			Q: ctl_url+"/home/tv/#equipment",
			EQ: ctl_url+"/Pages/Personal/Television/Directv/directvEquipment.jsp"
		},
		NC:{
			CTL: ctl_url+"/Pages/Personal/Television/Directv/directvEquipment.jsp",
			Q: ctl_url+"/home/tv/#equipment",
			EQ: ctl_url+"/Pages/Personal/Television/Directv/directvEquipment.jsp"
		}
	},
	"home-specialoffers-wireless-promo-already-customer-learn":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/configBundle.flow",
			Q: qshop_url+"/MasterWebPortal/residential/wireless/confirm?optin=true",
			EQ: eqsecure_url+"/Residential/Voice/BundledServices"
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/configBundle.flow",
			Q: qshop_url+"/MasterWebPortal/residential/wireless/confirm?optin=true",
			EQ: eqsecure_url+"/Residential/Voice/BundledServices"
		}
	},
	"home-tv-already-customer":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/television.flow",
			Q: qshop_url+"/MasterWebPortal/residential/directvlanding",
			EQ: eq_url+"/Residential/Entertainment/"
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/television.flow",
			Q: qshop_url+"/MasterWebPortal/residential/directvlanding",
			EQ: eq_url+"/Residential/Entertainment/"
		}
	},
	"home-dtv-tab-eng-check-avail":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/television.flow",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eq_url+"/Residential/Entertainment/"
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/television.flow",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eq_url+"/Residential/Entertainment/"
		}
	},
	"home-dtv-tab-eng-entertainment-continue":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/television.flow",
			Q: qshop_url+"/MasterWebPortal/residential/directvlanding?DIRECTV=D:6451387",
			EQ: eq_url+"/Residential/Entertainment/"
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/MasterWebPortal/freeRange/shop/ShopNC_viewNCBundlesPage?DIRECTV=D:6451387&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/directvlanding?DIRECTV=D:6451387",
			EQ: eq_url+"/Residential/Entertainment/"
		}
	},
	"home-dtv-tab-eng-choice-continue":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/television.flow",
			Q: qshop_url+"/MasterWebPortal/residential/directvlanding?DIRECTV=D:6451348",
			EQ: eq_url+"/Residential/Entertainment/"
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/MasterWebPortal/freeRange/shop/ShopNC_viewNCBundlesPage?DIRECTV=D:6451348&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/directvlanding?DIRECTV=D:6451348",
			EQ: eq_url+"/Residential/Entertainment/"
		}
	},
	"home-dtv-tab-eng-xtra-continue":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/television.flow",
			Q: qshop_url+"/MasterWebPortal/residential/directvlanding?DIRECTV=D:6451349",
			EQ: eq_url+"/Residential/Entertainment/"
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/MasterWebPortal/freeRange/shop/ShopNC_viewNCBundlesPage?DIRECTV=D:6451349&Phone=true ",
			Q: qshop_url+"/MasterWebPortal/residential/directvlanding?DIRECTV=D:6451349",
			EQ: eq_url+"/Residential/Entertainment/"
		}
	},
	"home-dtv-tab-eng-ultimate-continue":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/television.flow",
			Q: qshop_url+"/MasterWebPortal/residential/directvlanding?DIRECTV=D:6451378",
			EQ: eq_url+"/Residential/Entertainment/"
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/MasterWebPortal/freeRange/shop/ShopNC_viewNCBundlesPage?DIRECTV=D:6451378&Phone=true ",
			Q: qshop_url+"/MasterWebPortal/residential/directvlanding?DIRECTV=D:6451378",
			EQ: eq_url+"/Residential/Entertainment/"
		}
	},
	"home-dtv-tab-eng-premier-continue":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/television.flow",
			Q: qshop_url+"/MasterWebPortal/residential/directvlanding?DIRECTV=D:6451352",
			EQ: eq_url+"/Residential/Entertainment/"
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/MasterWebPortal/freeRange/shop/ShopNC_viewNCBundlesPage?DIRECTV=D:6451352&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/directvlanding?DIRECTV=D:6451352",
			EQ: eq_url+"/Residential/Entertainment/"
		}
	},
	"home-tv-tab-benefits-order":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/television.flow",
			Q: qshop_url+"/MasterWebPortal/residential/directvlanding",
			EQ: eq_url+"/Residential/Entertainment/"
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/MasterWebPortal/freeRange/shop/ShopNC_viewNCBundlesPage?DIRECTV=D:6451387&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/directvlanding",
			EQ: eq_url+"/Residential/Entertainment/"
		}
	},
	"home-tv-tab-benefits-dvr-order":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/television.flow",
			Q: qshop_url+"/MasterWebPortal/residential/directvlanding",
			EQ: eq_url+"/Residential/Entertainment/"
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/MasterWebPortal/freeRange/shop/ShopNC_viewNCBundlesPage?DIRECTV=D:6451387&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/directvlanding",
			EQ: eq_url+"/Residential/Entertainment/"
		}
	},
	"home-tv-tab-benefits-ondemand-order":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/television.flow",
			Q: qshop_url+"/MasterWebPortal/residential/directvlanding",
			EQ: eq_url+"/Residential/Entertainment/"
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/MasterWebPortal/freeRange/shop/ShopNC_viewNCBundlesPage?DIRECTV=D:6451387&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/directvlanding",
			EQ: eq_url+"/Residential/Entertainment/"
		}
	},
	"home-tv-tab-benefits-wholehome-order":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/television.flow",
			Q: qshop_url+"/MasterWebPortal/residential/directvlanding",
			EQ: eq_url+"/Residential/Entertainment/"
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/MasterWebPortal/freeRange/shop/ShopNC_viewNCBundlesPage?DIRECTV=D:6451387&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/directvlanding",
			EQ: eq_url+"/Residential/Entertainment/"
		}
	},
	"home-dtv-tab-equipment-order":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/television.flow",
			Q: qshop_url+"/MasterWebPortal/residential/directvlanding?DIRECTV=D:6451348"
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/MasterWebPortal/freeRange/shop/ShopNC_viewNCBundlesPage?DIRECTV=D:6451387&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/directvlanding?DIRECTV=D:6451348"
		}
	},
	"home-tv-tab-benefits-hd-order":{
		EC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/shop/television.flow",
			Q: qshop_url+"/MasterWebPortal/residential/directvlanding",
			EQ: eq_url+"/Residential/Entertainment/"
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/MasterWebPortal/freeRange/shop/ShopNC_viewNCBundlesPage?DIRECTV=D:6451387&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/directvlanding",
			EQ: eq_url+"/Residential/Entertainment/"
		}
	},
	"home-sitemap-establish-new-service":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding"
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding"
		}
	},
	"tpl_smb-dd-wireless":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/smallbusiness/products/verizon-business-mobile/",
			Q: qshop_url+"/small-business/products/verizon-business-mobile/"
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/smallbusiness/products/verizon-business-mobile/",
			Q: qshop_url+"/small-business/products/verizon-business-mobile/"
		}
	},
	"tpl_smb-dd-tv":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/smallbusiness/products/directv-business-tv/",
			Q: qshop_url+"/small-business/products/business-tv/"
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/smallbusiness/products/directv-business-tv/",
			Q: qshop_url+"/small-business/products/business-tv/"
		}
	},
	"home-bundles-threepane-already-customer":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/configBundle.flow?Phone=true&Internet=true&DIRECTV=true",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eq_url+"/Residential/Voice/BundledServices",
			topicName: "shopBundlesResidential"
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/configBundle.flow?Phone=true&Internet=true&DIRECTV=true",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding?Phone=true&Internet=true&DIRECTV=true",
			EQ: eq_url+"/Residential/Voice/BundledServices"
		}
	},
	"bundles-threepane-main-check-avail":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Bundles/index.html?Phone=true&Internet=true&DIRECTV=true",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eq_url+"/Residential/Voice/BundledServices",
			topicName: "shopBundlesResidential"
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/MasterWebPortal/freeRange/centurylink/ShopDoubleBundle?Phone=true&Internet=true&DIRECTV=true",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding?Phone=true&Internet=true&FIVEYRPL=true",
			EQ: eq_url+"/Residential/Voice/BundledServices"
		}
	},
	"home-bundles-threepane-homephone-button-start-now":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Bundles/index.html?Phone=true&Internet=true",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eq_url+"/Residential/Voice/BundledServices",
			topicName: "shopBundlesResidential"
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/MasterWebPortal/freeRange/centurylink/ShopDoubleBundle?Phone=true&Internet=true",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding?Phone=true&Internet=true",
			EQ: eq_url+"/Residential/Voice/BundledServices"
		}
	},
	"home-bundles-threepane-homephone-link-start-now":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Bundles/index.html?Internet=true&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eq_url+"/Residential/Voice/BundledServices",
			topicName: "shopBundlesResidential"
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/MasterWebPortal/freeRange/centurylink/ShopDoubleBundle?Internet=true&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding?Internet=true&Phone=true",
			EQ: eq_url+"/Residential/Voice/BundledServices"
		}
	},
	"home-bundles-threepane-internet-button-start-now":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Bundles/index.html?DIRECTV=true&Internet=true&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eq_url+"/Residential/Voice/BundledServices",
			topicName: "shopBundlesResidential"
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/MasterWebPortal/freeRange/centurylink/ShopDoubleBundle?DIRECTV=true&Internet=true&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding?DIRECTV=true&Internet=true",
			EQ: eq_url+"/Residential/Voice/BundledServices"
		}
	},
	"home-bundles-threepane-internet-link-start-now":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Bundles/index.html?DIRECTV=true&Internet=true&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eq_url+"/Residential/Voice/BundledServices",
			topicName: "shopBundlesResidential"
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/MasterWebPortal/freeRange/centurylink/ShopDoubleBundle?DIRECTV=true&Internet=true&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding?DIRECTV=true&Internet=true",
			EQ: eq_url+"/Residential/Voice/BundledServices"
		}
	},
	"home-bundles-threepane-buildyourown-button-start-now":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/configBundle.flow?Phone=true&Internet=true&DIRECTV=true",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eq_url+"/Residential/Voice/BundledServices",
			topicName: "shopBundlesResidential"
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/MasterWebPortal/freeRange/centurylink/ShopDoubleBundle?Phone=true&Internet=true&DIRECTV=true",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding?Phone=true&Internet=true&DIRECTV=true",
			EQ: eq_url+"/Residential/Voice/BundledServices"
		}
	},
	"home-bundles-threepane-buildyourown-link-start-now":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/configBundle.flow?Phone=true&Internet=true&DIRECTV=true",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eq_url+"/Residential/Voice/BundledServices",
			topicName: "shopBundlesResidential"
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/MasterWebPortal/freeRange/centurylink/ShopDoubleBundle?Phone=true&Internet=true&DIRECTV=true",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding?Phone=true&Internet=true&DIRECTV=true",
			EQ: eq_url+"/Residential/Voice/BundledServices"
		}
	},
	"home-specialoffers-internettab-hsi-learn-more":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Bundles/index.html?Phone=true&Internet=true",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding?Phone=true&Internet=true",
			EQ: eq_url+"/Residential/Voice/BundledServices",
			topicName: "shopBundlesResidential"
		},
		NC:{
			type:'TCAT',
			CTL: ctlsecure_url+"/MasterWebPortal/freeRange/centurylink/ShopDoubleBundle?Phone=true&Internet=true",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding?Phone=true&Internet=true",
			EQ: eq_url+"/Residential/Voice/BundledServices"
		}
	},
	"internet-main-offer-get-internet":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/availability.html?Internet=true&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true&Phone=true",
			EQ: eq_url+"/embarq.portal?_nfpb=true&_pageLabel=Products_Residential_InternetAccess_Home&ctatrue=true"
		}
	},
	"internet-main-offer-four-tab-already-customer":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eq_url+"/Residential/InternetAccess/HighSpeedInternet",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true",
			EQ: eq_url+"/Residential/InternetAccess/HighSpeedInternet"
		}
	},
	"internet-inettab-pane-one-get-internet-btn":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: eq_url+"/embarq.portal?_nfpb=true&_pageLabel=Products_Residential_InternetAccess_Home&ctatrue=true",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: "/MasterWebPortal/freeRange/centurylink/ShopDoubleBundle?Internet=true&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true",
			EQ:"http://promotions.centurylink.com/marketingLanding/puredeal/"
		}
	},
	"internet-inettab-pane-two-get-internet-btn":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/availability.html?Internet=true&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true&Phone=true",
			EQ: eq_url+"/embarq.portal?_nfpb=true&_pageLabel=Products_Residential_InternetAccess_Home&ctatrue=true"
		}
	},
	"internet-inettab-pane-two-get-internet-btn-ctla":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true&Phone=true",
			EQ: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/availability.html?Internet=true&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true&Phone=true",
			EQ: eq_url+"/embarq.portal?_nfpb=true&_pageLabel=Products_Residential_InternetAccess_Home&ctatrue=true"
		}
	},
	"internet-inettab-pane-two-get-internet-btn-ctlb":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true&Phone=true",
			EQ: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/availability.html?Internet=true&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true&Phone=true",
			EQ: eq_url+"/embarq.portal?_nfpb=true&_pageLabel=Products_Residential_InternetAccess_Home&ctatrue=true"
		}
	},
	"internet-inettab-pane-two-get-internet-btn-lq":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true&Phone=true",
			EQ: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/availability.html?Internet=true&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true&Phone=true",
			EQ: eq_url+"/embarq.portal?_nfpb=true&_pageLabel=Products_Residential_InternetAccess_Home&ctatrue=true"
		}
	},
	"internet-inettab-pane-three-get-internet-btn":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/availability.html?Internet=true&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true",
			EQ: eq_url+"/embarq.portal?_nfpb=true&_pageLabel=Products_Residential_InternetAccess_Home&ctatrue=true"
		}
	},
	"internet-speedstab-pane-one-get-internet-btn":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/availability.html?Internet=true&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true&Phone=true",
			EQ: eq_url+"/embarq.portal?_nfpb=true&_pageLabel=Products_Residential_InternetAccess_Home&ctatrue=true"
		}
	},
	"internet-speedstab-pane-two-get-internet-btn":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/availability.html?Internet=true&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true&Phone=true",
			EQ: eq_url+"/embarq.portal?_nfpb=true&_pageLabel=Products_Residential_InternetAccess_Home&ctatrue=true"
		}
	},
	"internet-speedstab-pane-three-get-internet-btn":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding",
			EQ: ctl_url+"/shop/Internet/HSI/hsiPlans.jsp",
			topicName: 'shopDataResidential'
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/Internet/HSI/availability.html?Internet=true&Phone=true",
			Q: qshop_url+"/MasterWebPortal/residential/broadbandlanding?Internet=true&Phone=true",
			EQ: eq_url+"/embarq.portal?_nfpb=true&_pageLabel=Products_Residential_InternetAccess_Home&ctatrue=true"
		}
	},
	"home-mobile-already-customer":{
		EC:{
			CTL: ctl_url+"/shop/configBundle.flow",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eqsecure_url+"/Residential/Voice/BundledServices"
		},
		NC:{
			CTL: ctl_url+"/shop/configBundle.flow",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eqsecure_url+"/Residential/Voice/BundledServices"
		}
	},
	"change-services-main-cta":{
		EC:{
			type: 'TCAT',
			CTL: ctl_url+"/home/changeservices/index.html",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding"
		},
		NC:{
			type: 'TCAT',
			CTL: ctl_url+"/home/changeservices/index.html",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding"
		}
	},
	"shop-bundles-already-customer":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/home/changeservices/index.html",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eq_url+"/Residential/Voice/BundledServices",
			topicName: "shopBundlesResidential"
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/configBundle.flow?Phone=true&Internet=true&DIRECTV=true",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding?Phone=true&Internet=true&DIRECTV=true",
			EQ: eq_url+"/Residential/Voice/BundledServices"
		}
	},
	"shop-checkout-already-customer":{
		EC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/configBundle.flow?Phone=true&Internet=true&DIRECTV=true",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding",
			EQ: eq_url+"/Residential/Voice/BundledServices",
			topicName: "shopBundlesResidential"
		},
		NC:{
			type:'TCAT',
			CTL: ctl_url+"/shop/configBundle.flow?Phone=true&Internet=true&DIRECTV=true",
			Q: qshop_url+"/MasterWebPortal/residential/bundleslanding?Phone=true&Internet=true&DIRECTV=true",
			EQ: eq_url+"/Residential/Voice/BundledServices"
		}
	}
 },
  
"mam":{
	"tpl_menu-lvl1-myaccount":{
		CTL: ctlmyacct_url+"/eam/myAccount.do",
		Q: qshop_url+"/MasterWebPortal/FreeRange/summary"
	}, 
	"tpl_menu-lvl1-myprofile":{
		CTL: ctlmyacct_url+"/eam/myProfile.do",
		Q: qshop_url+"/MasterWebPortal/appmanager/home/QwestProtected?_nfpb=true&_pageLabel=ManageProfilePage"
	}, 
	"tpl_menu-lvl1-mybill":{
		CTL: ctlmyacct_url+"/eam/myAccount.do",
		Q: q_url+"/MasterWebPortal/ManageMyAccount/viewBill"
	}, 
	"account-autopaybill-start-now":{
		CTL: ctlmyacct_url+"/eam/myAccount.do",
		Q: qshop_url+"/MasterWebPortal/ManageMyAccount/paybill"
	}, 
	"account-autopaybill-benefits-start-now":{
		CTL: ctlmyacct_url+"/eam/myAccount.do",
		Q: qshop_url+"/MasterWebPortal/ManageMyAccount/paybill"
	}, 
	"account-autopaybill-expect-start-now":{
		CTL: ctlmyacct_url+"/eam/myAccount.do",
		Q: qshop_url+"/MasterWebPortal/ManageMyAccount/paybill"
	}, 
	"account-autopaybill-expect-MyAccount":{
		CTL: ctlmyacct_url+"/eam/myAccount.do",
		Q: qshop_url+"/MasterWebPortal/FreeRange/summary"
	}, 
	"account-autopaybill-manage-myaccount":{
		CTL: ctlmyacct_url+"/eam/myAccount.do",
		Q: qshop_url+"/MasterWebPortal/FreeRange/summary"
	}, 
	"account-autopaybill-help-view-bill":{
		CTL: ctlmyacct_url+"/eam/myAccount.do",
		Q: q_url+"/MasterWebPortal/ManageMyAccount/viewBill"
	},
	"smb_global-nav-manage-my-account":{
		type:'TCAT',
		CTL: ctleam_url+"/entrycheck/eam/loggedin.html",
		Q: qshop_url+"/MasterWebPortal/FreeRange",
		EQ: ctleam_url+"/entrycheck/eam/loggedin.html"
	},
	"smb_home-nav-manage-my-account":{
		CTL: ctleam_url+"/entrycheck/eam/loggedin.html",
		Q: qportal_url+"/smallbusiness/appmanager/smb/login",
		EQ: ctleam_url+"/entrycheck/eam/loggedin.html"
	},
	"tpl_global-nav-myaccount":{
		type:'TCAT',
		CTL: ctleam_url+"/entrycheck/eam/loggedin.html",
		Q: qshop_url+"/MasterWebPortal/FreeRange/summary",
		EQ: ctleam_url+"/entrycheck/eam/loggedin.html"
	},
	"tpl_res-dd-myaccount":{
		type:'TCAT',
		CTL: ctleam_url+"/entrycheck/eam/loggedin.html",
		Q: qshop_url+"/MasterWebPortal/FreeRange/summary",
		EQ: ctleam_url+"/entrycheck/eam/loggedin.html"
	},
	"tpl_res-dd-view-pay-bill":{
		type:'TCAT',
		CTL: ctleam_url+"/entrycheck/eam/loggedin.html",
		Q: q_url+"/MasterWebPortal/ManageMyAccount/viewBill",
		EQ: ctleam_url+"/entrycheck/eam/loggedin.html",
		topicName: 'myaccountViewBill'
	},
	"tpl_res-dd-request-repair":{
		type:'TCAT',
		CTL: ctl_selfservice_url+"/ticketing//residential/displayResidentialTicketingLanding.do",
		Q: q_url+"/MasterWebPortal/freeRange/acctMgmt/RepairLoginAction.action",
		EQ: ctl_selfservice_url+"/ticketing//residential/displayResidentialTicketingLanding.do"
	},
	"tpl_ext-footer-view-pay-bill":{
		type:'TCAT',
		CTL: ctleam_url+"/entrycheck/eam/loggedin.html",
		Q: qshop_url+"/MasterWebPortal/ManageMyAccount/viewBill",
		EQ: ctleam_url+"/entrycheck/eam/loggedin.html"
	},	
	"home-sitemap-request-phone-repair":{
			type:'TCAT',
			CTL: ctl_selfservice_url+"/ticketing/residential/displayResidentialTicketingLanding.do",
			Q: qshop_url+"/MasterWebPortal/freeRange/acctMgmt/RepairLoginAction.action",
			EQ: ""
	},
	"home-sitemap-view-pay-bill":{
			type:'TCAT',
			CTL: ctleam_url+"/entrycheck/eam/loggedin.html",
			Q: qshop_url+"/MasterWebPortal/ManageMyAccount/viewBill",
			EQ: ctleam_url+"/entrycheck/eam/loggedin.html"
	},
	"home-sitemap-sign-up-myaccount":{
			type:'TCAT',
			CTL: ctleam_url+"/eam/registration.do",
			Q: "https://q.myaccount.centurylink.com/MasterWebPortal/MyAccount/register",
			EQ: ""
	},
	"home-sitemap-add-modify-services":{
			type:'TCAT',
			CTL: ctleam_url+"/entrycheck/eam/loggedin.html",
			Q: qshop_url+"/MasterWebPortal/FreeRange/summary",
			EQ: ctleam_url+"/entrycheck/eam/loggedin.html"
	},
	"hp-wo-signin":{
		type:'TCAT',
		CTL: '#NOREDIRECT',
		Q: qshop_url+"/MasterWebPortal/FreeRange/summary",
		EQ: '#NOREDIRECT'
	},
	"res_help_phone_repair":{
		type:'TCAT',
		CTL:'#NOREDIRECT',
		Q:qshop_url+"/MasterWebPortal/appmanager/home/QwestProtected?_nfpb=true&_pageLabel=ManageRepairsPage",
		EQ:  '#NOREDIRECT'
	}
 }}

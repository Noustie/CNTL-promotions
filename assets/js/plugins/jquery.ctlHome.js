/**
 *
 * jQuery extension closure 
 * @param {Object} $ jQuery representation
 * @param {Object} window
 */
;(function($, window)
	{
		$.ctlHome = {
			init: function()
			{
				this.bundleLinkMatrix.init();
				this.floatingNav.init();
				spDemoInit();
				
				document.getElementById('btnHelp-Support').onclick = function()
				{
					if(document.getElementById('helpArrow').className == 'down')
					{
						document.getElementById('helpArrow').className = '';
						$('#macSlideOutContainer').stop().animate({ top: '0px' }, { duration: 'fast', queue: false }).dequeue();
						$("#helpAndSupportLinks").hide();
					}
					else
					{
						$("#helpAndSupportLinks").show();
						document.getElementById('helpArrow').className = 'down';
						$('#macSlideOutContainer').stop().animate({ top: '-110px' }, { duration: 'fast', queue: false }).dequeue();
					}
				};
			},
			countBox: function()
			{
				var year = 2013, month = 12, day = 10, hour = 23, min = 59, sec = 59;

				month = --month;
				dateFuture = new Date(year, month, day, hour, min, sec);

				function GetCount()
				{
					var out = "";
			
			        dateNow = new Date();
			        amount = dateFuture.getTime() - dateNow.getTime() + 5;
			        delete dateNow;
			
			        if(amount < 0)
			        {
			            out='<div class="countNum days"><span></span>0<div class="days_text countText">days</div></div>' +
							'<div class="countNum hours"><span></span>0<div class="hours_text countText">hrs</div></div>' +
							'<div class="countNum mins"><span></span>0<div class="mins_text countText">mins</div></div>' +
							'<div class="countNum secs"><span></span>0<div class="secs_text countText">secs</div></div>';

			            document.getElementById('countbox').innerHTML = out;
			        }
					else
			        {
			            days = 0; hours = 0; mins = 0; secs = 0;
			
			            amount = Math.floor( amount / 1000 ); /* kill the milliseconds */
			
			            days = Math.floor( amount / 86400 ); /* days */
			            amount = amount % 86400;
			
			            hours = Math.floor( amount / 3600 ); /* hours */
			            amount = amount % 3600;
			
			            mins = Math.floor( amount / 60 ); /* minutes */
			            amount = amount % 60;

			            out =
							'<div class="countNum days">' + padNum(days) +'<div class="days_text countText">days</div></div>' + 
							'<div class="countNum hours">' + padNum(hours) +'<div class="hours_text countText">hrs</div></div>' + 
							'<div class="countNum mins">' + padNum(mins) +'<div class="mins_text countText">mins</div></div>' + 
							'<div class="countNum secs">' + padNum(Math.floor(amount)) +'<div class="secs_text countText">secs</div></div>' ;

			            document.getElementById('countbox').innerHTML = out;
			
			            setTimeout(GetCount, 1000);
			        }
				}

				function padNum(num)
				{
				    var s = "00" + num;
				    var _s = (s.substr(s.length-2)).split('');
				    return '<span class="face"></span><span class="num numLeft">'+_s[0]+'</span><span class="face"></span><span class="num numRight">'+_s[1]+'</span>';
				}

				if(document.getElementById('countbox') !== null) $(GetCount);
			},
			floatingNav: {
				elemNavFloat: 'navFloat', //floatNavBucket
				navOffset: 0,
				init: function()
				{
					// Loop through the children of the main container
					var floatBuckets = document.getElementById(this.elemNavFloat).childNodes;
					for(var j = 0; j < floatBuckets.length; j++)
					{
						// Non-text node with the right class.
						if(floatBuckets[j].nodeType == 1 && (" " + floatBuckets[j].className + " ").indexOf(" floatNavBucket ") > -1)
						{
							// Assign click function
							floatBuckets[j].onclick = function() { $.ctlHome.floatingNav.navFloatJump(this); };
						}
					}

					// Find navFloat distance from window top.
					(function getElemOffset(elem)
						{
							$.ctlHome.floatingNav.navOffset += parseInt(elem.offsetTop);
							return elem.parentNode.offsetTop ? getElemOffset(elem.parentNode) : false;
						}
					)(document.getElementById(this.elemNavFloat));
					
					// Get static nav position relative to top
					window.onscroll = function()
					{
						// Current window scroll offset
						var windowTopPos = window.pageYOffset || document.documentElement.scrollTop;
						if(windowTopPos > $.ctlHome.floatingNav.navOffset)
						{
							document.getElementById($.ctlHome.floatingNav.elemNavFloat).style.position = 'fixed';
						}
						else
						{
							document.getElementById($.ctlHome.floatingNav.elemNavFloat).style.position = 'absolute';
						}
					};
				},
				/*
				 * A function to reset floating nav buttons, set current, and jump to requested section.
				 * @param {object} The clicked DOM element
				 * @method navFloatJump
				 */
				navFloatJump: function(elem)
				{
					var bucketParent = elem.parentNode;
				
					// Clear current bucket class
					if($(bucketParent).find('.currBucket').length > 0)
					{
						$(bucketParent).find('.currBucket')[0].className = 'floatNavBucket';
					}

					elem.className += ' currBucket';

					// Prevent lag of window.onscroll
					document.getElementById($.ctlHome.floatingNav.elemNavFloat).style.position = 'fixed';

					// Request the position of the element so we can jump to it.
					var elementOffset = $.ctlHome.floatingNav.getPosition(document.getElementById(elem.getAttribute('jumpTo')));

					// Make the jump
					window.scroll(0, elementOffset.y - 150);

					trackClick(elem.getAttribute('data-clicktrack'));

					return false;
				},
				getPosition: function(elem)
				{
					var xPosition = 0;
					var yPosition = 0;
				
					while(elem)
					{
						xPosition += (elem.offsetLeft + elem.clientLeft);
						yPosition += (elem.offsetTop + elem.clientTop);
						elem = elem.offsetParent;
					}
					return(
						{
							x: xPosition,
							y: yPosition
						}
					);
				}
			},
			bundleLinkMatrix: {
				elemBundleServices: 'optServices',
				init: function()
				{
					// Element not found, bow out gracefully
					if(!document.getElementById(this.elemBundleServices))
					{
						return false;
					}

					// Initial definition			
					this.updateBundleLM('&Internet=true&Phone=true');

					var BundleOptions = document.getElementById(this.elemBundleServices).childNodes;

					// Loop through the children of the main container
					for(var j = 0; j < BundleOptions.length; j++)
					{
						// Non-text node
						if(BundleOptions[j].nodeType == 1)
						{
							BundleOptions[j].onclick = function()
							{
								var inactiveBundles = $('#' + $.ctlHome.bundleLinkMatrix.elemBundleServices + ' .inactive');
					
								if(this.className == 'inactive')
								{
									// Show as active
									this.className = '';
								}
								else
								{
									// User must select at least one service. Also, one service must be internet or phone
									if(
										(
											document.getElementById('optBundlePhone').className == 'inactive' ||
											document.getElementById('optBundleInternet').className == 'inactive'
										) && (
											this.id == 'optBundlePhone' ||
											this.id == 'optBundleInternet'
										)
									)
									{
										alert('Must include Internet or Phone service as one of the selected services.');
										return false;
									}
									// Un-check
									this.className = 'inactive';
								}
					
								// Reset link matrix params for bundle selection
								var paramCTAM = '';
					
								// Update param to load appropriate CTAM for bundle button
								if(document.getElementById('optBundleInternet').className == '')
								{
									paramCTAM += '&Internet=true';
								}
								if(document.getElementById('optBundlePhone').className == '')
								{
									paramCTAM += '&Phone=true';
								}
								if(document.getElementById('optBundleTV').className == '')
								{
									paramCTAM += '&DIRECTV=true';
								}

								$.ctlHome.bundleLinkMatrix.updateBundleLM(paramCTAM);
							};
						};
					}
				},
				/*
				 * Dynamically sets link matrix params for bundle selection
				 *
				 * @method $.ctlHome.bundleLinkMatrix.updateBundleLM
				 * @param {String} paramCTAM URL params to append to the link matrix destination
				 */
				updateBundleLM: function(paramCTAM)
				{
					window.linkMatrix.ctam.btnBundleStart = {
						EC:
						{
							type: 'TCAT',
							CTL: ctl_url+"/shop/Bundles/index.html?hp" + paramCTAM,
							Q: qshop_url+"/MasterWebPortal/residential/bundleslanding?hp" + paramCTAM,
							EQ: eq_url+"/Residential/Voice/BundledServices",
							topicName: "shopBundlesResidential"
						},
						NC:
						{
							type: 'TCAT',
							CTL: ctlsecure_url+"/MasterWebPortal/freeRange/centurylink/ShopDoubleBundle?hp" + paramCTAM,
							Q: qshop_url+"/MasterWebPortal/residential/bundleslanding?hp" + paramCTAM,
							EQ: eq_url+"/Residential/Voice/BundledServices"
						}
					};

					window.linkMatrix.ctam.btnBundlePrismStart = {
						EC:
						{
							type: 'TCAT',
							Q: ctlsecure_url + '/shop/Iptv/displayPrism.html?hp' + paramCTAM,
							CTL: ctlsecure_url + '/shop/Iptv/displayPrism.html?hp' + paramCTAM
						},
						NC:
						{
							type: 'TCAT',
							Q: ctlsecure_url + '/shop/Iptv/displayPrism.html?hp' + paramCTAM,
							CTL: ctlsecure_url + '/shop/Iptv/displayPrism.html?hp' + paramCTAM
						}
					};
				
					return true;
				}
			}
		};
	}
)(jQuery, window);





























































// JavaScript Document

    

        var emailReg = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

        $(document).ready(function () {
            $('.scroll-pane').jScrollPane({ showArrows: false });
            $('.scroll-pane').jScrollPane({ verticalDragMinHeight: 29, verticalDragMaxHeight: 29 });

            var selected = "#richBtn";
            $("#richBtn img").attr("src", "img/sup_rich_over.jpg");
            $("#container").css("left", "-525px");

            function setSelected(crnt) {
                $("#sippBtn img").attr("src", "img/sup_sipp.jpg");
                $("#stephBtn img").attr("src", "img/sup_steph.jpg");
                $("#brianBtn img").attr("src", "img/sup_brian.jpg");
                $("#coreyBtn img").attr("src", "img/sup_corey.jpg");
                $("#richBtn img").attr("src", "img/sup_rich.jpg");
                $("#steveBtn img").attr("src", "img/sup_steve.jpg");

                if (crnt == "#steveBtn") {
                    $("#steveBtn img").attr("src", "img/sup_steve_over.jpg");
                }
                if (crnt == "#richBtn") {
                    $("#richBtn img").attr("src", "img/sup_rich_over.jpg");
                }
                if (crnt == "#coreyBtn") {
                    $("#coreyBtn img").attr("src", "img/sup_corey_over.jpg");
                }
                if (crnt == "#brianBtn") {
                    $("#brianBtn img").attr("src", "img/sup_brian_over.jpg");
                }
                if (crnt == "#stephBtn") {
                    $("#stephBtn img").attr("src", "img/sup_steph_over.jpg");
                }
                if (crnt == "#sippBtn") {
                    $("#sippBtn img").attr("src", "img/sup_sipp_over.jpg");
                }

                selected = crnt;
            }

            $("#thankyou").click(function () {
                $("#thankyou").css("visibility", "hidden");
                $("#thankyou").css("top", "-500px");
            });

            $("#steveBtn").click(function () {
                $("#infoContainer").css("left", "-1545px");
                setSelected("#steveBtn");
            });
            $("#steveBtn").mouseover(function () {
                $("#steveBtn img").attr("src", "img/sup_steve_over.jpg");
            });
            $("#steveBtn").mouseout(function () {
                if (selected != ("#" + this.id)) {
                    $("#steveBtn img").attr("src", "img/sup_steve.jpg");
                }
            });
            $("#richBtn").click(function () {
                $("#infoContainer").css("left", "-515px");
                setSelected("#richBtn");
            });
            $("#richBtn").mouseover(function () {
                $("#richBtn img").attr("src", "img/sup_rich_over.jpg");
            });
            $("#richBtn").mouseout(function () {
                if (selected != ("#" + this.id)) {
                    $("#richBtn img").attr("src", "img/sup_rich.jpg");
                }
            });
            $("#coreyBtn").click(function () {
                $("#infoContainer").css("left", "-1030px");
                setSelected("#coreyBtn");
            });
            $("#coreyBtn").mouseover(function () {
                $("#coreyBtn img").attr("src", "img/sup_corey_over.jpg");
            });
            $("#coreyBtn").mouseout(function () {
                if (selected != ("#" + this.id)) {
                    $("#coreyBtn img").attr("src", "img/sup_corey.jpg");
                }
            });
            $("#brianBtn").click(function () {
                $("#infoContainer").css("left", "0px");
                setSelected("#brianBtn");
            });
            $("#brianBtn").mouseover(function () {
                $("#brianBtn img").attr("src", "img/sup_brian_over.jpg");
            });
            $("#brianBtn").mouseout(function () {
                if (selected != ("#" + this.id)) {
                    $("#brianBtn img").attr("src", "img/sup_brian.jpg");
                }
            });
            $("#stephBtn").click(function () {
                $("#infoContainer").css("left", "-2060px");
                setSelected("#stephBtn");
            });
            $("#stephBtn").mouseover(function () {
                $("#stephBtn img").attr("src", "img/sup_steph_over.jpg");
            });
            $("#stephBtn").mouseout(function () {
                if (selected != ("#" + this.id)) {
                    $("#stephBtn img").attr("src", "img/sup_steph.jpg");
                }
            });
            $("#sippBtn").click(function () {
                $("#infoContainer").css("left", "-2575px");
                setSelected("#sippBtn");
            });
            $("#sippBtn").mouseover(function () {
                $("#sippBtn img").attr("src", "img/sup_sipp_over.jpg");
            });
            $("#sippBtn").mouseout(function () {
                if (selected != ("#" + this.id)) {
                    $("#sippBtn img").attr("src", "img/sup_sipp.jpg");
                }
            });

            $("#vidSteve").click(function () {
                playVideo("qwest_steve.flv");
				_gaq.push(['_trackEvent', 'Support', 'Video_View']);
            });
            $("#vidRich").click(function () {
                playVideo("qwest_rich.flv");
				_gaq.push(['_trackEvent', 'Support', 'Video_View']);
            });
            $("#vidCorey").click(function () {
                playVideo("qwest_corey.flv");
				_gaq.push(['_trackEvent', 'Support', 'Video_View']);
            });
            $("#vidBrian").click(function () {
                playVideo("qwest_brian.flv");
				_gaq.push(['_trackEvent', 'Support', 'Video_View']);
            });
            $("#vidSteph").click(function () {
                playVideo("qwest_steph.flv");
				_gaq.push(['_trackEvent', 'Support', 'Video_View']);
            });
            $("#vidSipp").click(function () {
                playVideo("qwest_sipp.flv");
				_gaq.push(['_trackEvent', 'Support', 'Video_View']);
            });
			
			$("#twitter").click(function () {
				_gaq.push(['_trackEvent', 'Support', 'Twitter']);
            });


            $(".submitButton input").bind("click", function () {

                if (formIsValid()) {
                    
	
					_gaq.push(['_trackEvent', 'Support', 'Form_Submit']);
                    var emailRequestData = {
                        url: "support.ashx",
                        data: {
                            name: $("#name").val(),
                            email: $("#email").val(),
                            subject: $("#issue").val(),
							state: $("#state").val(),
                            comments: $("#comments").val()
                        },
                        type: "POST"
                    };
					
                    $.ajax(emailRequestData);
					
					$(".validationText").css("visibility", "hidden");
                    $("#thankyou").css("visibility", "visible");
                    $("#thankyou").css("top", "86px");
					$("#name").val("");
					$("#email").val("");
					$("#comments").val("");
					
                }
                else {
                    $(".validationText").css("visibility", "visible");
                }
                return false;

            });
			$(".submitButton input").mouseover(function () {
                $(".submitButton input").attr("src", "img/sup_btn_submitOver.jpg");
            });
            $(".submitButton input").mouseout(function () {
                $(".submitButton input").attr("src", "img/sup_btn_submit.jpg");
            });
			
			$(".numbersonly-format").keydown(function (event) {
				// Prevent shift key since its not needed
				if (event.shiftKey == true) {
					event.preventDefault();
				}
				// Allow Only: keyboard 0-9, numpad 0-9, backspace, tab, left arrow, right arrow, delete
				if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105) || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46) {
					// Allow normal operation
				} else {
					// Prevent the rest
					event.preventDefault();
				}
			});
			
			$(".chatBtn").open 
			  ({ 
				width:800, 
				height:600, 
				location:true, 
				toolbar:true, 
				resizeable:true, 
				scrollbars:true 
			  }); 




        });    
		function formIsValid() {
                return $("#name").val() && $("#email").val() && $("#comments").val() && $("#email").val().match(emailReg);
            }
	
	
		function thisMovie(movieName) {
			 if (navigator.appName.indexOf("Microsoft") != -1) {
				 return window[movieName];
			 } else {
				 return document[movieName];
			 }
		 }
		function playVideo(vidPath){
				thisMovie("flashContent").loadVideoFromJS(vidPath);
				$("#container").css("left", "25px");
 				sizeChangeCallback(); 
			}
		function hideVidPlayer(){
				 $("#container").css("left", "-525px");
			}
		function restrictNumber(evt) {
		  // Prevent shift key since its not needed
			if (event.shiftKey == true) {
				event.preventDefault();
			}
			// Allow Only: keyboard 0-9, numpad 0-9, backspace, tab, left arrow, right arrow, delete
			if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105) || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46) {
				// Allow normal operation
			} else {
				// Prevent the rest
				event.preventDefault();
			}
		}			
        
	  
/*jshint devel:true */
window.onunload = function() {};



$( document ).ready(function() {

    var windowWidth = $( window ).width();
    var $content = $('.content-stage');
    var $logo = $('.navLogo');

    // plug
    var $plugBtn = $('.plug > p');
    var $plugInfo = $('.plug-info');
    var $plugPic = $('.profile-pic');
    var $profileRing = $('.profile-ring');
    var $exitBtn = $('.exit');
    var boxWidth = $plugInfo.innerWidth();
    var picWidth = $plugPic.outerWidth();

    // variables for content swapping
    var instructorBio={
        courtney: "<p>Trained in the YogaWorks method emphasizing safe, proper alignment within a flowing vinyasa context, Courtney aims to teach students in methodical and focused classes so students feel empowered with a deep knowledge of their bodies, clear technique, awareness of breath and quieted minds. As a skier, runner, and youth competitive swimmer with many injuries, Courtney understands tight athletic bodies intimately. She leads her students through well-balanced practices which are challenging both physically and mentally, creating space for more of the good stuff; love, compassion, kindness, and oneness.</p><p>A Walla Walla native and Whitman graduate with an ever-growing love for this fair (little) city, Courtney opened Revolver Yoga in September 2013. It is with the deepest gratitude and respect for her teachers Jason, Chuck and Jodie as well as the community and teachers at Revolver that she continues to be inspired to study, practice, and look within.</p>",
        chrissy: "<p>Chrissy's love for yoga brought her all the way from the Midwest to the Pacific Northwest to attend a Hatha yoga teacher training program at The Movement Center in Portland, Oregon. Her training provided the foundation for a style focused on establishing a deep connection to oneself, centering the body and mind, and skillful knowledge of breath awareness. Chrissy’s teaching style is slow, provocative, grounding, and leaves practitioners deeply relaxed and aware of their own profound connection to the universe. She is a highly skilled Reiki Master and the creator of TuTara Magikal products which combine healing herbalism theory, lunar-charged energy, and organically grown materials.</p>",
        tara: "<p>After practicing yoga for nearly twenty years, Tara decided to complete the Teaching Training Program at Peace Through Yoga in Indianapolis, Indiana. Tara's teaching experience ranges from vinyasa classes to pre-natal yoga, as she is also a graduate of Blooma's nationally-recognized Pre-Natal Yoga Teaching Training Program. Tara invites you to come to the mat as you are and to take the mindfulness and presence you cultivate in your practice beyond the mat.</p>",
        kay: "<p>Kay Lynn views her teaching as the sharing of her practice, which is centered in opening the heart and mind to greater mindfulness and joy, both on and off the mat. She enjoys working with beginners and experienced practitioners alike, and she finds particular joy in working with students who believe “they aren’t flexible enough for yoga.” Under the guidance and encouragement of Terri Cotts, Kay Lynn became a certified yoga teacher in 2006.  Kay Lynn continues her education with Jason Crandell, John Friend, and Shiva Rea.</p> <p>Outside of her yoga life, Kay Lynn is an Associate Professor of Psychology at Columbia Basin College. She shares her world with her husband Shawn, two dogs, two cats, and Stiffler, the retired cutting horse.</p>",
        robin: "<p>Robin has studied all over the nation and received her teacher training certificate in New Delhi, India with continuing education in the Pattabhi Jois Ashtanga tradition with master teacher Tim Miller. As a former dancer, climber, and outdoor enthusiast she has sustained many injuries that inform her deep awareness and sensitivity of the human body within the yoga context. Robin leads spunky and lighthearted classes often inspired by the Ashtanga sequence and isn’t afraid to bring students to their physical edge. She believes that with modifications, breath, and a sense of humor, all is coming.</p>"
    };
        
    var newStudentObj =[{title:"Guidelines", bodyText:"<p>No one wants to be the buffoon wreaking havoc in a yoga studio with social faux pas, so these are some things we expect from you when you come practice with us:</p> <ul> <li>Turn phones off or to silent upon entering the space</li> <li>Please remove your shoes at the door</li> <li>Please keep most chatting to the back room before class</li> <li>Be respectful of the space and put your props away nicely</li> <li>If you must arrive late, please wait outside until the class is moving</li> <li>If you must leave early, please keep your things in the reception area and leave before savasana</li> </ul>"}, {title:"First Class", bodyText:'<p>Please arrive at the studio 5 - 10 minutes before class so we can introduce ourselves to you and have a few minutes to get set up. You can download and <a href="pdf/form.pdf" target"_blank">print the new student form here</a>. Drop ins are welcome however those who have preregistered for class online will have preference. You are welcome to come early (the studio doors open 20 minutes prior to class) to claim your spot, have some tea, and relax. We look forward to having you in class!</p> <p>If you are a brand new student to yoga, please come to Level 1 classes so we can best help you begin your yoga practice.</p>'}, {title:"Clothing &amp; Equipment", bodyText:"<p>Wear a pair of shorts, capris, or pants that are stretchy and comfortable. Please wear a shirt and the proper undergarments to avoid distraction. Specific &quot;yoga clothes&quot; are not necessary (but opaque pants are greatly appreciated). Shoes are not allowed in the studio and are to be left at the front desk. Bare feet give you good grip on the mat, therefore we only recommend wearing socks during Restorative Zen and the first half of Yin/Vin classes.</p> <p>Bring a mat! If you don’t have one of your own, we rent high quality, 71&quot; Manduka Black mats for a $3 single class fee and also sell Jade and Manduka mats in the studio. Curious about the mats we sell? We have demos of each...just ask and give them a try!</p>"}, {title:"New Student Special", bodyText:'<p>Join us for a solid week of unlimited yoga (really, really unlimited) to check out our teachers, classes, and the community to see if we are the right fit for you. <strong class="italics">The New Student Special is only for - yup, you guessed it - new students to the studio, and is only $25!</strong></p> <p><a href="sign-up.html">Sign up</a> and come check us out today!</p>'} ];
    var instructorObj = [
    
    {
    name:"Courtney Morgan",
    title:"ERYT 200",
    past:"Past: YogaWorks / New York, NY",
    quote:"<span class='quote'>&quot;Develop the breath, go to the roots, connect with the core. Look inside.&quot;</span><br><span class='quote-author'>- Chuck Miller</span>",
    info: instructorBio.courtney,
    img: "img/courtney.jpg"

    },{

    name:"Chrissy Mueller",
    title:"RYT 200",
    past:"Past: The Movement Center / Portland, OR",
    quote:"<span class='quote'>&quot;Practice with a passionate calm&quot;</span><br><span class='quote-author'>- Erich Schiffman</span>",
    info: instructorBio.chrissy,
    img: "img/chrissy.jpg"

    },{
    
    name:"Tara",
    title:"RYT 200, RPYT",
    past:"Past: Peace Through Yoga / Indianapolis, IN & Blooma / Minneapolis, MN",
    quote:"<span class='quote'>&quot;Too often we underestimate the power of a touch, a smile, a kind word, a listening ear, an honest compliment, or the smallest act of caring, all of which have the potential to turn a life around.&quot;</span><br><span class='quote-author'>-Leo Buscaglia</span>",
    info: instructorBio.tara,
    img: "img/tara.png"
    
    },{

    name:"Robin Hamilton",
    title:"ERYT200",
    past:"Past: Seema Sondhi Yoga Studio / New Delhi, India",
    quote:"<span class='quote'>&quot;Ninety nine percent practice; one percent theory&quot;</span><br><span class='quote-author'>- Sri K. Pattabhi Jois</span>",
    info: instructorBio.robin,
    img: "img/robin.jpg"

    },{

    name:"Kay Lynn Stevens",
    title:"RYT2000",
    past:"Past: Wild Grace Arts Yoga, Olympia, WA.",
    quote:"<span class='quote'></span>",
    info: instructorBio.kay, img: "img/kay.jpg"}
    ];

    // one-dimensional swapping 
    var $swapContent = $('.swap-body');

    // variables for class descriptions
    var classes = [{title: "Overview", description: "<p>Our classes balance precise instruction, alignment with breath, and fluid movement. Classes are carefully themed to deepen the students' experience, understanding, and benefits of yoga both physically and mentally.  A flow of Sun Salutes and postures are skillfully sequenced, and modifications are used to individualize the practice. Each teacher brings their own unique voice to classes, creating a diverse and multi-faceted curriculum for our students.</p> <p>Revolver Yoga signature classes are paced moderately to vigorously depending upon the level. As a beginner, please start with Level 1 and gradually build up to more advanced levels as your practices grows. All signature classes are 75 minutes long.</p>"}, {title: "Level 1", description: "<p>Our beginner classes are powerful learning experiences in which you will literally re-discover your body, how it works, and what it can do. All Level 1 classes are designed to give you the time and support to understand the proper alignment of Yoga asanas (postures), language, and breathing technique.</p> <p>You will begin by focusing on the basics, but it won’t stop there. Beginner classes are focused at helping you master form, understand how to breathe, learning how to release tension, and help you build confidence in the postures and experience the wonders of Yoga.</p>"}, {title: "Level 1-2", description: "<p>After you feel comfortable with the postures taught in Level 1 classes you will be ready to move to Level 1-2. These more challenging classes continue to emphasize the fundamentals of yoga while presenting the poses and sequencing the class in a more challenging way. In Level 1-2 the teachers love offering new and exciting challenges for their students, while ensuring more difficult positions are practiced safely and effectively.</p>"}, {title: "Level 2", description: "<p>Level 2 classes are designed to take you to the intermediate level where you will expand on your strength, stamina and flexibility as you master more advanced postures (inversions, backbends) and more demanding sequences. Level 2 classes will help you take your practice to a whole new level.</p>"}, {title: "Level 2-3", description: "<p>Our studio's most physically demanding class for those who love integrating arm balances, big backbends, and strong sequencing into their practice. It is strongly advised that a student has at least two years of solid practice and is familiar and comfortable with the intermediate postures and sun salutations. Some classes will be held &quot;workshop&quot; style with a specific pose we are working towards, while others will be sequenced to integrate many challenging postures together. This class is not appropriate for those newer to yoga practice, no matter your fitness level.</p>"}, {title: "Restorative Zen (Level 1)", description: "<p>A super slow and highly relaxing class in which the instructor will guide students into prop-supported restorative postures where techniques such as breath awareness, body scans, meditation, essential oil aromatherapy, yoga nidra, and touchless Reiki may be presented to help aid relaxation and deep physical, psychological, and emotional healing. All levels, including pregnant practitioners, are encouraged.</p> <p>This class limited to 10 students, please sign up online to reserve your place.</p>"}, {title: "Yin/Vin (Level 1)", description: "<p>Our Yin/Vin class offers the opportunity to begin your week with 40-45 minutes of Yin Yoga, a meditative, slow-paced and yummy practice in which seated and supine postures are held for 3-5 minutes each. Yin is a wonderful way to access the fascial tissues and ligaments, making it a very effective practice for those with tight hip, pelvic, and low back issues. We juice it up for the second half of class with an accessible vinyasa flow to awaken you to the day!</p>"}, {title: "Yin (Level 1)", description: "<p>Yin is a slow, meditative practice appropriate for beginners. We work to open the ligaments and fascial tissues of the hips, spine, and shoulders with postures held for 3 to 5 minutes each. Though it is slow and the postures appear basic, the length of time each asana is held makes this an intense practice that builds mental strength and a deep connection to the breath.</p>"}, {title: "Led Primary Series (Level 2)", description: "<p>Based on the Ashtanga system as taught by Pattabhi Jois, the Ashtanga practice is a set routine of asanas (postures). The practice begins with sun salutations A and B and moves through standing postures to prepare the body for seated postures and arm balances with vinyasas between each asana. A very well-balanced practice that moves quickly, we recommend a solid understanding of the sun salutations and most standing asanas and a hearty appetite for a challenging, systematic practice. 1hr 45 minutes.</p>"}, {title: "Prenatal Yoga (Level 1)", description: "<p>Pregnancy creates a lot of challenges for the body and prenatal yoga can help you feel more fit, comfortable and relaxed during pregnancy.  Revolver prenatal yoga focuses on breathing, deep focus, and safe sequences which can help work out the daily kinks as well as ease labor and delivery. Yoga can also help you improve sleep, reduce stress, and create a mommy community during and after pregnancy.</p> <p>This class is taught in six-week sessions. If you or a friend are interested in prenatal yoga, please email info@revolveryoga.com to let us know!</p>"}, {title: "Gentle Yoga (Level 1)", description: "<p>Designed for those with orthopedic injuries (old or new) who need less intensity and more specific stretchy and gentle strengthening goodness! This easy to follow class provides plenty of time for modifications making postures accessible and a great choice for seniors, pregnant women or anyone looking to develop a yoga practice in a slower, supported way. May include breath work and guided meditation. 60 minutes.</p>"} ];
    
    // two-dimensional content swapping
    var $expandBtn = $('.state-indicator');
    var $loading = $('.loading-logo');

    //mobile nav
    var $menuBtn = $('.menu-btn');
    var $menu = $('nav ul');
    var $darkFilter = $('.dark-filter');
    var $links = $('nav ul a');



    function spinLogo(){
      $logo.addClass('addSpin');
      setTimeout(function(){
         $logo.removeClass('addSpin');
     },1000);
  }

  // one-dimensional swapping
  function replaceInstructor(index){

        // object 
        var name = instructorObj[index].name;
        var title = instructorObj[index].title;
        var past = instructorObj[index].past;
        var quote = instructorObj[index].quote;
        var info = instructorObj[index].info;
        var img = instructorObj[index].img;
        //selections that determine where the instructor content goes
        var $contentName = $('.swap-body figure h2');
        var $contentTitle = $('.swap-body figure h3');
        var $contentPast = $('.instructor-past');
        var $contentQuote = $('.instructor-quote');
        var $contentInfo = $('.instructor-body');
        var $contentImg = $('.swap-body figure img');
        $contentName.html(name);
        $contentTitle.html(title);
        $contentPast.html(past);
        $contentQuote.html(quote);
        $contentInfo.html(info);
        $contentImg.attr('src',img);

    }

    // one-dimensional swapping (new students)
    function replaceNewStudent(index){
        // object 
        var categoryTitle = newStudentObj[index].title;
        var bodyText = newStudentObj[index].bodyText;
        //selections that determine where the instructor content goes
        var $nsTitle = $('.category-title');
        var $nsBody = $('.new-student-body');
        $nsTitle.html(categoryTitle);
        $nsBody.html(bodyText);

    }

    function replaceContent(index, section){
        if (section === "instructors"){ replaceInstructor(index); }
        if (section === "new-students"){ replaceNewStudent(index); }
    }

    function replaceAcdContent(index, title, body){
       title.html(classes[index].title);
       body.html(classes[index].description);
   }

   function changeAcdContent(contentSelection, target){
    $loading = $(contentSelection).find('.loading-logo');
    var title = $(contentSelection).find('h2');
    var body = $(contentSelection).find('.class-description');
    var btn = $(contentSelection).find('.sign-up-btn');
    var contentHeight = contentSelection.innerHeight();

        //index for object
        var index;

        //for remaining links...
        if(target === "a1"){ index = 0;}
        if(target === "a2"){ index = 1;}
        if(target === "a3"){ index = 2;}
        if(target === "a4"){ index = 3;}
        if(target === "a5"){ index = 4;}

        if(target === "b1"){ index = 5;}
        if(target === "b2"){ index = 6;}
        if(target === "b3"){ index = 7;}
        if(target === "b4"){ index = 8;}
        if(target === "b5"){ index = 9;}
        if(target === "b6"){ index = 10;}

        if(target === "c1"){ index = null;}

        contentSelection.animate({'height':'100px'});
        title.css('opacity','0');
        body.css('opacity','0');
        btn.css('opacity','0');
        $loading.toggleClass('display-loading');
        $loading.css({'opacity': 0.8});
        $loading.addClass('addSpinInf');

        setTimeout(function(){
          if (index === null){
            // don't change content
        } else{
            replaceAcdContent(index, title, body);
        }
        contentHeight = title.innerHeight() + body.innerHeight();
        return contentHeight;
    },400);

        setTimeout(function(){
            $loading.css({'opacity': 0});
            $loading.toggleClass('display-loading');
            $loading.removeClass('addSpinInf');
        },1500);
        setTimeout(function(){
            contentHeight = title.innerHeight() + body.innerHeight();
            contentSelection.animate({'height':(contentHeight+100)+"px"});
            title.css('opacity','1');
            body.css('opacity','1');
            btn.css('opacity','1');
        },2000);
    }

	//fade in content
	setTimeout(function(){
		$content.css("opacity", 1);
	},100);


    if (windowWidth < 600){
        $('.sign-up-btn').click(function(event) {
            event.preventDefault();
            var redirect = "https://clients.mindbodyonline.com/classic/home?studioid=43881";
            document.location.href = redirect;
        });
    }

	// prevent default link behavior
	$("nav a").click(function(e) {
		var redirect = $(this).attr("href");
		var $previousActive = $('nav').find('.active-nav-link');

        if(redirect === "schedule.html" || redirect === "sign-up.html") {
            console.log (windowWidth);
            if (windowWidth < 600){
                redirect = "https://clients.mindbodyonline.com/classic/home?studioid=43881";
            }
        }

        e.preventDefault();

        // if active, don't do anything...if not active, change the page and spin da logo
        if ($(this).hasClass('active-nav-link')){
        	//console.log('already active');
        } else {
        	//console.log('new page');
        	spinLogo();
        	$content.css("opacity", 0);
        	$previousActive.removeClass('active-nav-link');
        	$(this).not( ".homeLink, .std-btn, .social-icon" ).addClass('active-nav-link');
        	setTimeout(function(){
        		document.location.href = redirect;
        	},1200);
        }
    });

	$(".sign-up-btn").click(function(e) {
		e.preventDefault();
		var redirect = $(this).attr("href");
		spinLogo();
		$content.css("opacity", 0);
		setTimeout(function(){
			document.location.href = redirect;
		},1200);
	});

    $plugPic.css('left', (boxWidth - picWidth)/2 + "px" );
    $profileRing.css('left', ((boxWidth - picWidth)/2)-3 + "px" );
    $plugBtn.click(function() {
        if( $plugInfo.hasClass('active-plug') ){
            $plugInfo.toggleClass('active-plug');
            $plugPic.toggleClass('scale-pic');
            $profileRing.toggleClass('add-border');
            setTimeout(function(){
                $plugInfo.toggleClass('display');
                $plugInfo.toggleClass('slide-up');
            },300);
        }else{
            $plugInfo.toggleClass('slide-up');
            $plugInfo.toggleClass('active-plug');
            $plugInfo.toggleClass('display');
            setTimeout(function(){
                $plugPic.toggleClass('scale-pic');
            },800);
            setTimeout(function(){
                $profileRing.toggleClass('add-border');
            },1500);
        } //end else
    });

    $exitBtn.click(function() {
        $plugInfo.toggleClass('active-plug');
        $plugPic.toggleClass('scale-pic');
        $profileRing.toggleClass('add-border');
        setTimeout(function(){
            $plugInfo.toggleClass('display');
            $plugInfo.toggleClass('slide-up');
        },300);

    });

    $(".content-swap li").click(function() {
    	var $selectedItem = $(this);
    	var sectionName;
    	var index;
        var newStudentSection;
        var nsActive;

        if ( $selectedItem.parent('ul').parent().hasClass('new-student-list') ){
            console.log( "this is the new student section");
            nsActive = $selectedItem.parent().find('.active-section');
            newStudentSection = true;
        }

        if ($('.content-swap').hasClass( 'new-student-list' )){ sectionName = "new-students"; }
        if ($('.content-swap').hasClass( 'instructor-list' )){ sectionName = "instructors"; }

        if ($selectedItem.hasClass( 'courtney' )){ index = 0; }
        if ($selectedItem.hasClass( 'chrissy' )){ index = 1; }
        if ($selectedItem.hasClass( 'tara' )){ index = 2; }
        if ($selectedItem.hasClass( 'robin' )){ index = 3; }
        if ($selectedItem.hasClass( 'kay' )){ index = 4; }
        

        if ($selectedItem.hasClass( 'guidelines-link' )){ index = 0; }
        if ($selectedItem.hasClass( 'f-c-link' )){ index = 1; }
        if ($selectedItem.hasClass( 'c-e-link' )){ index = 2; }
        if ($selectedItem.hasClass( 'n-s-s-link' )){ index = 3; }

        // if the link is already acitve, do nothing
        if ( $selectedItem.find('.ring').hasClass( 'active-swap-icon' ) || $selectedItem.find('.category').hasClass( 'active-section' )){

          //console.log('already active');

      } else {

        var $alreadyActive;

            // instructors
            if( $selectedItem.hasClass( 'instructor-item' ) ){
                console.log('new instructor');
                $alreadyActive = $(".content-swap").find('.ring');
                $alreadyActive.removeClass('active-swap-icon');
                $selectedItem.find('.ring').addClass('active-swap-icon');
            // new students
        } else {
            $alreadyActive = $(".content-swap").find('.active-section');
            $alreadyActive.removeClass('active-section');
            $selectedItem.find('.category').addClass('active-section');
        }

        $swapContent.css('opacity',0);
        spinLogo();

		//wait for content to fade
		setTimeout(function(){
			//console.log(instructorName);
			replaceContent(index, sectionName);
		},400);
		//fade in new content
		setTimeout(function(){
			$swapContent.css('opacity',1);
		},450);
    }
});


// two-dimensional content swapping

	$( '#accordion' ).find( '.acc-category li' ).click( function(){//e ){ //Click function to toggle extending lists


		var $parentDiv = $( this ).parents('li').find('.acc-category');
		var target = $( this ).attr('target');
		var contentSelection = $( this ).parents('li').find('.class-content');

		if ($parentDiv.hasClass( 'active-category' )){
			//console.log('already active');

			var $activeClass= $( this ).siblings('.active-class');

			if( $( this ).hasClass( 'active-class' )) {
				// do nothing
			} else{
				//console.log(target);
				$activeClass.removeClass('active-class');
				changeAcdContent(contentSelection,target);
				$( this ).addClass('active-class');

			}

		} else {
			changeAcdContent(contentSelection,target);
			$parentDiv.addClass( 'active-category' );
			$( this ).addClass('active-class');
			$( this ).parents('li').find('.class-content').slideToggle( 'slow' );
			$parentDiv.find($expandBtn).addClass('toggle-indicator');

		}
	});

	$expandBtn.click(function(){
       var $parent = $(this).parents('li');
       var contentSelection = $parent.find('.class-content');

       if($(this).hasClass('toggle-indicator')){

          $(this).removeClass('toggle-indicator');
          $(this).parents('li').find('.active-class').removeClass( 'active-class' );
          $(this).parents('li').find('.active-category').removeClass( 'active-category' );
          $parent.find('.class-content').slideToggle( 'slow' );

      }else{

        var $activeLi = $parent.find('ul.row').find('li').first();
        $parent.find('.acc-category').addClass('active-category');
        $parent.find('.class-content').slideToggle( 'slow' );
        $(this).addClass('toggle-indicator');
        var target = $activeLi.attr('target');
        changeAcdContent(contentSelection,target);
        $parent.find('ul.row').find('li').first().addClass('active-class');
    }
});

	$( '#accordion > li' ).each( function( ){ //Function initially hide lists with the override class of "extended"
		if ( !$( this ).hasClass( 'extended' ) ){
			$( this ).find( '.class-content' ).slideUp( 0 );
	        $( this ).toggleClass( 'collapse' ); //Add a class for styling
	    }
	});

    //mobile nav

    var mobileView;
    if (windowWidth < 800){ mobileView = true;} else {mobileView = false;}

    $( window ).resize(function() {
        var $menu = $('nav ul');
        var $darkFilter = $('.dark-filter');
        var windowWidth = $( window ).width();
        var slideMenu = (function() {
            var executed = false;
            return function () {
                if (!executed) {
                    executed = true;
                    $menu.slideUp(0);
        }
    };
})();

        //mobile nav
        if ( windowWidth < 800 ) {
            $menu.slideUp(0);
            
        } else{
            $menu.slideDown(0);
            $darkFilter.removeClass('active-filter');
        }
        return mobileView;
    });


    if ( mobileView) {

        $menu.slideUp(0);
        $links.click(function() {
            setTimeout(function(){
                $menu.slideUp(500);
            },500);
        });

        $menuBtn.click(function() {
            $menu.slideToggle(500);
            setTimeout(function(){
                $darkFilter.toggleClass('active-filter');
            },500);
        });
    } else{
        //$signUpBtn.css('display','none');
    }
    //mobile nav
    

    if ( mobileView ){
        $('.sign-up-btn').click(function(event) {
            event.preventDefault();
            var redirect = "https://clients.mindbodyonline.com/classic/home?studioid=43881";
            document.location.href = redirect;
        });
    }


    // $links.click(function() {
    //     setTimeout(function(){
    //         $menu.slideUp(500);
    //     },500);
    // });

    // $menuBtn.click(function() {
    //     $menu.slideToggle(500);
    //     setTimeout(function(){
    //         $darkFilter.toggleClass('active-filter');
    //     },500);
    // });
    

});

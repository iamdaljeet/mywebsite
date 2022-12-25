        // Get the button
        let mybutton = document.getElementById("myBtn");
        
        // When the user scrolls down 400px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
          if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }
        
        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }


        // Another method

        function scrollHorizontally(e) {
          e = window.event || e;
          var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
          var scrollSpeed = 5; // Janky jank <<<<<<<<<<<<<<
          const div01 =document.getElementById("scrollable")
          // document.documentElement.scrollLeft -= (delta * scrollSpeed);
          div01.scrollLeft -= (delta * scrollSpeed);
          e.preventDefault();
        }
        
        if (window.addEventListener) {
          // IE9, Chrome, Safari, Opera
          window.addEventListener("mousewheel", scrollHorizontally, false);
          // Firefox
          window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
        } else {
          // IE 6/7/8
          window.attachEvent("onmousewheel", scrollHorizontally);
        }







        //---------------------------------------------------------------------------------------------//

        ScrollReveal().reveal('.header',{ distance: '20px', delay:'200',origin:'top',duration: '1000'} );
        ScrollReveal().reveal('.always',{ distance: '20px', delay:'200',origin:'left',duration: '1000'} );
        ScrollReveal().reveal('.bu',{ distance: '20px', delay:'200',origin:'right',duration: '1000'} );
        ScrollReveal().reveal('.mainline',{ distance: '20px', delay:'200',origin:'left',duration: '1000'} );
        ScrollReveal().reveal('.wanttext',{ distance: '20px', delay:'200',origin:'left',duration: '1000'} );
        ScrollReveal().reveal('.scrolltext',{ distance: '20px', delay:'200',origin:'top',duration: '1000'} );

        ScrollReveal().reveal('#workboxes-a',{ distance: '20px', delay:'200',origin:'left',duration: '1000'} );
        ScrollReveal().reveal('#workboxes-b',{ distance: '20px', delay:'200',origin:'right',duration: '1000'} );
        ScrollReveal().reveal('.workhead',{ distance: '10px', delay:'200',origin:'bottom',duration: '1000'} );
        ScrollReveal().reveal('.worksubhead',{ distance: '10px', delay:'200',origin:'bottom',duration: '1000'} );
        ScrollReveal().reveal('.workline',{ distance: '10px', delay:'200',origin:'bottom',duration: '1000'} );
        
        ScrollReveal().reveal('.teambg',{ distance: '20px', delay:'200',origin:'bottom',duration: '1000'});
        ScrollReveal().reveal('#memberinfo-a',{ distance: '20px', delay:'200',origin:'left',duration: '1000'} );
        ScrollReveal().reveal('#memberhandle-a',{ distance: '20px', delay:'200',origin:'right',duration: '1000'} );
        ScrollReveal().reveal('#memberinfo-b',{ distance: '20px', delay:'200',origin:'right',duration: '1000'} );
        ScrollReveal().reveal('#memberhandle-b',{ distance: '20px', delay:'200',origin:'left',duration: '1000'} );

        ScrollReveal().reveal('.abouthead',{ distance: '20px', delay:'300',origin:'bottom',duration: '1000'});
        ScrollReveal().reveal('.aboutpara', { distance: '20px', delay:'300',origin:'top',duration: '1000'});
        ScrollReveal().reveal('.workprogress',{ distance: '20px', delay:'200',origin:'bottom',duration: '1000'});

        ScrollReveal().reveal('.contactheadandline', { delay: '500' });
        ScrollReveal().reveal('.contact-form',{ distance: '20px', delay:'300',origin:'left',duration: '1000'} );
        ScrollReveal().reveal('.contact-info',{ distance: '20px', delay:'300',origin:'right',duration: '1000'} );

        ScrollReveal().reveal('.line',{ distance: '40px', delay:'100',origin:'left',duration: '1000'} );
        ScrollReveal().reveal('.lineb',{ distance: '40px', delay:'100',origin:'right',duration: '1000'} );
        ScrollReveal().reveal('.vline',{ distance: '40px', delay:'200',origin:'bottom',duration: '1000'});
        ScrollReveal().reveal('.copy',{ distance: '40px', delay:'200',origin:'bottom',duration: '1000'});


        //-----------------------------------------
        let $ = (e) => document.querySelector(e);

        let dots = $(".dots");

  
        function animate(element, className) {
          element.classList.add(className);
          setTimeout(() => {
            element.classList.remove(className);
            setTimeout(() => {
              animate(element, className);
            }, 500);
          }, 2500);
        }

        animate(dots, "dots--animate");

      

        //--------------------------
        var a = 0;

    function mouseOver(){
        
        const name = document.forms['suForm']['name'].value;
        const email = document.forms['suForm']['email'].value;
        const msg = document.forms['suForm']['msg'].value;

        const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



        if((name == "" || !email.match(emailCheck) || msg == "") && a==0){
        buttonMoveLeft();
        a = 1;
        return false;
        } 

        if((name == "" || !email.match(emailCheck) || msg == "") && a==1){
        buttonMoveRight();
        a = 2;
        return false;
        } 

        if((name == "" || !email.match(emailCheck) || msg == "") && a==2){
        buttonMoveLeft();
        a = 1;
        return false;
        } 

        else{

            // document.getElementById('submit-btn').click();  
            document.getElementById('send').style.cursor = 'pointer';
            return false;
        };

    };


    

    function buttonMoveLeft(){

        const button = document.getElementById('send');
        button.style.transform = 'translateX(190%)';

    };


    function buttonMoveRight(){

        const button = document.getElementById('send');
        button.style.transform = 'translateX(0%)';

    };


    function resetBtn(){
        const button = document.getElementById('send');
        button.style.transform = 'translateX(0%)';
    };
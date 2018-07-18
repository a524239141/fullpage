$(function(){
    // 页面动态效果
    $('.sec01Box').find('h1').fadeIn(2000);
    $('.sec01Box').find('h2').fadeIn(2500);
    $('.sec01Box').find('p').fadeIn(3000);
    $('.sec01Box').find('span').delay(2000).animate({
        width:'300px'
    },1500);

 

   
    $('#indexs').fullpage({

    'navigation':true,     //导航条
    
    //全局页面效果
    afterLoad:function(anchorLink,index){
        if(index==1){
           
            $('.sec01Box').find('h1').fadeIn(2000);
            $('.sec01Box').find('h2').fadeIn(3000);
            $('.sec01Box').find('p').fadeIn(4000);
            $('.sec01Box').find('span').delay(2000).animate({
                width:'300px'
            },1500);
            $('.sec01-1Box').find('.sec01-1H1').fadeIn(4000);                        
            $('.sec01-1Box').find('.sec01-1H2').fadeIn(2000);            
            $('.sec01-1Box').find('.sec01-1P').fadeIn(3000);
            $('.sec01-1Box').find('.sec01-1Span1').delay(1000).animate({
                top:'0%'
            },1500);
            $('.sec01-1Box').find('.sec01-1Span2').delay(1000).animate({
                right:'-20%'
            },1500);
        }
        if(index==2){
            $('#sec02').find('.sec02_heading').delay(3000).animate({
                left:'10%'
            },1500);
            $('.sec02_content').find('.sec02_ctt1_img1').delay(1000).animate({
                top:'-33%'
            },1800,function(){
                $(this).transition({
                    perspective: '500px',
                    rotateY: 720,
                },1500)
            });
            $('.sec02_content').find('.sec02_ctt1_img2').delay(1500).animate({
                top:'-33%'
            },2100,function(){
                $(this).transition({
                    perspective: '500px',
                    rotateY: 720,
                },1500)
            });
            $('.sec02_content').find('.sec02_ctt1_img3').delay(2000).animate({
                top:'-33%'
            },2400,function(){
                $(this).transition({
                    perspective: '500px',
                    rotateY: 720,
                },1500)
            });
            $('.sec02_content').find('.sec02_ctt1_img4').delay(2500).animate({
                top:'-33%'
            },2700,function(){
                $(this).transition({
                    perspective: '500px',
                    rotateY: 720,
                },1500)
            });
            $('.sec02_content').find('.sec02_ctt1_h1').fadeIn(8000);
            $('.sec02_content').find('.sec02_ctt1_h21').delay(1000).animate({
                bottom:'75%'
            },1500);

          

            $('.sec02_content').find('.sec02_ctt1_h21').delay(1500).animate({
                bottom:'75%'
            },1000);
            $('.sec02_content').find('.sec02_ctt1_h22').delay(2100).animate({
                bottom:'75%'
            },1000);
            $('.sec02_content').find('.sec02_ctt1_h23').delay(2700).animate({
                bottom:'75%'
            },1000);
            $('.sec02_content').find('.sec02_ctt1_h24').delay(3300).animate({
                bottom:'75%'
            },1000);
        
            $('.sec02_content').find('.sec02_ctt1_h31').delay(2500).animate({
                bottom:'65%'
            },1000);
            $('.sec02_content').find('.sec02_ctt1_h32').delay(3300).animate({
                bottom:'65%'
            },1000);
            $('.sec02_content').find('.sec02_ctt1_h33').delay(4100).animate({
                bottom:'65%'
            },1000);
            $('.sec02_content').find('.sec02_ctt1_h34').delay(4900).animate({
                bottom:'65%'
            },1000);
        
            $('#sec02').find('.sec02_more_left').delay(5000).animate({
                left:'0%'
            },1000);
            $('#sec02').find('.sec02_more_right').delay(5000).animate({
                right:'0%'
            },1000);
            $('.sec02_more').find('h2').delay(6000).fadeIn(2000);
        }
        if(index==3){
            $(".tagline").letterfx({"fx":"fly-right fly-bottom spin"});
            $('.sec03_hade').find('span').delay(1000).fadeIn(3000);   
        }

        if(index==4){
            $('.sec04_case').delay(200).animate({
                left:'0'
            },800);

            $('.sec04_img1').delay(200).transition({
                    rotateY:'360',
                    bottom:'103%'
            },1500);
            $('.sec04_img2').delay(800).transition({
                    rotateY:'360',
                    bottom:'103%'                                      
            },1500);
            $('.sec04_img3').delay(1400).transition({
                    rotateY:'360',
                    bottom:'50%'  
            },1500);
            $('.sec04_img4').delay(1800).transition({
                    rotateY:'360',
                    bottom:'50%'                                                                             
            },1500);
    
           $('.sec04_case_right1').delay('700').animate({
            left: "45%"
            },1500);
            $('.sec04_case_right2').delay('1200').animate({
            left: "45%"
            },1500);
            $('.sec04_case_right3').delay('1700').animate({
                left: "45%"
            },1500);
           $('.sec04_case_left1').delay('1000').animate({
                left: "33%"
           },1500);
           $('.sec04_case_left2').delay('1500').animate({
            left: "33%"
            },1500);
            $('.sec04_case_left3').delay('2000').animate({
                left: "33%"
            },1500);
            $('.sec04_header').delay(3800).fadeIn(1500);
        
            $('.a1').delay(4300).transition({
                rotateY:'360'        
            },1500);
            
            $('.a2').delay(4500).transition({
                rotateY:'360'        
            },1500);
        };
        if(index==5){
            $('#sec05').find('.sec05_string').delay(500).animate({
                top:'26%',
            },1000);
            $('#sec05').find('.sec05_circle').delay(1500).fadeIn(2000);
            $('#sec05').find('.sec05_int').delay(2500).fadeIn(2000);
            $('.sec05_new').delay(2500).fadeIn(2000);
          
            $('.sec05_left_img1').find('img').delay(500).transition({
                rotateX:-360,
                x:900
            },2000);
            $('.sec05_left_img2').find('img').delay(500).transition({
                rotateX:360,
                x:900
            },2000);
            $('#sec05').find('.sec05_news1').delay(500).transition({
                rotateX:360,
                x:-950
            },2000);
            $('#sec05').find('.sec05_news2').delay(500).transition({
                rotateX:360,
                x:-950
            },2000);
            $('#sec05').find('.sec05_news3').delay(500).transition({
                rotateX:360,
                x:-950
            },2000);
            $('#sec05').find('.sec05_news4').delay(500).transition({
                rotateX:360,
                x:-950
            },2000);
            $('#sec05').find('.sec05_news5').delay(500).transition({
                rotateX:360,
                x:-950
            },2000);

        }
        if(index==6){
            $(".tagline").letterfx({"fx":"fall","words":true,"timing":500});
            $('#sec06').find('.sec06_box').fadeIn(4000);
        }
    },
    onLeave:function(index,direction,nextIdex){
        if(index==1){
            $('.sec01Box').find('h1').fadeOut(100);
            $('.sec01Box').find('h2').fadeOut(100);
            $('.sec01Box').find('p').fadeOut(100);  
            $('.sec01Box').find('span').animate({
                width:'0px'
            },100);

            $('.sec01-1Box').find('.sec01-1Span1').animate({
                top:'300%'
            },100);
            $('.sec01-1Box').find('.sec01-1Span2').animate({
                right:'-220%'
            },100) ;
            $('.sec01-1Box').find('.sec01-1H1').fadeOut(1000);                        
            $('.sec01-1Box').find('.sec01-1H2').fadeOut(1000);            
            $('.sec01-1Box').find('.sec01-1P').fadeOut(1000); 
        }
        if(index==2){
            $('#sec02').find('.sec02_heading').animate({
                left:'-30%'
            },200);
            $('.sec02_content').find('.sec02_ctt1_img1').animate({
                top:'-333%'
            },200,function(){
                $(this).transition({
                    perspective: '500px',
                    rotateY: 0,
                },200)
            });
            $('.sec02_content').find('.sec02_ctt1_img2').animate({
                top:'-333%'
            },200,function(){
                $(this).transition({
                    perspective: '500px',
                    rotateY: 0,
                },200)
            });
            $('.sec02_content').find('.sec02_ctt1_img3').animate({
                top:'-333%'
            },200,function(){
                $(this).transition({
                    perspective: '500px',
                    rotateY: 0,
                },200)
            });
            $('.sec02_content').find('.sec02_ctt1_img4').delay(100).animate({
                top:'-333%'
            },200,function(){
                $(this).transition({
                    perspective: '500px',
                    rotateY: 0,
                },200)
            });


            $('.sec02_content').find('.sec02_ctt1_h1').fadeOut(200);

            $('.sec02_content').find('.sec02_ctt1_h21').animate({
                bottom:'-75%'
            },200);
            $('.sec02_content').find('.sec02_ctt1_h22').animate({
                bottom:'-75%'
            },200);
            $('.sec02_content').find('.sec02_ctt1_h23').animate({
                bottom:'-75%'
            },200);
            $('.sec02_content').find('.sec02_ctt1_h24').animate({
                bottom:'-75%'
            },200);
        
            $('.sec02_content').find('.sec02_ctt1_h31').animate({
                bottom:'-65%'
            },200);
            $('.sec02_content').find('.sec02_ctt1_h32').animate({
                bottom:'-65%'
            },200);
            $('.sec02_content').find('.sec02_ctt1_h33').animate({
                bottom:'-65%'
            },200);
            $('.sec02_content').find('.sec02_ctt1_h34').animate({
                bottom:'-65%'
            },200);
        
            $('#sec02').find('.sec02_more_left').animate({
                left:'-600%'
            },200);
            $('#sec02').find('.sec02_more_right').animate({
                right:'-600%'
            },200);
            $('.sec02_more').find('h2').fadeOut(200);
        }

        if(index==3){
           $('.sec03_hade').find('span').delay(200).fadeOut(200);
           $(".tagline").letterfx({"fx":"fly-right fly-bottom spin","backwards":true,"letter_end":"stay"});
        
        }
        if(index==4){
            $('.sec04_case').delay('100').animate({
                left:'-50%'
            },200);


            $('.sec04_img1').transition({
                rotateY:'0',
                bottom:'-95%'    
            },200);
            $('.sec04_img2').transition({
                rotateY:'0',
                bottom:'-95%'    
            },200);
            $('.sec04_img3').transition({
                rotateY:'0',
                bottom:'-55%'    
            },200);
            $('.sec04_img4').transition({
                rotateY:'0',
                bottom:'-55%'                                                                
            },200);


           $('.sec04_case_right1').animate({
                left: "-50%"
            },200);
            $('.sec04_case_right2').animate({
                 left: "-50%"
            },200);
            $('.sec04_case_right3').animate({
                left: "-50%"
            },200);
           $('.sec04_case_left1').animate({
                left: "-35%"
           },200);
           $('.sec04_case_left2').animate({
                left: "-35%"
            },200);
            $('.sec04_case_left3').animate({
                left: "-35%"
            },200);
            $('.sec04_header').fadeOut(200);
        
            $('.a1').transition({
                rotateY:'0'        
            },200);
            
            $('.a2').transition({
                rotateY:'0'        
            },200);
        }
        if(index==5){
            $('#sec05').find('.sec05_string').animate({
                top:'-66%',
            },200);
            $('#sec05').find('.sec05_circle').fadeOut(200);
            $('#sec05').find('.sec05_int').fadeOut(200);
            $('.sec05_new').fadeOut(200);
          
            $('.sec05_left_img1').find('img').transition({
                rotateX:0,
                x:-950
            },200);
            $('.sec05_left_img2').find('img').transition({
                rotateX:0,
                x:-950
            },200);
            $('#sec05').find('.sec05_news1').transition({
                rotateX:0,
                x:950
            },200);
            $('#sec05').find('.sec05_news2').transition({
                rotateX:0,
                x:950
            },200);
            $('#sec05').find('.sec05_news3').transition({
                rotateX:0,
                x:950
            },200);
            $('#sec05').find('.sec05_news4').transition({
                rotateX:0,
                x:950
            },200);
            $('#sec05').find('.sec05_news5').transition({
                rotateX:0,
                x:950
            },200);
          
          
        }
        
        if(index==6){
            $(".tagline").letterfx({"fx":"fly-right fly-bottom spin","backwards":true,"letter_end":"stay"});
            $('#sec06').find('.sec06_box').fadeOut(200);
        }
    },
    
    
    
    
    
    
    //第一页分屏面动态效果
    afterSlideLoad:function(anchorLink,index,slideIndex){
        if(index==1&&slideIndex==0){
            console.log(1);
            $('.sec01Box').find('h1').fadeIn(2000);
            $('.sec01Box').find('h2').fadeIn(3000);
            $('.sec01Box').find('p').fadeIn(4000);
            $('.sec01Box').find('span').delay(2000).animate({
                width:'300px'
            },1500);
        }
        if(index==1&&slideIndex==1){
            $('.sec01-1Box').find('.sec01-1H1').fadeIn(4000);                        
            $('.sec01-1Box').find('.sec01-1H2').fadeIn(2000);            
            $('.sec01-1Box').find('.sec01-1P').fadeIn(3000);
            $('.sec01-1Box').find('.sec01-1Span1').delay(1000).animate({
                top:'0%'
            },1500);
            $('.sec01-1Box').find('.sec01-1Span2').delay(1000).animate({
                right:'-20%'
            },1500)
        }
    },

    onSlideLeave:function(anchorLink,index,slideIndex){
        if(index==1&&slideIndex==0){
            console.log(1);
            $('.sec01Box').find('h1').fadeOut(1000);
            $('.sec01Box').find('h2').fadeOut(1000);
            $('.sec01Box').find('p').fadeOut(1000);  
            $('.sec01Box').find('span').delay(200).animate({
                width:'0px'
            },100);
            
        }
        if(index==1&&slideIndex==1){
            $('.sec01-1Box').find('.sec01-1Span1').delay(100).animate({
                top:'300%'
            },100);
            $('.sec01-1Box').find('.sec01-1Span2').delay(100).animate({
                right:'-220%'
            },100);
            $('.sec01-1Box').find('.sec01-1H1').fadeOut(1000);                        
            $('.sec01-1Box').find('.sec01-1H2').fadeOut(1000);            
            $('.sec01-1Box').find('.sec01-1P').fadeOut(1000); 
        }
    },

});})

//自动滚动
setInterval(function(){
    $.fn.fullpage.moveSlideRight();
}, 5000);





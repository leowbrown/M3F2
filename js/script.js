$(document).ready(function(){
    
    
    // nav items
    const navBtn = $('#navBtn');
    const navCon = $('.nav-container');
    const ourWorkFormCon = $('.ourWork-form-con');

    
    // btns
    const ourWorkBtn = $('#ourWork');
    const homePageBtn = $('#homePage');
    const homeCtaBtn = $('#homeCta');
    const formBtn = $('#formBtn');
    
    // pages
    const ourWork = $('#ourWork-container');
    const homePage = $('#home-container');

    // defaults

    homePageBtn.hide();

    // ourWork.show();
    // homePage.hide();
    // open - close nav

    $('#navBtn').click(function(){
        navCon.toggleClass('nav-open', 300, 'swing');
        navBtn.toggleClass('nav-active-btn', 300, 'swing');
    });

    // transition to "Our Work Page"

  

    ourWorkBtn.click(function(){
        navCon.toggleClass('nav-open', 300, 'swing');
        navBtn.toggleClass('nav-active-btn', 300, 'swing');
        homePage.hide(300, 'swing');
        ourWork.show(300, 'swing');
        ourWorkBtn.hide(300, 'swing');
        homePageBtn.show(300, 'swing');

    });
    
    homeCtaBtn.click(function(){
        homePage.hide(300, 'swing');
        ourWork.show(300, 'swing');
        ourWorkBtn.hide(300, 'swing');
        homePageBtn.show(300, 'swing');

    });
        
    homePageBtn.click(function(){
        navCon.toggleClass('nav-open', 300, 'swing');
        navBtn.toggleClass('nav-active-btn', 300, 'swing');
        homePage.show(300, 'swing');
        ourWork.hide(300, 'swing');
        homePageBtn.hide(300, 'swing');
        ourWorkBtn.show(300, 'swing');
    })

    // opening form/nav

    formBtn.click(function(){
        ourWorkFormCon.toggleClass('form-con-active', 600, 'swing');
        formBtn.toggleClass('form-btn-active', 300, 'swing');
    })

   
    
});
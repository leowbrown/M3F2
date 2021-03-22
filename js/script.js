$(document).ready(function(){
    
    
    // nav items
    const navBtn = $('#navBtn');
    const navCon = $('.nav-container');
    const shareWorkFormCon = $('.shareWork-form-con');

    
    // btns
    const shareWorkBtn = $('#shareWork');
    const homePageBtn = $('#homePage');
    const homeCtaBtn = $('#homeCta');
    const formBtn = $('#formBtn');
    
    // pages
    const shareWork = $('#shareWork-container');
    const homePage = $('#home-container');

    // defaults

    homePageBtn.hide();
    shareWork.hide();
    // homePage.hide();
    // open - close nav

    $('#navBtn').click(function(){
        navCon.toggleClass('nav-open', 300, 'swing');
        navBtn.toggleClass('nav-active-btn', 300, 'swing');
    });

    // transition to "Our Work Page"

  

    shareWorkBtn.click(function(){
        navCon.toggleClass('nav-open', 300, 'swing');
        navBtn.toggleClass('nav-active-btn', 300, 'swing');
        homePage.hide(300, 'swing');
        shareWork.show(300, 'swing');
        shareWorkBtn.hide(300, 'swing');
        homePageBtn.show(300, 'swing');

    });
    
    homeCtaBtn.click(function(){
        homePage.hide(300, 'swing');
        shareWork.hide(300, 'swing');
        shareWorkBtn.hide(300, 'swing');
        homePageBtn.show(300, 'swing');

    });
        
    homePageBtn.click(function(){
        navCon.toggleClass('nav-open', 300, 'swing');
        navBtn.toggleClass('nav-active-btn', 300, 'swing');
        homePage.show(300, 'swing');
        shareWork.hide(300, 'swing');
        homePageBtn.hide(300, 'swing');
        shareWorkBtn.show(300, 'swing');
    })

    // opening form/nav

    formBtn.click(function(){
        shareWorkFormCon.toggleClass('form-con-active', 600, 'swing');
        formBtn.toggleClass('form-btn-active', 300, 'swing');
    })

   
    
});
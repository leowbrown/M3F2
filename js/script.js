$(document).ready(function(){
    
    
    // nav items
    const navBtn = $('#navBtn');
    const navCon = $('.nav-container');
    const navList = $('.nav-list-con');
    const shareWorkFormCon = $('.shareWork-form-con');

    
    // btns
    const shareWorkBtn = $('#shareWork');
    const homePageBtn = $('#homePage');
    const homeCtaBtn = $('#loggedin-cta');
    const formBtn = $('#formBtn');
    const signupPrompt = $('.signup-prompt');
    const loginPrompt = $('.login-prompt');
    const loginSignup = $('#loginSignup');
    const loginCancel = $('.loginCancel');
    const loginCta = $('#homeCta');
    
    // pages
    const shareWork = $('#shareWork-container');
    const homePage = $('#home-container');
    const signUpPage = $('.signup-con');
    const loginPageCon = $('.login-con');
    const loginPage = $('#login-page-con')
    
    // defaults

    loginPage.hide();
    // shareWork.hide();
    // homePage.hide();
    // open - close nav

    $('#navBtn').click(function(){
        navCon.toggleClass('nav-open', 300, 'swing');
        navBtn.toggleClass('nav-active-btn', 300, 'swing');
    });

    // transition to "Our Work Page"
    
    homeCtaBtn.click(function(){
        homePage.hide(300, 'swing');
        shareWork.hide(300, 'swing');
        shareWorkBtn.hide(300, 'swing');
        homePageBtn.show(300, 'swing');

    });

    // opening form/nav

    formBtn.click(function(){
        shareWorkFormCon.toggleClass('form-con-active', 600, 'swing');
        formBtn.toggleClass('form-btn-active', 300, 'swing');
    })

    // signup/login switch

    signupPrompt.click(function(){
        signUpPage.toggleClass('signupActive', 300, 'swing');
        loginPageCon.toggleClass('loginActive', 300, 'swing');
    })

    loginPrompt.click(function(){
        signUpPage.toggleClass('signupActive', 300, 'swing');
        loginPageCon.toggleClass('loginActive', 300, 'swing');
    })

    loginSignup.click(function(){
        loginPage.toggle(300, 'swing');
        navList.toggle(300, 'swing');
    })
    loginCancel.click(function(){
        loginPage.toggle(300, 'swing');
        navList.toggle(300, 'swing');
    })

    loginCta.click(function(){
        navCon.toggleClass('nav-open', 300, 'swing');
        navBtn.toggleClass('nav-active-btn', 300, 'swing');
        loginPage.toggle(300, 'swing');
        navList.toggle(300, 'swing');
    })
});
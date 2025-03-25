function scroll_to(id) {
    $('html, body').animate({
        scrollTop: $("#"+id).offset().top
    }, 1000);
}

var menu_open = false;
function toggle_menu() {
    if (menu_open) {
        $('#header_menu').removeClass("header-menu-open");
        $('#menu_toggler_icon')[0].src = "assets/icons/menu-white.svg";
        menu_open = false;
    }
    else{
        $('#header_menu').addClass("header-menu-open");
        $('#menu_toggler_icon')[0].src = "assets/icons/close-white.svg";
        menu_open = true;
    }
}

var galleryArray = new Array();
function listImages() {
    for (let i = 0; i < $('.gallery-image-item').length; i++) {
        galleryArray.push($('.gallery-image-item')[i].style.backgroundImage.slice(5, -2));
    }
}
listImages();

function show_fullsize(element) {
    $('#gallery_fullsize_container').removeClass("display-none");
    let img_src = element.style.backgroundImage.slice(5, -2);
    $('#gallery_fullsize_img')[0].src = img_src;
    $('body').addClass("prevent-scroll");
}
function close_fullsize_image() {
    $('#gallery_fullsize_container').addClass("display-none");
    $('#gallery_fullsize_img')[0].src = "";
    $('body').removeClass("prevent-scroll");
}
function change_image(direction) {
    let currentImgSrc = $('#gallery_fullsize_img')[0].getAttribute("src");
    let currentImgIndex = galleryArray.indexOf(currentImgSrc);

    if (direction == "next") {
        let nextImg = galleryArray[currentImgIndex+1]
        if (nextImg == undefined) {
            nextImg = galleryArray[0];
        }
        $('#gallery_fullsize_img')[0].src = nextImg;
    }
    else{
        let prevImg = galleryArray[currentImgIndex-1]
        if (prevImg == undefined) {
            prevImg = galleryArray[galleryArray.length - 1]
        }
        $('#gallery_fullsize_img')[0].src = prevImg;
    }
}


$(window).scroll(function() {
    console.log("scroll");
    if ($('#header_menu_placeolder')[0].getBoundingClientRect().top < 0) {
        $('#header_menu').addClass("header-menu-fixed");
    }
    else{
        $('#header_menu').removeClass("header-menu-fixed");
    }
  });
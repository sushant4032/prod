$(document).ready(begin());

function begin() {
    $(".section").hide();
    openSection('summary');
}


function openSection(section) {
    $(".section").hide();
    var k = "#" + section;
    let l = $(k);
    // console.log(l);
    l.slideDown(50);
    $('.section-selector .tab').removeClass('active-tab');
    $('#' + section+'-tab').addClass('active-tab');
}


////////////////////// vanila navigation

// document.querySelector('.menu-icon').addEventListener('click', () => {
//     document.querySelector('.small-menu').classList.toggle('hide');
// })







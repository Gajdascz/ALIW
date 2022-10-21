///////////////////____SMARTMENU NAVBAR____//////////////////////////
/////////////////////////////////////////////////////////////////////
$(document).ready(function() {
    $navList = 'nav.nav_container > ul';
	$('nav.nav_container img').click(function() {
        $($navList).slideToggle();
    }); // end click
}); // end ready



$(document).ready(function() {
    $('.sm').smartmenus(); // end smartmenus
    var menu = "<li id='root'><a href='#'>Recurse</a></li>"
    $('#root').click(function(evt){
        evt.preventDefault();
        $('#ul_root').append(menu);
    }); // end click
  }); // end ready
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////





/////////////____WEEKLY TUTORIALS PAGE____///////////////
/////////////////////////////////////////////////////////
  $(document).ready(function() {
    $('.weekly_tutorials ul li').hide();
    $('.weekly_tutorials ul.current li').show();
    $('.weekly_tutorials h1').click(function() {
        var $tutorials = $(this).nextAll('li');
        if ($tutorials.is(':hidden')) {
            $tutorials.slideDown();
        } else {
            $tutorials.slideUp();
        }
    }); // end click
    $('.weekly_tutorials ul h1').hover(function() {
        $(this).css({'font-size':'35px',
                     'text-decoration':'underline'
                    }); // end mouseOver
    }, function() {
        $(this).css({'font-size': 'default',
                     'text-decoration': 'none'
                    }); // end mouseOff
    });
}); // end ready
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////





//////////////////////____REGISTER____////////////////////
//////////////////////////////////////////////////////////
function processRegisterForm() {
    const form = document.forms['register_form'];
    if(validateName(form) && validateEmail(form)){
        return 1;
    } else {
        return 0;
    }

} // end processRegisterForm
function validateName(form) {
    first_name = form.first_name.value;
    last_name = form.last_name.value;
    if (first_name == '' || !/^[a-z]+$/i.test(first_name)){
        alert("Invalid First Name")
        form.first_name.value = "";
        return 0;
    }
    else if (last_name == '' || !/^[a-z]+$/i.test(last_name)){
        alert("Invalid Last Name")
        form.last_name.value = "";
        return 0;
    } else {
        return 1;
    }
}
function validateEmail(form) {
    email = form.email.value;
    if(email.length == 0){ 
        alert("No Email Detected");
        return 0;
    } else if(!email.includes('@')){
        alert("Invalid Email (No @ symbol detected)");
        form.email.value = "";
        return 0;
    }
    tmp = email.split('@');
    domains = tmp[1].split('.');
    domains.shift();
    counter = 0;
    if(tmp.length > 2) {
        alert("Invalid Email (Multiple @ symbols detected)");
        form.email.value = "";
        return 0;
    } else {
        for (i=0; i < domains.length; i++) {
            if(domains[i] == 'com' || domains[i] == 'org' || domains[i] == 'net') {
                counter += 1;
            }
        }
        if(counter > 1){
            alert("Invalid Email (Multiple Top-Level domains detected)");
            form.email.value = "";
            return 0;
        } else {
            return 1;
        }
    }
}
$(document).ready(function(){
    $('.submit_register').click(function(evt){
        evt.preventDefault();
        if(!processRegisterForm()){
            var inputs = document.getElementsByTagName('input');
            for(i=0; i < inputs.length; i++){
                if(!inputs[i].value){
                    inputs[i].focus();
                    break;
                }
            }
        } else{
            alert("Form Submission Has Been Processed!")
            $('.register_form input').attr('disabled',true).css('background-color', '#D3D3D3');
            $('.register_form input[type="text"][disabled').css('color', 'red');
            $('<h2> Submission Successful! <h2>').appendTo('.register_form');
        }
    }); // end click
}); // end ready
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////









//////////////////////____REGISTER2____///////////////////
//////////////////////////////////////////////////////////
function processRegisterForm2() {
    const form = document.forms['register_form2'];
    if(validateName2(form) && validateEmail2(form)){
        return 1;
    } else {
        return 0;
    }

} // end processRegisterForm2


function validateName2(form) {
    first_name = form.first_name.value;
    last_name = form.last_name.value;
    if (first_name == '' || !/^[a-z]+$/i.test(first_name)){
        alert('Invalid First Name');
        form.first_name.value = "";
        return 0;
    }
    else if (last_name == '' || !/^[a-z]+$/i.test(last_name)){
        alert("Invalid Last Name");
        form.last_name.value = "";
        return 0;
    } else {
        return 1;
    }
}

function validateEmail2(form) {
    email = form.email.value;
    if(email.length == 0){ 
        alert("No Email Detected");
        return 0;
    } else if(!email.includes('@')){
        alert("Invalid Email (No @ symbol detected)");
        form.email.value = "";
        return 0;
    }
    tmp = email.split('@');
    domains = tmp[1].split('.');
    domains.shift();
    counter = 0;
    if(tmp.length > 2) {
        alert("Invalid Email (Multiple @ symbols detected)");
        form.email.value = "";
        return 0;
    } else {
        for (i=0; i < domains.length; i++) {
            if(domains[i] == 'com' || domains[i] == 'org' || domains[i] == 'net') {
                counter += 1;
            }
        }
        if(counter > 1){
            alert("Invalid Email (Multiple Top-Level domains detected)");
            form.email.value = "";
            return 0;
        } else {
            return 1;
        }
    }
}
$(document).ready(function(){
    $('[title').tooltip();
    $('#dob').datepicker({
        changeMonth : true,
		changeYear : true,
		yearRange : '-120:+0',
		maxDate : 0,
		dateFormat : 'mm-dd-yy'
    });
    $('.submit_register2').button({});
    $('.submit_register2').click(function(evt){
        evt.preventDefault();
        if(!processRegisterForm2()){
            var inputs = document.getElementsByTagName('input');
            for(i=0; i < inputs.length; i++){
                if(!inputs[i].value){
                    inputs[i].focus();
                    break;
                }
            }
        } else{
            alert("Form Submission Has Been Processed!")
            $('.register_form input').attr('disabled',true).css('background-color', '#D3D3D3');
            $('.register_form input[type="text"][disabled').css('color', 'red');
            $('<h2> Submission Successful! <h2>').appendTo('.register_form');
        }
    }); // end click
}); // end ready
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
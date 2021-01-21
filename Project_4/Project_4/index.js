let arrInput=[];
let arrInput1=[];

function productUpdate() {

     testValues();
    return arrInput,arrInput1;
}
function productAddToTable() {
    if ($("#productTable tbody").length == 0) {
        $("#productTable").append("<tbody></tbody>");
    }
    $("#productTable tbody").append("<tr>" +
        "<td>" + $("#fname").val() +" "+$("#lname").val()+ "</td>" +
        "<td>" + $("#email").val() + "</td>" +
        "<td>" + $("#phone").val() + "</td>" +
        "</tr>");
}
function formClear() {
    $("#fname").val("");
    $("#lname").val("");
    $("#email").val("");
    $("#phone").val("");
}

function testValues() { 
    if(arrInput.length!=0){ 
    var no = $("#email").val(); 
    arrInput.push(no);   
    var sorted_arr = arrInput.sort();   
    var no1 = $("#phone").val(); 
    arrInput1.push(no1);   
    var sorted_arr1 = arrInput1.sort();  
    for (var i = 0; i < arrInput.length - 1; i++) { 

        if (sorted_arr[i + 1] == sorted_arr[i]||sorted_arr1[i + 1] == sorted_arr1[i]) {   
            arrInput.pop(no); 
            arrInput1.pop(no1);
            alert("Duplicate E-mail or Phone no.!!"); 
            $("#email").focus(); 
        }  
        else   if ( $("#fname").val() != null &&$("#fname").val() != ''&&$("#lname").val() != null && $("#lname").val() != ''&&$("#email").val() != null && $("#email").val() != ''&&$("#phone").val() != null && $("#phone").val() != '') {
            productAddToTable();
            fadeout();
            success();
            $("#fname").focus();

        }}}
        else{  
            var no = $("#email").val(); 
            arrInput.push(no);   
            var sorted_arr = arrInput.sort();   
            var no1 = $("#phone").val(); 
            arrInput1.push(no1);
        if ( $("#fname").val() != null &&$("#fname").val() != ''&&$("#lname").val() != null && $("#lname").val() != ''&&$("#email").val() != null && $("#email").val() != ''&&$("#phone").val() != null && $("#phone").val() != '') {
            productAddToTable();
            fadeout();
            success();
 
            $("#fname").focus();
         }}


    return arrInput,arrInput1;
} 
function fadeout(){
    $("#fname").fadeTo("slow",0.4);
    $("#lname").fadeTo("slow",0.4);
    $("#email").fadeTo("slow",0.4);
    $("#phone").fadeTo("slow",0.4);
}
function fade(){
    $("#fname").fadeTo("fast",1);
    $("#lname").fadeTo("slow",0.4);
    $("#email").fadeTo("slow",0.4);
    $("#phone").fadeTo("slow",0.4);
}
function fade1(){
    $("#fname").fadeTo("slow",0.4);
    $("#lname").fadeTo("fast",1);
    $("#email").fadeTo("slow",0.4);
    $("#phone").fadeTo("slow",0.4);
}
function fade2(){
    $("#fname").fadeTo("slow",0.4);
    $("#lname").fadeTo("slow",0.4);
    $("#email").fadeTo("fast",1);
    $("#phone").fadeTo("slow",0.4);
}
function fade3(){
    $("#fname").fadeTo("slow",0.4);
    $("#lname").fadeTo("slow",0.4);
    $("#email").fadeTo("slow",0.4);
    $("#phone").fadeTo("fast",1);
}
function success(){
    $("#myModal1").modal("show");
}

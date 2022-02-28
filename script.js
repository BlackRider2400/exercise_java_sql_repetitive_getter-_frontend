$(document).ready(function() {
  var apiRoot="http://mylovelyserver.fun:8080/suncode/";
  var datatableRowTemplate = $('[row-template]');
  var container = $('[container]');
  var selectList = $('[select-list]');
  function getRepetitive() {
    $.ajax({
      url: apiRoot + "getRepetitive?column=" + selectList.val(),
      method: "GET",
      success: renderTable
    });
  }
  function getNotRepetitive() {
    $.ajax({
      url: apiRoot + "getNotRepetitive?column=" + selectList.val(),
      method: "GET",
      success: renderTable
    });
  }
  function renderTable(data){
    container.empty();
    data.forEach(function(item){
      createElement(item).appendTo(container);
    });

  }
  function createElement(data){
    var element = $(datatableRowTemplate).clone();
    element.find('[data-id-paragraph]').text(data.id);
    element.find('[data-column1-paragraph]').text(data.column1);
    element.find('[data-column2-paragraph]').text(data.column2);
    element.find('[data-column3-paragraph]').text(data.column3);
    element.find('[data-column4-paragraph]').text(data.column4);
    return element;
  }

  $('[btn_repetitive]').on("click", function(){
    if(selectList.val() != "--- select a list ---"){
      getRepetitive();
    }
  });
  $('[btn_notrepetitive]').on("click", function(){
    if(selectList.val() != "--- select a list ---"){
      getNotRepetitive();
    }
  });
});

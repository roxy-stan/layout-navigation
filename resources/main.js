$(function()  {
  const menuItems = $(".menu-item");
  console.log('menuItems', menuItems)
  const boundary = $(".title-aside");
  const menuTop = $(".menu-top");


  menuItems.on("click", function() {
    menuItems.removeClass("selected");
    $(this).addClass("selected");

    const contentElements = $(".content");
    const dataContent=$(this).data("content");
    contentElements.addClass("hidden");
    contentElements.each(function (index, elem){
      if ($(elem).hasClass(dataContent)){
        $(elem).removeClass("hidden");
      } 
      console.log($(elem).hasClass(dataContent));
    });
    
    // contentElements.filter(`.${dataContent}`).removeClass("hidden");

    if (dataContent !== "your-orders-container") {
      boundary.removeClass("hidden");
      menuTop.removeClass("hidden");
  } else {
      boundary.addClass("hidden");
      menuTop.addClass("hidden");
  }  
  });
});

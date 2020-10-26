$(function(event)  {
  const menuItems = $(".menu-item");
  console.log('menuItems', menuItems)
  const boundary = $(".title-aside")[0];
  const menuTop = $(".menu-top")[0];

  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i];

    menuItem.addEventListener("click", function () 
    {
      for (let j = 0; j < menuItems.length; j++) {
        menuItems[j].classList.remove("selected");
      }
      menuItem.classList.add("selected");


      const dataContent = menuItem.dataset.content;
      console.log('dataContent', dataContent)
      const contentElements = $(".content");
      for (let k = 0; k < contentElements.length; k++) {
        contentElements[k].classList.add("hidden");
      }

      const elements = document.getElementsByClassName(dataContent);
      for (let n = 0; n < elements.length; n++) {
        elements[n].classList.remove("hidden");
      }


      //showing boundary and top menu when page is not home page (your-orders)
      if (dataContent !== "your-orders-container") {
        boundary.classList.remove("hidden");
        menuTop.classList.remove("hidden");
      } else {
        boundary.classList.add("hidden");
        menuTop.classList.add("hidden");
      }
    });
  }
});

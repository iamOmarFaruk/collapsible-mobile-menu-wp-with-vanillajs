// onload

// ? - Mobile Collapsable Menu
window.onload = function () {
  // if screen size is less than 980px
    if (window.innerWidth < 980) {
    // if document has id called #mobile-menu
        if (document.hasChildNodes("#mobile-menu")) //  change the trigger id or class
	  {
            // if document has class called .menu-item
            if (document.getElementsByClassName("menu-item-has-children")) {
              document
                .querySelectorAll(".menu-item-has-children")
                .forEach(function (parent) {
                  var subMenuToggle = document.createElement("div");
                  // add content to this div "+"
                  subMenuToggle.innerHTML = "+";
                  subMenuToggle.classList.add("sub-menu-toggle");
                  // append child as a first element of the parent
                  parent.insertBefore(subMenuToggle, parent.firstChild);
                });
              // select all .sub-menu-toggle elements and add a click event listener
              document
                .querySelectorAll(".sub-menu-toggle")
                .forEach(function (toggle) {
                  toggle.addEventListener("click", function (event) {
                    // set inner html to "-" if the inner html is "+"
                    if (event.target.innerHTML === "+") {
                      event.target.innerHTML = "-";
                    } else {
                      event.target.innerHTML = "+";
                    }
                    // select .sub-menu element and toggle the class .show-sub-menu
                    this.parentNode
                      .querySelector(".sub-menu")
                      .classList.toggle("show-sub-menu");
                  });
                });
            } else {
              console.log("no menu items");
            }
        }else{
            console.log("no mobile menu");
        }
    }
}
// ? - Mobile Collapsable Menu

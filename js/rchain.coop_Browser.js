window.onscroll = function () {
  navScroll();
};
navScroll();

function navScroll() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    document.getElementById("nav").classList.add("scroll");
    document.getElementById("red").classList.remove("hidden");
    document.getElementById("white").classList.add("hidden");
  } else {
    document.getElementById("nav").classList.remove("scroll");
    document.getElementById("red").classList.add("hidden");
    document.getElementById("white").classList.remove("hidden");
  }
}

if (document.getElementsByClassName("with-dropdown")[0]) {
  document
    .getElementsByClassName("with-dropdown")[0]
    .addEventListener("click", (e) => {
      const classes = e.currentTarget.getAttribute("class");
      if (classes.includes("openned")) {
        e.currentTarget.classList.remove("openned");
      } else {
        e.currentTarget.classList.add("openned");
      }
    });
}

if (document.getElementsByClassName("menu-icon")[0]) {
  document
    .getElementsByClassName("menu-icon")[0]
    .addEventListener("click", (e) => {
      const dd = document
        .getElementsByClassName("nav-mobile")[0]
        .querySelectorAll(".dropdown")[0];
      const classes = dd.getAttribute("class");
      if (classes.includes("hidden")) {
        dd.classList.remove("hidden");
      } else {
        dd.classList.add("hidden");
      }
    });
}

/* Nav Bar */
/* document.getElementById('hamburger').onclick = menuExpand;
 */
/* function menuExpand() {
  var nav = document.getElementById('nav');
  var hamburger = document.getElementById('hamburger');
  if (nav.classList.contains('active')) {
    nav.classList.remove('active');
    hamburger.classList.remove('change');
  } else {
    nav.classList.add('active');
    hamburger.classList.add('change');
  }
} */

/* document.getElementById('dropdown').onclick = dropdown;

function dropdown() {
  var dropdown = document.getElementById('dropdown');
  if (dropdown.classList.contains('active')) {
    dropdown.classList.remove('active');
  } else {
    dropdown.classList.add('active');
  }
} */

/* Footer Form */
$("#newsletterSubmit").click(function (event) {
  event.preventDefault();
  var data = $("#newsletterForm").serialize();
  $.ajax({
    type: "POST",
    url: "newsletter-submission",
    data: data,
    dataType: "json",
  }).done(function (data) {
    if (!(data[0] == "success")) {
      $("#submitFail").html("");
      for (var item in data) {
        $("#submitFail").css("display", "inline-block");
        $("#submitFail").append('<div class="errors">' + data[item] + "</div>");
      }
    } else {
      $("#submitFail").css("display", "none");
      $("#submitSuccess").css("display", "inline-block");
      $("#submitSuccess").append(
        "<div class='success'>Thank you for your submission</div>"
      );
      $("#newsletterForm").css("display", "none");
    }
  });
});

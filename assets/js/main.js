/***************************************************
==================== JS INDEX ======================
****************************************************

01. PreLoader Js
02. Sticky Js
03. Offcanvas Menu Js
04. AOS Js
05. Backtotop Js
06. Counter Js
07. Bg Image For Attribute Js
08. Marquee Js
09. In-page Links Js
10. Contact Form Js

****************************************************/

(function ($) {
  "use strict";

  ////////////////////////////////////////////////////
  // 01. PreLoader Js
  document.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline();
    const svg = document.getElementById("preloaderSvg");
    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";
    tl.to(".preloader-heading .load-text", {
      delay: 1,
      y: -80,
      opacity: 0,
      duration: 0.6,
    })
      .to(svg, { duration: 0.6, attr: { d: curve }, ease: "power2.inOut" })
      .to(svg, { duration: 0.6, attr: { d: flat }, ease: "power2.inOut" })
      .to(".preloader", { y: "-130%", duration: 0.8, ease: "power4.inOut" })
      .set(".preloader", { display: "none", zIndex: -1 });
  });

  ////////////////////////////////////////////////////
  // 02. Sticky Js
  $(window).on("scroll", function () {
    $(".header").toggleClass("fixed-header", $(window).scrollTop() >= 260);
  });

  ////////////////////////////////////////////////////
  // 03. Offcanvas Menu Js
  if ($(".tw-main-menu-content").length && $(".tw-main-menu-mobile").length) {
    document.querySelector(".tw-main-menu-mobile").innerHTML =
      document.querySelector(".tw-main-menu-content").outerHTML;
  }
  $(".tw-offcanvas-open-btn").on("click", function () {
    $(".tw-offcanvas-2-area").addClass("opened");
  });
  $(".tw-offcanvas-2-close-btn").on("click", function () {
    $(".tw-offcanvas-2-area").removeClass("opened");
  });

  ////////////////////////////////////////////////////
  // 04. AOS Js
  AOS.init({
    once: false,
    offset: 0,
    anchorPlacement: "top-bottom",
  });

  ////////////////////////////////////////////////////
  // 05. Backtotop Js
  $(window).on("scroll", function () {
    $(".back-to-top-wrapper").toggleClass(
      "back-to-top-btn-show",
      $(this).scrollTop() > 300,
    );
  });
  $("#back_to_top").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 300);
  });

  ////////////////////////////////////////////////////
  // 06. Counter Js
  new PureCounter();

  ////////////////////////////////////////////////////
  // 07. Bg Image For Attribute Js
  $(".bg-img").each(function () {
    var img = $(this).data("background-image");
    if (img) {
      $(this).css("background-image", "url('" + img + "')");
    }
  });

  ////////////////////////////////////////////////////
  // 08. Marquee Js
  $(".marquee_left").marquee({
    speed: 50,
    gap: 0,
    delayBeforeStart: 0,
    direction: "left",
    duplicated: true,
    pauseOnHover: true,
    startVisible: true,
  });

  ////////////////////////////////////////////////////
  // 09. In-page Links Js
  // ScrollSmoother moves the page with transforms, so a native "#id" jump
  // lands in the wrong place. Route in-page links through the smoother.
  $(document).on("click", 'a[href^="#"]', function (e) {
    var smoother = window.ScrollSmoother && ScrollSmoother.get();
    var id = this.getAttribute("href");
    var target = id === "#" ? 0 : document.querySelector(id);
    if (!smoother || target === null) return;
    e.preventDefault();
    $(".tw-offcanvas-2-area").removeClass("opened");
    smoother.scrollTo(target, true, "top 90px");
  });

  ////////////////////////////////////////////////////
  // 10. Contact Form Js
  // Static site, no backend: Web3Forms emails each message to the inbox that
  // owns the access key in data-key (the key is public by design).
  $("#contact-form").on("submit", function (e) {
    e.preventDefault();
    var form = this;
    var to = form.dataset.to;
    var $btn = $(form).find("button[type=submit]");
    var $status = $("#contact-status");
    var data = Object.fromEntries(new FormData(form));
    data.access_key = form.dataset.key;
    data.subject = "Portfolio enquiry from " + data.name;
    data.from_name = "Portfolio contact form";
    $btn.prop("disabled", true).text("sending...");
    $status.text("");
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    })
      .then(function (r) {
        return r.json().catch(function () {
          throw new Error("HTTP " + r.status);
        });
      })
      .then(function (res) {
        if (String(res.success) !== "true") throw new Error(res.message || "no reason given");
        form.reset();
        $status.text("Thanks! Your message has been sent. I'll reply by email.");
      })
      .catch(function (err) {
        // show the service's own reason (e.g. invalid key); text nodes, never HTML
        $status.empty().append(
          document.createTextNode("Sorry, the message could not be sent (" + err.message + "). Please email me at "),
          $('<a class="text-main-600 hover-underline"></a>').attr("href", "mailto:" + to).text(to),
          ".",
        );
      })
      .finally(function () {
        $btn.prop("disabled", false).text("send message");
      });
  });
})(jQuery);

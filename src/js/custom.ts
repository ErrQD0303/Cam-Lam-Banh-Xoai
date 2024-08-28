import "./jquery.min.js";

// MENU
$(document).ready(function () {
  $(".navbar-collapse a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // CUSTOM LINK
  $(".smoothscroll").on("click", function (e: JQuery.ClickEvent) {
    e.preventDefault(); // Prevent default link behavior

    const el = $(this).attr("href"); // Get the href attribute
    if (!el) return; // Safety check to ensure href exists

    const elWrapped = $(el); // Wrap the element with jQuery
    const headerHeight = $(".navbar").height() || 0; // Get the navbar height, fallback to 0

    scrollToDiv(elWrapped, headerHeight);
  });

  // Scroll function with proper typing
  function scrollToDiv(element: JQuery<HTMLElement>, navHeight: number): void {
    const offset = element.offset();
    if (offset) {
      const offsetTop = offset.top;
      const totalScroll = offsetTop - navHeight;

      $("body,html").animate(
        {
          scrollTop: totalScroll,
        },
        300
      );
    }
  }
});

export default async function initializeCarousel(): Promise<void> {
  $(".owl-carousel").owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      767: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
}

/**
 * Static Chaty Widget – Ken Brown Financial Consultant
 * Floating social contact buttons (bottom-left)
 */
(function () {
  "use strict";

  var channels = [
    {
      name: "Facebook_Messenger",
      label: "Facebook Messenger",
      url: "https://m.me/kenbrownfc",
      color: "#0084FF",
      svg: '<svg viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19.4395" cy="19.4395" r="19.4395" fill="#0084FF"/><path d="M19.5 9.5C13.701 9.5 9 13.748 9 19.074c0 3.014 1.474 5.702 3.778 7.456V30l3.294-1.81c.878.244 1.81.376 2.778.376 5.799 0 10.5-4.248 10.5-9.574S25.299 9.5 19.5 9.5zm1.04 12.878l-2.674-2.852-5.22 2.852 5.74-6.096 2.74 2.852 5.154-2.852-5.74 6.096z" fill="white"/></svg>'
    },
    {
      name: "WhatsApp",
      label: "WhatsApp",
      url: "https://wa.me/66910571270",
      color: "#25D366",
      svg: '<svg viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19.4395" cy="19.4395" r="19.4395" fill="#25D366"/><path d="M19.5 9.5C14.253 9.5 10 13.753 10 19c0 1.67.436 3.285 1.265 4.717L10 29l5.418-1.234A9.454 9.454 0 0019.5 28.5c5.247 0 9.5-4.253 9.5-9.5s-4.253-9.5-9.5-9.5zm5.508 13.142c-.232.652-1.345 1.247-1.853 1.29-.508.043-.982.228-3.306-.688-2.806-1.107-4.573-3.974-4.71-4.16-.137-.186-1.12-1.49-1.12-2.843 0-1.352.71-2.018.96-2.293.25-.275.546-.344.728-.344.183 0 .365.002.525.01.168.007.394-.064.617.47.232.556.786 1.92.855 2.06.069.138.115.3.023.485-.093.186-.139.3-.275.462-.137.162-.288.362-.412.486-.137.137-.28.286-.12.56.16.275.71 1.173 1.525 1.9 1.047.933 1.93 1.222 2.205 1.36.275.137.435.115.595-.069.16-.185.686-.8.869-1.075.183-.275.365-.228.617-.137.25.092 1.595.752 1.868.889.275.137.457.206.526.32.068.115.068.663-.164 1.315z" fill="white"/></svg>'
    },
    {
      name: "Phone",
      label: "Phone: +66 91 057 1270",
      url: "tel:+66910571270",
      color: "#03E78C",
      svg: '<svg viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19.4395" cy="19.4395" r="19.4395" fill="#03E78C"/><path d="M27.3 24.2l-2.8-1.2c-.3-.1-.7 0-.9.3l-1.2 1.6c-.2.3-.6.4-.9.2-2.4-1.2-4.4-3.2-5.6-5.6-.2-.3-.1-.7.2-.9l1.6-1.2c.3-.2.4-.6.3-.9l-1.2-2.8c-.1-.4-.5-.6-.9-.5l-2.7.6c-.4.1-.6.4-.6.8.3 7.3 6.2 13.2 13.5 13.5.4 0 .7-.2.8-.6l.6-2.7c.1-.3-.1-.7-.5-.8z" fill="white"/></svg>'
    },
    {
      name: "LinkedIn",
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/ken-brown-59438192/",
      color: "#0077B5",
      svg: '<svg viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="19.4395" cy="19.4395" r="19.4395" fill="#0077B5"/><path d="M15.186 14.359a1.583 1.583 0 11-3.167 0 1.583 1.583 0 013.167 0zM15.25 16.75h-3.042v9.75h3.042v-9.75zm4.846 0h-3.014v9.75h3.014v-5.12c0-2.848 3.694-3.081 3.694 0v5.12h3.032v-6.175c0-4.806-5.467-4.631-6.726-2.264V16.75z" fill="white"/></svg>'
    }
  ];

  // Main trigger icon – black circle, white chat bubble, 54x54 (responsive)
  var isMobile = window.innerWidth <= 480;
  var svgSize = isMobile ? "40" : "54";

  var triggerSvg =
    '<svg width="' + svgSize + '" height="' + svgSize + '" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<circle cx="19.5" cy="19.5" r="19.5" fill="#000000"/>' +
    '<path d="M26.4 13H13.6C12.72 13 12 13.72 12 14.6V23.4C12 24.28 12.72 25 13.6 25H16L19.5 28L23 25H26.4C27.28 25 28 24.28 28 23.4V14.6C28 13.72 27.28 13 26.4 13Z" fill="white"/>' +
    '<circle cx="15.5" cy="19" r="1.25" fill="#000000"/>' +
    '<circle cx="19.5" cy="19" r="1.25" fill="#000000"/>' +
    '<circle cx="23.5" cy="19" r="1.25" fill="#000000"/>' +
    '</svg>';

  // Close icon – black circle, white X, 54x54 (responsive)
  var closeSvg =
    '<svg width="' + svgSize + '" height="' + svgSize + '" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<circle cx="19.5" cy="19.5" r="19.5" fill="#000000"/>' +
    '<path d="M25 14L14 25M14 14L25 25" stroke="white" stroke-width="2.5" stroke-linecap="round"/>' +
    '</svg>';

  function createWidget() {
    // Container
    var chaty = document.createElement("div");
    chaty.className = "chaty active";
    chaty.id = "chaty-widget";

    var widget = document.createElement("div");
    widget.className = "chaty-widget left-position";

    // Channel list (responsive height)
    var channelList = document.createElement("div");
    channelList.className = "chaty-channel-list";
    var itemHeight = isMobile ? 50 : 62;
    channelList.style.height = (channels.length * itemHeight + 10) + "px";
    channelList.style.overflow = "visible";
    channelList.style.zIndex = "10002";

    channels.forEach(function (ch) {
      var channel = document.createElement("div");
      channel.className =
        "chaty-channel " + ch.name + "-channel chaty-tooltip pos-right";
      channel.setAttribute("data-hover", ch.label);

      var link = document.createElement("a");
      link.href = ch.url;
      link.target = ch.name === "Phone" ? "_self" : "_blank";
      link.rel = "noopener noreferrer";
      link.className = "chaty-svg";
      link.setAttribute("aria-label", ch.label);

      var iconWrap = document.createElement("span");
      iconWrap.className = "chaty-icon";
      iconWrap.style.background = ch.color;
      iconWrap.style.borderRadius = "50%";
      iconWrap.style.display = "block";
      iconWrap.style.width = "54px";
      iconWrap.style.height = "54px";
      iconWrap.style.flexShrink = "0";
      iconWrap.innerHTML = ch.svg;

      // Mobile responsive sizing
      if (window.innerWidth <= 480) {
        iconWrap.style.width = "40px";
        iconWrap.style.height = "40px";
      }

      link.appendChild(iconWrap);
      channel.appendChild(link);
      channelList.appendChild(channel);
    });

    widget.appendChild(channelList);

    // Trigger area
    var trigger = document.createElement("div");
    trigger.className = "chaty-i-trigger";

    // Main button – no animation class
    var ctaMain = document.createElement("div");
    ctaMain.className = "chaty-cta-main chaty-tooltip pos-right";
    ctaMain.setAttribute("data-hover", "Contact us");
    var ctaMainBtn = document.createElement("div");
    ctaMainBtn.className = "chaty-cta-button";
    ctaMainBtn.innerHTML = triggerSvg;
    ctaMain.appendChild(ctaMainBtn);

    // Close button
    var ctaClose = document.createElement("div");
    ctaClose.className = "chaty-cta-close chaty-tooltip pos-right";
    ctaClose.setAttribute("data-hover", "Hide");
    var ctaCloseBtn = document.createElement("div");
    ctaCloseBtn.className = "chaty-cta-button";
    ctaCloseBtn.innerHTML = closeSvg;
    ctaClose.appendChild(ctaCloseBtn);

    trigger.appendChild(ctaMain);
    trigger.appendChild(ctaClose);
    widget.appendChild(trigger);
    chaty.appendChild(widget);
    document.body.appendChild(chaty);

    // Auto-close timer
    var autoCloseTimer = null;

    // Toggle open/close
    function toggle() {
      widget.classList.toggle("chaty-open");
      if (widget.classList.contains("chaty-open")) {
        var items = channelList.querySelectorAll(".chaty-channel");
        items.forEach(function (item, idx) {
          var offset = (items.length - idx) * itemHeight + 4;
          item.style.transition = "0.3s ease " + idx * 0.06 + "s";
          item.style.bottom = offset + "px";
          item.style.opacity = "1";
          item.style.zIndex = "10003";
        });
        // Start auto-close timer (30 seconds)
        clearTimeout(autoCloseTimer);
        autoCloseTimer = setTimeout(function() {
          toggle();
        }, 30000);
      } else {
        var items = channelList.querySelectorAll(".chaty-channel");
        items.forEach(function (item) {
          item.style.transition = "0.25s ease";
          item.style.bottom = "0px";
          item.style.opacity = "0";
        });
        // Clear timer when closing
        clearTimeout(autoCloseTimer);
      }
    }

    // Trigger button: Toggle open/close
    ctaMainBtn.addEventListener("click", toggle);

    // Close button: Always close
    ctaCloseBtn.addEventListener("click", function() {
      if (widget.classList.contains("chaty-open")) {
        toggle();
      }
    });
  }

  // Initialize when DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createWidget);
  } else {
    createWidget();
  }
})();

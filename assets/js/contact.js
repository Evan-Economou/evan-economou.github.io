// "Contact me" link: copies the email address and shows a short notice.
// The address is split across data attributes so it isn't in the page as
// plain text for spam bots.
(function () {
  var link = document.querySelector(".contact-link");
  var toast = document.querySelector(".toast");
  if (!link) return;

  var email = link.dataset.user + "@" + link.dataset.domain;
  link.href = "mailto:" + email;  // fallback if copying isn't possible
  link.title = email;

  var timer;
  function notify(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    clearTimeout(timer);
    timer = setTimeout(function () { toast.hidden = true; }, 2500);
  }

  link.addEventListener("click", function (event) {
    // Clipboard access only works over HTTPS (or localhost). If it's not
    // available, let the mailto: link open the visitor's email app instead.
    if (!navigator.clipboard || !window.isSecureContext) return;
    event.preventDefault();
    navigator.clipboard.writeText(email).then(
      function () { notify("Copied " + email + " to your clipboard"); },
      function () { window.location.href = "mailto:" + email; }
    );
  });
})();

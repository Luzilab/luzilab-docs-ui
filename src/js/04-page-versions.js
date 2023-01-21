;(function () {
  'use strict'

  var toggle = document.querySelector('.page-versions .version-menu-toggle')
  if (!toggle) return

  var selector = document.querySelector('.page-versions')

  toggle.addEventListener('click', function (e) {
    selector.classList.toggle('is-active')
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    e.stopPropagation() // trap event
  })

  document.documentElement.addEventListener('click', function () {
    selector.classList.remove('is-active')
  })
})()

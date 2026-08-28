'use strict'
document.addEventListener('DOMContentLoaded', function () {
  const toggleSwitch = document.querySelector(
    '.darklight__toggle-switch input[type="checkbox"]'
  )
  const currentTheme = localStorage.getItem('theme')

  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)
    toggleSwitch.checked = currentTheme === 'dark'
  } else {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.documentElement.setAttribute('data-theme', 'dark')
      toggleSwitch.checked = true
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }

  toggleSwitch.addEventListener('change', function (e) {
    const theme = e.target.checked ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  })

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', function (e) {
      if (!localStorage.getItem('theme')) {
        const theme = e.matches ? 'dark' : 'light'
        document.documentElement.setAttribute('data-theme', theme)
        toggleSwitch.checked = e.matches
      }
    })
})

'use strict'

async function copyDiscord() {
    try {
      await navigator.clipboard.writeText('gouderg#5425');
      document.getElementById('validate').style.display = 'flex';
      setTimeout(function(){document.getElementById('validate').style.display = 'none';}, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
}

async function copyGmail() {
    try {
      await navigator.clipboard.writeText('victor.illien974@gmail.com');
      document.getElementById('validate').style.display = 'flex';
      setTimeout(function(){document.getElementById('validate').style.display = 'none';}, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
}

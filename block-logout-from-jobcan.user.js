// ==UserScript==
// @name        Block log-out from Jobcan
// @version     1.00.20210227
// @namespace   http://amaisaeta.seesaa.net/
// @author      AmaiSaeta
// @description ジョブカンからのタイムアウトに因るログアウトを阻止する
// @include     https://ssl.jobcan.jp/employee
// @include     https://ssl.jobcan.jp/employee/*
// @grant       none
// ==/UserScript==

(() => {
  const DEBUG = false;

  const interval = (30 * 60 - 10) * 1000;
  let intervalId;

  log('load "' + GM.info.script.name + '"');
  log('focus: ' + window.document.hasFocus());

  window.addEventListener('load', () => {
    log('fire "load" event');
    log('focus: ' + window.document.hasFocus());

    window.setInterval(() => {
      const hasFocus = window.document.hasFocus();

      log('run interval event');
      log('focus: ' + hasFocus);

      if(!hasFocus) {
        log('run reload');
        window.location.reload();
      }
    }, interval);
  });

  // DEBUG {{{
  function log(message) {
    DEBUG && console.log(message, '[' + (new Date()).toString() + ']');
  }
  // }}}
})();

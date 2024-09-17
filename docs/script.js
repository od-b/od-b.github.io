'use strict';

const NAV_LINK_MAPPING = {
  'nav-btn-0': '/',
  'nav-btn-1': '/projects',
  'nav-btn-2': '/notes',
  'nav-btn-3': '/meta',
}

const NAV_BAR = document.querySelector('#nav-global-top');

NAV_BAR.querySelectorAll('a').forEach(a => {
  const REF = NAV_LINK_MAPPING[a.id];

  if (REF === undefined) {
    console.error(`Missing page mapping for nav btn: ${a.id} (${a.innerText})`);
  } else {
    a.href = REF;
  }
});

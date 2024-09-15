
let HEADER_REFS = {
  'header-ref-0': '',
  'header-ref-1': '/projects',
  'header-ref-2': '/notes',
  'header-ref-3': '/about',
}

window.onload = (_) => {
  const HREF = window.location.href
  const HREF_PARTS = HREF.split('bjerke.dev/')

  PATH = (HREF_PARTS.length == 1) ? HREF : HREF_PARTS[1];

  for (const [k, v] of Object.entries(HEADER_REFS)) {
    const header_link = document.getElementById(k)
    header_link.href = v

    if (PATH == v) {
      header_link.classList.add("font-bold");
    }
  }
};

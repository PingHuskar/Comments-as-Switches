// @AbubakerSaeed96 (twitter)
// abubakersaeed.netlify.com
// =========================

// 1&2 Simple
// 3&4 Outline/Border
// 5 Material Design-like
// 6 I've seen it on sites but I don't know what people call that design/effect (maybe liquid/or-like?)
// 7 Material Design-like (Half thumb out)

/*
  #keyboard-users: It's not an outline but more of a custom outline using box-shadow. All the effects that mouse users can see you'll get the same except for the sixth switch.
*/

/* Things to keep in mind.
=========================
  Colors:

    1. Outline Color (...that you'll see when you focus the switch) should be brighter than the background color of the switch. So that #keyboard-users can see/know which switch/item they are currently on. It can be same as thumb background color (as I used in my blue theme).

    2. Choose colors wisely. And don't just pick any color. I've tried purple (and even though I like purple...) it doesn't look good on switches.

==========================
These are for my component not saying you should not try/use in yours...
*/

// Thank You for viewing.
// ========================================

// Theming Stuff
const $ = e => document.querySelectorAll(e);

const _switches = $(".switches")[0];
const _colors = $("input[name='color']");

for (let i = 0; i < _colors.length; i++) {

  _colors[i].addEventListener("change", e => {
    if (e.target.checked) _switches.setAttribute('data-theme', e.target.value);
  })

}

const searchParam = new URLSearchParams(location.search)
const LANG = searchParam.get(`lang`) || `js`

const PRINTLANGS = {
  "js": `console.log`,
  "C": `Console.WriteLine`, // C#
}

const PRINTBLOCK = `THIS BLOCK SHOULD BE EXECUTE`
const NOTPRINTBLOCK = `THIS BLOCK SHOULD NOT BE EXECUTE`

const SWITCH = document.getElementById(`switch`)
const OUTPUT = document.getElementById(`output`)
const T1 = document.getElementById(`textarea1`)
const T2 = document.getElementById(`textarea2`)

const MAIN = () => {
  const TT1 = T1.value.trim()
  const TT2 = T2.value.trim()
  let result = ``
  console.clear()
  if (SWITCH.checked) {
    result = `//*

    ${PRINTLANGS[LANG]}(\`${TT1}\`);
    // ${PRINTBLOCK}

    /*/

    ${PRINTLANGS[LANG]}(\`${TT2}\`);
    // ${NOTPRINTBLOCK}

    //*/
    `
    T1.classList.add(`printed`)
    T1.classList.remove(`notprinted`)
    T2.classList.add(`notprinted`)
    T2.classList.remove(`printed`)
  } else {
    result = `/*

    ${PRINTLANGS[LANG]}(\`${TT1}\`);
    // ${NOTPRINTBLOCK}

    /*/

    ${PRINTLANGS[LANG]}(\`${TT2}\`);
    // ${PRINTBLOCK}

    //*/
    `
    T1.classList.add(`notprinted`)
    T1.classList.remove(`printed`)
    T2.classList.add(`printed`)
    T2.classList.remove(`notprinted`)
  }
  OUTPUT.innerHTML = result.replace(/\n/g, "<br>")
}
MAIN()
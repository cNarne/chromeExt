// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.storage.local.get('words', function(object) {
  var words = object.words;
  console.log(object);
  console.log(words);
  console.log(words.replace(",", "|"));
  let regExp = new RegExp('\\b(' + words.replace(",", "|") + ')\\b');
 // for (let set of kSets) {
    let elements = Array.from(document.querySelectorAll('div'));
    for (let element of elements) {
      if (regExp.test(element.innerText))
        element.style.backgroundColor = 	"#BDB76B";
    }
  //}
});

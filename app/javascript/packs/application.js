// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import 'jquery' /* jQueryをimportする。 */
import "script.js" /* 作成したscript.jsをimportする。 */
import Swiper from 'swiper/swiper-bundle.js';
import 'swiper/swiper-bundle.css'; 

// import "sample.js"  /* packs以下のパスをimportの後に指定する形で読み込むことができます。 */
// import "scripts/sample.js" /* packs以下のパスをimportの後に指定する形で読み込むことができます。 */

Rails.start()
Turbolinks.start()
ActiveStorage.start()

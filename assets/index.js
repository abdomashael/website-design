// JavaScript
import './scripts/main'

// Styles
import './scss/main.scss'

// Favicon

// Web App Manifest
import './site.webmanifest'

import './browserconfig.xml'
import './images/homepage1_bg.png'
import './images/homepage2/rectangle6_1.png'
import './images/homepage2/rectangle6_2.png'
import './images/homepage2/rectangle6_3.png'
import './images/homepage2/vector.png'

import './images/homepage3/p3_img1.png'
import './images/homepage3/p3_img2.png'
import './images/homepage3/p3_img3.png'

import './images/homepage4/p4_img1.png'
import './images/homepage4/p4_img2.png'
import './images/homepage4/p4_bg1.png'
import './images/homepage4/p4_bg2.png'

import './images/homepage5/homepage5_bg.png'
import './images/homepage5/remix-icons/clean.png'
import './images/homepage5/remix-icons/chat.png'
import './images/homepage5/remix-icons/desk.png'

import './images/homepage5/remix-icons/line/map/bed.png'
import './images/homepage5/remix-icons/line/map/bag.png'
import './images/homepage5/remix-icons/line/device/fingerprint.png'
import './images/homepage5/remix-icons/line/device/monitor.png'
import './images/homepage5/remix-icons/line/device/laptop.png'
import './images/homepage5/remix-icons/line/device/wifi.png'
import './images/homepage5/remix-icons/line/media/camera.png'
import './images/homepage5/remix-icons/line/system/clock.png'
import './images/homepage5/remix-icons/line/system/recycle.png'
import './images/homepage5/homepage5_bg.png'


// robots.txt
import './robots.txt'

// humans.txt
import './humans.txt'

import $ from "jquery";

let current = '.homepage1__main'
let pagesMainClasses = ['.homepage1__main', '.homepage2__main', '.homepage3__main', '.homepage4__main', '.homepage5__main']
pagesMainClasses.forEach(function (className) {
  $(className).hide()
})
$(current).show();

$(".header").click(() => {
  $(current).addClass('slide-up')
  pagesMainClasses = pagesMainClasses.slice(1)
  current = pagesMainClasses[0]
  $(current).fadeIn("slow")
})


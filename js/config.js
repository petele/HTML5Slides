/*
Copyright 2012 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.


  Based on HTML5Slides from http://code.google.com/p/html5slides/
  Special thanks to: Eric Bidelman, Luke MahŽ, Marcin Wichary,
                     Dominic Mazzoni, Charles Chen

  Authors: Chris Wilson (cwilso@chromium.org)
           Pete LePage (petele@google.com)
*/

window.slidesConfig = window.slidesConfig || {
  // Slide settings
  settings : {
    useBuilds: true,
    showHiddenSlides: false
  },
  info: {
    // Presentation Name
    title: 'Presentation Title',
    subtitle: 'Subtitle',

    // Personal info
    name: 'Presenter Name',
    pic: './images/html5-guy.png',
    gplus: 'https://plus.google.com/106189723444098348646',
    twitter: 'chromiumdev',
    blog: 'http://updates.html5rocks.com',

    // Google Analytics Token
    ga_account: 'UA-XXXXXXX-X',

    // Links
    slides: 'http://url_to_slides',
    feedback: 'http://url_to_feedback',
    location: 'Mountain View, CA',

    // Presentation Timer
    date: new Date('Jan 18 2012 14:30'),
    logo: './images/html5_logo_256.png',
    minutes: 60,
    warnAt: 10
  }
};

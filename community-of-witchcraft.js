// ==UserScript==
// @name         Community of Witchcraft
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Wicken/Witchery/Hoodoo/Voodoo for Bashing the Trolls with the Ban Stick
// @author       ryan.clarke@xero.com
// @match        https://community.livestage6.test.xero.com/business/admin/roles*
// @match        https://community.xero.com/business/admin/roles*
// @match        file:///*/witch.html*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var witches = ["https://media.giphy.com/media/AVYgfmc0UiP9m/giphy.gif", "https://media.giphy.com/media/9IVTJHx7l8HPa/giphy.gif", "https://media.giphy.com/media/wI0NsZgMUehG/giphy.gif"];
    var randomWitch = witches[Math.floor(Math.random() * witches.length)];
    var myTimer = setInterval(function(){ AddWitch();}, 100);

    function AddWitch() {
        var x = document.getElementsByClassName("message");
        if(x[0] !== undefined) {
            if(x[0].innerHTML.indexOf("You have suspended") != -1) {
                x[0].innerHTML = x[0].innerHTML + '<p><img style="border-radius: 8px" src="' + randomWitch + '" alt="Hark I hear a Witchy Cackle as the Dark Arts of Banning and Suspension are Invoked" title="Hark I hear a Witchy Cackle as the Dark Arts of Banning and Suspension are Invoked" height="300"/><audio id="audio" src="http://johnparsons.nz/sites/default/files/Maniacal%20Witches%20Laugh-SoundBible.com-262127569.mp3" autostart="true" ></audio></p>';
                clearInterval(myTimer);
                var sound = document.getElementById("audio");
                sound.play();
            }
        }
    }
})();

// ChangeLog
// 1.0 Initial Release
// 1.1 Adds wildcards for matches and adds array length to support easily adding more GIF
// 1.2 Adds witches cackle sound

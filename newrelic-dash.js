// ==UserScript==
// @name         Kragle SLI Dashboard Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://one.newrelic.com/launcher/dashboards.launcher*
// @grant        none
// ==/UserScript==

var newRelicCode = "APARAT";

(function() {
    'use strict';
    console.log("Running the script");
    setInterval(function()
    {
        RecolourNumbers();
        RedrawTitles();
    }, 1000);
})();

function RecolourNumbers()
{
var elements = document.getElementsByClassName(newRelicCode + '-vz--viz-billboard-metric');

    var total =0;
    var count = 0;
    for(count; count < elements.length; count++)
    {
        var ele = elements[count];

        if(ele.parentElement.children[2].innerHTML == "SLI")
        {
            ele.parentElement.children[2].innerHTML = '';
        }
        else
        {
            continue;
        }
        var color = 'green';
        var value = parseFloat(ele.innerHTML);
        total += value;
        if(value == 100)
        {
            ele.innerHTML = '<img style="margin-left: 43px;" src="https://media.giphy.com/media/wxZVenBE9msRq/giphy.gif" width="70" height="70" />';
        }
        if ((value >= 90) && (value < 99))
        {
            color = 'orange';
        }
        else
        {
            if(value < 90)
            {
                color = 'red';
            }
        }
        ele.style = ele.style + '; color: ' + color;
        if(ele.parentElement.children[2].innerHTML == "SLI")
        {
            ele.parentElement.children[2].innerHTML = '';
        }
        console.log("Value is :" + value + " Count is: " + count + " Total is: " + total);
    }

}

function RedrawTitles()
{
   var elements = document.getElementsByClassName(newRelicCode + '-vz--widget__title');
   for(var i = 0; i < elements.length; i++)
   {
      var ele = elements[i];
      ele.children[0].style = 'font-size: 1.5em;';
   }
}

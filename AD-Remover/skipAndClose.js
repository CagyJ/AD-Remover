/*
 * @Author: CagyJ 
 * @Date: 2021-05-28 23:26:15 
 * @Last Modified by:   CagyJ 
 * @Last Modified time: 2021-05-28 23:26:15 
 */

function AutoClick(tag, time) {
    window.setInterval(() => {
        let btn = document.querySelector(tag);
        if (btn) {
            btn.click();
        }
    }, time);
}
// for fully coverd ad
AutoClick(".ytp-ad-skip-button", 5000);
// for small ad window
AutoClick(".ytp-ad-overlay-close-button", 2000);
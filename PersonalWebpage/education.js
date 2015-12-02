
var slideimages=new Array(),step=0;
slideimages[0]=new Image();
slideimages[0].src="slide1.jpg";
slideimages[1]=new Image();
slideimages[1].src="slide2.jpg";
slideimages[2]=new Image();
slideimages[2].src="slide3.jpg";
slideimages[3]=new Image();
slideimages[3].src="slide4.jpg";
slideimages[4]=new Image();
slideimages[4].src="slide5.jpg";
slideimages[5]=new Image();
slideimages[5].src="slide6.jpg";
slideimages[6]=new Image();
slideimages[6].src="slide7.jpg";
slideimages[7]=new Image();
slideimages[7].src="slide9.jpg";
slideimages[8]=new Image();
slideimages[8].src="slide8.jpg";



function slideshow()
{
    if(!document.images)
        return;
    document.getElementById("slideshow1").src=slideimages[step].src;
    if(step<8)
        step++;
    else
        step=0;
    setTimeout("slideshow()",2000);
}

/*AKNOWLEDGEMENTS
CSS Browser Selector v0.4.0 (Nov 02, 2010)
Rafael Lima (http://rafael.adm.br)
http://rafael.adm.br/css_browser_selector
License: http://creativecommons.org/licenses/by/2.5/
Contributors: http://rafael.adm.br/css_browser_selector#contributors

function css_browser_selector(u)
{var ua=u.toLowerCase(),is=function(t){return ua.indexOf(t)>-1},g='gecko',w='webkit',s='safari',o='opera',m='mobile',h=document.documentElement,b=[(!(/opera|webtv/i.test(ua))&&/msie\s(\d)/.test(ua))?('ie ie'+RegExp.$1):is('firefox/2')?g+' ff2':is('firefox/3.5')?g+' ff3 ff3_5':is('firefox/3.6')?g+' ff3 ff3_6':is('firefox/3')?g+' ff3':is('gecko/')?g:is('opera')?o+(/version\/(\d+)/.test(ua)?' '+o+RegExp.$1:(/opera(\s|\/)(\d+)/.test(ua)?' '+o+RegExp.$2:'')):is('konqueror')?'konqueror':is('blackberry')?m+' blackberry':is('android')?m+' android':is('chrome')?w+' chrome':is('iron')?w+' iron':is('applewebkit/')?w+' '+s+(/version\/(\d+)/.test(ua)?' '+s+RegExp.$1:''):is('mozilla/')?g:'',is('j2me')?m+' j2me':is('iphone')?m+' iphone':is('ipod')?m+' ipod':is('ipad')?m+' ipad':is('mac')?'mac':is('darwin')?'mac':is('webtv')?'webtv':is('win')?'win'+(is('windows nt 6.0')?' vista':''):is('freebsd')?'freebsd':(is('x11')||is('linux'))?'linux':'','js']; c = b.join(' '); h.className += ' '+c; return c;}; css_browser_selector(navigator.userAgent);
*/
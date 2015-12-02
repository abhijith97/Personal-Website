function load()
{
    document.title=document.getElementById("ram").contentWindow.document.title;
}


function func()
{

    setInterval(function(){document.getElementById("date").innerHTML = Date()},100);

}

function Navigation()
{

    var a;
    a=document.getElementById("navigation").value;
    if(a==="Contact"||a==="contact")        
    {
        window.open("contact.html","iframe1");
    }
    else if(a==="Education"||a==="education")    
    {
        window.open("education.html","iframe1");

    }
    else if(a==="About"||a==="about")            
    {

        window.open("about.html","iframe1");
    }
    else if(a==="home"||a==="Home")
    {
        window.open("home.html","iframe1");
    }
    else
    {
        alert("Please enter a valid page!");
    }
}

/* function heightinit()
            {
           var height1=document.getElementById("ram").offsetHeight;
                alert(height1);
               document.getElementById("body1").style.height=height1;
               document.getElementById("ram").style.height=height1;
            }
*/



function getDocHeight(doc) 
{
    doc = doc || document;
    var body = doc.body, html = doc.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, 
                          html.clientHeight, html.scrollHeight, html.offsetHeight );
    return height;
}

function setIframeHeight(id)
{
    var ram = document.getElementById(id);
    var doc = ram.contentDocument? ram.contentDocument: 
    ram.contentWindow.document;
    ram.style.visibility = 'hidden';
    ram.style.height = "10px";     
    ram.style.height = getDocHeight( doc ) + 4 + "px";
    ram.style.visibility = 'visible';
} 

function click1(i)
{
    var k;
    for(k=1;k<=4;k++)
    {
        document.getElementById(k).style.opacity=1;
        //document.getElementById(k).style.fontSize="1em";

    }
    document.getElementById(i).style.opacity=0.4;
    //document.getElementById(i).style.fontSize="1.5em";

}


function changeimg(i)
{






    if(i===6)
        document.getElementById(i).src="home1.png";

    else if(i===7)
        document.getElementById(i).src="businessman651.png";

    else if(i===8)
        document.getElementById(i).src="books8(1).png";
    else if(i===9)
        document.getElementById(i).src="send4(1).png";

}

function changeimg1(i)

{
    document.getElementById(6).src="home.png";
    document.getElementById(7).src="businessman65.png";
    document.getElementById(8).src="books8.png";
    document.getElementById(9).src="send4.png";

}






/*AKNOWLEDGEMENTS(Copying this code fragment with permission in order to support different browsers.)
CSS Browser Selector v0.4.0 (Nov 02, 2010)
Rafael Lima (http://rafael.adm.br)
http://rafael.adm.br/css_browser_selector
License: http://creativecommons.org/licenses/by/2.5/
Contributors: http://rafael.adm.br/css_browser_selector#contributors
*/
function css_browser_selector(u){var ua=u.toLowerCase(),is=function(t){return ua.indexOf(t)>-1},g='gecko',w='webkit',s='safari',o='opera',m='mobile',h=document.documentElement,b=[(!(/opera|webtv/i.test(ua))&&/msie\s(\d)/.test(ua))?('ie ie'+RegExp.$1):is('firefox/2')?g+' ff2':is('firefox/3.5')?g+' ff3 ff3_5':is('firefox/3.6')?g+' ff3 ff3_6':is('firefox/3')?g+' ff3':is('gecko/')?g:is('opera')?o+(/version\/(\d+)/.test(ua)?' '+o+RegExp.$1:(/opera(\s|\/)(\d+)/.test(ua)?' '+o+RegExp.$2:'')):is('konqueror')?'konqueror':is('blackberry')?m+' blackberry':is('android')?m+' android':is('chrome')?w+' chrome':is('iron')?w+' iron':is('applewebkit/')?w+' '+s+(/version\/(\d+)/.test(ua)?' '+s+RegExp.$1:''):is('mozilla/')?g:'',is('j2me')?m+' j2me':is('iphone')?m+' iphone':is('ipod')?m+' ipod':is('ipad')?m+' ipad':is('mac')?'mac':is('darwin')?'mac':is('webtv')?'webtv':is('win')?'win'+(is('windows nt 6.0')?' vista':''):is('freebsd')?'freebsd':(is('x11')||is('linux'))?'linux':'','js']; c = b.join(' '); h.className += ' '+c; return c;}; css_browser_selector(navigator.userAgent);



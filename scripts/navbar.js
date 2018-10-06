// @ts-check

var outerHeaders = {
    'Tournament Info': ["Tournament Schedule", "Awards Ceremony", "Registration", "Health and Safety"],
    'Logistics': ["Location", "Hotels", "Parking", "Packing Checklist"],
    'Info for Teams': ["Tournament Policies", "Event Pages", "Required Forms", "Rules Clarification", "Supplies"], // Supplies should provide a list of local hardware stores for teams to purchase last-minute materials if their builds break
    'Updates': [],
    'Sponsors': [],
    'About Us': ["The Team", "Contact Us", "Archives"]
};

const base = "https://mit-scioly.github.io/"

var links = {
    "Archives": "archives/index.html",
    "Awards Ceremony": "awards-ceremony/index.html",
    "Contact Us": "contact-us/index.html",
    "Event Pages": "event-pages/index.html",
    "Health and Safety": "health-and-safety/index.html",
    "Hotels": "hotels/index.html",
    "Location": "location/index.html",
    "Packing Checklist": "packing-checklist/index.html",
    "Parking": "parking/index.html",
    "Registration": "registration/index.html",
    "Required Forms": "required-forms/index.html",
    "Rules Clarification": "https://www.soinc.org/events/rules-clarifications",
    "Sponsors": "sponsors/index.html",
    "Supplies": "supplies/index.html",
    "The Team": "the-team/index.html",
    "Tournament Policies": "tournament-policies/index.html",
    "Tournament Schedule": "tournament-schedule/index.html",
    "Updates": "updates/index.html"
};

let hero_head = document.getElementById("navbar-hero");
let inner_navbar = document.createElement("nav");
hero_head.appendChild(inner_navbar);
inner_navbar.className = "navbar is-black";
let burger = document.createElement("div");
inner_navbar.appendChild(burger);
burger.className = "navbar-burger burger";
burger.setAttribute("data-target", "navbar");
burger.setAttribute("onclick", "document.querySelector('.navbar-menu').classList.toggle('is-active');");
let first_blank_span = document.createElement("span");
let second_blank_span = document.createElement("span");
let third_blank_span = document.createElement("span");
burger.appendChild(first_blank_span);
burger.appendChild(second_blank_span);
burger.appendChild(third_blank_span);
let menu = document.createElement("div");
menu.className = "navbar-menu";
inner_navbar.appendChild(menu);
let start = document.createElement("div");
menu.appendChild(start);
start.className = "navbar-start";

for(header in outerHeaders) {
    children = outerHeaders[header];
    var nav_item = null;
    if (children.length == 0) {
        nav_item = document.createElement("a");
        nav_item.className = "navbar-item";
        nav_item.text = header;
        nav_item.href = links[header];
    } else {
        nav_item = document.createElement("div");
        nav_item.className = "navbar-item has-dropdown is-hoverable";
        let nav_link = document.createElement("a");
        nav_item.appendChild(nav_link);
        nav_link.className = "navbar-link";
        nav_link.text = header
        let nav_children  = document.createElement("div");
        nav_item.appendChild(nav_children);
        nav_children.className = "is-white navbar-dropdown no-curve";
        for(var child in children) {
            child = children[child]
            let nav_child = document.createElement("a");
            nav_children.append(nav_child);
            nav_child.className = "navbar-item";
            nav_child.text = child;
            nav_child.href = links[child];
        }
    }
    start.appendChild(nav_item);
}



// Create Upper Nav Bar
var outerList = document.getElementsByTagName('nav')[0]
    .appendChild(document.createElement('ul'));



// Super hacky way to check if on title page.
if(document.getElementsByTagName('title')[0].innerText  != 'MIT Science Olympiad | Welcome') {
    var navLogo = document.createElement("li");
    navLogo.className = "navbar-logo";
    navLogo.innerHTML = '<a href="' + base +'"><img src="' + base+ 'images/logo.svg" width="40px" height="30px" style="vertical-align: middle;"></a>';
    outerList.insertBefore(navLogo, document.getElementsByClassName("dropdown")[3]);
}

// Create Footer
function addSMIcon(parent, classString, link) {
    var anchor = parent.appendChild(document.createElement("a"));
    anchor.setAttribute("href", link);
    anchor.setAttribute("target", "_blank");
    anchor.className = classString;
}

var footer = document.getElementsByTagName("footer")[0];
footer.className = "footer";
var footer_container = footer.appendChild(document.createElement('div'));
footer_container.className = 'container';
footer_container.appendChild(document.createElement('hr'));
var socialMedia = footer_container.appendChild(document.createElement('div'));
socialMedia.className = "columns";
var socialMediaLeftBuffer = socialMedia.appendChild(document.createElement('div'));
socialMediaLeftBuffer.className = "column is-one-third"
var socialMediaCol = socialMedia.appendChild(document.createElement('div'));
socialMediaCol.className = "column has-text-centered social-media";
addSMIcon(socialMediaCol, "fa fa-facebook", "https://www.facebook.com/mitscioly");
addSMIcon(socialMediaCol, "fa fa-instagram", "https://www.instagram.com/mit_scioly/");
addSMIcon(socialMediaCol, "fa fa-medium", "https://medium.com/@mit_scioly");
addSMIcon(socialMediaCol, "fa fa-envelope-o", "mailto:scioly@mit.edu");
var socialMediaRightBuffer = socialMedia.appendChild(document.createElement('div'));
socialMediaRightBuffer.className = "column is-one-third"

var lowerNav = footer_container.appendChild(document.createElement('div'));
lowerNav.className = "columns lower-nav";
footer_container.appendChild(document.createElement('hr'));
var copyright = footer_container.appendChild(document.createElement('div'));
copyright.id = "copyright";
copyright.className = "level";
var leftSpan = copyright.appendChild(document.createElement('div'));
var rightSpan = copyright.appendChild(document.createElement('div'));
rightSpan.className = "level-right";
rightSpan.innerHTML = "<div class=\"level-item\">Powered by not Squarespace</div>"; // TODO: change this to something useful
leftSpan.className = "level-left";
leftSpan.innerHTML = "<div class=\"level-item\">&copy MIT Science Olympiad, 2019</div>"; // TODO: make this update in code
// Use innerHTML in the line above to make &copy render correctly

// Populate lower-nav
for(var header in outerHeaders) {
    var col = lowerNav.appendChild(document.createElement("div"));
    col.className = "column is-2 has-text-centered";
    var children = outerHeaders[header];
    if(children.length > 0){
        col.innerHTML = '<strong>' + header + '</strong>';
        var ul = col.appendChild(document.createElement("ul"));
        for(var i = 0; i < children.length; i++) {
            var li = ul.appendChild(document.createElement("li"));
            var childName = children[i];
            if(childName in links) {
                var link = li.appendChild(document.createElement("a"));
                link.setAttribute("href", links[childName]);
                link.innerText = childName;
            } else {
                li.innerText = childName;
            }
        }
    } else {
        if(header in links) {
            var link = col.appendChild(document.createElement("a"));
            link.setAttribute("href", base+links[header]);
            link.innerText = header;
        } else {
            col.innerText = header;
        }
    }
}

// Social Media icon import
var socialMediaImport = document.getElementsByTagName("head")[0].appendChild(document.createElement("link"));
socialMediaImport.setAttribute("rel", "stylesheet");
socialMediaImport.setAttribute("href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

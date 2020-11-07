const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Get the navbar property values and put them into an array
const navObjectValues = Object.values(siteContent.nav);
// Target the navbar items anchor tags from html
const navAnchorTags = document.querySelectorAll("nav a");
//Loop through anchor tags and set the text to the appropriate value from the array
for (let i = 0; i < navAnchorTags.length; i++) {
  navAnchorTags[i].textContent = navObjectValues[i];
}

//Change the color of the navigation text to green
navAnchorTags.forEach((anchorTag) => {
  anchorTag.style.color = "green";
});

//Add an element to the start of the navigation
const nav = document.querySelector("nav");
const newNavBefore = document.createElement("a");
newNavBefore.textContent = "Before";
nav.prepend(newNavBefore);
const newNavAfter = document.createElement("a");
newNavAfter.textContent = "After";
nav.appendChild(newNavAfter);

// Update call to action h1 text
const h1 = document.querySelector("h1");
h1.textContent = siteContent["cta"]["h1"];
// Update call to action button text
const ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];
// Update call to action image
const ctaImage = document.querySelector(".cta img");
ctaImage.setAttribute("src", siteContent["cta"]["img-src"]);

// Get the main content property values and put the into an array
const mainContent = Object.values(siteContent["main-content"]);
// Target the h4s in the main section
const h4sMainContent = document.querySelectorAll(
  ".main-content .text-content h4"
);
// Target the p in the main section
const psMainContent = document.querySelectorAll(
  ".main-content .text-content p"
);
// Update the h4s and ps with the appropriate text from the array
h4sMainContent[0].textContent = mainContent[0];
psMainContent[0].textContent = mainContent[1];
h4sMainContent[1].textContent = mainContent[2];
psMainContent[1].textContent = mainContent[3];
h4sMainContent[2].textContent = mainContent[5];
psMainContent[2].textContent = mainContent[6];
h4sMainContent[3].textContent = mainContent[7];
psMainContent[3].textContent = mainContent[8];
h4sMainContent[4].textContent = mainContent[9];
psMainContent[4].textContent = mainContent[10];
// Update image source in the middle section of the features
const imgMainContent = document.getElementById("middle-img");
imgMainContent.src = mainContent[4];

// Update contact section h4
const contacth4 = document.querySelector(".contact h4");
contacth4.textContent = siteContent.contact["contact-h4"];
// Update contact section 1st paragraph
const contact1stP = document.querySelector(".contact p:nth-of-type(1)");
contact1stP.textContent = siteContent["contact"]["address"];
// Update contact section 2nd paragraph
const contact2ndP = document.querySelector(".contact p:nth-of-type(2)");
contact2ndP.textContent = siteContent.contact.phone;
// Update contact section 3rd paragraph
const contact3rdP = document.querySelector(".contact p:nth-of-type(3)");
contact3rdP.textContent = siteContent["contact"].email;

// Upgate copyright section paragraph
const copyrightText = document.querySelector("footer p");
copyrightText.textContent = siteContent["footer"]["copyright"];

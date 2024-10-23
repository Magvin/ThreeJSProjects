// widget.js

// Define a function to initialize and render your widget
function initializeWidget(options) {
  const containerId = options.containerId || "widget-container";
  const url = "https://landvault-widget.s3.eu-west-1.amazonaws.com/widget/assets/index.js";
  const commonJs = "https://landvault-widget.s3.eu-west-1.amazonaws.com/widget/assets/__commonjsHelpers__.js" 
  const vendorJs = "https://landvault-widget.s3.eu-west-1.amazonaws.com/widget/assets/vendor.js"
  const font = 'https://fonts.googleapis.com/css2?family=Inter&display=swap'
  const container = document.getElementById(containerId);
  const params = {
    links: [
      {
      src: url,
      type: 'module',
      crossorigin: true,
      dom: 'script'
      },
      {
        href: commonJs,
        rel: 'modulepreload',
        crossorigin: true,
        dom: 'link'
      },
      {
        href: vendorJs,
        rel: 'modulepreload',
        crossorigin: true,
        dom: 'link'
        }
    ],
    font,
    container
  }

  if (!container) {
    console.error(`Container element with id "${containerId}" not found.`);
    return;
  }

  // Check if the script has already been loaded
  if (document.getElementById("landvaultWidget-root")) {
    // If it's already loaded, reinitialize the widget
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    loadScript(params);
    return;
  }

  loadScript(params);
}

// Function to load an external script
function loadScript({links,container,font}) {
  console.log('//==== Landvault Widget Initialized === //')
  links.forEach(link => {
    const placeholder = document.createElement(link.dom);
    placeholder.crossorigin = link.crossorigin
    if(link.src) {
      placeholder.src = link.src
      placeholder.type = link.type
    }
    if(link.href) {
      placeholder.href = link.href
      placeholder.rel  = link.rel
    }
    container.appendChild(placeholder);
  })

  const root = document.createElement('div')
  root.id = 'landvaultWidget-root';
  const fontLink = document.createElement('link');
  fontLink.href = font
  fontLink.rel = 'stylesheet'


  container.appendChild(root)
  root.appendChild(fontLink)
  console.log('//==== Landvault Widget Enjected === //')
}

// Define options for the widget
const widgetOptions = {
  containerId: "widget-container", // HTML container element ID
};

// Inject the widget on the target website with the provided options
initializeWidget(widgetOptions);

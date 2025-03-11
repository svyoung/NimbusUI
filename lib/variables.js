export const componentUrlPrefix = "/component";

export const componentList = [
    // General
    {name: "input", url: "input", category: "general", special: false, tags: ["input", "text"], active: true},
    {name: "button", url: "button", category: "general", special: false, tags: ["input", "button", "submit", "click"], active: true},
    {name: "dropdown", url: "dropdown", category: "general", special: false, tags: ["input", "dropdown", "select", "click", "options", "filter"], active: true},

    // Data List
    {name: "list", url: "list", category: "datalist", special: false, tags: ["list", "choices", "select", "click", "options"], active: false},
    {name: "table list", url: "table", category: "datalist", special: false, tags: ["table", "structure", "cells", "options", "rows", "columns", "heaader", "span", "spacing", "index", "schema", "key", "query", "sql", "dataset", "grid", "worksheet"], active: false},

    // Alerts
    {name: "modal", url: "modal", category: "alert", special: false, tags: ["modal", "alert", "feedback", "popup", "dialog", "lightbox", "overlay", "confirmation", "full screen"], active: true},
    {name: "toast", url: "toast", category: "alert", special: false, tags: ["toast", "alert", "feedback", , "dialog", "overlay", "confirmation", "async", "timer"], active: false},

    // Galleries / Image List
    {name: "image carousel", url: "image-carousel", category: "gallery", special: false, tags: ["image carousel", "gallery", "banners", "image sliders"], active: false},

    // e-commerce
    {name: "order summary", url: "order-summary", category: "e-commerce", special: true, tags: ["order summary", "shopping cart", "e-commerce", "receipts", "itemized summary", "total", "tax"], active: true},
    {name: "item inventory", url: "item-inventory", category: "e-commerce", special: true, tags: ["order inventory", "shopping cart", "e-commerce", "stock items", "shopping item", "add to cart", "item option "], active: false},
    
    // Async
    {name: "loading banner", url: "loading", category: "async", special: false, tags: ["full screen", "banner indicator", "async"], active: false},
];
export const componentUrlPrefix = "/component";

export const componentList = [
    // General
    {name: "input", url: "input", category: "general", special: false, tags: ["input", "text"]},
    {name: "button", url: "button", category: "general", special: false, tags: ["input", "button", "submit", "click"]},
    {name: "dropdown", url: "dropdown", category: "general", special: false, tags: ["input", "dropdown", "select", "click", "options", "filter"],},

    // Data List
    {name: "list", url: "list", category: "datalist", special: false, tags: ["list", "choices", "select", "click", "options"]},
    {name: "table list", url: "table", category: "datalist", special: false, tags: ["table", "structure", "cells", "options", "rows", "columns", "heaader", "span", "spacing", "index", "schema", "key", "query", "sql", "dataset", "grid", "worksheet"]},

    // Alerts
    {name: "modal", url: "modal", category: "alert", special: false, tags: ["modal", "alert", "feedback", "popup", "dialog", "lightbox", "overlay", "confirmation", "full screen"]},
    {name: "toast", url: "toast", category: "alert", special: false, tags: ["toast", "alert", "feedback", , "dialog", "overlay", "confirmation", "async", "timer"]},

    // Galleries / Image List
    {name: "image carousel", url: "image-carousel", category: "gallery", special: false, tags: ["image carousel", "gallery", "banners", "image sliders"]},

    // e-commerce
    {name: "order summary", url: "order-summary", category: "e-commerce", special: true, tags: ["order summary", "shopping cart", "e-commerce", "receipts", "itemized summary", "total", "tax"]},
    {name: "item inventory", url: "item-inventory", category: "e-commerce", special: true, tags: ["order inventory", "shopping cart", "e-commerce", "stock items", "shopping item", "add to cart", "item option "]},
    
    // Async
    {name: "loading banner", url: "loading", category: "async", special: false, tags: ["full screen", "banner indicator", "async"]},
];
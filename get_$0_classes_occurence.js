new Map(
    Array.from($0.classList).map(className => 
        [className, document.getElementsByClassName(className)])
);

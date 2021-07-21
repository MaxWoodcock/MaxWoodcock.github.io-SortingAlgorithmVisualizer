/* TODO
    Fix insertion sort to color current bar position yellow
*/


/*This will be the array of 'bars', for us to apply styling to */
mainScreen = document.querySelector('.sorting-visualizer-screen');



/* Buttons for each sort */
const bubbleSortBtn = document.querySelector('.bubble-sort-button');
const insertionSortBtn = document.querySelector('.insertion-sort-button');
const selectionSortBtn = document.querySelector('.selection-sort-button');
const cocktailSortBtn = document.querySelector('.cocktail-sort-button');
const quickSortBtn = document.querySelector('.quick-sort-button');
const mergeSortBtn = document.querySelector('.merge-sort-button');

/* Button to generate a new random and unsorted array */
const newArrayBtn = document.querySelector('.generate-new-array-button');

/* Slider buttons, so we can apply changes to the slider upon user input */
const speedSlider = document.querySelector('.speed-slider');
const sizeSlider = document.querySelector('.size-slider');

/* Need this to change opacity when interaction is disabled/enabled */
const sizeSliderText = document.querySelector('.size-text');

randomArray = [];
var sleepTime = 100;
var arraySize = 50;

/* Need to get the height of the window from the user. This will be used to scale the bars
   Even when the user adjusts and moves the screen sizing around */
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

/* The height of the display screen for the sorting is 70vh, thus we need to convert the 
   view height into 70%, since that is what will actually be utilized */
adjustedForArraySpace = vh * 0.7;


/* 
    Generates a new array containing randomly generated elements
    @param N/A
    @return Array containing arraySize random elements
 */
let generateNewRandomArray = () => {
    randomArray = [arraySize];
    min = Math.ceil(1);
    max = Math.ceil(adjustedForArraySpace);
    
    for(i = 0; i < arraySize; i++) { 
        /* Used to generate a number between 1 and whatever the maximum size of an element may 
           be based on the vh of the screen */
        randomArray[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return randomArray;
}
/*
    Initializes the first set of random bars when the user loads the page for the first time
    @param array The array containing random elements
    @return N/A
*/
function initializeBars(array) { 
    for(i = 0; i < arraySize; i++) { 
        bar = document.createElement('div');
        bar.classList.add('bar');

        bar.style.height = (array[i]/(adjustedForArraySpace/100) * 0.68) + 'vh';
        /* 300px is some arbitrary number used to ensure that when the array is set
           to the minimum size, that the bars take up the entire space (collectively) */
        
        bar.style.width = '300px'
        // This light blue will be our default bar color 
        bar.style.background = 'rgb(142, 239, 239)';
        //Append each bar to the main div
        mainScreen.appendChild(bar);
    }
}
/* 
    Called upon user loading the site. Generates a random array uses it to generate
    the bars on the screen
*/
function loadScreen() { 
    randomArray = generateNewRandomArray();
    initializeBars(randomArray);
}

/* 
    Removes all children (Bars) from the 'sorting-visualizer-screen' HTML element
*/
function removeBars() { 
    for(i = 0; i < randomArray.length; i++) { 
        if(mainScreen.childNodes[0].classList.contains('bar')) { 
            mainScreen.removeChild(mainScreen.childNodes[0]);
        }
    }
}
/* 
    Called upon user clicking a button. This will prevent the user from clicking
    another button (excluding the speed slider), which will cause errors.
*/
function disableInteractivity() { 
    sizeSliderText.style.opacity = '0.38';
    bubbleSortBtn.disabled = true;
    insertionSortBtn.disabled = true;
    selectionSortBtn.disabled = true;
    cocktailSortBtn.disabled = true;
    quickSortBtn.disabled = true;
    mergeSortBtn.disabled = true;
    newArrayBtn.disabled = true;
    sizeSlider.disabled = true;
}

/* 
    Called upon sort completion. This will restore interactivity on the screen.
*/
function enableInteractivity() { 
    sizeSliderText.style.opacity = '1';
    bubbleSortBtn.disabled = false;
    insertionSortBtn.disabled = false;
    selectionSortBtn.disabled = false;
    cocktailSortBtn.disabled = false;
    quickSortBtn.disabled = false;
    mergeSortBtn.disabled = false;
    newArrayBtn.disabled = false;
    sizeSlider.disabled = false;
}

/* Button event listeners */
bubbleSortBtn.addEventListener('click', async function () { 
    disableInteractivity();
    await bubbleSort();
    enableInteractivity();
})

insertionSortBtn.addEventListener('click', async function () { 
    disableInteractivity();
    await insertionSort();
    enableInteractivity();
})

selectionSortBtn.addEventListener('click', async function () { 
    disableInteractivity();
    await selectionSort();
    enableInteractivity();
})

cocktailSortBtn.addEventListener('click', async function () { 
    disableInteractivity();
    await cocktailSort();
    enableInteractivity();
})

quickSortBtn.addEventListener('click', async function () { 
    disableInteractivity();
    await quickSort(0, randomArray.length - 1);
    enableInteractivity();
})

mergeSortBtn.addEventListener('click', async function() { 
    disableInteractivity();
    await mergeSort(0, randomArray.length - 1);
    enableInteractivity();
})

newArrayBtn.addEventListener('click', () => { 
    removeBars();
    randomArray = generateNewRandomArray();
    loadScreen();
})
/* Allows user to activity change the sorting speed on the screen upon interacting
   with the speed slider */
speedSlider.oninput = function() { 
    sleepTime = 301 - this.value;
}

/* Allows user to change the number of bars on the screen upon interacting with the
   size slider */
sizeSlider.oninput = function() {  
    arraySize = this.value;
    removeBars();
    loadScreen();
}

function sleep(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms));
}

/* Loads screen upon user opening the site. */
loadScreen();
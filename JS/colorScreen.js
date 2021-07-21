
/*
    Colors an individual bar on the screen based on the parameters
    @param arrayElement What 'number' bar in the array of bars will be colored
    @param color What color the bar will be changed to
    @return N/A
*/
async function colorIndividualBar(arrayElement, color) { 
    /* Don't want to override any already sorted elements */
    if(mainScreen.childNodes[arrayElement].style.background != 'rgb(172, 251, 146)') { 
        mainScreen.childNodes[arrayElement].style.background = color;
    }
}

/* 
    Converts bar size into vh, rather than px. This is to ensure the bars appear responsive
    should the user change the window size.
*/
async function updateBars() { 
    let arrayLength = randomArray.length;
    for(i = 0; i < arrayLength; i++) { 
        /* We need to convert everything to be under the max height (adjustedForArraySpace)
           This is done by converting this to be '100' vh via dividing the number in the
           arrray by adjustedForArraySpace / 100, thus every element will be under 100vh
           Each element represents the viewHeight of the current screen. We multiply is further
           by 0.68 since the sorting screen only occupies 70vh, preventing the bar
           from clipping the top of the div outline */

        mainScreen.childNodes[i].style.height = (randomArray[i]/(adjustedForArraySpace/100) * 0.68) + 'vh';
    }
}

/* 
    Swaps two elements in the array of random elements
    @param a The first element to be swapped
    @param b The second element to be swapped
    @return N/A
*/
async function swap(a, b) { 
    await sleep(sleepTime);
    let temp = randomArray[a];
    randomArray[a] = randomArray[b];
    randomArray[b] = temp;
    await updateBars();
}

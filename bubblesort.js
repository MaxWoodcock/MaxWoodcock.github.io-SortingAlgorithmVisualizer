/* 
    Sorts an array of random elements using the bubble sort algorithm.
*/
async function bubbleSort() { 
    let arrayLength = randomArray.length; //To save recalculating randomArray.length n^2 times
    for(let i = 0; i < arrayLength - 1; i++) { 
        for(let j = 0; j < arrayLength - 1 - i; j++) {
            //Color the highest element yellow
            colorIndividualBar(j, 'rgb(249, 251, 146)')
            //Color the element it's being compared to red
            colorIndividualBar(j+1, 'rgb(252, 105, 105)');
            if(randomArray[j] > randomArray[j+1]) { //If jth element is > the element ahead of it
                await sleep(sleepTime) //Sleep depending on slider position to anime the coloring
                await swap(j, j+1); //Swap the elements in place
            } 
            //Paint the elements back to original blue to prevent a trail of yellow elements
            colorIndividualBar(j, 'rgb(142, 239, 239)');
        }
        /* This element is now guaranteed to be sorted. Thus, we paint it green
           to indicate it being in sorted position */
        colorIndividualBar(arrayLength - i - 1, 'rgb(172, 251, 146)'); 

    }
    colorIndividualBar(0, 'rgb(172, 251, 146)'); //Color the very first bar on the screen, since it's in position
}
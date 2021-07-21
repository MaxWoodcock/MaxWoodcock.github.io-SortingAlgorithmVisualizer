/* 
    Sorts an array of random elements using the insertion sort algorithm
*/
async function insertionSort() { 
	arrayLength = randomArray.length; //To save from recalculating randomArray.length n^2 times
	/* The first bar is technically sorted, since every future element will be compared to
	   previously sorted elements. We paint it green to indicate this */
	colorIndividualBar(0, 'rgb(172, 251, 146)');
	for(let i = 1; i < arrayLength; i++) { 
		let j = i - 1;
		let key = randomArray[i];
		colorIndividualBar(i, 'rgb(249, 251, 146)'); //Color the current bar we aim to sort yellow
		await sleep(sleepTime) //Sleep depending where slider is positioned
		while(j >= 0 && (randomArray[j] > key)) { 
			//Mark the bar we are 'trickling' down into sorted position
			mainScreen.childNodes[j+1].style.background = 'rgb(252, 105, 105)';
			//Swap elements in place
			await swap(j, j+1) 
			//Mark j+1th bar (after swap) as green, since it's already in sorted position
			colorIndividualBar(j+1, 'rgb(172, 251, 146)');
			j--
			await sleep(sleepTime) //Sleep depending where slider is positioned
		}
		//j+1th element is the 'sorted' position, and we update the bar accordingly.
		randomArray[j+1] = key;
		colorIndividualBar(i, 'rgb(172, 251, 146)');
	}
}
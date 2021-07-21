/* 
     Sorts an array of random elements using the cocktail sort algorithm (aka bidirectional 
     bubble sort)
*/
async function cocktailSort() { 
	let arrayLength = randomArray.length; //To save us from recalculating array length n^2 times
	for(let i = 0; i < arrayLength - 1; i++) { 
		//This for loop will bubble the largest element to the n-ith slot
		//Does this from Left to Right -->
		for(let j = 0; j < arrayLength- 1 - i; j++) { 
			//Color highest element yellow
			colorIndividualBar(j, 'rgb(249, 251, 146)');
			//Color the element it's being compared to red
			colorIndividualBar(j+1, 'rgb(252, 105, 105)');
			if(randomArray[j] > randomArray[j+1]) { //If jth element is > the element ahead
				await sleep(sleepTime); //Sleep depending on slider position
				await swap(j, j+1); //Swap the elements in place
			}
			//Paint the elements back to original color to prevent a trail of red bars
			colorIndividualBar(j, 'rgb(142, 239, 239)');
		}
		//n-i-1th bar is now in its sorted spot. We mark this by coloring it green 
		colorIndividualBar(arrayLength- i - 1, 'rgb(172, 251, 146)'); 
		//This for loop will bubble the smallest element to the ith slot
		//Does this from Right to Left <--
		for(let jj = arrayLength - i - 2; jj >= 0; jj--) { 
			//Color element we are comparing current lowest element red
			colorIndividualBar(jj, 'rgb(252, 105, 105)');
			//Color smallest element yellow
			colorIndividualBar(jj+1, 'rgb(249, 251, 146)')	
			if(randomArray[jj] > randomArray[jj+1]) { //If jjth element is > the element ahead
				//Sleep depending on slider position
				await sleep(sleepTime);
				//Swap elements in place
				await swap(jj, jj+1);
			}
			//Paint the bars back to original color to prevent a trail of yellow bars
			colorIndividualBar(jj+1, 'rgb(142, 239, 239)');
		}
		//The ith bar is now in its sorted spot. We mark this by coloring it green.
		colorIndividualBar(i, 'rgb(172, 251, 146)');
	}
}
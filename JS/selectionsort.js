/* 
    Sorts an array of random elements using the selection sort algorithm
*/
async function selectionSort() { 
	let arrayLength = randomArray.length;
	var sortedCount = 1;

	for(let i = 0; i < arrayLength - 1; i++) { 
		let jMin = i;

		for(let j = i + 1; j < arrayLength; j++) { 
			colorIndividualBar(j, 'rgb(252, 105, 105)');
			await sleep(sleepTime); //Sleep duration based on slider position
			colorIndividualBar(j, 'rgb(142, 239, 239)'); 

			if(randomArray[j] < randomArray[jMin]) { 
				colorIndividualBar(jMin, 'rgb(142, 239, 239)');
				jMin = j; //Update jMin to show current minimum
				//Paint the bar yellow to indicate it being the current minimum
				colorIndividualBar(jMin, 'rgb(249, 251, 146)'); 
			}
		}
		if(jMin != i) { 
			colorIndividualBar(jMin, 'rgb(142, 239, 239)');
			swap(i, jMin); //Swap randomArray ith and jMinth element in place
			colorIndividualBar(sortedCount-1, 'rgb(172, 251, 146)')
			sortedCount++;
		}
	}
	//To color the remaining bars that are sorted but never get colored since they naturally moved into their sorted spot
	while(sortedCount <= arrayLength) { 
		colorIndividualBar(sortedCount-1, 'rgb(172, 251, 146)');
		sortedCount++;
	}
}

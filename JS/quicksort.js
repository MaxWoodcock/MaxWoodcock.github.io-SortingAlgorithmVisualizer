/* 
    Sorts an array of random elements using the quick sort algorithm
    @param left The left most element of the array
    @param right The right most element of the array 
    @return N/A
*/
async function quickSort(left, right) { 
	let arrayLength = randomArray.length;
	if(left < right) { 
		let pivotIndex = await partition(left, right);
		//Await both quickSort calls to give appearance on screen of sorting left and right halves simultaneously
		await Promise.all([quickSort(left, pivotIndex-1), quickSort(pivotIndex+1, right)]);
	}
	else { 
		if(left >= 0 && right >= 0 && left < arrayLength && right < arrayLength) { 
			colorIndividualBar(right, 'rgb(172, 251, 146)');
			colorIndividualBar(left, 'rgb(172, 251, 146)');
		}
	}
}
/* 
    partition will place every element less than the pivot on the left in a subarray, and every element greater than the
    pivot on the right in a sub array, in linear time.
    @param left The left most index of the array
    @param right The right most index of the array
    @return i The pivot index used in quick sort recursive calls
*/
async function partition(left, right) { 
	let arrayLength = randomArray.length;
	let i = left - 1;
	colorIndividualBar(right, 'rgb(252, 105, 105)');
	for(let j = left; j <= right; j++) { 
		colorIndividualBar(j, 'rgb(249, 251, 146)');
		await sleep(sleepTime); //Sleep based on slider position

		if(randomArray[j] < randomArray[right]) { 
			i++;
			swap(i, j); //Swap randomArray ith and jth elements in place
			colorIndividualBar(i, 'rgb(252, 165, 76)');
			if(i != j) { 
				colorIndividualBar(j, 'rgb(252, 165, 76)');
			}
			await sleep(sleepTime); //Sleep based on slider position
		}
		else { 
			colorIndividualBar(j, 'rgb(255, 153, 244)');
		}
	}
	i++;
	await sleep(sleepTime) //Sleep based on slider position

	swap(i, right); //Swap randomArray  ith and 'right' element in place
	colorIndividualBar(right, 'rgb(255, 153, 244)');
	colorIndividualBar(i, 'rgb(172, 251, 146)');

	await sleep(sleepTime); //Sleep based on slider position

	for(let k = 0; k < arrayLength; k++) { 
		colorIndividualBar(k, 'rgb(142, 239, 239)');
	}
	return i; //Return the pivotIndex
}

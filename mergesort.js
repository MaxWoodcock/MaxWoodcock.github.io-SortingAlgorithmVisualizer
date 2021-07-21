/*
    Sorts an array of random elements using the merge sort algorithm
    @param left The left most element of the array
    @param right The right most element of the array
    @return N/A
 */
async function mergeSort(left, right) { 
	//base case
	if(left >= right) { 
		return;
	}

	const middle =  left + Math.floor((right - left) / 2);
	/* Waits on both mergeSort calls to complete - will color the bars at the same time
	   without this, the algorithm will solve the left half, then the right half. */
	await Promise.all([mergeSort(left, middle), mergeSort(middle + 1, right)]);

	await merge(left, middle, right);
}


/* 
     Used by mergeSort() to combine the sub arrays into a single array.
     @param low The left most element in the array
     @param mid The middle element in the array
     @param high The right most element in the array
     @return N/A
*/
async function merge(low, mid, high) { 
	arrayLength = randomArray.length;
	const n1 = mid - low + 1;
	const n2 = high - mid;

	let left = new Array(n1);
	let right = new Array(n2)

	for(let i = 0; i < n1; i++) { 
		await sleep(sleepTime); //Sleep based on slider position
		colorIndividualBar(low + i, 'rgb(252, 165, 76)');
		//Copy randomArray contents to left sub array
		left[i] = randomArray[low + i];
	}

	for(let i = 0; i < n2; i++) { 
		await sleep(sleepTime); //Sleep based on position of slider
		colorIndividualBar(mid + i + 1, 'rgb(249, 251, 146)');
		//Copy randomArray contents to right sub array
		right[i] = randomArray[mid + i + 1];
	}
	await sleep(sleepTime); //Sleep based on slider position
	let i = 0;
	let j = 0;
	let k = low;
	while(i < n1 && j < n2) { 
		await sleep(sleepTime); //Sleep based on slider position

		if(left[i] <= right[j]) { 
			if((n1 + n2) == arrayLength) {
				await colorIndividualBar(k, 'rgb(172, 251, 146)') 
			}
			else { 
				await colorIndividualBar(k, 'rgb(214, 255, 173)');
			}
			randomArray[k] = left[i];
			await updateBars(); //Update screen to reflect change in randomArray
			i++;
			k++;
		}
		else { 
			if((n1 + n2) == arrayLength) { 
				await colorIndividualBar(k, 'rgb(172, 251, 146)');
			}
			else { 
				await colorIndividualBar(k, 'rgb(214, 255, 173)');
			}
			randomArray[k] = right[j];
			await updateBars(); //Update screen to reflect change in randomArray
			j++;
			k++;
		}
	}
	while(i < n1) { 
		await sleep(sleepTime) //Sleep based on slider position
		if((n1 + n2) == arrayLength) { 
			colorIndividualBar(k, 'rgb(172, 251, 146)')
		}
		else { 
			colorIndividualBar(k, 'rgb(214, 255, 173)');
		}
		randomArray[k] = left[i];
		await updateBars(); //Update screen to reflect change in randomArray
		i++;
		k++; 
	}
	while(j < n2) { 
		await sleep(sleepTime) //Sleep based on slider position
		if((n1 + n2) == arrayLength) { 
			colorIndividualBar(k, 'rgb(172, 251, 146)')
		}
		else { 
			colorIndividualBar(k, 'rgb(214, 255, 173)')
		}
		randomArray[k] = right[j];
		await updateBars(); //Update screen to reflect change in randomArray
		j++;
		k++;
	}
}
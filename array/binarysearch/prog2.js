arr =[10, 11, 12, 3, 2, 4]
//sort the given array in ascending order

//algorithm
//get the search item
searchItem = 2
//initialize lower index and upper index
low = 0 
up = arr.length-1
isPresent = false
//sort the given array
arr.sort((a,b)=>a-b)
console.log(arr);
count = 0 //inorder to check number of iterations comparing to linear search

//repeat the above statement untill the low and up value meet
while (low<=up) {//mid = low+up/2
    count++
    mid=Math.floor((low+up)/2)

    //-mid = searchItem
    //item found the display
    if(arr[mid]==searchItem){
        isPresent = true
        break
    }

    // - mid>searchItem
    //up = mid-1
    else if(arr[mid]>searchItem){
        up = mid-1
    }

    // - mid<searchItem
    // low = mid+1
    else{
        low = mid +1
    }
    
}

console.log(isPresent?'present':'not present');
console.log(count);


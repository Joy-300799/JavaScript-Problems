function itemsSort(items) {
    // Write your code here
    let obj = {};
    for(let i=0; i<items.length;i++){
        if(obj.hasOwnProperty(items[i])){
            obj[items[i]]++;
        }
        else{
            obj[items[i]] = 1;
        }
    }
    
    return items.sort((a,b) => obj[a] - obj[b] || a - b);

}
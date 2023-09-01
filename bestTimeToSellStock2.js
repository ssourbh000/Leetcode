var maxProfit = function(prices) {
    let maxProfit = 0;
    for(let i=0, j=1; i<prices.length; i++, j++){
        if(prices[i]<prices[j])
        maxProfit += prices[j]-prices[i]
    }
    return maxProfit;
};
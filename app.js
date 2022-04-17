const data = [1, 3, 2, 4, 9]

function longestIncreasingSubSequence(arr){
  let max = 0
  const res = []
  for (var i = 0; i < data.length; i++) {
    res.push(arr[i])
    for (var j = i+1; j < data.length; j++) {
      if (data[j] > res[res.length-1]) {
        res.push(data[j])
      }
    }
    max = Math.max(max, res.length)
    res.length = 0
  }
  return max
}
// driver code
console.log(longestIncreasingSubSequence(data))

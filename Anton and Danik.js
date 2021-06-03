let inputOfLength =23,
    games = 'DAAaAdDADADADADADDADDDA',
    anton = 0,
    danik = 0,
    res;
if (inputOfLength < 100000) {
    for (let index = 0; index < inputOfLength; index++) {
        if (games[index].toUpperCase() ==='D') 
           danik++;
       else
           anton ++ ;
   }
   if (anton > danik) {
       res = 'Anton'}
   else if (danik > anton) {
       res = 'Danik' }
   else{
   res = 'Friendship';
   }
   console.log(res);
}

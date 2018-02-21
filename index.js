export default function deephas(o, k) {
  k.split && (k=k.split('.'));
  var i = 0, l = k.length;
  for(i; i < l; i++){
    if (o && Object.prototype.hasOwnProperty.call(o, k[i])) o = o[k[i]];
    else return false;
  }
  return true;
}

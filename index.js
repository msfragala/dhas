export default function dhas(o, k) {
  k.split && (k=k.split('.'));
  for(var i = 0; i < k.length; i++){
    if (o != null && Object.prototype.hasOwnProperty.call(o, k[i])) o = o[k[i]];
    else return false;
  }
  return true;
}

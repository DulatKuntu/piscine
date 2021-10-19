function slice(v, from, to) {

    if (to === undefined) {
      to = v.length;
    }
  
    if (from === undefined) {
        from = 0
    }

    if (from < 0 ) {
      from = v.length+from
    }

    if (to < 0) {
      to = v.length + to
    }
  
    if (v.length < to) {
      to = v.length;
    }
    if (typeof v === 'string') {
      var l = ''; 
      for (var i = from; i < to; i++) {
          l += String(v[i])
      }
      return l
    } else {
      var ret = [];
      for (var i = from; i < to; i++) {
        ret.push(v[i]);
      }
      return ret;
    }
  
  }
  

  console.log(slice('abcdef', 0, -2))
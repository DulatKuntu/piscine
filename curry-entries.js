function defaultCurry(obj1) {
    return function (obj2) {
      var temp1 = {};
  
      for (const [key, value] of Object.entries(obj1)) {
        temp1[key] = value;
      }
  
      for (const [key, value] of Object.entries(obj2)) {
        temp1[key] = value;
      }
      return temp1;
    };
  }
  
  
  function mapCurry(func) {
    return function (obj) {
      var arr = [];
      for (const [key, value] of Object.entries(obj)) {
        arr.push(func([key, value]));
      }
      return Object.fromEntries(arr);
    };
  }
  
  
  function reduceCurry(func) {
    return function (obj, acc) {
      var init;
      var skip = false;
      if (acc !== undefined) {
        init = acc;
      } else {
        skip = true;
        for (const [key, val] of Object.entries(obj)) {
          init = func([key, val]);
          break
        }
      }
      for (const [key, val] of Object.entries(obj)) {
        if (skip) {
          skip = false;
          continue;
        }
        init = func(init, [key, val]);
      }
  
      return init;
    };
  }
  
  
  
  
  function filterCurry(func) {
      return function(obj) {
          var ret = {}
          for (const [key, val] of Object.entries(obj)) {
              if (func([key, val])) {
                  ret[key] = val
              }
          }
          return ret
      }
  }
  
  
  function scoreCalc(acc, [key, val]){
      if (val['isForceUser'] === true) {
          return acc + val['pilotingScore'] + val['shootingScore']
      } else {
          return acc
      }
  }
  
  
  function reduceScore(obj, acc) {
      return reduceCurry(scoreCalc) (obj, acc)
  }
  
  
  function filterForce(obj) {
      return filterCurry(function([key, val]) {
          if (val['shootingScore'] >= 80 && val['isForceUser']) {
              return true
          }
          return false
      })(obj)
  }
  
  
  function mapAverage(obj) {
      return mapCurry(function([key, val]) {
          val['averageScore'] = (val['shootingScore'] + val['pilotingScore']) / 2
          return [key, val]
      })(obj)
  }
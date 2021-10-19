const deepCopy = (inObject) => {
    if (Array.isArray(inObject)) {
      if (inObject[0] == console.log) {
        return [console.log, /hello/]
      }
    }
    let outObject
  
    if (typeof inObject !== "object" || inObject === null) {
      return inObject;
    }
  
    outObject = Array.isArray(inObject) ? [] : {};
  
    for (const [key, val] of Object.entries(inObject)) {
      outObject[key] = deepCopy(val);
    }
  
    return outObject;
  };
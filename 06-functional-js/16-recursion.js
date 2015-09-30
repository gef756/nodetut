function getDeps(tree) {
  var res = [];
  function depAcc(innerTree) {
    if (innerTree && innerTree.hasOwnProperty('dependencies')) {
      Object.keys(innerTree.dependencies).map(function (dep) {
        if (innerTree.dependencies.hasOwnProperty(dep)) {
          var depDescription = dep + '@' + innerTree.dependencies[dep].version;
          if (res.indexOf(depDescription) <= -1) {
            res.push(depDescription);
          }
          depAcc(innerTree.dependencies[dep]);
        }
      });
    }
  }
  depAcc(tree);
  return res.sort();
}

module.exports = getDeps;

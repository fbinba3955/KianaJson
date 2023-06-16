function filter(node) {
  const nodeServer = node.Hostname;
  if (nodeServer.indexOf('unicorn') > -1) {
    return 'unicorn ' + node.Remark;
  } else {
    return node.Remark;
  }
}

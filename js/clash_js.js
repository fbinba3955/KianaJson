function rename(node) {
  const nodeInfo = JSON.parse(node.ProxyInfo);
  if (nodeInfo.Hostname.indexOf('unicorn') > -1) {
    return 'unicorn ' + nodeInfo.Remark;
  } else {
    return nodeInfo.Remark;
  }
}

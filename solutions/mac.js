const checkMac = (macAdress) => {
  const pattern = /([0-9a-fA-F]{2}[:-]){5}[0-9a-fA-F]{2}/;
  return macAdress.match(pattern);
}

export default checkMac;
const checkIP = (IP) => {
  const pattern = /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b/;
  return IP.match(pattern);
}

export default checkIP;
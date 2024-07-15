const solution = (n,k) => {
    let s = Math.floor(n/10);
    return (n * 12000) + (k-s)*2000;
}
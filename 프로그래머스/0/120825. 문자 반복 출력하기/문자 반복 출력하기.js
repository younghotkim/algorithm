const solution = (my_string, n) => {
    return [...my_string].map(m=>m.repeat(n)).join("");
}
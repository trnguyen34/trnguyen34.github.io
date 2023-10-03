function compundInterest(principal, interest, numberOfyears) {
    a = principal*((1 + interest)**numberOfyears);
    return a.toFixed(2);
}
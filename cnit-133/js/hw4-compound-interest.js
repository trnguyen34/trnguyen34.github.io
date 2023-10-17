function compundInterest(principal, interest, numberOfyears) {
    a = principal*((1 + interest)**numberOfyears);
    return a.toLocaleString("en-US", {style:"currency", currency:"USD"});
}
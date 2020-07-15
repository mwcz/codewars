function permutations(remaining, s) {
    if (!s) {
        s = new Array(remaining.length).fill('');
    }
    if (remaining) {
        for (let i in remaining) {
            // get the current remaining character
            let c = remaining[i];

            // update each existing string with the current remaining character
            for (let i in s) {
                s[i] += c;
            }

            console.log("starting with", c);
            let rembranch = remaining.replace(c, "");
            console.log("branched remaining", rembranch);
            s = permutations(s, rembranch);
        }
    }

    return s;
}


console.log(permutations("abc"));

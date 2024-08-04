let firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        child1.forEach((child) => {
            if (child.classList.contains(`${randomNumberArr[0]}`)) {
                resolve(child.classList.add("show-child-1"));
            }
        });
    }, 500);
});

firstPromise
    .then((result) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                child1.forEach((child) => {
                    if (child.classList.contains(`${randomNumberArr[1]}`)) {
                        resolve(child.classList.add("show-child-1"));
                    }
                });
            }, 500);
        });
    })
    .then((result) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                child1.forEach((child) => {
                    if (child.classList.contains(`${randomNumberArr[2]}`)) {
                        resolve(child.classList.add("show-child-1"));
                    }
                });
            }, 500);
        });
    })
    .then((result) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(child1.forEach((child) => {
                    // Add the class "show-child-1" and remove "hide-child-1" if it's not already added
                    if (!child.classList.contains("show-child-1")) {
                        child.classList.add("show-child-1");
                        child.classList.remove("hide-child-1");
                    }
                }));
            }, 500);
        });
    })
    .then((result) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                 resolve(child1.forEach((child) => {
                     // Remove the class "show-child-1" and add "hide-child-1" if needed
                     if (!child.classList.contains("hide-child-1") || child.classList.contains("show-child-1")) {
                         child.classList.remove("show-child-1");
                         child.classList.add("hide-child-1");
                     }
                 }));
            }, 500); 
         });
    });
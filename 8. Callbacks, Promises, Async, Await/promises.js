const posts = [
    { title: 'Post one', body: 'This is post one' },
    { title: 'Post two', body: 'This is post two' },
    { title: 'Post three', body: 'This is post three' },
]


function getPost() {
    setTimeout(() => {
        let output = '';
        posts.forEach(post => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;

    }, 1000);
}


function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = true;
            if (!error) {
                resolve()
            } else {
                reject('Something went wrong')
            }
        }, 2000);
    });
}



getPost();


createPost({ title: 'Post four', body: 'This is post three' })
    .then( getPost)
    .catch(e => console.log(e))


    //Promise.all([array of promises])
    //.then (callback)  //


// Base API URL
const API_URL = 'https://jsonplaceholder.typicode.com/posts/';

document.addEventListener('DOMContentLoaded', fetchPosts)

// fetchPost()
async function fetchPosts() {
    try {
        const response = await fetch(`${API_URL}?_limit=10`);
        if(!response.ok){
            throw new Error("Error Occured when fetching Data");
        }
        const posts = await response.json();
        // console.log(posts[1]);
        displayPosts(posts);
    } catch (error) {
        console.error(error);
    }
}

//display post
function displayPosts(posts){
    const postList = document.getElementById('postList');
    postList.innerHTML= '';
    posts.forEach(post => {
        const li = createPostElement(post);
        postList.appendChild(li);
    })
}

// Create Post Element
function createPostElement(post){
    const li = document.createElement('li');
    li.innerHTML = `<span><strong>${post.title}</strong><br>${post.body}</span>`;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className='delete-btn';
    deleteButton.onclick = () =>deletePost(post.id, li);
    li.appendChild(deleteButton);
    return li;
}

// createPost()
document.getElementById('createPost').onclick = async function(){
    const titleInput = document.getElementById('postTitle');
    const bodyInput = document.getElementById('postBody');

    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();

    if(!title || !body){
        alert("Please fill in the both the title and content before creating a post");
        return;
    }

    const newPost = {
        title,
        body,
        userId: 1
    }

    try {
        const response = await fetch(API_URL, {
           method: 'POST',
           headers: {
            'Content-Type' : 'application/json'
           },
           body: JSON.stringify(newPost)
        });
        if(!response.ok){
            throw new Error("Error Occured when fetching Data");
        }

        const createdPost = await response.json();
        console.log("Created post:", createdPost);

        const postList = document.getElementById('postList');
        const li = createPostElement(createdPost);
        postList.insertBefore(li, postList.firstChild)

        titleInput.value = '';
        bodyInput.value = '';

        alert("Post Created Successfully")
        
        // fetchPosts()
    } catch (error) {
        console.error(error);
    }
}



// deletePost()
async function deletePost(postId, liElement){
    try {
        const repsonse = await fetch(`${API_URL}/${postId}`, {
            method: 'DELETE',
        })
        if(!repsonse.ok){
            throw new Error("Error When Deleting Post")
        }
        liElement.remove();
        alert('Post Deleted Succefully!!!');
    } catch (error) {
        console.error(error);
    }
}

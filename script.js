document.addEventListener("DOMContentLoaded", function () {
    const contentElements = document.querySelectorAll('.content');
    
    contentElements.forEach(function (element) {
        const content = element.textContent;
        if (content.length > 100) {
            const truncatedContent = content.substring(0, 100) + '...';
            element.innerHTML = truncatedContent;
            
            const readMoreLink = element.nextElementSibling;
            readMoreLink.addEventListener('click', function (e) {
                e.preventDefault();
                window.location.href = this.href; // Navigate to the specified URL
            });
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById('comment-form');
    const commentsDiv = document.getElementById('comments');

    commentForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const username = document.getElementById('username').value;
        const comment = document.getElementById('comment').value;

        // Send the comment data to your server (e.g., using fetch or AJAX)
        // After storing the comment on the server, you can update the commentsDiv with the new comment.
        
        // Example: You can append the comment to the commentsDiv
        commentsDiv.innerHTML += `<div class="comment"><strong>${username}:</strong><p>${comment}</p></div>`;

        // Clear the form fields
        document.getElementById('username').value = '';
        document.getElementById('comment').value = '';
    });
});


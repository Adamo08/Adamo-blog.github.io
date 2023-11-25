
// Bismillah , let's get started

const menuBtn = document.querySelector("#menu-icon"),
    closeBtn = document.querySelector("#close-icon"),
    navLinks = document.querySelector(".nav-links .links");

menuBtn.addEventListener("click",()=>{
    navLinks.classList.add('active');
});

closeBtn.addEventListener("click",()=>{
    navLinks.classList.remove('active');
})

// Change the window location to 'blog-post.html' when a #post is clicked

const Posts = document.querySelectorAll("#post");
Posts.forEach(
    elem => elem.addEventListener('click',()=>{
            window.location.href = 'blog-post.html';
    })
);

// Change the window location to  'author.html' when a #author_ is clicked

const Authors = document.querySelectorAll("#author_");
Authors.forEach(
    author => author.addEventListener('click',()=>{
            window.location.href = 'author.html';
    })
);

// Client Comments 

document.addEventListener("DOMContentLoaded", function () {
    const clients = [
        {
            name: "Jonathan Vallem",
            location: "New York, USA",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image :'ico-ma1'
        },
        {
            name: "Emily Smith",
            location: "Los Angeles, USA",
            comment: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
            image : 'ico-wo1'
        },
        {
            name: "David Johnson",
            location: "Chicago, USA",
            comment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.",
            image : 'ico-ma2'
        },
        {
            name: "Sophia Brown",
            location: "Miami, USA",
            comment: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.",
            image : 'ico-wo2'
        },
        {
            name: "Michael Davis",
            location: "San Francisco, USA",
            comment: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
            image : 'ico-ma3'
        }
    ];

    let currentIndex = 0;
    const clientComment = document.querySelector(".test-comment .comment"),
        clientImg = document.querySelector('.client-info .client img'),
        clientName = document.querySelector('.client-info .client .info h4'),
        clientAdress = document.querySelector('.client-info .client .info span');


    function updateClientInfo(index) {
        clientComment.textContent = clients[index].comment;
        clientImg.src = `./Images/icons/${clients[index].image}.png`;
        clientName.textContent = clients[index].name;
        clientAdress.textContent = clients[index].location;
    }

    updateClientInfo(currentIndex);

    document.querySelector("#prev").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + clients.length) % clients.length;
        updateClientInfo(currentIndex);
    });

    document.querySelector("#next").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % clients.length;
        updateClientInfo(currentIndex);
    });

});


// Lazy Load
document.addEventListener("DOMContentLoaded", function() {
    // Simulate a delay (you can replace this with actual content loading logic)
    setTimeout(function() {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 2000); // Adjust the delay as needed
});
document.addEventListener('DOMContentLoaded', function() {
    const supportMenu = document.querySelector('.support-menu');
    const moreMenu = document.querySelector('.more-menu');
    const currencyMenu = document.querySelector('.currency-menu');

    supportMenu.addEventListener('click', function(event) {
        event.preventDefault();
        this.classList.toggle('active');
    });

    moreMenu.addEventListener('click', function(event) {
        event.preventDefault();
        this.classList.toggle('active');
    });

    currencyMenu.addEventListener('click', function(event) {
        event.preventDefault();
        this.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (!supportMenu.contains(event.target)) {
            supportMenu.classList.remove('active');
        }
        if (!moreMenu.contains(event.target)) {
            moreMenu.classList.remove('active');
        }
        if (!currencyMenu.contains(event.target)) {
            currencyMenu.classList.remove('active');
        }
    });
});

document.getElementById('searchButton').addEventListener('click', function() {
    let query = document.getElementById('searchInput').value;
    alert('Searching for: ' + query);
});

document.getElementById('searchInput').addEventListener('focus', function() {
    document.getElementById('suggestions').style.display = 'block';
});

document.getElementById('searchInput').addEventListener('focus', function() {
    document.getElementById('suggestions').style.display = 'block';
    document.querySelector('.categories').style.display = 'none';
    document.querySelector('.other').style.display = 'none'; 
    document.querySelector('.trusted-by').style.display = 'none'; 
});

document.getElementById('searchInput').addEventListener('blur', function() {
    setTimeout(function() {
        document.getElementById('suggestions').style.display = 'none';
        document.querySelector('.categories').style.display = 'flex'; 
        document.querySelector('.other').style.display = 'flex';
        document.querySelector('.trusted-by').style.display = 'flex';

    }, 200);
});

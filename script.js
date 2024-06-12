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
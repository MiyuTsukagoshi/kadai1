console.log(document.getElementById('fetch-button'))
document.getElementById("fetch-button").addEventListener('click', function() {
    const breed = document.getElementById('dog-breed').value;
    if (!breed) {
        alert('Please enter a dog breed.');
        return;
    }
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.status === 'success') {
            const imgElement = document.getElementById('dog-image');
            imgElement.src = data.message;
            imgElement.alt = `Image of a ${breed}`;
            imgElement.style.display = 'block';
        } else {
            alert('Breed not found. Please try another breed.');
            const imgElement = document.getElementById('dog-image');
            imgElement.style.display = 'none';
        }
      })
      .catch(error => {
        console.error('Error fetching the dog image:', error);
        alert('An error occurred while fetching the dog image.');
        const imgElement = document.getElementById('dog-image');
        imgElement.style.display = 'none';
      });
    });

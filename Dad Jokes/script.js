let jokes =  document.querySelector('.joke')

let jokeBtn = document.querySelector('.generate')



const  generateJoke = async () => {
    const response =  await fetch('https://icanhazdadjoke.com/' , {
        headers: {
            'Accept': "application/json"
        }
    })

    const joke = await response.json()

    console.log(joke)

    // console.log(jokes)

    jokes.textContent = `${joke.joke}`
}

jokeBtn.addEventListener('click' , generateJoke)


const obtenerGif = async () => {
  try {
    const apiKey = 'ZbiyJ9p6nPacvAU3gM7rlFTXBIolRy5h'
    const peticionGif = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    )
    const gif = await peticionGif.json()
    console.log(gif)
  } catch (error) {}
}

obtenerGif()

export const obtenerGif = async () => {
  try {
    const apiKey = 'ZbiyJ9p6nPacvAU3gM7rlFTXBIolRy5h'
    const peticionGif = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    )
    const { data } = await peticionGif.json()
    const { url } = data.images.original
    console.log(url)
    return url
  } catch (error) {
    console.log(`${error.message} no existe`)
  }
}

// obtenerGif()

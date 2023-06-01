
const handleEventLocation: any = async (location: string) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const geocodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=${apiKey}`

  const response = await fetch(geocodingUrl)
  const data = await response.json()

  if (data.status === 'OK') {
    const results = data.results
    return results
  } else {
    throw new Error('Geocoding API request failed.')
  }
}

const getStaticMapImageUrl = (latitude:string, longitude:string) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=13&size=800x800&key=${apiKey}`

  return staticMapUrl
}

export { handleEventLocation, getStaticMapImageUrl }

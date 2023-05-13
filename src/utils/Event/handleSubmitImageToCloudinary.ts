const CLOUD_NAME = 'duffkgzef'

export const handleSubmitImageToCloudinary = async (imageFile: File) => {
  try {
    const formData = new FormData()
    formData.append('file', imageFile)
    formData.append('upload_preset', 'eventverse')
    const result = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`,
      {
        method: 'POST',
        body: formData
      }
    )

    const response = await result.json()
    if (result.ok) {
      return response.secure_url
    } else {
      throw new Error('Image upload failed!')
    }
  } catch (error) {
    throw new Error('Image upload failed!')
  }
}

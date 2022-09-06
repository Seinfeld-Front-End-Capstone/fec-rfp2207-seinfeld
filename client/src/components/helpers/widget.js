const myWidget = (callback) => {
  return cloudinary.createUploadWidget({
    cloudName: 'seinfeldtd',
    uploadPreset: 'seinfeldpreset'
    }, callback)
}

export default myWidget;
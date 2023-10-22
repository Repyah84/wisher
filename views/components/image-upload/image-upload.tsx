import emptyImage from "data-base64:~assets/garage.png"
import { useState } from "react"

// const fileTypes = [
//   "image/apng",
//   "image/bmp",
//   "image/gif",
//   "image/jpeg",
//   "image/pjpeg",
//   "image/png",
//   "image/tiff",
//   "image/webp",
//   "image/x-icon"
// ]

// function validFileType(file) {
//   return fileTypes.includes(file.type)
// }

interface Props {
  image: string
  onImageChange: (image: File) => void
}

export const ImageUploader = ({ image, onImageChange }: Props) => {
  const [file, setFile] = useState(null)

  const onChangeImageClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)

    const value = e.target.files[0]

    const file = URL.createObjectURL(value)

    onImageChange(value)

    setFile(file)
  }

  return (
    <div className="extensions-wisher-image-upload">
      <img
        width={100}
        height={100}
        src={file || image || emptyImage}
        alt="image"
      />

      <label className="extensions-wisher-image-upload__label">
        <span>Change image</span>

        <input
          onChange={onChangeImageClick}
          type="file"
          accept=".jpg, .jpeg, .png"
        />
      </label>
    </div>
  )
}

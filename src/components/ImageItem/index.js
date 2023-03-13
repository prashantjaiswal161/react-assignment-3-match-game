import './index.css'

const ImageItem = props => {
  const {imageDetails} = props
  const {thumbnailUrl} = imageDetails
  return (
    <>
      <li className="thumbnail-container">
        <button type="button">
          <img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />
        </button>
      </li>
    </>
  )
}

export default ImageItem

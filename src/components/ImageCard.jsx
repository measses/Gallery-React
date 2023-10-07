import ModalImage from "react-modal-image";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  // Paylaşılacak URL'yi belirleyin
  const shareUrl = image.largeImageURL;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <ModalImage
        className="w-full h-64 object-cover"
        small={image.webformatURL}
        large={image.largeImageURL}
        alt={image.user}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-royal-blue-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4 flex flex-wrap">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
      <div className="px-6 py-4 text-center"> {/* "text-center" sınıfı ekleyin */}
  <div className="inline-flex items-center mr-6"> {/* "inline-flex" sınıfı ekleyin */}
    <FacebookShareButton url={shareUrl} className="mx-1">
      <FacebookIcon size={32} round />
    </FacebookShareButton>
    <TwitterShareButton url={shareUrl} className="mx-1">
      <TwitterIcon size={32} round />
    </TwitterShareButton>
    <LinkedinShareButton url={shareUrl} className="mx-1">
      <LinkedinIcon size={32} round />
    </LinkedinShareButton>
    <WhatsappShareButton url={shareUrl} className="mx-1">
      <WhatsappIcon size={32} round />
    </WhatsappShareButton>
  </div>
</div>

    </div>
  );
};

export default ImageCard;

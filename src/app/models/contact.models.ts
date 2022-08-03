export class ContactModels {
    title: String = "";
    subTitle: String = "";
    hasImage: Boolean = false;
    imageSrc: String = "";
    hasLikeButton: Boolean = false;
    hasShareButton: Boolean = false;

    constructor(Title: String, SubTitle: String, HasImage: Boolean, ImageSrc: String, HasLikeButton: Boolean = false, HasShareButton: Boolean = false) {
        this.title = Title;
        this.subTitle = SubTitle;
        this.hasImage = HasImage;
        this.imageSrc = ImageSrc;
        this.hasLikeButton = HasLikeButton;
        this.hasShareButton = HasShareButton;
    }
}
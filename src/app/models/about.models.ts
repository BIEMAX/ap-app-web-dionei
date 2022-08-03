export class AboutModels {
    title: String = "";
    subTitle: String = "";
    hasImage: Boolean = false;
    imageSrc: String = "";
    description: String = "";
    hasLikeButton: Boolean = false;
    hasShareButton: Boolean = false;

    constructor(Title: String, SubTitle: String, HasImage: Boolean, ImageSrc: String, Description: String, HasLikeButton: Boolean, HasShareButton: Boolean) {
        this.title = Title;
        this.subTitle = SubTitle;
        this.hasImage = HasImage;
        this.imageSrc = ImageSrc;
        this.description = Description;
        this.hasLikeButton = HasLikeButton;
        this.hasShareButton = HasShareButton;
    }
}
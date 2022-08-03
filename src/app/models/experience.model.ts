export class ExperienceModels {
    title: String = "";
    subTitle: String = "";
    firstContent: String = "";
    secondContent: String = "";
    hasLikeButton: Boolean = false;
    hasShareButton: Boolean = false;

    constructor(Title: String, SubTitle: String, FirstContent: String, SecondContent: String, HasLikeButton: Boolean = false, HasShareButton: Boolean = false) {
        this.title = Title;
        this.subTitle = SubTitle;
        this.firstContent = FirstContent;
        this.secondContent = SecondContent;
        this.hasLikeButton = HasLikeButton;
        this.hasShareButton = HasShareButton;
    }
}
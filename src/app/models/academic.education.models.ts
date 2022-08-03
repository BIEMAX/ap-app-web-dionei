export class AcademicModels {
    title: String = "";
    subTitle: String = "";
    firstContent: String = "";
    secondContent: String = "";
    hasLikeButton: Boolean = false;
    hasShareButton: Boolean = false;

    constructor(Title: String, SubTitle: String, FirstContent: String, SecondContent: String, HasLikeButton: Boolean = false, HasShareButton: Boolean = false) {
        this.title = "Curso: " + Title;
        this.subTitle = "Local: " + SubTitle;
        this.firstContent = "Duração: " + FirstContent;
        this.secondContent = "Descrição: " + SecondContent;
        this.hasLikeButton = HasLikeButton;
        this.hasShareButton = HasShareButton;
    }
}
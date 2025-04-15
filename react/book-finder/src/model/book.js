export default class Book {
    constructor({key, title, author_name, first_publish_year, language}) {
        this.key = key;
        this.title = title;
        this.author_name = author_name?.[0];
        this.first_publish_year = first_publish_year;
        this.language = language;
    }
}


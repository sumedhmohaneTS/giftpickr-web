import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
import { ISeoMetaData } from "./seo.interface";

@Injectable({
    providedIn: 'root',
})
export class SeoService {

    constructor(
        private titleService: Title,
        private metaService: Meta) {
    }

    update(data: ISeoMetaData): void {
        this.setTitle(data?.title)
        this.setDescription(data?.description)
        this.setKeywords();
        this.setAuthor('Sumedh Mohane');
        this.setType('website');
        this.setUrl(data?.url);
        this.setImage(data?.imageUrl);
        this.setLocale('en_US');

        this.setSiteName();

    }

    setMetaTag(attr: 'name' | 'property' | 'itemprop', attrValue: string, content?: string | undefined, selector?: string) {
        if (content) {
            this.metaService.updateTag({ [attr]: attrValue, content }, selector);
        } else {
            this.metaService.removeTag(`${attr}='${attrValue}'`);
        }
    }

    private setDescription(description?: string): void {
        this.setMetaTag('name', 'description', description);
        this.setMetaTag('name', 'twitter:description', description);
        this.setMetaTag('property', 'og:description', description);
        this.setMetaTag('itemprop', 'description', description, `itemprop='description'`);
    }

    private setType(type?: 'article' | 'website'): void {
        this.setMetaTag('property', 'og:type', type);
    }

    private setKeywords() {

        this.setMetaTag('name', 'keywords',
            `gifts, presents, gift ideas, personalized gifts, unique gifts, 
                thoughtful gifts, birthday gifts, anniversary gifts, wedding gifts, 
                graduation gifts, Christmas gifts, Valentine's Day gifts, 
                Mother's Day gifts, Father's Day gifts, baby shower gifts, 
                housewarming gifts, retirement gifts, gifts for him, gifts for her, 
                gifts for mom, gifts for dad, gifts for wife, gifts for husband, 
                gifts for girlfriend, gifts for boyfriend, gifts for best friend, 
                gifts for coworkers, gifts for teachers, gifts for kids, gifts for grandparents, 
                gifts for pet lovers, gifts for sports fans, gifts for travelers, gifts for foodies, 
                gifts for wine lovers`
        );

    }

    private setAuthor(author?: string) {
        this.setMetaTag('name', 'author', author);
        this.setMetaTag('name', 'article:author', author);
    }

    private setSiteName() {
        this.setMetaTag('name', 'og:site_name', 'GiftPickr');
    }

    private setTitle(title?: string): void {
        if (title) {
            this.titleService.setTitle(title);
        }
        this.setMetaTag('name', 'title', title);
        this.setMetaTag('name', 'twitter:title', title);
        this.setMetaTag('name', 'twitter:image:alt', title);
        this.setMetaTag('property', 'og:title', title);
        this.setMetaTag('property', 'og:image:alt', title);
        this.setMetaTag('itemprop', 'name', title, `itemprop='name'`);
    }

    private setUrl(url?: string) {
        this.setMetaTag('property', 'og:url', url);
    }

    private setImage(imageUrl?: string) {
        this.setMetaTag('property', 'og:image', imageUrl);
        this.setMetaTag('name', 'twitter:image', imageUrl);
        this.setMetaTag('name', 'twitter:card', 'summary_large_image');
    }

    private setLocale(locale?: string) {
        this.setMetaTag('property', 'og:locale', locale);
    }

}

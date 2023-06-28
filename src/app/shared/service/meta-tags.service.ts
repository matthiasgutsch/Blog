import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface IMetaTags {
  description: string,
  keywords: string,
  title: string
}

@Injectable({
  providedIn: 'root'
})
export class MetaTagsService {
  private isBrowser = false;
  private pageUrl: string;

  constructor(
    private _meta: Meta, 
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject(DOCUMENT) private dom) { 
      this.isBrowser = isPlatformBrowser(this.platformId)
    }

  createCanonicalLink(url?: string) {
    if(this.isBrowser) {
      let canURL = url == undefined ? this.dom.URL : url;
      this.pageUrl = canURL;
      let link: HTMLLinkElement = this.dom.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.dom.head.appendChild(link);
      link.setAttribute('href', canURL);
    }
  }

  updateMetaTags(meta: IMetaTags): void {
    this.title.setTitle(meta?.title);

    this._meta.updateTag( { name: "description", content: meta.description }, "name='description'");
    this._meta.updateTag( { name: "keywords", content: meta.keywords }, "name='keywords'");

    this._meta.updateTag( { property: 'og:type', content: 'website' }, "property='og:type'");
    // this._meta.updateTag( { property: 'og:url', content: this.pageUrl }, "property='og:url'");
    this._meta.updateTag( { property: 'og:title', content: meta.title }, "property='og:title'");
    this._meta.updateTag( { property: 'og:description', content: meta.description }, "property='og:description'");

    
    this._meta.updateTag({ name: 'twitter:creator', content: `@KevalVadhiya`}, "name='twitter:creator'")
    this._meta.updateTag({ name: 'twitter:site', content: `@QuickBlogs`}, "name='twitter:site'")
    this._meta.updateTag({ name: 'twitter:title', content: meta.title}, "name='twitter:title'")
    this._meta.updateTag({ name: 'twitter:description', content: meta.description}, "name='twitter:description'")
    this._meta.updateTag({ name: 'twitter:card', content: 'summary_large_image'}, "name='twitter:card'")
  }

  updateMetaImage(image: string) {
    this._meta.updateTag( { name: "image", content: image }, "name='image'");
    this._meta.updateTag( { property: 'og:image:secure_url', content: image }, "property='og:image:secure_url'");
    this._meta.updateTag({ name: 'twitter:image', content: image}, "name='twitter:image'")
    
  }
}

import { Component } from '@angular/core';
import { MetaTagsService } from 'src/app/shared/service/meta-tags.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent {

  constructor(private metatagService: MetaTagsService) {}

  ngOnInit() {
    const metaObject = {
      title: 'Privacy Policy - QuickBlogs',
      description: 'Read our privacy policy to learn how we handle your personal information on QuickBlogs.',
      keywords: 'privacy policy, data protection, personal information',
    }

    this.metatagService.updateMetaTags(metaObject, 'https://i.imgur.com/mXnHjg9.png');
  }
}

import { DatePipe } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataSharingService } from 'src/app/shared/service/data-sharing.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent {
  blogForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataSharingService, private datePipe: DatePipe) {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      id: [0, Validators.required],
      intro: '',
      paragraph: this.fb.array([this.newParagraph()]), // You may need to handle the array of paragraphs separately
      conclusion: '',
      thumbnail: '',
      tags: this.fb.array(['']), // You may need to handle the array of tags separately
      date: '',
      isTrending: true, // Assuming isTrending is a boolean
      meta: this.fb.group({
        title: '',
        description: '',
        keywords: ''
      })
    });
  }

  ngOnInit() {
    this.dataService.getBlogs().subscribe(res => {
      const today = new Date();
      const formattedDate = this.datePipe.transform(today, 'MMM d, yyyy');
      this.blogForm.get('date').setValue(formattedDate);
      this.blogForm.get('id').setValue(res.length + 1)
    })
  }

  get paragraphControls() {
    return (this.blogForm.get('paragraph') as FormArray).controls;
  }

  get tagsControls() {
    return (this.blogForm.get('tags') as FormArray).controls;
  }

  submit(): void {
    const value = this.blogForm.value;
    let paravalue;
    this.blogForm.value.paragraph.map(x => {
      if(x.content) {
        const para_title = x.content.para_title ? `<strong>${x.content.para_title}: </strong><br>` : '';
        const para_text = x.content.para_text ? `<p>${x.content.para_text.replace(/\n/g, '<span></span>')}</p>` : '';
        x.content = para_title + para_text
      }
    })
    console.log(this.blogForm.value)
  }

  removeParagraph(index: number) {
    const paragraphArray = this.blogForm.get('paragraph') as FormArray;
    paragraphArray.removeAt(index);
  }

  addParagraph() {
    const paragraphArray = this.blogForm.get('paragraph') as FormArray;
    paragraphArray.push(this.newParagraph()); // Add an empty paragraph field
  }

  addParagraphImage() {
    const paragraphArray = this.blogForm.get('paragraph') as FormArray;
    paragraphArray.push(this.newParagraphImage()); // Add an empty paragraph field
  }

  newParagraph(): FormGroup {
    return this.fb.group({
      content: this.fb.group({
        para_title: '',
        para_text: '',
      })
    });
  }

  newParagraphImage(): FormGroup {
    return this.fb.group({
      images: this.fb.group({
        path: '',
        title: '',
      })
    });
  }
}

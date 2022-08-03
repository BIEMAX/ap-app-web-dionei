import { Component, OnInit } from '@angular/core';
import { ContactModels } from 'app/models/contact.models';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  listSocialMedia: Array<ContactModels> = [];

  ngOnInit(): void {
    this.createListSocialMedia();
  }
  createListSocialMedia() {
    this.listSocialMedia = [
      new ContactModels(
        "www.github.com/BIEMAX",
        "GitHub",
        true,
        "https://github.githubassets.com/images/modules/logos_page/Octocat.png"
      ),
      new ContactModels(
        "www.linkedin.com/in/dioneibeilke/",
        "Linkedin",
        true,
        "https://cdn-icons-png.flaticon.com/512/174/174857.png"
      ),
      new ContactModels(
        "www.instagram.com/itsbiemax",
        "Instagram",
        true,
        "https://cdn-icons-png.flaticon.com/512/174/174855.png"
      )
    ];
  }

}

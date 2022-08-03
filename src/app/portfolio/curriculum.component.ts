import { Component, OnInit } from '@angular/core';
import { ExperienceModels } from 'app/models/experience.model';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  constructor() { }

  listExperiences: Array<ExperienceModels> = [];

  ngOnInit(): void {
    this.createExperiences();
  }

  createExperiences() {
    // this.listExperiences = [
    //   new ExperienceModels(""),
    //   new ExperienceModels("")
    // ]
  }

}

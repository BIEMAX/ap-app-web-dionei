import { Component, OnInit } from '@angular/core';
import { AcademicModels } from 'app/models/academic.education.models';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  constructor() { }

  listAcademicEducation: Array<AcademicModels> = [];

  ngOnInit(): void {
    this.createAcademicEducationList();
  }

  createAcademicEducationList() {
    this.listAcademicEducation = [
      new AcademicModels(
        "Bacharelado em Engenharia de Software",
        "UNINTER Centro Universitário Internacional",
        "2022 - 2026",
        "Desenvolvimento de softwares, Gestão de projetos de software, Arquitetura, testes e demais atividades no ciclo de vida de um software."
      ),
      new AcademicModels(
        "Pós-graduação Lato Sensu - MBA, Gestão de Projetos",
        "UNINTER Centro Universitário Internacional",
        "2019 - 2020",
        "O curso de gerenciamento de projetos visa formar profissionais habilitados para elaboração, execução e gerenciamento dos projetos."
      ),
      new AcademicModels(
        "Técnologo em Análise e desenvolvimento de sistemas",
        "UNINTER Centro Universitário Internacional",
        "2017 - 2019",
        `Um analista e desenvolvedor de sistemas é o elo indispensável entre as necessidades do mundo dos negócios e os crescentes recursos da tecnologia da informação. 
        O curso da UNINTER forma profissionais capacitados para o desenvolvimento de tecnologias e soluções de negócios, baseadas em computação com foco em inteligência artificial e business intelligence.
        Como egresso desse curso, você estará pronto para dar respostas efetivas aos desafios de custo, prazo, qualidade, produtividade, interação e integração dos negócios das empresas.`
      ),
      new AcademicModels(
        "Influx",
        "Inglês técnico InFlux",
        "2016 - 2018",
        "Aprendizado em inglês para comunicação no exterior, curso com grau básico, médio e início ao avançado."
      ),
      new AcademicModels(
        "Técnico em informática",
        "QI Escola de Educação Profissional – São Leopoldo",
        "2015 - 2016",
        "Linguagem de programação, criação de aplicativos, desenvolvimento de web sites, manufatura de aplicativos para Android, iOS, Windows Phone e aplicações Windows."
      ),
      new AcademicModels(
        "Técnico Em Eletrônica, Elétrica e Eletrônica",
        "Centro Tecnológico De Mecânica De Precisão – CETEMP",
        "2012 - 2014",
        "Manutenção, calibração, desenvolvimento de layouts elétricos e eletrônicos, soldagem de componentes, automação industrial, desenvolvimento de aplicações, linguagem de programação."
      )
    ];
  }

}
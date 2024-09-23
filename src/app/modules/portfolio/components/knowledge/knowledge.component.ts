import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: "assets/icons/csharp.svg",
      alt: "Ícone de conhecimento em CSharp",
      text: "Linguagem de programação CSharp",
    },
    {
      src: "assets/icons/dotnet.svg",
      alt: "Ícone de conhecimento em .NET",
      text: "Framework .NET",
    },
    {
      src: "assets/icons/python.svg",
      alt: "Ícone de conhecimento em Python",
      text: "Linguagem de programação Python",
    },
    {
      src: "assets/icons/angular.svg",
      alt: "Ícone de conhecimento em Angular",
      text: "Framework Angular",
    },
    {
      src: "assets/icons/css.svg",
      alt: "Ícone de conhecimento em CSS",
      text: "Linguagem CSS",
    },
    {
      src: "assets/icons/html.svg",
      alt: "Ícone de conhecimento em HTML",
      text: "Linguagem HTML",
    },
    {
      src: "assets/icons/typescript.svg",
      alt: "Ícone de conhecimento em Typescript",
      text: "Linguagem Typescript",
    },
    {
      src: "assets/icons/js.svg",
      alt: "Ícone de conhecimento em Javascript",
      text: "Linguagem Javascript",
    },
    {
      src: "assets/icons/sql.svg",
      alt: "Ícone de conhecimento em SQL",
      text: "Linguagem de consulta SQL",
    },
    {
      src: "assets/icons/oracle.svg",
      alt: "Ícone de conhecimento em Oracle",
      text: "Linguagem de consulta SQL - Oracle",
    },
    {
      src: "assets/icons/mongo.svg",
      alt: "Ícone de conhecimento em MongoDb",
      text: "Sistema de gerenciamento MongoDB ",
    },
    {
      src: "assets/icons/dbeaver.svg",
      alt: "Ícone de conhecimento em DBeaver",
      text: "Ferramenta de gerenciamento de banco de dados DBeaver",
    },
    {
      src: "assets/icons/firebase.svg",
      alt: "Ícone de conhecimento em Firebase",
      text: "Serviço de dados em nuvem Firebase",
    },
    {
      src: "assets/icons/unity.svg",
      alt: "Ícone de conhecimento em Unity",
      text: "Engine para desenvolvimento de jogos Unity",
    },
    {
      src: "assets/icons/android.svg",
      alt: "Ícone de conhecimento em AndroidStudio",
      text: "IDE para desenvolvimento de aplicativos de sistema Android",
    },
    {
      src: "assets/icons/azure.svg",
      alt: "Ícone de conhecimento em Azure devops",
      text: "Ferramenta Microsoft Azure Devops",
    },
    {
      src: "assets/icons/docker.svg",
      alt: "Ícone de conhecimento em Docker",
      text: "Ferramenta de virtualização Docker",
    },
    {
      src: "assets/icons/sonar.svg",
      alt: "Ícone de conhecimento em SonarQube",
      text: "Ferramenta de análise de código SonarQube",
    },
    {
      src: "assets/icons/postman.svg",
      alt: "Ícone de conhecimento em Postman",
      text: "Ferramenta Postman",
    },
    {
      src: "assets/icons/git.svg",
      alt: "Ícone de conhecimento em Git",
      text: "",
    },
    {
      src: "assets/icons/tortoise.svg",
      alt: "Ícone de conhecimento em TortoiseGit",
      text: "",
    },
    {
      src: "assets/icons/jira.svg",
      alt: "Ícone de conhecimento em Jira",
      text: "",
    },
  ]);
}

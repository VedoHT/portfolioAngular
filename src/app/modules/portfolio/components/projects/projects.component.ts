import { Component, inject, signal } from '@angular/core';

//Interface
import { IProjects } from '../../interface/IProjects.interface';

//Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog'

//Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

//Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: "assets/projects/Ergo.png",
      alt: "Projeto Ergonomics - TCC",
      title: "Ergonomics",
      width: "140px",
      height: "71px",
      description: "<p>Projeto de controle ergonomico com o objetivo de trabalho de conclusão de curso (TCC) da faculdade.<p>",
      links:[
        {
          name: "Conheça o projeto",
          href: "https://github.com/VedoHT/Ergo"
        },
      ],
    },

    {
      src: "assets/projects/Ravendawn.png",
      alt: "Projeto Bot Python para Ravendawn",
      title: "Bot Python para Ravendawn",
      width: "140px",
      height: "71px",
      description: "<p>Projeto com fins de estudos para criar um bot em Python referente ao jogo Ravendawn.<p>",
      links:[
        {
          name: "Conheça o projeto",
          href: "https://github.com/VedoHT/PythonBotScriptEstudos"
        },
      ],
    },
  ]);

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}

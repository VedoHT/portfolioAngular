import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary:{
        strong: "Back-end Pleno",
        p: "Linx & Stone.Co | Mar 2024 - Atual",
      },
      text: "<p>Atuando em back-end utilizando C# .NET; Realizando conversões de Delphi para C# .Net; Atuações em SLA's; SQLServer - Oracle; Jira; Azure; Projetos Especiais; Específicações e documentações; Manutenções de Front-end utilizando Angular; Metodologias ágeis; RLDC; DevExpress.</p>"
    },

    {
      summary:{
        strong: "Back-end Junior",
        p: "Linx & Stone.Co | Out 2021 - Mar 2024",
      },
      text: "<p>Atuando em back-end utilizando C# .NET; Realizando conversões de Delphi para C# .Net; Atuações em SLA's; SQLServer - Oracle; Jira; Azure; Projetos Especiais; Específicações e documentações; Manutenções de Front-end utilizando Angular; Metodologias ágeis; RLDC; DevExpress.</p>"
    },

    {
      summary:{
        strong: "Back-end Estagiário",
        p: "Linx & Stone.Co | Nov 2020 - Out 2021",
      },
      text: "<p>Aprendizado em conversões de Delphi para C# .NET 4;   Aprendizagem em SQLServer e Oracle;   Aprendizado do uso de Postman e GIT-TortoiseGIT;  Aprendizado de Metodologias Ágeis; Aprendizado em Jira; Aprendizado em Azure;</p>"
    },
  ]);
}

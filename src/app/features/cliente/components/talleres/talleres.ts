import { Component, OnInit } from '@angular/core';
import { TalleresService } from '../../services/talleres.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-talleres',
  imports: [CommonModule],
  templateUrl: './talleres.html',
  styleUrl: './talleres.css'
})
export class Talleres implements OnInit {

  talleres: any[] = [];
  cargando = true;
  error: string | null = null;

  constructor(private talleresService: TalleresService) {}

  ngOnInit(): void {
    this.talleresService.getTalleres().subscribe({
      next: (data) => {
        this.talleres = data;
        this.cargando = false;
      },
      error: (err) => {
        this.error = 'Error al cargar talleres';
        this.cargando = false;
      },
    });
  }

  get hayProfesores(): boolean {
  return this.talleres.some(t => t.id_profesor);
}

}

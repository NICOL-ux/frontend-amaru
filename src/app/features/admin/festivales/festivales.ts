<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminDataService } from '../../../core/services/admin.data.service';
import { ModalFestival } from './modal-festival/modal-festival';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-festival',
  standalone: true,
  imports: [MatIconModule, CommonModule, MatTooltipModule],
  templateUrl: './festivales.html',
  styleUrl: './festivales.css'
})
export class Festival {
  festivales: any[] = [];

  constructor(
    private adminDataService: AdminDataService, 
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  // Método para mostrar mensajes
  private mostrarMensaje(mensaje: string, tipo: 'success' | 'error' = 'success'): void {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 5000,
      panelClass: tipo === 'success' ? ['snackbar-success'] : ['snackbar-error'],
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  }

  ngOnInit(): void {
    this.cargarFestivales();
  }

  cargarFestivales(): void {
    this.adminDataService.getFestivales().subscribe({
      next: (festivales) => {
        this.festivales = festivales;
      },
      error: (err) => {
        console.error('Error al cargar festivales:', err);
        const mensaje = err.error?.message || 'Error al cargar festivales';
        this.mostrarMensaje(mensaje, 'error');
      }
    });
  }

  abrirModalFestival(): void {
    const dialogRef = this.dialog.open(ModalFestival, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((resultado) => {
      if (resultado === true) {
        this.mostrarMensaje('Festival guardado exitosamente');
        this.cargarFestivales();
      } else if (resultado && resultado.message) {
        this.mostrarMensaje(resultado.message, resultado.type || 'success');
        if (resultado.reload) {
          this.cargarFestivales();
        }
      }
    });
  }

  eliminarFestival(id: string): void {
    if (confirm('¿Seguro que deseas eliminar este festival?')) {
      this.adminDataService.deleteFestival(id).subscribe({
        next: (res) => {
          console.log('Festival eliminado correctamente:', res);
          const mensaje = res?.message || 'Festival eliminado correctamente';
          this.mostrarMensaje(mensaje);
          this.cargarFestivales();
        },
        error: (err) => {
          console.error('Error al eliminar el festival:', err);
          const mensaje = err.error?.message || 'Error al eliminar el festival';
          this.mostrarMensaje(mensaje, 'error');
        }
      });
    }
  }

  editarFestival(festival: any): void {
    const dialogRef = this.dialog.open(ModalFestival, {
      width: '600px',
      data: { festival }
    });

    dialogRef.afterClosed().subscribe((resultado) => {
      if (resultado === true) {
        this.mostrarMensaje('Festival actualizado exitosamente');
        this.cargarFestivales();
      } else if (resultado && resultado.message) {
        this.mostrarMensaje(resultado.message, resultado.type || 'success');
        if (resultado.reload) {
          this.cargarFestivales();
        }
      }
    });
  }

  cambiarEstadoFestival(id: string, estadoActual: string): void {
    const nuevoEstado = estadoActual === 'activo' ? 'inactivo' : 'activo';
    const accion = estadoActual === 'activo' ? 'desactivar' : 'activar';
    
    if (confirm(`¿Seguro que deseas ${accion} este festival?`)) {
      this.adminDataService.cambiarEstadoFestival(id, nuevoEstado).subscribe({
        next: (res) => {
          console.log(`Festival ${accion}do correctamente:`, res);
          const mensaje = res?.message || `Festival ${accion}do correctamente`;
          this.mostrarMensaje(mensaje);
          this.cargarFestivales(); 
        },
        error: (err) => {
          console.error(`Error al ${accion} el festival:`, err);
          const mensaje = err.error?.message || `Error al ${accion} el festival`;
          this.mostrarMensaje(mensaje, 'error');
        }
      });
    }
  }
} 
=======
import { Component } from '@angular/core';
import { CommonModule, DatePipe, NgFor, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { ModalFestival } from './modal-festival/modal-festival';
import { ModalPremio } from './modal-premio/modal-premio';
import { FestivalesService } from '../../cliente/services/festivales.service';
import { Festival } from '../../cliente/models/festival.model';
import { Premio } from '../../cliente/models/premio.model';

@Component({
  selector: 'app-festivales',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor, NgClass, MatDialogModule],
  templateUrl: './festivales.html',
  styleUrls: ['./festivales.css'],
  providers: [DatePipe]
})
export class Festivales {
  festivales: Festival[] = [];
  premios: Premio[] = [];

  constructor(private dialog: MatDialog, private festivalesService: FestivalesService) {
    this.cargarFestivales();
    this.cargarPremios();
  }

  abrirModalFestival(festival?: Festival) {
    const dialogRef = this.dialog.open(ModalFestival, { data: festival });
    dialogRef.afterClosed().subscribe(() => this.cargarFestivales());
  }

  abrirModalPremio(premio?: Premio) {
    const dialogRef = this.dialog.open(ModalPremio, { data: { premio, festivales: this.festivales } });
    dialogRef.afterClosed().subscribe(() => this.cargarPremios());
  }

  cargarFestivales() {
    this.festivalesService.getFestivales().subscribe(f => this.festivales = f);
  }

  cargarPremios() {
    this.festivalesService.getPremios().subscribe(p => this.premios = p);
  }

 getPremiosPorFestival(festivalId?: string) {
  if (!festivalId) return [];  // evita undefined
  return this.premios.filter(p => p.festival === festivalId);
}

}
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd

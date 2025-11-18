import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
<<<<<<< HEAD
import { MatSnackBar } from '@angular/material/snack-bar';
=======
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
import { AgregarTaller } from './modales/agregar-taller/agregar-taller';
import { AdminDataService } from '../../../core/services/admin.data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
<<<<<<< HEAD
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-talleres',
  imports: [MatIconModule, CommonModule, FormsModule, MatTooltipModule],
=======

@Component({
  selector: 'app-talleres',
  imports: [MatIconModule, CommonModule, FormsModule],
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
  templateUrl: './talleres.html',
  styleUrls: ['./talleres.css']
})
export class Talleres implements OnInit {
  categorias: any[] = [];
  talleres: any[] = [];
  totalTalleres: number = 0;

  vista: 'grid' | 'list' = 'grid';

  filtros = {
    id_categoria: '',
    estado: '',
    fecha_inicio: '',
    fecha_fin: ''
  };

  constructor(
    private dialog: MatDialog,
<<<<<<< HEAD
    private adminDataService: AdminDataService,
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

=======
    private adminDataService: AdminDataService
  ) {}

>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
  ngOnInit(): void {
    this.cargarCategorias();
    this.cargarTalleres();
  }

  cargarCategorias(): void {
    this.adminDataService.getCategorias().subscribe({
      next: (data) => this.categorias = data,
<<<<<<< HEAD
      error: (err) => {
        console.error('Error al cargar categorías', err);
        const mensaje = err.error?.message || 'Error al cargar categorías';
        this.mostrarMensaje(mensaje, 'error');
      }
=======
      error: (err) => console.error('Error al cargar categorías', err)
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
    });
  }

  cargarTalleres(): void {
    this.adminDataService.getTalleresFiltrados(this.filtros).subscribe({
      next: (data) => {
        this.talleres = data;
<<<<<<< HEAD
        this.totalTalleres = data.length;
      },
      error: (err) => {
        console.error('Error al cargar talleres', err);
        const mensaje = err.error?.message || 'Error al cargar talleres';
        this.mostrarMensaje(mensaje, 'error');
      }
=======
        this.totalTalleres = data.length; // Actualiza total
      },
      error: (err) => console.error('Error al cargar talleres', err)
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
    });
  }

  openAgregarTaller(): void {
    const dialogRef = this.dialog.open(AgregarTaller, {
      width: '600px',
      panelClass: 'custom-modalbox',
      data: { categorias: this.categorias }
    });

    dialogRef.afterClosed().subscribe((resultado) => {
<<<<<<< HEAD
      if (resultado === true) {
        this.mostrarMensaje('Taller guardado exitosamente');
        this.cargarTalleres();
      } else if (resultado && resultado.message) {
        this.mostrarMensaje(resultado.message, resultado.type || 'success');
        if (resultado.reload) {
          this.cargarTalleres();
        }
      }
=======
      if (resultado === true) this.cargarTalleres();
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
    });
  }

  editarTaller(taller: any): void {
    const dialogRef = this.dialog.open(AgregarTaller, {
      width: '600px',
      panelClass: 'custom-modalbox',
      data: { taller: taller, categorias: this.categorias }
    });

    dialogRef.afterClosed().subscribe((resultado) => {
<<<<<<< HEAD
      if (resultado === true) {
        this.mostrarMensaje('Taller actualizado exitosamente');
        this.cargarTalleres();
      } else if (resultado && resultado.message) {
        this.mostrarMensaje(resultado.message, resultado.type || 'success');
        if (resultado.reload) {
          this.cargarTalleres();
        }
      }
=======
      if (resultado === true) this.cargarTalleres();
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
    });
  }

  eliminarTaller(id: string): void {
    if (confirm('¿Seguro que deseas eliminar este taller?')) {
      this.adminDataService.deleteTaller(id).subscribe({
<<<<<<< HEAD
        next: (res) => {
          const mensaje = res?.message || 'Taller eliminado correctamente';
          this.mostrarMensaje(mensaje);
          this.cargarTalleres();
        },
        error: (err) => {
          console.error('Error al eliminar taller', err);
          const mensaje = err.error?.message || 'Error al eliminar el taller';
          this.mostrarMensaje(mensaje, 'error');
        }
=======
        next: () => {
          alert('Taller eliminado correctamente');
          this.cargarTalleres();
        },
        error: (err) => console.error('Error al eliminar taller', err)
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
      });
    }
  }

  // 🔄 Activar / Inactivar taller
  cambiarEstado(taller: any, activo: boolean): void {
    const nuevoEstado = activo ? 'activo' : 'inactivo';
<<<<<<< HEAD
    const accion = activo ? 'activado' : 'desactivado';
    
    this.adminDataService.updateTaller(taller._id, { estado: nuevoEstado }).subscribe({
      next: (res) => {
        const mensaje = res?.message || `Taller ${accion} correctamente`;
        this.mostrarMensaje(mensaje);
=======
    this.adminDataService.updateTaller(taller._id, { estado: nuevoEstado }).subscribe({
      next: () => {
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
        taller.estado = nuevoEstado;
      },
      error: (err) => {
        console.error('Error al cambiar estado del taller', err);
<<<<<<< HEAD
        const mensaje = err.error?.message || 'No se pudo cambiar el estado. Intenta nuevamente.';
        this.mostrarMensaje(mensaje, 'error');
=======
        alert('No se pudo cambiar el estado. Intenta nuevamente.');
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
      }
    });
  }

  // 🌐 Cambiar vista entre grid y list
  cambiarVista(vista: 'grid' | 'list') {
    this.vista = vista;
  }

  // 🧹 Limpiar filtros
  limpiarFiltros() {
    this.filtros = {
      id_categoria: '',
      estado: '',
      fecha_inicio: '',
      fecha_fin: ''
    };
    this.cargarTalleres();
<<<<<<< HEAD
    this.mostrarMensaje('Filtros limpiados correctamente');
=======
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
  }

  // 📄 Exportar datos (ejemplo)
  exportarDatos() {
    // Aquí podrías generar un CSV o Excel con los talleres
<<<<<<< HEAD
    this.mostrarMensaje('Función de exportar en construcción.', 'error');
=======
    alert('Función de exportar en construcción.');
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
  }

  // 🔹 Obtener nombre de la categoría por id
  obtenerNombreCategoria(id_categoria: string): string {
    const cat = this.categorias.find(c => c._id === id_categoria);
    return cat ? cat.nombre : 'Sin categoría';
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd

import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
<<<<<<< HEAD
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar'; // Importar SnackBar
=======
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { AdminDataService } from '../../../../../core/services/admin.data.service';

@Component({
  selector: 'app-agregar-categoria',
  standalone: true,
  imports: [MatIconModule, CommonModule, FormsModule, MatSelectModule],
  templateUrl: './agregar-categoria.html',
  styleUrls: ['./agregar-categoria.css']
})
export class AgregarCategoria {

  modoEdicion: boolean = false;
  idCategoria: string | null = null;

  tiposCategoria: string[] = ['servicio', 'taller'];

  nuevaCategoria = {
    nombre: '',
    tipo: '',
    descripcion: '',
  };

  constructor(
    private dialogRef: MatDialogRef<AgregarCategoria>,
    private adminDataService: AdminDataService,
<<<<<<< HEAD
    private snackBar: MatSnackBar, // Inyectar SnackBar
=======
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Si se reciben datos, activar modo edición y rellenar campos
    if (data && data.categoria) {
      this.modoEdicion = true;
      this.idCategoria = data.categoria._id;
      this.nuevaCategoria = {
        nombre: data.categoria.nombre,
        tipo: data.categoria.tipo,
        descripcion: data.categoria.descripcion,
      };
    }
  }

<<<<<<< HEAD
  // Método para mostrar mensajes
  private mostrarMensaje(mensaje: string, tipo: 'success' | 'error' = 'success'): void {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 5000,
      panelClass: tipo === 'success' ? ['snackbar-success'] : ['snackbar-error'],
      horizontalPosition: 'end',
      verticalPosition: 'top'
    });
  }

  guardarCategoria(): void {
    if (!this.nuevaCategoria.nombre || !this.nuevaCategoria.tipo || !this.nuevaCategoria.descripcion) {
      this.mostrarMensaje('Por favor, complete todos los campos obligatorios', 'error');
=======
  guardarCategoria(): void {
    if (!this.nuevaCategoria.nombre || !this.nuevaCategoria.tipo || !this.nuevaCategoria.descripcion) {
      console.warn('Faltan campos obligatorios');
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
      return;
    }

    if (this.modoEdicion && this.idCategoria) {
      // 🔄 Modo edición → PATCH
      this.adminDataService.updateCategoria(this.idCategoria, this.nuevaCategoria).subscribe({
        next: (res) => {
          console.log('Categoría actualizada correctamente:', res);
<<<<<<< HEAD
          const mensaje = res?.message || 'Categoría actualizada correctamente';
          this.mostrarMensaje(mensaje);
=======
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
          this.dialogRef.close(true);
        },
        error: (err) => {
          console.error('Error al actualizar categoría:', err);
<<<<<<< HEAD
          const mensaje = err.error?.message || 'Error al actualizar la categoría';
          this.mostrarMensaje(mensaje, 'error');
=======
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
        }
      });
    } else {
      // 🆕 Modo creación → POST
      this.adminDataService.addCategoria(this.nuevaCategoria).subscribe({
        next: (res) => {
          console.log('Categoría agregada correctamente:', res);
<<<<<<< HEAD
          const mensaje = res?.message || 'Categoría agregada correctamente';
          this.mostrarMensaje(mensaje);
=======
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
          this.dialogRef.close(true);
        },
        error: (err) => {
          console.error('Error al agregar categoría:', err);
<<<<<<< HEAD
          const mensaje = err.error?.message || 'Error al agregar la categoría';
          this.mostrarMensaje(mensaje, 'error');
=======
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
        }
      });
    }
  }

  cerrarModal(): void {
    this.dialogRef.close();
  }
<<<<<<< HEAD
}
=======

}
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd

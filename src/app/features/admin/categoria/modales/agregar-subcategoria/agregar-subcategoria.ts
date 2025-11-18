import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
<<<<<<< HEAD
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AdminDataService } from '../../../../../core/services/admin.data.service';

=======
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AdminDataService } from '../../../../../core/services/admin.data.service';
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
@Component({
  selector: 'app-agregar-subcategoria',
  imports: [MatIconModule, CommonModule, FormsModule],  
  templateUrl: './agregar-subcategoria.html',
  styleUrl: './agregar-subcategoria.css'
})
<<<<<<< HEAD
export class AgregarSubcategoria implements OnInit {

  modoEdicion: boolean = false;
=======
export class AgregarSubcategoria {

modoEdicion: boolean = false;
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
  idSubcategoria: string | null = null;
  categorias: any[] = [];

  nuevaSubcategoria = {
    nombre: '',
    descripcion: '',
    id_categoria: ''
  };

  constructor(
    private dialogRef: MatDialogRef<AgregarSubcategoria>,
    private adminDataService: AdminDataService,
<<<<<<< HEAD
    private snackBar: MatSnackBar,
=======
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Si se reciben datos, activar modo edición y rellenar campos
    if (data && data.subcategoria) {
      this.modoEdicion = true;
      this.idSubcategoria = data.subcategoria._id;
      this.nuevaSubcategoria = {
        nombre: data.subcategoria.nombre,
        descripcion: data.subcategoria.descripcion,
        id_categoria: data.subcategoria.id_categoria?._id || ''
      };
    }
  }

  ngOnInit(): void {
    this.cargarCategorias();
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

=======
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
  cargarCategorias(): void {
    this.adminDataService.getCategorias().subscribe({
      next: (res) => {
        this.categorias = res;
      },
      error: (err) => {
        console.error('Error al cargar categorías:', err);
<<<<<<< HEAD
        const mensaje = err.error?.message || 'Error al cargar las categorías';
        this.mostrarMensaje(mensaje, 'error');
=======
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
      }
    });
  }

  guardarSubcategoria(): void {
    if (!this.nuevaSubcategoria.nombre || !this.nuevaSubcategoria.descripcion || !this.nuevaSubcategoria.id_categoria) {
<<<<<<< HEAD
      this.mostrarMensaje('Por favor, complete todos los campos obligatorios', 'error');
=======
      console.warn('Faltan campos obligatorios');
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
      return;
    }

    if (this.modoEdicion && this.idSubcategoria) {
      // 🔄 Modo edición → PATCH
      this.adminDataService.updateSubcategoria(this.idSubcategoria, this.nuevaSubcategoria).subscribe({
        next: (res) => {
          console.log('Subcategoría actualizada correctamente:', res);
<<<<<<< HEAD
          const mensaje = res?.message || 'Subcategoría actualizada correctamente';
          this.mostrarMensaje(mensaje);
=======
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
          this.dialogRef.close(true);
        },
        error: (err) => {
          console.error('Error al actualizar subcategoría:', err);
<<<<<<< HEAD
          const mensaje = err.error?.message || 'Error al actualizar la subcategoría';
          this.mostrarMensaje(mensaje, 'error');
=======
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
        }
      });
    } else {
      // 🆕 Modo creación → POST
      this.adminDataService.addSubcategoria(this.nuevaSubcategoria).subscribe({
        next: (res) => {
          console.log('Subcategoría agregada correctamente:', res);
<<<<<<< HEAD
          const mensaje = res?.message || 'Subcategoría agregada correctamente';
          this.mostrarMensaje(mensaje);
=======
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
          this.dialogRef.close(true);
        },
        error: (err) => {
          console.error('Error al agregar subcategoría:', err);
<<<<<<< HEAD
          const mensaje = err.error?.message || 'Error al agregar la subcategoría';
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

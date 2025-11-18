<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AdminDataService } from '../../../../../core/services/admin.data.service';

@Component({
  selector: 'app-modal-servicio',
  standalone: true,
  imports: [MatIconModule, CommonModule, FormsModule],
  templateUrl: './agregar-servicios.html',
  styleUrls: ['./agregar-servicios.css']
})
export class ModalServicio {

  modoEdicion: boolean = false;
  idServicio: string | null = null;

  nuevoServicio = {
    titulo: '',
    descripcion: '',
    imagen_url: ''
  };

  constructor(
    private dialogRef: MatDialogRef<ModalServicio>,
    private adminDataService: AdminDataService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Si se reciben datos, activar modo edición y rellenar campos
    if (data && data.servicio) {
      this.modoEdicion = true;
      this.idServicio = data.servicio._id;
      this.nuevoServicio = {
        titulo: data.servicio.titulo,
        descripcion: data.servicio.descripcion,
        imagen_url: data.servicio.imagen_url || ''
      };
=======
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Subject, takeUntil } from 'rxjs';

import { ServiciosService } from '../../../../cliente/services/servicios.service';
import { Categoria } from '../../../../cliente/models/categoria.model';
import { Subcategoria } from '../../../../cliente/models/subcategoria.model';
import { Servicio } from '../../../../cliente/models/servicio.model';

@Component({
  selector: 'app-agregar-servicios',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    MatIconModule, 
    CommonModule, 
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  templateUrl: './agregar-servicios.html',
})
export class AgregarServicios implements OnInit, OnDestroy {
  @Output() cerrar = new EventEmitter<void>();
  @Output() servicioGuardado = new EventEmitter<Servicio>();

  servicioForm!: FormGroup;
  categorias: Categoria[] = [];
  subcategorias: Subcategoria[] = [];
  descripcionSubcategoria: string = '';
  guardando: boolean = false;
  cargandoCategorias: boolean = true;

  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder, 
    private serviciosService: ServiciosService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.inicializarFormulario();
    this.cargarCategorias();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private inicializarFormulario(): void {
    this.servicioForm = this.fb.group({
      id_categoria: ['', Validators.required],
      id_subcategoria: [{ value: '', disabled: true }, Validators.required],
      estado: ['activo', Validators.required],
      imagen_url: ['', [
        Validators.required, 
        Validators.pattern(/^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))(?:\?.*)?$/i)
      ]],
    });
  }

  cargarCategorias(): void {
    this.cargandoCategorias = true;
    
    this.serviciosService.getCategoriasServicio()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (categorias) => {
          this.categorias = categorias;
          this.cargandoCategorias = false;
        },
        error: (error) => {
          console.error('Error cargando categorías', error);
          this.mostrarError('Error al cargar las categorías');
          this.cargandoCategorias = false;
        }
      });
  }

  onCategoriaChange(): void {
    const idCategoria = this.servicioForm.get('id_categoria')?.value;
    
    // Resetear subcategoría cuando cambia la categoría
    this.servicioForm.get('id_subcategoria')?.setValue('');
    this.descripcionSubcategoria = '';

    if (idCategoria) {
      this.servicioForm.get('id_subcategoria')?.enable();
      
      this.serviciosService.getSubcategoriasPorCategoria(idCategoria)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (subcategorias) => {
            this.subcategorias = subcategorias;
          },
          error: (error) => {
            console.error('Error cargando subcategorías', error);
            this.mostrarError('Error al cargar las subcategorías');
            this.subcategorias = [];
          }
        });
    } else {
      this.servicioForm.get('id_subcategoria')?.disable();
      this.subcategorias = [];
    }
  }

  onSubcategoriaChange(): void {
    const idSubcategoria = this.servicioForm.get('id_subcategoria')?.value;
    
    if (idSubcategoria) {
      const subcategoria = this.subcategorias.find(s => s._id === idSubcategoria);
      this.descripcionSubcategoria = subcategoria?.descripcion || 'Sin descripción disponible';
    } else {
      this.descripcionSubcategoria = '';
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
    }
  }

  guardarServicio(): void {
<<<<<<< HEAD
    if (!this.nuevoServicio.titulo || !this.nuevoServicio.descripcion) {
      console.warn('Faltan campos obligatorios');
      return;
    }

    if (this.modoEdicion && this.idServicio) {
      // 🔄 Modo edición → PATCH
      this.adminDataService.updateServicio(this.idServicio, this.nuevoServicio).subscribe({
        next: (res) => {
          console.log('Servicio actualizado correctamente:', res);
          this.dialogRef.close(true);
        },
        error: (err) => {
          console.error('Error al actualizar servicio:', err);
        }
      });
    } else {
      // 🆕 Modo creación → POST
      this.adminDataService.createServicio(this.nuevoServicio).subscribe({
        next: (res) => {
          console.log('Servicio agregado correctamente:', res);
          this.dialogRef.close(true);
        },
        error: (err) => {
          console.error('Error al agregar servicio:', err);
        }
      });
    }
  }

  cerrarModal(): void {
    this.dialogRef.close();
  }
=======
    if (this.servicioForm.invalid) {
      this.marcarCamposComoTocados();
      this.mostrarError('Por favor complete todos los campos requeridos correctamente');
      return;
    }

    this.guardando = true;

    const servicioData = {
      id_categoria: this.servicioForm.value.id_categoria,
      id_subcategoria: this.servicioForm.value.id_subcategoria,
      descripcion: this.descripcionSubcategoria,
      estado: this.servicioForm.value.estado,
      imagen_url: this.servicioForm.value.imagen_url,
    };

    this.serviciosService.crearServicio(servicioData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (servicioCreado) => {
          this.guardando = false;
          this.mostrarExito('Servicio creado exitosamente');
          this.servicioGuardado.emit(servicioCreado);
          this.cerrar.emit();
        },
        error: (error) => {
          console.error('Error guardando servicio', error);
          this.guardando = false;
          this.mostrarError('Error al crear el servicio. Intente nuevamente.');
        }
      });
  }

  cancelar(): void {
    if (this.servicioForm.dirty) {
      // Podrías agregar una confirmación aquí si el formulario tiene cambios
      // const confirmar = confirm('¿Está seguro que desea cancelar? Los cambios no guardados se perderán.');
      // if (!confirmar) return;
    }
    this.cerrar.emit();
  }

  private marcarCamposComoTocados(): void {
    Object.keys(this.servicioForm.controls).forEach(key => {
      const control = this.servicioForm.get(key);
      control?.markAsTouched();
    });
  }

  private mostrarError(mensaje: string): void {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 5000,
      panelClass: ['error-snackbar']
    });
  }

  private mostrarExito(mensaje: string): void {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
  }

  // Getters para facilitar el acceso en el template
  get idCategoria() { return this.servicioForm.get('id_categoria'); }
  get idSubcategoria() { return this.servicioForm.get('id_subcategoria'); }
  get imagenUrl() { return this.servicioForm.get('imagen_url'); }
>>>>>>> ec79e4ae5b69dfa28162e5e8b7dff490d49ca3cd
}
# 🐾 Huellitas Vet — Sistema de Reservas Veterinarias

Sistema de gestión de citas y reservas para clínicas veterinarias, desarrollado como un template moderno, responsivo y funcional con stack frontend nativo.

## 🚀 Características Principales

### 🏥 Para el Cliente
- **Reserva Guiada:** Wizard de 5 pasos para agendar citas (Servicio → Profesional → Mascota → Fecha/Hora → Confirmación).
- **Gestión de Mascotas:** CRUD de mascotas desde el perfil para agilizar futuras reservas.
- **Historial de Citas:** Visualización de reservas pasadas y futuras con estados en tiempo real (Pendiente, Confirmada, Pagada, Completada, Anulada).
- **Anulación Inteligente:** Opción de cancelar citas respetando la política de 24 horas de anticipación.
- **Pagos Simulados:** Pasarela de pago con opciones de Transferencia/Depósito, Tarjeta y Efectivo.
- **Perfil de Usuario:** Gestión de datos personales y de mascotas.

### 🛠️ Aspectos Técnicos
- **Stack:** HTML5, Tailwind CSS (CDN), JavaScript Vanilla (ES6+).
- **Persistencia:** `localStorage` para simular una base de datos en el cliente.
- **Diseño:** Tema Claro Premium con paleta Coral/Turquesa, totalmente responsive.
- **Arquitectura:** Estructura modular en `main.js` con separación de responsabilidades (`Auth`, `Reservas`, `Mascotas`, `UI`, `Pagos`).

## 📁 Estructura del Proyecto

```text
veterinaria-03/
├── css/
│   └── styles.css           # Estilos personalizados y variables de color
├── js/
│   └── main.js              # Lógica central del sistema (Módulos de negocio)
├── assets/                  # Recursos estáticos (referencias externas)
├── index.html               # Página de inicio
├── services.html            # Catálogo de servicios
├── prices.html              # Lista de precios y paquetes
├── gallery.html             # Galería de instalaciones
├── schedules.html           # Horarios de atención
├── contact.html             # Formulario de contacto y ubicación
├── booking.html             # Proceso de reserva (Wizard)
├── booking-confirmation.html # Confirmación de reserva
├── payment.html             # Pasarela de pago
├── payment-confirmed.html   # Confirmación de pago
├── profile.html             # Panel de usuario e historial
├── my-bookings.html         # Detalle de reserva y anulación
├── login.html               # Inicio de sesión
├── register.html            # Registro de usuario
├── forgot-password.html     # Recuperación de contraseña
├── terms.html               # Términos y condiciones
└── privacy.html             # Política de privacidad
```

## 🔑 Usuarios de Prueba

| Usuario | Email | Contraseña |
| :--- | :--- | :--- |
| **Juan Pérez** | `juan@test.com` | `123456` |
| **María López** | `maria@test.com` | `123456` |

## 🛠️ Instalación y Uso

No requiere servidor ni instalación de dependencias externas (Tailwind y Google Fonts vía CDN).

1. Abrir `index.html` en cualquier navegador moderno.
2. Iniciar sesión con los usuarios de prueba para explorar el área de cliente.

## 🎨 Personalización

Para cambiar la identidad visual, modificar las variables en `css/styles.css`:
- `--color-primary`: Color principal coral/terracota.
- `--color-secondary`: Color de acento turquesa.
- `--color-bg`: Fondo crema del sitio.
const STORAGE_KEYS = {
  USERS: 'hv_users_clp_v1',
  SESSION: 'hv_session_clp_v1',
  RESERVAS: 'hv_reservas_clp_v1',
  RESERVA_DRAFT: 'hv_reserva_draft_clp_v1',
  PAGO_DRAFT: 'hv_pago_draft_clp_v1',
  MASCOTAS: 'hv_mascotas_clp_v1',
  CONTACT_MSGS: 'hv_contact_messages_clp_v1',
  REDIRECT: 'hv_redirect_clp_v1'
};

const SERVICIOS = [
  { id: 'sv1', categoria: 'consulta', nombre: 'Consulta General', descripcion: 'Evaluación clínica completa de tu mascota con revisión integral, diagnóstico y recomendaciones personalizadas.', duracion: 45, precio: 20000, imagen: 'https://images.unsplash.com/photo-1570824104453-508955ab713e?w=600&q=80' },
  { id: 'sv2', categoria: 'consulta', nombre: 'Vacunación', descripcion: 'Aplicación de vacunas según el calendario de tu mascota: parvovirus, rabia, séxtuple, triple felina y más.', duracion: 30, precio: 15000, imagen: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&q=80' },
  { id: 'sv3', categoria: 'consulta', nombre: 'Desparasitación', descripcion: 'Tratamiento antiparasitario interno y externo para proteger a tu mascota de parásitos.', duracion: 20, precio: 10000, imagen: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=600&q=80' },
  { id: 'sv4', categoria: 'estetica', nombre: 'Baño y Corte Completo', descripcion: 'Baño medicado, corte según raza, secado profesional y perfume hipoalergénico.', duracion: 90, precio: 17500, imagen: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=600&q=80' },
  { id: 'sv5', categoria: 'estetica', nombre: 'Corte de Uñas y Limpieza', descripcion: 'Corte de uñas, limpieza de oídos y glándulas anales para el confort de tu mascota.', duracion: 30, precio: 6250, imagen: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600&q=80' },
{ id: 'sv6', categoria: 'cirugia', nombre: 'Cirugía Menor', descripcion: 'Procedimientos quirúrgicos ambulatorios con anestesia monitoreada y cuidados post-operatorios.', duracion: 120, precio: 70000, imagen: 'https://images.unsplash.com/photo-1588269845464-8993565cac3a?w=600&q=80' },
  { id: 'sv7', categoria: 'cirugia', nombre: 'Esterilización', descripcion: 'Esterilización con láser de CO2, mínima invasión, pronta recuperación y control del dolor.', duracion: 90, precio: 55000, imagen: 'https://images.unsplash.com/photo-1559190394-df5a28aab5c5?w=600&q=80' },
  { id: 'sv8', categoria: 'analisis', nombre: 'Análisis Clínicos', descripcion: 'Hemograma, química sangu铆nea, perfil renal, tiroideo y otros ex谩menes de laboratorio.', duracion: 30, precio: 22500, imagen: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80' },
  { id: 'sv9', categoria: 'emergencia', nombre: 'Atención de Emergencia', descripcion: 'Servicio 24/7 para urgencias veterinarias. Atención inmediata con equipo de cuidados intensivos.', duracion: 60, precio: 37500, imagen: 'https://images.unsplash.com/photo-1588269845464-8993565cac3a?w=600&q=80' },
  { id: 'sv10', categoria: 'odontologia', nombre: 'Limpieza Dental', descripcion: 'Profilaxis dental con ultrasonido, eliminación de sarro y pulido dental para una boca saludable.', duracion: 60, precio: 45000, imagen: 'https://images.unsplash.com/photo-1570824104453-508955ab713e?w=600&q=80' }
];

const VETERINARIOS = [
  { id: 'vet1', nombre: 'Dra. Sofía Ramírez', rol: 'Medicina General', colegiatura: 'CMV 28415', foto: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80', rating: 4.9, experiencia: '10 años', bio: 'Apasionada por la medicina preventiva y el bienestar integral de perros y gatos.', especialidades: ['sv1','sv2','sv3','sv8'] },
  { id: 'vet2', nombre: 'Dr. Carlos Mendoza', rol: 'Cirujano Veterinario', colegiatura: 'CMV 31208', foto: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?w=400&q=80', rating: 4.8, experiencia: '15 años', bio: 'Especialista en cirugía láser y procedimientos de mínima invasión.', especialidades: ['sv6','sv7','sv9','sv10'] },
  { id: 'vet3', nombre: 'Dra. Lucía Torres', rol: 'Estética y Spa', colegiatura: 'CMV 29842', foto: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80', rating: 5.0, experiencia: '8 años', bio: 'Groomer certificada con técnica libre de estrés para mascotas ansiosas.', especialidades: ['sv4','sv5','sv10'] },
  { id: 'vet4', nombre: 'Dr. Andrés Vega', rol: 'Diagnóstico Clínico', colegiatura: 'CMV 33560', foto: 'https://images.unsplash.com/photo-1581888227599-779811939961?w=400&q=80', rating: 4.9, experiencia: '12 años', bio: 'Especialista en diagnóstico por imagen y análisis de laboratorio avanzado.', especialidades: ['sv1','sv8','sv2','sv9'] }
];

const ESPECIES = [
  { id: 'perro', label: 'Perro', icon: '🐶' },
  { id: 'gato', label: 'Gato', icon: '🐱' },
  { id: 'ave', label: 'Ave', icon: '🦜' },
  { id: 'conejo', label: 'Conejo', icon: '🐰' },
  { id: 'otro', label: 'Otro', icon: '🐾' }
];

const HORARIOS = {
  lunes:    { abierto: true,  desde: '09:00', hasta: '20:00' },
  martes:   { abierto: true,  desde: '09:00', hasta: '20:00' },
  miercoles:{ abierto: true,  desde: '09:00', hasta: '20:00' },
  jueves:   { abierto: true,  desde: '09:00', hasta: '20:00' },
  viernes:  { abierto: true,  desde: '09:00', hasta: '20:00' },
  sabado:   { abierto: true,  desde: '09:00', hasta: '18:00' },
  domingo:  { abierto: true,  desde: '10:00', hasta: '14:00', nota: 'Solo emergencias' }
};

const DIAS = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];

const Storage = {
  get(key, fallback = null) {
    try {
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : fallback;
    } catch (e) { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch (e) { console.error('Storage error', e); }
  },
  remove(key) { localStorage.removeItem(key); }
};

function generateId(prefix = 'id') {
  return prefix + '_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function formatCurrency(value) {
  return 'CLP$ ' + Number(value).toLocaleString('es-CL', { maximumFractionDigits: 0 });
}

function formatDate(iso, opts = {}) {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return '—';
  const months = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  const day = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
  if (opts.long) {
    return `${day[d.getDay()]} ${d.getDate()} de ${months[d.getMonth()]} de ${d.getFullYear()}`;
  }
  return `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()}`;
}

function formatTime(hhmm) {
  if (!hhmm) return '—';
  return hhmm;
}

function diffHours(fecha, hora) {
  const target = new Date(fecha + 'T' + hora + ':00');
  const now = new Date();
  return (target - now) / (1000 * 60 * 60);
}

function todayISO(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().slice(0,10);
}

const Auth = {
  init() {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    if (users.length === 0) {
      const baseUsers = [
        { id: 'u1', nombre: 'Juan Pérez', email: 'juan@test.com', telefono: '+56 9 9911 1222', dni: '45678901', password: '123456', foto: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&q=80', creado: Date.now() - 86400000 * 60 },
        { id: 'u2', nombre: 'María López', email: 'maria@test.com', telefono: '+56 9 9933 3444', dni: '47890123', password: '123456', foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80', creado: Date.now() - 86400000 * 30 }
      ];
      Storage.set(STORAGE_KEYS.USERS, baseUsers);

      const mascotasSeed = [
        { id: 'm1', userId: 'u1', nombre: 'Max', especie: 'perro', raza: 'Golden Retriever', edad: '4 años', peso: '28 kg', sexo: 'macho', notas: 'Muy activo, le gusta correr.', creado: Date.now() - 86400000 * 50 },
        { id: 'm2', userId: 'u1', nombre: 'Luna', especie: 'gato', raza: 'Siamés', edad: '3 años', peso: '4 kg', sexo: 'hembra', notas: 'Esterilizada. Dieta especial.', creado: Date.now() - 86400000 * 40 },
        { id: 'm3', userId: 'u2', nombre: 'Rocky', especie: 'perro', raza: 'Bulldog Francés', edad: '2 años', peso: '12 kg', sexo: 'macho', notas: 'Alérgico a某些 alimentos.', creado: Date.now() - 86400000 * 25 },
        { id: 'm4', userId: 'u2', nombre: 'Mishi', especie: 'gato', raza: 'Persa', edad: '5 años', peso: '5 kg', sexo: 'hembra', notas: 'Requiere cepillado diario.', creado: Date.now() - 86400000 * 20 },
        { id: 'm5', userId: 'u2', nombre: 'Paco', especie: 'ave', raza: 'Periquito', edad: '1 año', peso: '0.04 kg', sexo: 'macho', notas: '', creado: Date.now() - 86400000 * 10 }
      ];
      Storage.set(STORAGE_KEYS.MASCOTAS, mascotasSeed);

      const now = Date.now();
      const reservasSeed = [
        { id: 'r1', codigo: 'HV-00001', userId: 'u1', servicioId: 'sv1', vetId: 'vet1', mascotaId: 'm1', fecha: todayISO(-15), hora: '10:00', estado: 'completada', precio: 20000, metodoPago: 'tarjeta', pagado: true, creado: now - 86400000 * 20, notas: 'Chequeo anual, todo en orden.' },
        { id: 'r2', codigo: 'HV-00002', userId: 'u1', servicioId: 'sv4', vetId: 'vet3', mascotaId: 'm1', fecha: todayISO(-7), hora: '14:00', estado: 'completada', precio: 17500, metodoPago: 'yape', pagado: true, creado: now - 86400000 * 10 },
        { id: 'r3', codigo: 'HV-00003', userId: 'u1', servicioId: 'sv2', vetId: 'vet1', mascotaId: 'm2', fecha: todayISO(3), hora: '11:00', estado: 'confirmada', precio: 15000, metodoPago: null, pagado: false, creado: now - 86400000 * 2 },
        { id: 'r4', codigo: 'HV-00004', userId: 'u2', servicioId: 'sv8', vetId: 'vet4', mascotaId: 'm3', fecha: todayISO(-3), hora: '09:30', estado: 'completada', precio: 22500, metodoPago: 'efectivo', pagado: true, creado: now - 86400000 * 5 },
        { id: 'r5', codigo: 'HV-00005', userId: 'u2', servicioId: 'sv1', vetId: 'vet1', mascotaId: 'm4', fecha: todayISO(5), hora: '16:00', estado: 'pendiente', precio: 20000, metodoPago: null, pagado: false, creado: now - 86400000 },
        { id: 'r6', codigo: 'HV-00006', userId: 'u2', servicioId: 'sv6', vetId: 'vet2', mascotaId: 'm3', fecha: todayISO(-30), hora: '08:00', estado: 'anulada', precio: 70000, metodoPago: null, pagado: false, creado: now - 86400000 * 40, motivoAnulacion: 'Reprogramada para otra fecha' }
      ];
      Storage.set(STORAGE_KEYS.RESERVAS, reservasSeed);
    }
  },
  current() {
    const s = Storage.get(STORAGE_KEYS.SESSION);
    if (!s) return null;
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    return users.find(u => u.id === s.userId) || null;
  },
  isLogged() { return !!this.current(); },
  login(email, password) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) return { ok: false, error: 'Email o contraseña incorrectos.' };
    Storage.set(STORAGE_KEYS.SESSION, { userId: user.id, token: 'tkn_' + Date.now(), expires: Date.now() + 86400000 });
    return { ok: true, user };
  },
  register(data) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    if (users.some(u => u.email === data.email)) {
      return { ok: false, error: 'Ya existe una cuenta con este email.' };
    }
    const newUser = {
      id: generateId('u'),
      nombre: data.nombre,
      email: data.email,
      telefono: data.telefono || '',
      dni: data.dni || '',
      password: data.password,
      foto: data.foto || `https://ui-avatars.com/api/?name=${encodeURIComponent(data.nombre)}&background=e07856&color=fff&size=200`,
      creado: Date.now()
    };
    users.push(newUser);
    Storage.set(STORAGE_KEYS.USERS, users);
    Storage.set(STORAGE_KEYS.SESSION, { userId: newUser.id, token: 'tkn_' + Date.now(), expires: Date.now() + 86400000 });
    return { ok: true, user: newUser };
  },
  logout() {
    Storage.remove(STORAGE_KEYS.SESSION);
  },
  update(userId, changes) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    const idx = users.findIndex(u => u.id === userId);
    if (idx === -1) return false;
    users[idx] = { ...users[idx], ...changes };
    Storage.set(STORAGE_KEYS.USERS, users);
    return true;
  },
  recover(email) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    const user = users.find(u => u.email === email);
    if (!user) return { ok: false, error: 'No existe una cuenta con este email.' };
    return { ok: true, message: 'Te enviamos un enlace de recuperación a tu correo.' };
  },
  requireAuth() {
    if (!Auth.isLogged()) {
      const target = location.pathname.split('/').pop() || 'index.html';
      Storage.set(STORAGE_KEYS.REDIRECT, target);
      location.href = 'login.html';
      return false;
    }
    return true;
  }
};

const Mascotas = {
  list(userId) {
    return Storage.get(STORAGE_KEYS.MASCOTAS, []).filter(m => m.userId === userId);
  },
  get(id) {
    return Storage.get(STORAGE_KEYS.MASCOTAS, []).find(m => m.id === id) || null;
  },
  create(data) {
    const mascotas = Storage.get(STORAGE_KEYS.MASCOTAS, []);
    const nueva = { id: generateId('m'), creado: Date.now(), ...data };
    mascotas.push(nueva);
    Storage.set(STORAGE_KEYS.MASCOTAS, mascotas);
    return nueva;
  },
  update(id, changes) {
    const mascotas = Storage.get(STORAGE_KEYS.MASCOTAS, []);
    const idx = mascotas.findIndex(m => m.id === id);
    if (idx === -1) return false;
    mascotas[idx] = { ...mascotas[idx], ...changes };
    Storage.set(STORAGE_KEYS.MASCOTAS, mascotas);
    return true;
  },
  remove(id) {
    const mascotas = Storage.get(STORAGE_KEYS.MASCOTAS, []).filter(m => m.id !== id);
    Storage.set(STORAGE_KEYS.MASCOTAS, mascotas);
  }
};

const Reservas = {
  list(userId = null) {
    const all = Storage.get(STORAGE_KEYS.RESERVAS, []);
    return userId ? all.filter(r => r.userId === userId) : all;
  },
  get(id) {
    return Storage.get(STORAGE_KEYS.RESERVAS, []).find(r => r.id === id) || null;
  },
  nextCodigo() {
    const all = Storage.get(STORAGE_KEYS.RESERVAS, []);
    const num = all.length + 1;
    return 'HV-' + String(num).padStart(5, '0');
  },
  create(data) {
    const reservas = Storage.get(STORAGE_KEYS.RESERVAS, []);
    const codigo = this.nextCodigo();
    const nueva = {
      id: generateId('r'),
      codigo,
      estado: 'pendiente',
      pagado: false,
      metodoPago: null,
      creado: Date.now(),
      notas: '',
      ...data
    };
    reservas.push(nueva);
    Storage.set(STORAGE_KEYS.RESERVAS, reservas);
    return nueva;
  },
  update(id, changes) {
    const reservas = Storage.get(STORAGE_KEYS.RESERVAS, []);
    const idx = reservas.findIndex(r => r.id === id);
    if (idx === -1) return false;
    reservas[idx] = { ...reservas[idx], ...changes };
    Storage.set(STORAGE_KEYS.RESERVAS, reservas);
    return true;
  },
  remove(id) {
    const reservas = Storage.get(STORAGE_KEYS.RESERVAS, []).filter(r => r.id !== id);
    Storage.set(STORAGE_KEYS.RESERVAS, reservas);
  },
  cancel(id, motivo = '') {
    const r = this.get(id);
    if (!r) return { ok: false, error: 'Reserva no encontrada.' };
    const horas = diffHours(r.fecha, r.hora);
    if (horas < 24 && horas > 0) {
      return { ok: false, error: 'Solo puedes anular con al menos 24 horas de anticipación.' };
    }
    if (r.estado === 'completada' || r.estado === 'anulada') {
      return { ok: false, error: 'Esta reserva no puede ser anulada.' };
    }
    this.update(id, { estado: 'anulada', motivoAnulacion: motivo });
    return { ok: true };
  },
  pay(id, metodo) {
    return this.update(id, { estado: 'pagada', pagado: true, metodoPago: metodo });
  },
  timeSlotsFor(fecha) {
    const dayName = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'][new Date(fecha + 'T00:00:00').getDay()];
    const cfg = HORARIOS[dayName];
    if (!cfg || !cfg.abierto) return [];
    const slots = [];
    const [fromH, fromMi] = cfg.desde.split(':').map(Number);
    const [toH, toMi] = cfg.hasta.split(':').map(Number);
    let cur = fromH * 60 + fromMi;
    const end = toH * 60 + toMi;
    while (cur + 60 <= end) {
      const h = String(Math.floor(cur / 60)).padStart(2, '0');
      const m = String(cur % 60).padStart(2, '0');
      slots.push(`${h}:${m}`);
      cur += 60;
    }
    return slots;
  },
  isSlotTaken(fecha, hora, vetId = null) {
    const reservas = this.list();
    return reservas.some(r => r.fecha === fecha && r.hora === hora && r.estado !== 'anulada' && (!vetId || r.vetId === vetId));
  },
  byStatus(userId, estado) {
    return this.list(userId).filter(r => r.estado === estado);
  }
};

const Pagos = {
  metodos: [
    { id: 'yape', nombre: 'Transferencia', icono: '💜', descripcion: 'Paga con tu cuenta Transferencia' },
    { id: 'plin', nombre: 'Depósito', icono: '💚', descripcion: 'Paga con tu cuenta Depósito' },
    { id: 'tarjeta', nombre: 'Tarjeta', icono: '💳', descripcion: 'Visa, Mastercard o Diners' },
    { id: 'efectivo', nombre: 'Efectivo', icono: '💵', descripcion: 'Paga en consultorio' }
  ],
  validateTarjeta(num, mes, anio, cvv) {
    const numClean = num.replace(/\s/g, '');
    if (!/^\d{13,19}$/.test(numClean)) return 'Número de tarjeta inválido.';
    if (!/^\d{2}$/.test(mes)) return 'Mes inválido.';
    if (!/^\d{2,4}$/.test(anio)) return 'Año inválido.';
    if (!/^\d{3,4}$/.test(cvv)) return 'CVV inválido.';
    return null;
  },
  formatCardNumber(value) {
    return value.replace(/\D/g, '').slice(0, 19).replace(/(.{4})/g, '$1 ').trim();
  }
};

const Contact = {
  send(data) {
    const msgs = Storage.get(STORAGE_KEYS.CONTACT_MSGS, []);
    const nuevo = { id: generateId('msg'), fecha: Date.now(), leido: false, ...data };
    msgs.push(nuevo);
    Storage.set(STORAGE_KEYS.CONTACT_MSGS, msgs);
    return nuevo;
  }
};

const UI = {
  toast(message, type = 'success') {
    let cont = document.querySelector('.toast-container');
    if (!cont) {
      cont = document.createElement('div');
      cont.className = 'toast-container';
      document.body.appendChild(cont);
    }
    const icons = { success: '✓', error: '✕', warning: '!', info: 'i' };
    const el = document.createElement('div');
    el.className = `toast toast-${type}`;
    el.innerHTML = `<span class="text-2xl font-bold text-${type === 'success' ? 'secondary' : type === 'error' ? 'danger' : type === 'warning' ? 'warning' : 'primary'}">${icons[type]}</span><span class="text-sm text-gray-800 font-semibold flex-1">${message}</span>`;
    cont.appendChild(el);
    setTimeout(() => {
      el.style.transition = 'opacity .25s, transform .25s';
      el.style.opacity = '0';
      el.style.transform = 'translateX(20px)';
      setTimeout(() => el.remove(), 280);
    }, 3200);
  },
  modal(opts) {
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    backdrop.innerHTML = `
      <div class="modal-content">
        <h3 class="text-xl font-bold mb-3 font-display" style="color:var(--color-text);">${opts.title || ''}</h3>
        <p class="text-sm text-gray-600 mb-5 leading-relaxed">${opts.message || ''}</p>
        <div class="flex justify-end gap-3">
          ${opts.cancelText ? `<button class="btn-ghost" data-act="cancel">${opts.cancelText}</button>` : ''}
          <button class="btn-primary" data-act="confirm" style="padding:.6rem 1.4rem;">${opts.confirmText || 'Aceptar'}</button>
        </div>
      </div>`;
    document.body.appendChild(backdrop);
    const close = (result) => {
      backdrop.style.opacity = '0';
      setTimeout(() => backdrop.remove(), 200);
      if (opts.onClose) opts.onClose(result);
    };
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) close(false);
      if (e.target.dataset.act === 'cancel') close(false);
      if (e.target.dataset.act === 'confirm') close(true);
    });
    return close;
  },
  header(activePage = '') {
    const user = Auth.current();
    const redirect = Storage.get(STORAGE_KEYS.REDIRECT, null);
    const target = (file) => {
      if (!user && ['profile.html','my-bookings.html','booking.html','payment.html'].includes(file)) {
        Storage.set(STORAGE_KEYS.REDIRECT, file);
        return 'login.html';
      }
      return file;
    };
    const link = (file, label, icon = '') => `
      <a href="${target(file)}" class="text-sm font-semibold transition flex items-center gap-1.5 ${activePage === file ? 'text-primary' : 'text-gray-600 hover:text-primary'}">
        ${icon ? `<span>${icon}</span>` : ''}${label}
      </a>`;

    const container = document.getElementById('appHeader');
    if (!container) return;
    container.innerHTML = `
      <header class="bg-card/95 backdrop-blur-md border-b border-soft sticky top-0 z-50">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16 md:h-20">
            <a href="index.html" class="flex items-center gap-2.5 group">
              <div class="w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-primary flex items-center justify-center shadow-md group-hover:scale-105 transition">
                <svg viewBox="0 0 24 24" class="w-6 h-6 text-white" fill="currentColor"><circle cx="6" cy="9" r="2.2"/><circle cx="10" cy="5" r="2.2"/><circle cx="14" cy="5" r="2.2"/><circle cx="18" cy="9" r="2.2"/><path d="M12 11c-2.5 0-4.5 2.5-4.5 5s2 4 4.5 4 4.5-1.5 4.5-4-2-5-4.5-5z"/></svg>
              </div>
              <div class="flex flex-col leading-none">
                <span class="text-lg md:text-xl font-bold font-display" style="color:var(--color-text);">Huellitas <span class="text-primary">Vet</span></span>
                <span class="text-[10px] text-muted tracking-widest uppercase">Cuidamos a tu familia</span>
              </div>
            </a>

            <nav class="hidden lg:flex items-center gap-7">
              ${link('index.html', 'Inicio', '🏠')}
              ${link('services.html', 'Servicios', '🩺')}
              ${link('prices.html', 'Precios', '💰')}
              ${link('schedules.html', 'Horarios', '🕒')}
              ${link('gallery.html', 'Galería', '📸')}
              ${link('contact.html', 'Contacto', '📞')}
            </nav>

            <div class="flex items-center gap-2 md:gap-3">
              ${user ? `
                <a href="${target('profile.html')}" class="hidden md:flex items-center gap-2 px-3 py-2 rounded-full bg-soft transition hover:bg-primary/10">
                  <img src="${user.foto || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.nombre)}&background=e07856&color=fff&size=80`}" class="w-8 h-8 rounded-full object-cover" alt="${user.nombre}">
                  <span class="text-sm font-semibold" style="color:var(--color-text);">${user.nombre.split(' ')[0]}</span>
                </a>
                <a href="${target('booking.html')}" class="btn-primary text-sm" style="padding:.55rem 1.1rem;">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  Reservar
                </a>
                <button id="btnLogout" class="btn-ghost text-sm" title="Cerrar sesión">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
                </button>
              ` : `
                <a href="login.html" class="hidden sm:inline-flex btn-ghost text-sm">Ingresar</a>
                <a href="${target('booking.html')}" class="btn-primary text-sm" style="padding:.55rem 1.1rem;">Reservar</a>
              `}

              <button id="btnMobile" class="lg:hidden p-2 rounded-lg hover:bg-soft">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
              </button>
            </div>
          </div>
          <div id="mobileNav" class="lg:hidden hidden border-t border-soft py-3 grid grid-cols-2 gap-2">
            ${link('index.html', 'Inicio', '🏠')}
            ${link('services.html', 'Servicios', '🩺')}
            ${link('prices.html', 'Precios', '💰')}
            ${link('schedules.html', 'Horarios', '🕒')}
            ${link('gallery.html', 'Galería', '📸')}
            ${link('contact.html', 'Contacto', '📞')}
            ${user ? link('profile.html', 'Mi Perfil', '👤') : link('login.html', 'Ingresar', '🔑')}
          </div>
        </div>
      </header>`;

    const btnMobile = document.getElementById('btnMobile');
    const mobileNav = document.getElementById('mobileNav');
    if (btnMobile && mobileNav) {
      btnMobile.addEventListener('click', () => mobileNav.classList.toggle('hidden'));
    }
    const btnLogout = document.getElementById('btnLogout');
    if (btnLogout) {
      btnLogout.addEventListener('click', () => {
        Auth.logout();
        UI.toast('Sesión cerrada correctamente', 'info');
        setTimeout(() => location.href = 'index.html', 600);
      });
    }
  },
  footer() {
    const container = document.getElementById('appFooter');
    if (!container) return;
    container.innerHTML = `
      <footer class="bg-card border-t border-soft mt-16">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div class="flex items-center gap-2.5 mb-4">
                <div class="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center">
                  <svg viewBox="0 0 24 24" class="w-6 h-6 text-white" fill="currentColor"><circle cx="6" cy="9" r="2.2"/><circle cx="10" cy="5" r="2.2"/><circle cx="14" cy="5" r="2.2"/><circle cx="18" cy="9" r="2.2"/><path d="M12 11c-2.5 0-4.5 2.5-4.5 5s2 4 4.5 4 4.5-1.5 4.5-4-2-5-4.5-5z"/></svg>
                </div>
                <span class="text-xl font-bold font-display">Huellitas <span class="text-primary">Vet</span></span>
              </div>
              <p class="text-sm text-muted leading-relaxed">Atención veterinaria integral con calidez humana y la mejor tecnología para tu mascota.</p>
            </div>
            <div>
              <h4 class="font-bold font-display mb-4" style="color:var(--color-text);">Servicios</h4>
              <ul class="space-y-2 text-sm text-muted">
                <li><a href="services.html" class="hover:text-primary">Consultas</a></li>
                <li><a href="services.html" class="hover:text-primary">Cirugías</a></li>
                <li><a href="services.html" class="hover:text-primary">Estética</a></li>
                <li><a href="services.html" class="hover:text-primary">Emergencias 24/7</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold font-display mb-4" style="color:var(--color-text);">Empresa</h4>
              <ul class="space-y-2 text-sm text-muted">
                <li><a href="contact.html" class="hover:text-primary">Contacto</a></li>
                <li><a href="schedules.html" class="hover:text-primary">Horarios</a></li>
                <li><a href="gallery.html" class="hover:text-primary">Galería</a></li>
                <li><a href="prices.html" class="hover:text-primary">Precios</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold font-display mb-4" style="color:var(--color-text);">Legal</h4>
              <ul class="space-y-2 text-sm text-muted">
                <li><a href="terms.html" class="hover:text-primary">Términos y condiciones</a></li>
                <li><a href="privacy.html" class="hover:text-primary">Política de privacidad</a></li>
              </ul>
              <div class="mt-4 flex items-center gap-2 text-xs text-muted">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                +56 9 9988 8777
              </div>
            </div>
          </div>
          <div class="divider-soft my-8"></div>
          <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted">
            <p>© ${new Date().getFullYear()} Huellitas Vet. Todos los derechos reservados.</p>
            <p class="flex items-center gap-1.5">Hecho con <span class="text-primary">♥</span> para las mascotas</p>
          </div>
        </div>
      </footer>`;
  },
  stars(rating, size = 'w-4 h-4') {
    let html = '';
    for (let i = 1; i <= 5; i++) {
      const filled = i <= Math.floor(rating);
      const half = !filled && i - 0.5 <= rating;
      html += `<svg class="${size} ${filled || half ? 'text-accent' : 'text-gray-300'}" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
    }
    return html;
  },
  statusBadge(estado) {
    const map = {
      pendiente: ['Pendiente', 'status-pendiente'],
      confirmada: ['Confirmada', 'status-confirmada'],
      pagada: ['Pagada', 'status-pagada'],
      completada: ['Completada', 'status-completada'],
      anulada: ['Anulada', 'status-anulada']
    };
    const [label, cls] = map[estado] || ['—', 'status-pendiente'];
    return `<span class="chip ${cls}">${label}</span>`;
  },
  petEmoji(especie) {
    const e = ESPECIES.find(x => x.id === especie);
    return e ? e.icon : '🐾';
  }
};

const ReservasDraft = {
  get() { return Storage.get(STORAGE_KEYS.RESERVA_DRAFT, null); },
  set(data) { Storage.set(STORAGE_KEYS.RESERVA_DRAFT, data); },
  clear() { Storage.remove(STORAGE_KEYS.RESERVA_DRAFT); }
};

const PagoDraft = {
  get() { return Storage.get(STORAGE_KEYS.PAGO_DRAFT, null); },
  set(data) { Storage.set(STORAGE_KEYS.PAGO_DRAFT, data); },
  clear() { Storage.remove(STORAGE_KEYS.PAGO_DRAFT); }
};

document.addEventListener('DOMContentLoaded', () => {
  Auth.init();
  const page = document.body.dataset.page || '';
  UI.header(page);
  UI.footer();
});
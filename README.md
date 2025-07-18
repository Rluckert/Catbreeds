# 📱 Cat Breeds App

Aplicación móvil desarrollada con **React Native + Expo** que muestra una lista de razas de gatos con detalles, imágenes y navegación entre pantallas.

---

## 🚀 Requisitos previos

Antes de correr este proyecto, asegúrate de tener instalado:

- [Node.js (v18+ recomendado)](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
  ```bash
  npm install -g expo-cli
  ```
- Android Studio o Xcode (dependiendo de si deseas correr en Android o iOS)
- Un emulador o dispositivo físico conectado

---

## 🛠 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/cat-breeds-app.git
cd cat-breeds-app
```

2. Instala las dependencias:

```bash
npm install
```

---

## ▶️ Scripts disponibles

### Iniciar el proyecto

```bash
npm run start
```

### Ejecutar en Android utlizando Expo Go

```bash
npm run android
```

### Ejecutar en iOS (solo en macOS) utlizando Expo Go

```bash
npm run ios
```

### Ejecutar Android de forma nativa

```bash
npm run run-android
```

### Ejecutar iOS de forma nativa

```bash
npm run run-ios
```

### Lint (Revisión de código)

```bash
npm run lint
```

### Prebuild

```bash
npm run prebuild
```

> Convierte el proyecto Expo en un proyecto nativo (solo cuando necesites modificar código nativo directamente).

---

## ✅ Recomendaciones

- Usa la app [Expo Go](https://expo.dev/client) para probar en dispositivos físicos rápidamente.
- Si ves problemas con la caché, puedes correr:

```bash
npx expo start -c
```

---

## 🐛 ¿Problemas?

Si tienes algún error, asegúrate de:

- Tener el emulador/emulador correctamente iniciado.
- Ejecutar `npm install` antes de correr el proyecto.
- Usar la versión correcta de Node.js.

---

## 📄 Licencia

MIT © 2025 - [Rafael Luckert]

---

## 🔐 Variables de entorno

Este proyecto requiere una clave de API para funcionar correctamente.

1. Copia el archivo `.env.example` y renómbralo como `.env`:

```bash
cp .env.example .env
```

2. Abre el archivo `.env` y reemplaza el valor de `API_KEY` con tu clave real:

```env
API_KEY=TU_API_KEY_AQUI
```

> Asegúrate de **no compartir tu archivo `.env`** ni subirlo a ningún repositorio público.

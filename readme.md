# Proyecto Desafio Técnico Pigmaleon

Este repositorio contiene dos implementaciones de la clásica solución al desafio propuesto:

1. **Solución ingenua (Fuerza bruta)** – `O(n²)` en tiempo.
2. **Solución optimizada** – `O(n)` en tiempo usando un `Map`.

Además incluye configuración completa de desarrollo con:

- **ESM (ECMAScript Modules)**
- **Mocha** + **Chai** para pruebas unitarias

---

## 📂 Estructura de carpetas

```
desafio_tecnico_pigmaleon/
├─ src/
│  ├─ helpers/
│  │  ├─ sum_native.js        # Implementación ingenua (fuerza bruta)
│  │  ├─ sum_optimist.js    # Implementación O(n) con Map
│  ├─ index.js                # Ejemplo de uso de ambas funciones
├─ test/
│  ├─ sum_native.test.js          # Tests con Mocha + Chai
│  ├─ sum_optimist.test.js          # Tests con Mocha + Chai
├─ .gitignore                 # Archivos ignorados por Git
├─ package.json               # Metadatos del proyecto y scripts
└─ readme.md                  # Documentación del proyecto
```

---

## 🚀 Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/EduardoMVirgilio/desafio_tecnico_pigmaleon
   cd desafio_tecnico_pigmaleon
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

---

## 📋 Uso

En `src/index.js` encontrarás un ejemplo de ejecución:

```bash
npm start
```

Salida esperada:

```
Native: true
Native: false
Optimist: true
Optimist: false
```

---

## ✔️ Descripción de las implementaciones

### 1. `sumNative(nums, target)`

- **Complejidad:** O(n²) en tiempo, O(1) en espacio.
- **Explicación:** Recorre todos los pares posibles hasta encontrar dos números cuya suma sea `target`.

### 2. `sumOptimist(nums, target)`

- **Complejidad:** O(n) en tiempo, O(n) en espacio.
- **Explicación:** Usa un `Map` para almacenar valores vistos y sus índices; en una única pasada busca complementos.

---

## 🧪 Pruebas unitarias

Los tests se definen en `test/` usando **Mocha** + **Chai**. Incluyen casos con:

- Arrays vacíos.
- Pares encontrados correctamente.
- Valores negativos.
- Ausencia de soluciones (devuelve `false`).

Para ejecutarlos:

```bash
npm test
```

---

## 📄 Licencia

MIT © Eduardo Miguel Virgilio

// Configuration
const API_URL = "http://localhost:8000"
let contenidoGenerado = ""
let metadatosActuales = {}

// Form submission
document.getElementById("form-unidad")?.addEventListener("submit", async (e) => {
  e.preventDefault()

  const asignatura = document.getElementById("asignatura").value
  const curso = document.getElementById("curso").value
  const tema = document.getElementById("tema").value
  const caracteristicas = document.getElementById("caracteristicas").value

  if (!asignatura || !curso || !tema) {
    alert("Por favor, completa todos los campos obligatorios (Asignatura, Curso y Tema)")
    return
  }

  const datos = {
    asignatura,
    curso,
    tema,
    caracteristicas_grupo: caracteristicas || null,
  }

  metadatosActuales = datos

  const btnGenerar = e.target.querySelector(".btn-generate")
  const originalHTML = btnGenerar.innerHTML
  btnGenerar.disabled = true
  btnGenerar.innerHTML = `
        <svg class="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
        </svg>
        Generando... (30-60 segundos)
    `

  try {
    console.log("[v0] Enviando petición:", datos)

    const response = await fetch(`${API_URL}/api/generar/unidad-didactica`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    })

    console.log("[v0] Respuesta recibida:", response.status)

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`)
    }

    const resultado = await response.json()
    console.log("[v0] Documento generado")

    if (resultado.success) {
      contenidoGenerado = resultado.data.contenido

      // Show modal
      document.getElementById("modal-titulo").textContent = "Unidad Didáctica Generada"
      document.getElementById("modal-subtitulo").textContent = `${asignatura} - ${curso} - ${tema}`
      document.getElementById("contenido-resultado").textContent = contenidoGenerado
      document.getElementById("modal-resultado").classList.remove("hidden")
    } else {
      alert("Error al generar el documento")
    }
  } catch (error) {
    console.error("[v0] Error:", error)
    alert("Error de conexión. Asegúrate de que el servidor esté corriendo en http://localhost:8000")
  } finally {
    btnGenerar.disabled = false
    btnGenerar.innerHTML = originalHTML
  }
})

// Close modal
document.getElementById("btn-cerrar-modal")?.addEventListener("click", () => {
  document.getElementById("modal-resultado").classList.add("hidden")
})

// Click outside to close
document.getElementById("modal-resultado")?.addEventListener("click", function (e) {
  if (e.target === this) {
    this.classList.add("hidden")
  }
})

// Copy to clipboard
document.getElementById("btn-copiar")?.addEventListener("click", async function () {
  try {
    await navigator.clipboard.writeText(contenidoGenerado)
    const originalHTML = this.innerHTML
    this.innerHTML =
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Copiado'
    setTimeout(() => {
      this.innerHTML = originalHTML
    }, 2000)
  } catch (err) {
    alert("No se pudo copiar al portapapeles")
  }
})

// Download TXT
document.getElementById("btn-descargar-txt")?.addEventListener("click", function () {
  const nombre =
    `UD_${metadatosActuales.asignatura}_${metadatosActuales.curso}_${metadatosActuales.tema}`.replace(
      /[^a-z0-9]/gi,
      "_",
    ) + ".txt"
  const blob = new Blob([contenidoGenerado], { type: "text/plain;charset=utf-8" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = nombre
  link.click()
  URL.revokeObjectURL(url)

  const originalHTML = this.innerHTML
  this.innerHTML =
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Descargado'
  setTimeout(() => {
    this.innerHTML = originalHTML
  }, 2000)
})

// Download WORD
document.getElementById("btn-descargar-word")?.addEventListener("click", async function () {
  this.disabled = true
  const originalHTML = this.innerHTML
  this.innerHTML =
    '<svg class="animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Generando...'

  try {
    const response = await fetch(`${API_URL}/api/exportar/word/unidad`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contenido: contenidoGenerado,
        metadatos: metadatosActuales,
      }),
    })

    if (!response.ok) {
      throw new Error("Error al generar Word")
    }

    const blob = await response.blob()
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `UD_${metadatosActuales.asignatura}_${metadatosActuales.curso}.docx`
    link.click()
    URL.revokeObjectURL(url)

    this.innerHTML =
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Descargado'
    setTimeout(() => {
      this.disabled = false
      this.innerHTML = originalHTML
    }, 2000)
  } catch (error) {
    console.error("[v0] Error:", error)
    alert("Error al generar el archivo Word")
    this.disabled = false
    this.innerHTML = originalHTML
  }
})

// Animate spin
const style = document.createElement("style")
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    .animate-spin {
        animation: spin 1s linear infinite;
    }
`
document.head.appendChild(style)

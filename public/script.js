// Theme Toggle
const themeToggle = document.getElementById("theme-toggle")
const html = document.documentElement

// Check for saved theme preference or default to light
const currentTheme = localStorage.getItem("theme") || "light"
html.classList.toggle("dark", currentTheme === "dark")

themeToggle.addEventListener("click", () => {
  const isDark = html.classList.toggle("dark")
  localStorage.setItem("theme", isDark ? "dark" : "light")
})

// Header scroll effect
const header = document.getElementById("header")
let lastScroll = 0

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 50) {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
  } else {
    header.style.boxShadow = "none"
  }

  lastScroll = currentScroll
})

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all cards
document.querySelectorAll(".feature-card, .price-card, .testimonial-card, .faq-item").forEach((card) => {
  card.style.opacity = "0"
  card.style.transform = "translateY(20px)"
  card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  observer.observe(card)
})

// Simple form handling for CTAs (you can customize this)
document.querySelectorAll(".btn-primary").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (btn.textContent.includes("Crear cuenta") || btn.textContent.includes("gratis")) {
      console.log("CTA clicked:", btn.textContent)
      // Add your form handling or redirect logic here
      alert("¡Gracias por tu interés! Esta funcionalidad estará disponible pronto.")
    }
  })
})

const circuitCanvas = document.getElementById("circuit-canvas")
if (circuitCanvas) {
  const ctx = circuitCanvas.getContext("2d")
  let animationFrameId

  // Set canvas size
  function resizeCanvas() {
    circuitCanvas.width = window.innerWidth
    circuitCanvas.height = document.querySelector(".hero").offsetHeight
  }
  resizeCanvas()
  window.addEventListener("resize", resizeCanvas)

  // Network nodes
  const nodes = []
  const nodeCount = 30
  const maxDistance = 150

  // Create nodes
  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * circuitCanvas.width,
      y: Math.random() * circuitCanvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 2 + 1,
    })
  }

  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, circuitCanvas.width, circuitCanvas.height)

    // Check if dark mode
    const isDark = html.classList.contains("dark")
    const nodeColor = isDark ? "rgba(0, 217, 255, 0.6)" : "rgba(0, 217, 255, 0.3)"
    const lineColor = isDark ? "rgba(0, 217, 255, 0.2)" : "rgba(0, 217, 255, 0.1)"

    // Update and draw nodes
    nodes.forEach((node, i) => {
      // Update position
      node.x += node.vx
      node.y += node.vy

      // Bounce off edges
      if (node.x < 0 || node.x > circuitCanvas.width) node.vx *= -1
      if (node.y < 0 || node.y > circuitCanvas.height) node.vy *= -1

      // Draw node
      ctx.fillStyle = nodeColor
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
      ctx.fill()

      // Draw connections to nearby nodes
      nodes.slice(i + 1).forEach((otherNode) => {
        const dx = node.x - otherNode.x
        const dy = node.y - otherNode.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.3
          ctx.strokeStyle = isDark ? `rgba(0, 217, 255, ${opacity})` : `rgba(0, 217, 255, ${opacity * 0.5})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(otherNode.x, otherNode.y)
          ctx.stroke()
        }
      })
    })

    animationFrameId = requestAnimationFrame(animate)
  }

  animate()
}

// Add images to main feature cards
const featureImages = [
  "/images/image-f7ilzpdPF1zewVCY5snGjZ0zhBr9Kl.png",
  "/images/image-AFn1DwPHiuLFf4gRGx8rkZf331G3IH.png",
  "/images/image-f7ilzpdPF1zewVCY5snGjZ0zhBr9Kl.png",
]

document.querySelectorAll(".feature-card").forEach((card, index) => {
  const img = document.createElement("img")
  img.src = featureImages[index]
  img.alt = "Feature Image"
  img.style.width = "100%"
  img.style.height = "auto"
  card.appendChild(img)
})

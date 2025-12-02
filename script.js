// Theme Toggle
const themeToggle = document.getElementById("theme-toggle")
const body = document.body
const sunIcon = document.querySelector(".sun-icon")
const moonIcon = document.querySelector(".moon-icon")

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "dark"
body.classList.toggle("dark", savedTheme === "dark")
updateThemeIcons()

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark")
  const theme = body.classList.contains("dark") ? "dark" : "light"
  localStorage.setItem("theme", theme)
  updateThemeIcons()
})

function updateThemeIcons() {
  if (body.classList.contains("dark")) {
    sunIcon.classList.add("hidden")
    moonIcon.classList.remove("hidden")
  } else {
    sunIcon.classList.remove("hidden")
    moonIcon.classList.add("hidden")
  }
}

// Network Mesh Animation
const canvas = document.getElementById("network-canvas")
const ctx = canvas.getContext("2d")

function resizeCanvas() {
  canvas.width = canvas.offsetWidth
  canvas.height = canvas.offsetHeight
}

resizeCanvas()
window.addEventListener("resize", resizeCanvas)

class Node {
  constructor() {
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.vx = (Math.random() - 0.5) * 0.5
    this.vy = (Math.random() - 0.5) * 0.5
  }

  update() {
    this.x += this.vx
    this.y += this.vy

    if (this.x < 0 || this.x > canvas.width) this.vx *= -1
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1
  }

  draw() {
    ctx.fillStyle = "rgba(0, 217, 255, 0.6)"
    ctx.beginPath()
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2)
    ctx.fill()
  }
}

const nodes = []
const nodeCount = 50
const maxDistance = 150

for (let i = 0; i < nodeCount; i++) {
  nodes.push(new Node())
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  nodes.forEach((node, i) => {
    node.update()
    node.draw()

    // Draw connections
    nodes.forEach((otherNode, j) => {
      if (i === j) return

      const dx = node.x - otherNode.x
      const dy = node.y - otherNode.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < maxDistance) {
        const opacity = (1 - distance / maxDistance) * 0.3
        ctx.strokeStyle = `rgba(0, 217, 255, ${opacity})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(node.x, node.y)
        ctx.lineTo(otherNode.x, otherNode.y)
        ctx.stroke()
      }
    })

    // Glow effect on some nodes
    if (i % 5 === 0) {
      ctx.fillStyle = "rgba(0, 217, 255, 0.3)"
      ctx.beginPath()
      ctx.arc(node.x, node.y, 4, 0, Math.PI * 2)
      ctx.fill()
    }
  })

  requestAnimationFrame(animate)
}

animate()

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      })
    }
  })
})

// Header scroll effect
const header = document.getElementById("header")
let lastScroll = 0

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)"
  } else {
    header.style.boxShadow = "none"
  }

  lastScroll = currentScroll
})

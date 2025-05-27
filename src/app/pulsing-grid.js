function setupPulsingGrid() {
  const container = document.getElementById("pulsing-grid");
  if (!container) return;

  container.innerHTML = "";
  container.style.width = 30;
  container.style.height = 30;
  container.style.overflow = "hidden";
 
  const canvas = document.createElement("canvas");
  canvas.width = 30;
  canvas.height = 30;
  canvas.style.borderRadius = "250px"; // ✅ Correct usage
 
  canvas.style.left = "0";
  canvas.style.top = "0";
  container.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  let time = 0;

  const gridSize = 3;
  const spacing = 6;
  const breathingSpeed = 1;
  /*const colorPulseSpeed = 0.5;*/

  function animate(timestamp) {
    time = timestamp * 0.001;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const breathingFactor = Math.sin(time * breathingSpeed) * 0.2 + 1.0;

    // Center dot
    ctx.beginPath();
    ctx.arc(centerX, centerY, 3, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0, 0, 0, 0.9)";
    ctx.fill();

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        if (
          row === Math.floor(gridSize / 2) &&
          col === Math.floor(gridSize / 2)
        )
          continue;

        const baseX = (col - (gridSize - 1) / 2) * spacing;
        const baseY = (row - (gridSize - 1) / 2) * spacing;
        const distance = Math.sqrt(baseX * baseX + baseY * baseY);
        const maxDistance = (spacing * Math.sqrt(2) * (gridSize - 1)) / 2;
        const normalizedDistance = distance / maxDistance;
        const angle = Math.atan2(baseY, baseX);

        const radialPhase = (time - normalizedDistance) % 1;
        const radialWave = Math.sin(radialPhase * Math.PI * 2) * 4;

        /*const spiralPhase = (angle / (Math.PI * 2) + time * 0.3) % 1;*/
        /*const spiralWave = Math.sin(spiralPhase * Math.PI * 2) * 3;*/

        const breathingX = baseX * breathingFactor;
        const breathingY = baseY * breathingFactor;

        const waveX = centerX + breathingX + Math.cos(angle) * radialWave;
        const waveY = centerY + breathingY + Math.sin(angle) * radialWave;

        const baseSize = 1.5 + (1 - normalizedDistance) * 1.5;
        const pulseFactor =
          Math.sin(time * 2 + normalizedDistance * 5) * 0.6 + 1;
        const size = baseSize * pulseFactor;

        const r = 0;
        const g = 0;
        const b = 0;

        const opacity =
          0.5 +
          Math.sin(time * 1.5 + angle * 3) * 0.2 +
          normalizedDistance * 0.3;

        if (
          row > 0 &&
          col > 0 &&
          row < gridSize - 1 &&
          col < gridSize - 1
        ) {
          const neighbors = [
            { r: row - 1, c: col },
            { r: row, c: col + 1 },
            { r: row + 1, c: col },
            { r: row, c: col - 1 }
          ];

          for (const neighbor of neighbors) {
            const nBaseX = (neighbor.c - (gridSize - 1) / 2) * spacing;
            const nBaseY = (neighbor.r - (gridSize - 1) / 2) * spacing;
            const nBreathingX = nBaseX * breathingFactor;
            const nBreathingY = nBaseY * breathingFactor;

            if (
              neighbor.r === Math.floor(gridSize / 2) &&
              neighbor.c === Math.floor(gridSize / 2)
            )
              continue;

            const lineDistance = Math.sqrt(
              Math.pow(col - neighbor.c, 2) + Math.pow(row - neighbor.r, 2)
            );
            const lineOpacity =
              0.1 + Math.sin(time * 1.5 + lineDistance * 2) * 0.05;

            ctx.beginPath();
            ctx.moveTo(waveX, waveY);
            ctx.lineTo(centerX + nBreathingX, centerY + nBreathingY);
            ctx.strokeStyle = `rgba(0, 0, 0, ${lineOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(waveX, waveY, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
        ctx.fill();
      }
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}


export { setupPulsingGrid };
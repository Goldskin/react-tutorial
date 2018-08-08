export default function calculatePosition (move) {
    if (move === 0) {
        return { x: null, y: null }
    }

    const x = Math.floor((move / 3) % 3)
    const y = move % 3

    return { x: x, y: y }
}
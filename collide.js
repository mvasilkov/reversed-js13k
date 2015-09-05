function cmp(a, b, g, h) {
    return ((b.x - a.x) * (g.y - a.y) - (g.x - a.x) * (b.y - a.y))
    * ((b.x - a.x) * (h.y - a.y) - (h.x - a.x) * (b.y - a.y))
}

function determinant(a, b) {
    return a.x * b.y - b.x * a.y
}

function contains(pos, expect, point) {
    var p0 = {x: point.x - pos[0].x, y: point.y - pos[0].y}
    var u = {x: pos[1].x - pos[0].x, y: 0}
    var v = {x: expect[0].x - pos[0].x, y: expect[0].y - pos[0].y}
    var det = determinant(u, v)
    var magicu = -determinant(p0, u) / det
    var magicv = determinant(p0, v) / det

    return 0 <= magicu && magicu <= 1 && 0 <= magicv && magicv <= 1
}

function collide(pos, expect, wall) {
    /* altitude not in range */
    if ((wall[0].y < pos[0].y) == (wall[0].y < expect[0].y))
        return

    /* doesn't intersect and doesn't contain */
    if (cmp(pos[0], expect[0], wall[0], wall[1]) > 0 &&
        cmp(pos[1], expect[1], wall[0], wall[1]) > 0 && !contains(pos, expect, wall[0]))
        return

    expect[0].y = expect[1].y = wall[0].y + (pos[0].y > expect[0].y? 1: -1)
    expect.velocityy = 0
    expect.grip = true
}
